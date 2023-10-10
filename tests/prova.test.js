const {play,PlayerA1,TeamB} = require('../dist/prova.js');

test('Devuelve un string de 7 caracteres (000:000)',    (done)=>{

   



    play().then(data=>{
       expect(data.length).toBe(7)
       done()
      })

      

},30000)

test("las jugadores deberían devolver su nombre con un método",()=>{


    //En este caso, es el nombre Maria

    expect(PlayerA1.getName()).toBe("Maria")
})

test("el equipo tiene un método que devuelve las jugadores de este",()=>{


   

    expect(TeamB.getPlayers()).toEqual([{"name": "Carmen", "team": "B"}, {"name": "Eugenia", "team": "B"}, {"name": "Miriam", "team": "B"}])
})