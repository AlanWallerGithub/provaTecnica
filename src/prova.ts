

class Player {
    constructor(name: String,team: String) {
      this.name = name;
      this.team = team;
    }
    getName(){
        return this.name;
    }
  }

  class Team {
    constructor(players){
        this.players = players;
    }
    getPlayers(){
      return this.players;
    }
  }

  class ScoreKeeper{
    constructor(scoreA = 0,scoreB = 0){
      this.scoreA = scoreA;
      this.scoreB = scoreB;
    }
    scoreTeamA1(){
      this.scoreA += 1;
    }
scoreTeamA2(){
  this.scoreA += 2;
}

scoreTeamA3(){
  this.scoreA += 3;
}

scoreTeamB1(){
  this.scoreB += 1;
}

scoreTeamB2(){
  this.scoreB += 2;
}

scoreTeamB3(){
  this.scoreB += 3;
}

getScore(){
  let puntuacioFinalA = "00"+this.scoreA;
  let puntuacioFinalB = "00"+this.scoreB;
  

  if (puntuacioFinalA.length > 4){
    puntuacioFinalA = ""+this.scoreA;
  }else if (puntuacioFinalA.length > 3){
    puntuacioFinalA = "0"+this.scoreA;
  }

  if (puntuacioFinalB.length > 4){
    puntuacioFinalB = ""+this.scoreB;
  }else if (puntuacioFinalB.length > 3){
    puntuacioFinalB = "0"+this.scoreB;
  }

  return puntuacioFinalA+":"+puntuacioFinalB;

}

  }

  
  const getShot = () =>{
    return new Promise ((resolve, reject)=>{

      setTimeout(()=>{
        let numeroRandom = Math.floor(Math.random() * 6);
        if (numeroRandom === 0){
          ScoreKeeperObject.scoreTeamA1();
          resolve(ScoreKeeperObject.getScore());
        }else if (numeroRandom === 1){
          ScoreKeeperObject.scoreTeamA2();
          resolve(ScoreKeeperObject.getScore());
        }else if (numeroRandom === 2){
          ScoreKeeperObject.scoreTeamA3();
          resolve(ScoreKeeperObject.getScore());
        }else if (numeroRandom === 3){
          ScoreKeeperObject.scoreTeamB1();
          resolve(ScoreKeeperObject.getScore());
        }else if (numeroRandom === 4){
          ScoreKeeperObject.scoreTeamB2();
          resolve(ScoreKeeperObject.getScore());
        }else if (numeroRandom === 5){
          ScoreKeeperObject.scoreTeamB3();
          resolve(ScoreKeeperObject.getScore());
        }
        
      }, 2000);

    })
  
  
  
  }

      
    

       async function play(){
      let playData;
      for (let i=0;i<10;i++){
          await getShot().then(data=>{
            
            playData = data;
            
            
          })
          
      }



      return playData;
      
      
    }
  

  //tres jugadoras por equipo
  
  const PlayerA1 = new Player("Maria","A");
  const PlayerA2 = new Player("Paula","A");
  const PlayerA3 = new Player("Sara","A");

  const PlayerB1 = new Player("Carmen","B");
  const PlayerB2 = new Player("Eugenia","B");
  const PlayerB3 = new Player("Miriam","B");

  const TeamA = new Team([PlayerA1,PlayerA2,PlayerA3]);
  const TeamB = new Team([PlayerB1,PlayerB2,PlayerB3]);

  const ScoreKeeperObject = new ScoreKeeper;



 

module.exports = {play,PlayerA1,TeamB};