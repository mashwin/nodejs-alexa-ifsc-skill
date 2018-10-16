'use strict';
const Alexa = require('ask-sdk-core');

const { HelpIntentHandler, CancelAndStopIntentHandler, SessionEndedRequestHandler, ErrorHandler } = require('./commonHandlers');
const { getBankDetails, getLocation } = require('./ifsc-api');

const LaunchRequestHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'LaunchRequest';
    },
    handle(handlerInput) {
        const speechText = "Welcome to I. F. S. C. Code Finder, let me know i. f. s. c. code for which bank are you looking for ?";
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

        const bankName = handlerInput.requestEnvelope.request.intent.slots.BANK.value;
        if (!handlerInput.requestEnvelope.request.intent.slots.BRANCH.value) {
            return handlerInput.responseBuilder
                .speak(`Let me know which branch of ${bankName} are you looking for ?`)
                .reprompt(`Let me know which branch of ${bankName} are you looking for ?`)
                .addElicitSlotDirective('BRANCH')
                .getResponse();
        }

        const branch = handlerInput.requestEnvelope.request.intent.slots.BRANCH.value;
        const branchDetails = await getLocation(branch);

        console.log('--- the branch details ---', branchDetails);
        if (branchDetails !== 'OK') {
            return handlerInput.responseBuilder
                .speak(`Let me know which branch of ${bankName} are you looking for ?`)
                .reprompt(`Let me know which branch of ${bankName} are you looking for ?`)
                .addElicitSlotDirective('BRANCH')
                .getResponse();
        }

        // retrieve the bank details by calling the API
        const bankDetails = await getBankDetails(bankName, branch);

        if (bankDetails.banks.length > 0) {
            console.log('-- bank details --', bankDetails);
            const speechText = `I. F. S. C. code of the ${bankName}, ${branch} is
            <break time="2s"/>
            <emphasis level="strong"><say-as interpret-as='spell-out'>${bankDetails.banks[0].IFSC}</say-as></emphasis>.
            <break time="2s"/>Try again for different bank by invoking open i. f. s. c. code finder.`;

            return handlerInput.responseBuilder
                .speak(speechText)
                .reprompt(speechText)
                .withShouldEndSession(true)
                .getResponse();
        } else {
            const speechText = "We were not able to get the bank details. Please try again by invoking open ifsc code finder.";
            return handlerInput.responseBuilder
                .speak(speechText)
                .reprompt(speechText)
                .withShouldEndSession(true)
                .getResponse();
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