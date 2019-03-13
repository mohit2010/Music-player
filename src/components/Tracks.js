import React, {Component} from 'react';

class Tracks extends Component {
    state = { playing: false, audio: null, PlayingPreviewUrl: null };

    playAudio = previewUrl => () => {
        const audio = new Audio(previewUrl);

        if(!this.state.playing) {
            audio.play();
            this.setState({playing: true, audio, PlayingPreviewUrl: previewUrl});
        } else {
            this.state.audio.pause();

            if(this.state.PlayingPreviewUrl === previewUrl) {
                this.setState({playing: false});
            } else {
                audio.play();
                this.setState({ audio, PlayingPreviewUrl: previewUrl });
            }
            
        }
    }

    render() {
        const { tracks } = this.props;

        return (
            <div>
                {
                    tracks.map(track => {
                        const { id, name, album, preview_url } = track;

                        return (
                            <div key={id} onClick={this.playAudio(preview_url)}>
                                {/* NOTICE we made playAudio with parameter which leads to execution */}
                                {/* so to tackle this we made playAudio function callback itself with double arrow */}
                                <img src={album.images[0].url} alt="track-image" />
                                <p>{name}</p>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}


export default Tracks;