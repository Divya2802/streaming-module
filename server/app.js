let info;

async function ParaG() {
    const response = await fetch('/api/list');
    const { data } = await response.json();
    console.log("Data--->", data);
    alert(data);

    for (item of data) {
        info = item.data[0];//access to data 
    }

}

ParaG()

Stream = require('node-rtsp-stream')
stream = new Stream({
    name: 'name',
    streamUrl: 'rtsp://wowzaec2demo.streamlock.net/vod/mp4:BigBuckBunny_115k.mov',
    wsPort: 9999,
    ffmpegOptions: {
        '-stats': '',
        '-r': 30,
        '-f': "mpegts",
        '-codec:v': 'mpeg1video',
        '-b:v': '800k',
    }
})
