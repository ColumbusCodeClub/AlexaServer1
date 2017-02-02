module.change_code = 1;
'use strict';

import alexa from 'alexa-app'
import app from 'alexa-skill'
import { onClientLoad, search } from './youTube'

app.launch( function( request, response ) {
  onClientLoad()
  search()
  response.say( 'Welcome to your test skill' ).reprompt( 'Way to go. You got it to run. Bad ass.' ).shouldEndSession( false );
} );


app.error = function( exception, request, response ) {
  console.log(exception)
  console.log(request);
  console.log(response);
  response.say( 'Sorry an error occured ' + error.message);
};

app.intent('sayNumber',
  {
    "slots":{"number":"NUMBER"}
  ,"utterances":[
    "say the number {1-100|number}",
    "give me the number {!-100|number}",
    "tell me the number {!-100|number}",
    "I want to hear you say the number {!-100|number}"]
  },
  function(request,response) {
    var number = request.slot('number');
    response.say(`You asked for the number ${number}, but I refuse.`);
  }
);

module.exports = app;
