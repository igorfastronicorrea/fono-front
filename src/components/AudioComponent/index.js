import MicRecorder from 'mic-recorder-to-mp3';
import React from 'react';
const Mp3Recorder = new MicRecorder({ bitRate: 128 });


class AudioComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isRecording: false,
            blobURL: '',
            isBlocked: false,
        };
    }

    start = () => {
        if (this.state.isBlocked) {
            console.log('Permission Denied');
        } else {
            Mp3Recorder
                .start()
                .then(() => {
                    this.setState({ isRecording: true });
                }).catch((e) => console.error(e));
        }
    };

    stop = () => {
        Mp3Recorder
            .stop()
            .getMp3()
            .then(([buffer, blob]) => {
                const blobURL = URL.createObjectURL(blob)
                this.setState({ blobURL, isRecording: false });
            }).catch((e) => console.log(e));
    };

    componentDidMount() {
        navigator.getUserMedia({ audio: true },
            () => {
                console.log('Permission Granted');
                this.setState({ isBlocked: false });
            },
            () => {
                console.log('Permission Denied');
                this.setState({ isBlocked: true })
            },
        );
    }

    render() {

        var fields = this.state.blobURL;
        return (
            <div className="Audio">
                <header className="Audio-header">
                    <button onClick={this.start} disabled={this.state.isRecording}>Record</button>
                    <button onClick={this.stop} disabled={!this.state.isRecording}>Stop</button>
                    <audio src={this.state.blobURL} controls="controls" />
                    {fields}
                </header>
            </div>
        );
    }
}

export default AudioComponent;