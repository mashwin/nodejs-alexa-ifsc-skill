'use strict';
const Alexa = require('ask-sdk-core');

const { HelpIntentHandler, CancelAndStopIntentHandler, SessionEndedRequestHandler, ErrorHandler } = require('./commonHandlers');
const { getBankDetails } = require('./ifsc-api');

const LaunchRequestHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'LaunchRequest';
    },
    handle(handlerInput) {
        const speechText = "Welcome to IFSC Code Finder, let me know ifsc code for which bank are you looking for ?";
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)
            .getResponse();
    }
};

const InProgressIfscCodeIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest' &&
            handlerInput.requestEnvelope.request.intent.name === 'ifscCode' &&
            handlerInput.requestEnvelope.request.dialogState !== 'COMPLETED'         
    },
    handle(handlerInput) {
        console.log('in progress intent handler', handlerInput.requestEnvelope.request.dialogState);
        const currentIntent = handlerInput.requestEnvelope.request.intent;
        return handlerInput.responseBuilder
            .addDelegateDirective(currentIntent)
            .getResponse();
    }
};

const CompletedIfscCodeIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest' &&
            handlerInput.requestEnvelope.request.intent.name === 'ifscCode'           
    },
    async handle(handlerInput) {
        console.log("in completed intent handler");
        // const speechText = "TEST TEST TEST";
        // return handlerInput.responseBuilder
        //     .speak(speechText)
        //     .reprompt(speechText)
        //     .withShouldEndSession(false)
        //     .getResponse();  
            
        if (!handlerInput.requestEnvelope.request.intent.slots.BANK.value) {
            return handlerInput.responseBuilder
            .speak("Let me know which IFSC code for which bank you are looking for ?")
            .reprompt("Let me know which IFSC code for which bank you are looking for ?")
            .addElicitSlotDirective('BANK')
            .getResponse();
        } else {
            
            const bankName = handlerInput.requestEnvelope.request.intent.slots.BANK.value;
            if (!handlerInput.requestEnvelope.request.intent.slots.BRANCH.value) {
                return handlerInput.responseBuilder
                .speak(`Which Branch of ${bankName} are you looking for ?`)
                .reprompt(`Which Branch of ${bankName} are you looking for ?`)
                .addElicitSlotDirective('BRANCH')
                .getResponse();
            } else {
                const branch = handlerInput.requestEnvelope.request.intent.slots.BRANCH.value;
                console.log('-- the params ---', bankName, branch);
                const bankDetails = await getBankDetails(bankName, branch);
                console.log('-- bank details --', bankDetails);
                const speechText = `IFSC code of the ${bankName}, ${branch} is 
                <break time="2s"/>
                <emphasis level="strong"><say-as interpret-as='spell-out'>${bankDetails.banks[0].IFSC}</say-as></emphasis>.
                <break time="2s"/>Try again for different bank.`;

                return handlerInput.responseBuilder
                    .speak(speechText)
                    .reprompt(speechText)
                    .withShouldEndSession(true)
                    .getResponse();
            }
        }            
    }
};

// register handlers
exports.handler = Alexa.SkillBuilders
    .custom()
    .addRequestHandlers(
        LaunchRequestHandler,
        InProgressIfscCodeIntentHandler,
        CompletedIfscCodeIntentHandler,
        HelpIntentHandler,
        CancelAndStopIntentHandler,
        SessionEndedRequestHandler
    )
    .addErrorHandlers(ErrorHandler)
    .lambda();