const id = '';
const session = '';
const googleResponse = '';
const slackResponse = '';
const defaultText = '';

const responseConfig = {
    'fulfillmentText': defaultText,
    'payload': {
        'google': {
            'expectUserResponse': true,
            'richResponse': {
                'items': [
                    {
                        'simpleResponse': {
                            'textToSpeech': googleResponse
                        }
                    }
                ]
            }
        },
        'slack': {
            'text': slackResponse
        }
    },
    'outputContexts': [
        {
            'name': 'projects/$' + id + '/agent/sessions/$' + session + '/contexts/context name',
            'lifespanCount': 5,
            'parameters': {
                'param': 'param value'
            }
        }
    ],
    'responseMetadata':{
        'status': 200,
        'message': 'success'
    }
};

module.exports = {
    id,
    session,
    googleResponse,
    slackResponse,
    defaultText,
    responseConfig
};
