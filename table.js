//cdn.datatables.net/1.13.4/js/jquery.dataTables.min.js

$(document).ready(function () {
    $('#example').DataTable({
        scrollY: '200px',
        scrollCollapse: true,
        paging: false,
    });
});
	
let table = new DataTable('#myTable');
