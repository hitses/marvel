import React, {Component} from 'react';
import Axios from 'axios';
import {api_url, api_key, api_characters} from '../config';

class Detail extends Component{
  constructor(props){
    super(props);
    this.state = {
      character: null,
    };

    this.characterId = props.match.params.id;

    Axios.get(api_url + api_characters + '/' + this.characterId + api_key).then((resp) => {
      let character = resp.data.data.results[0];
      this.setState({
        character,
      });
    });
  };

  render(){
    if(this.state.character){
      return <div className="detailCharacter">
        <h1 className="nameCharacter">{this.state.character.name}</h1>
        <img src={this.state.character.thumbnail.path + '.jpg'} alt={this.state.character.name}/>
        <p>{this.state.character.description}</p>
      </div>
    } else{
      return <div>
        <h2>Cargando personaje...</h2>
      </div>
    };
  };
};

export default Detail;