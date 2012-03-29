var FEN = [
    "r3kb1r/ppBnp1pp/5p2/1N1n1b2/2BP4/5NP1/P4P1P/R1R3K1 b kq - 1 16",
    "4k3/4n3/8/3N1R2/4R2p/7P/1r3BK1/8 b - - 6 42",
    "4p3/8/8/8/8/k6P/6K1/8 b - - 6 42", //empty, impossible pawn
    "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 1 1",  //beginning
    "rn1qkbnr/p1p1pppp/8/1pPp4/3P1B2/8/PP2PPPP/Rb1QKBNR w KQkq b6 0 5",//en passant
    "rnbqkbnr/pppppppp/nnnnnnnn/PPPPPPPP/pppppppp/NNNNNNNN/PPPPPPPP/RNBQKBNR w KQkq - 1 1" //excessive
];


function write_fen_switches(){
    var div = document.getElementById("fen_switch");
    for (var i = 0; i < FEN.length; i++){
        var span = new_child(div, "div");
        var fen = FEN[i];
        span.id = 'fen_' + i;
        span.className = 'control-button';
        span.innerHTML = fen;
        span.addEventListener("click",
                              function(s){
                                  return function(e){
                                      var div = document.getElementById("log");
                                      var item = new_child(div, "div");
                                      item.innerHTML = '--------';
                                      p4_fen2state(s, input.board_state);
                                      refresh(0);
                                      var s2 = p4_state2fen(input.board_state);
                                      if (s == s2){
                                          console.log(s, "survives round trip");
                                      }
                                      else {
                                          console.log(s, "and", s2, "differ");
                                      }
                                  };
                              }(fen));

    }
}

write_fen_switches();
p4_fen2state(FEN[2], input.board_state);
refresh(0);
next_move();