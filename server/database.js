const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/streamer", { useNewUrlParser: true, useUnifiedTopology: true });

const streamSchema = new mongoose.Schema({
    link: String
});
const Stream = mongoose.model("Stream", streamSchema);

const stream = new Stream({
    link: 'rtsp://wowzaec2demo.streamlock.net/vod/mp4:BigBuckBunny_115k.mov',
})

router.get('/api/list/Get', (request, response) => {
    Stream.find({}, (err, data) => {
        if (err) {
            response.end();
            return;
        }
        response.json(data);
    });
});

//uncomment this line only when running for the first time 
// stream.save();