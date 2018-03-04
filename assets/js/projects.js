 //Creates a triangle out of <hr> elements
 for (let pct = 0; pct < 85; pct += 5) {
     let hr = `<hr style='width:${pct}%;'>`;
     document.getElementById("triangle").innerHTML += hr;
 }
 //hides project_info, called when portfolio is minimized
 function hideProj() {
     $('#project_info').fadeOut(1000);
 }

 $(document).ready(function() {
     //project_info data... use React already, lol!
     let projects = {
             vedic: '<h3><u>Vedic</u></h3>Generative music at your fingertips. Aimed at music producers of all types, Vedic is a desktop app which generates elegant musical sequences using Vedic math and modular arithmetic, allowing for conversion to MIDI for use in any DAW. <br><br> <small>[<a href=\'https://vedic-bloom.herokuapp.com/\' target=\'_blank\'>Click here</a> for demo]</small> ',
             pitchcanvas: '<h3><u>PitchCanvas</u></h3> An environment for visualization of harmonic structures on a 2-dimensional plane. Intended for use as an educational tool for the demonstration of musical concepts in future applications as well as a being a vehicle for harmonic exploration. <br><br> <small>[<a href=\'https://bloom510.github.io/PitchCanvas/\' target=\'_blank\'>Click here</a> for demo]</small>',
             stockgen: '<h3><u>StockGEN</u></h3> StockGEN follows extremely shrewd investment funds. At the push of a button, StockGEN assesses the user\'s desired risk profile. One can find top-holdings of top-performing hedge funds, their conviction bets, and their newest positions. <br><br> <small>[<a href=\'https://www.youtube.com/watch?v=5PtsaH-ALoA\' target=\'_blank\'>Click here</a> for demo]</small> ',
             socketcanvas: '<h3><u>SocketCanvas</u></h3> An Express app providing a rudimentary demonstration of HTML5 Canvas + Socket.io. Users can see each other drawing in real time and erase the board to start over.  <br><br> <small>[<a href=\'https://canvas-websocket.herokuapp.com\' target=\'_blank\'>Click here</a> for demo]</small>',
             spark: '<h3><u>Spark FriendFinder</u></h3> A mock friend-finder built using Express and a simple home-baked REST API  <br><br> <small>[<a href=\'https://spark-friendfinder.herokuapp.com\' target=\'_blank\'>Click here</a> for demo]</small>',
             burgers: '<h3><u>Brutalist Burgers</u></h3> A full-stack app built with Node+Express+MySQL  <br><br> <small>[<a href=\'https://damp-lake-64044.herokuapp.com\' target=\'_blank\'>Click here</a> for demo]</small>',
             bamazon: 'Info coming soon',
             liribot: 'Info coming soon',
             h20de: '<h3><u>H20de</u></h3> Like hangman, but uses words for water. <br><br> <small>[<a href=\'https://bloom510.github.io/hangman/\' target=\'_blank\'>Click here</a> for demo]</small>',
             bandcamp: 'Unfortunately not all my music has been recorded. A selection of my electronic productions is available on <a href=\'https://bloom510.bandcamp.com\' target=\'_blank\'>BandCamp</a> and <a href=\'https://soundcloud.com/bloom510\' target=\'_blank\'>SoundCloud</a>. I hope to record my instrumental work soon.',
             extaug: 'Info coming soon',
             nts: 'Info coming soon'

         }
         //Load project data into div on click
     $('.project').on('click', function(e) {
         e.preventDefault();
         for (key in projects) {
             if (key.toString() === $(this).attr('data-for')) {
                 $('#project_info').hide().fadeIn(1000).html(projects[key]);
             }
         }
     });

 })