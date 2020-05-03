$(document).ready(function() {
    $(".timeline-mra").on("click", function() {
        $("#mra-employment").removeClass('show').addClass('hidden');
        $("#pcc-employment").removeClass('show').addClass('hidden');
        $("#dvo-employment").removeClass('show').addClass('hidden');
        $("#pgc-employment").removeClass('show').addClass('hidden');
        $("#mra-employment").addClass('show');
   });
   $(".timeline-pcc").on("click", function() {
        $("#mra-employment").removeClass('show').addClass('hidden');
        $("#pcc-employment").removeClass('show').addClass('hidden');
        $("#dvo-employment").removeClass('show').addClass('hidden');
        $("#pgc-employment").removeClass('show').addClass('hidden');
        $("#pcc-employment").addClass('show');
   });
   $(".timeline-dvo").on("click", function() {
        $("#mra-employment").removeClass('show').addClass('hidden');
        $("#pcc-employment").removeClass('show').addClass('hidden');
        $("#dvo-employment").removeClass('show').addClass('hidden');
        $("#pgc-employment").removeClass('show').addClass('hidden');
        $("#dvo-employment").addClass('show');
   });
   $(".timeline-pgc").on("click", function() {
        $("#mra-employment").removeClass('show').addClass('hidden');
        $("#pcc-employment").removeClass('show').addClass('hidden');
        $("#dvo-employment").removeClass('show').addClass('hidden');
        $("#pgc-employment").removeClass('show').addClass('hidden');
        $("#pgc-employment").addClass('show');
   });
}); 