<script>
  // Smooth Scrolling
   $('#navbar a, .btn').on('click',
function (e) {                  if 
(this.hash !== '') {
                    e.preventDefault();                     
const hash = this.hash;                 
$('html, 
body').animate({             scrollTop:
$(hash)
           .offset().top — 100,},800);}});
</script>
