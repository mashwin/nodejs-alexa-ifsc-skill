'use strict';

const HelpIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'AMAZON.HelpIntent';
    },
    handle(handlerInput) {
        const speechText = "Welcome to Weather Reporter, you can say what's the forecast for Seattle";
        return handlerInput.responseBuilder
            .speak(speechText)
            .withShouldEndSession(false)
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
        console.log(JSON.stringify(error));
        return handlerInput.responseBuilder
            .speak('Sorry, I didn\'t understand. Please say again.')
            .reprompt('Sorry, I didn\'t understand. Please say again.')
            .getResponse();
    },
};

module.exports = {
    HelpIntentHandler,
    CancelAndStopIntentHandler,
    SessionEndedRequestHandler,
    ErrorHandler
}