'use strict';

const HelpIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'AMAZON.HelpIntent';
    },
    handle(handlerInput) {
        let speechText = "I. F. S. C. code finder allows you to finder allows you find I. F. S. C. code for any bank in India.";
        speechText += " Please provide valid bank name when prompted for bank name and Please provide valid branch of the bank when prompted for branch.";
        speechText += " You can invoke the skill using Open I. F. S. C. code finder.";
        return handlerInput.responseBuilder
            .speak(speechText)
            .withShouldEndSession(true)
            .getResponse();
    }
};

const CancelAndStopIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && (handlerInput.requestEnvelope.request.intent.name === 'AMAZON.CancelIntent'
                || handlerInput.requestEnvelope.request.intent.name === 'AMAZON.StopIntent');
    },
    handle(handlerInput) {
        const speechText = 'Goodbye! Have a nice day';
        return handlerInput.responseBuilder
            .speak(speechText)
            .withShouldEndSession(true)
            .getResponse();
    }
};

const SessionEndedRequestHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'SessionEndedRequest';
    },
    handle(handlerInput) {
        //any cleanup logic goes here
        return handlerInput.responseBuilder
            .speak('Sorry, I didn\'t understand')
            .withShouldEndSession(false)
            .getResponse();
    }
};

const ErrorHandler = {
    canHandle() {
        return true;
    },
    handle(handlerInput, error) {
        console.log("error", JSON.stringify(error));
        return handlerInput.responseBuilder
            .speak('Sorry, I didn\'t understand. Please say that again.')
            .reprompt('Sorry, I didn\'t understand. Please say that again.')
            .getResponse();
    }
};

module.exports = {
    HelpIntentHandler,
    CancelAndStopIntentHandler,
    SessionEndedRequestHandler,
    ErrorHandler
}