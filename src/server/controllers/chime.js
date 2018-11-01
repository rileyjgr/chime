const brain = require('brain.js');
const data = require('../Frames-dataset/frames.json');

module.exports = {
    chimer: async(res)=> {


        // for now we will just import data sets.
        const crossValidate = new brain.CrossValidate(brain.NeuralNetwork, networkOptions);

        crossValidate.train(data, trainingOptions, k); //note k (or KFolds) is optional
        const net = crossValidate.toNeuralNetwork({
            activation: 'sigmoid',
            hiddenLayers: [20],
            learningRate: 0.6
        });

        net.fromJSON(data);

        const options = {
            iterations: 20000,
            errorThresh: 0.005,
            log: false,
            logPeriod: 10,
            learningRate: 0.3,
            momentum: 0.1,
            callback: null,
            callbackPeriod: 10,
            timeout: Infinity
        };

        //Train stream, seems better then async await.


        const trainStream = new brain.TrainStream({
            neuralNetwork: net,
            floodCallback: () => {
                flood(trainStream, data);
            },
            doneTrainingCallback: (stats) => {
                // network finished.
                console.log(stats);
            }
        });
        const readInputs = (stream, data) => {
            for (let i=0; i<data.length; i++) {
                stream.write(data[i]);
            }
            stream.endInputs();
        };

        readInputs(trainStream, data);

        //send it back

        res.send('We done buddy');
        next();
    }
};

