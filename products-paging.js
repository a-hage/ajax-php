
/*Product Paging */
function ypaging() {
    $(document).on("click", "ul#yPaginate li", function (evt) {
        evt.preventDefault();
        var yTotal = parseInt($("#yTotalPages").val());
        var ynum = this.id;
        $("#yPaging #ycurrent_page").val(ynum);
        var yminus = 0;
        var yplus = 0;
        if (ynum > 1 && ynum < yTotal) {
            yminus = parseInt(ynum) - 1;
            yplus = parseInt(ynum) + 1;
            var yli = '';
            yli += '<ul class="pagination justify-content-end" id="yPaginate">';
                yli += '<li class="page-item" id="' + yminus + '">';
                    yli += '<a class="page-link" aria-label="Previous">';
                        yli += '<span aria-hidden="true">&laquo;</span>';
                    yli += '</a>';
                yli += '</li>';
                yli += '<li class="page-item page-active">';
                    yli += '<a class="page-link">' + ynum + '</a>';
                yli += '</li>';
                yli += '<li class="page-item" id="' + yplus + '">';
                    yli += '<a class="page-link" aria-label="Next">';
                        yli += '<span aria-hidden="true">&raquo;</span>';
                    yli += '</a>';
                yli += '</li>';
            yli += '</ul>';
            $('#yPaginate').replaceWith(yli);
            var yvon = '';
            yvon += '<ul class="pagination justify-content-center" id="yPaginateTwo">';
                yvon += '<li class="page-item">';
                    yvon += '<span class="y-page-link">' + ynum + ' von ' + yTotal + '</span>';
                yvon += '</li>';
            yvon += '</ul>';
            $('#yPaginateTwo').replaceWith(yvon);

            var ylif = '';
            ylif += '<ul class="pagination justify-content-end" id="yPaginateFoot">';
                ylif += '<li class="page-item" id="' + yminus + '">';
                    ylif += '<a class="page-link" aria-label="Previous">';
                        ylif += '<span aria-hidden="true">&laquo;</span>';
                    ylif += '</a>';
                ylif += '</li>';
                ylif += '<li class="page-item page-active">';
                    ylif += '<a class="page-link">' + ynum + '</a>';
                ylif += '</li>';
                ylif += '<li class="page-item" id="' + yplus + '">';
                    ylif += '<a class="page-link" aria-label="Next">';
                        ylif += '<span aria-hidden="true">&raquo;</span>';
                    ylif += '</a>';
                ylif += '</li>';
            ylif += '</ul>';
            $('#yPaginateFoot').replaceWith(ylif);
            var yvonf = '';
            yvonf += '<ul class="pagination justify-content-center" id="yPaginateTwoFoot">';
                yvonf += '<li class="page-item">';
                    yvonf += '<span class="y-page-link">' + ynum + ' von ' + yTotal + '</span>';
                yvonf += '</li>';
            yvonf += '</ul>';
            $('#yPaginateTwoFoot').replaceWith(yvonf);

        } else if (ynum == yTotal) {
            yminus = parseInt(yTotal - 1);
            var yli2 = '';
            yli2 += '<ul class="pagination justify-content-end" id="yPaginate">';
                yli2 += '<li class="page-item" id="' + yminus + '">';
                    yli2 += '<a class="page-link" aria-label="Previous">';
                        yli2 += '<span aria-hidden="true">&laquo;</span>';
                    yli2 += '</a>';
                yli2 += '</li>';
                yli2 += '<li class="page-item page-active">';
                    yli2 += '<a class="page-link">' + yTotal + '</a>';
                yli2 += '</li>';
                yli2 += '<li class="page-item disabled">';
                    yli2 += '<a class="page-link" aria-label="Next">';
                        yli2 += '<span aria-hidden="true">&raquo;</span>';
                    yli2 += '</a>';
                yli2 += '</li>';
            yli2 += '</ul>';
            $('#yPaginate').replaceWith(yli2);
            var yvon = '';
            yvon += '<ul class="pagination justify-content-center" id="yPaginateTwo">';
                yvon += '<li class="page-item">';
                    yvon += '<span class="y-page-link">' + ynum + ' von ' + yTotal + '</span>';
                yvon += '</li>';
            yvon += '</ul>';
            $('#yPaginateTwo').replaceWith(yvon);

            var yli2f = '';
            yli2f += '<ul class="pagination justify-content-end" id="yPaginateFoot">';
                yli2f += '<li class="page-item" id="' + yminus + '">';
                    yli2f += '<a class="page-link" aria-label="Previous">';
                        yli2f += '<span aria-hidden="true">&laquo;</span>';
                    yli2f += '</a>';
                yli2f += '</li>';
                yli2f += '<li class="page-item page-active">';
                    yli2f += '<a class="page-link">' + yTotal + '</a>';
                yli2f += '</li>';
                yli2f += '<li class="page-item disabled">';
                    yli2f += '<a class="page-link" aria-label="Next">';
                        yli2f += '<span aria-hidden="true">&raquo;</span>';
                    yli2f += '</a>';
                yli2f += '</li>';
            yli2f += '</ul>';
            $('#yPaginateFoot').replaceWith(yli2f);
            var yvonf = '';
            yvonf += '<ul class="pagination justify-content-center" id="yPaginateTwoFoot">';
                yvonf += '<li class="page-item">';
                    yvonf += '<span class="y-page-link">' + ynum + ' von ' + yTotal + '</span>';
                yvonf += '</li>';
            yvonf += '</ul>';
            $('#yPaginateTwoFoot').replaceWith(yvonf);

        } else if (ynum <= 1) {
            var yli3 = '';
            yli3 += '<ul class="pagination justify-content-end" id="yPaginate">';
                yli3 += '<li class="page-item disabled">';
                    yli3 += '<a class="page-link" aria-label="Previous">';
                        yli3 += '<span aria-hidden="true">&laquo;</span>';
                    yli3 += '</a>';
                yli3 += '</li>';
                yli3 += '<li class="page-item page-active">';
                    yli3 += '<a class="page-link">1</a>';
                yli3 += '</li>';
                yli3 += '<li class="page-item" id="2">';
                    yli3 += '<a class="page-link" aria-label="Next">';
                        yli3 += '<span aria-hidden="true">&raquo;</span>';
                    yli3 += '</a>';
                yli3 += '</li>';
            yli3 += '</ul>';
            $('#yPaginate').replaceWith(yli3);
            var yvon = '';
            yvon += '<ul class="pagination justify-content-center" id="yPaginateTwo">';
                yvon += '<li class="page-item">';
                    yvon += '<span class="y-page-link">' + ynum + ' von ' + yTotal + '</span>';
                yvon += '</li>';
            yvon += '</ul>';
            $('#yPaginateTwo').replaceWith(yvon);

            var yli3f = '';
            yli3f += '<ul class="pagination justify-content-end" id="yPaginateFoot">';
                yli3f += '<li class="page-item disabled">';
                    yli3f += '<a class="page-link" aria-label="Previous">';
                        yli3f += '<span aria-hidden="true">&laquo;</span>';
                    yli3f += '</a>';
                yli3f += '</li>';
                yli3f += '<li class="page-item page-active">';
                    yli3f += '<a class="page-link">1</a>';
                yli3f += '</li>';
                yli3f += '<li class="page-item" id="2">';
                    yli3f += '<a class="page-link" aria-label="Next">';
                        yli3f += '<span aria-hidden="true">&raquo;</span>';
                    yli3f += '</a>';
                yli3f += '</li>';
            yli3f += '</ul>';
            $('#yPaginateFoot').replaceWith(yli3f);
            var yvonf = '';
            yvonf += '<ul class="pagination justify-content-center" id="yPaginateTwoFoot">';
                yvonf += '<li class="page-item">';
                    yvonf += '<span class="y-page-link">' + ynum + ' von ' + yTotal + '</span>';
                yvonf += '</li>';
            yvonf += '</ul>';
            $('#yPaginateTwoFoot').replaceWith(yvonf);
        }
        let pagingAjaxUrl = "products-paging.php";
        let yPagingData =  $('#yPaging').serialize();
        $.ajax({
            async: true, 
            cache: false,
            type: 'POST',
            url: pagingAjaxUrl,
            data: yPagingData,
            beforeSend: function() {
                $(".loader").show();
            },
            success: function(result){
                $(".loader").hide();
                $('#pContent').html(result);
            },
            error: function(result){
                $(".loader").hide();
                $('#pContent').html(result.statusText);
            },
            complete: function(){
                console.log('Year products paging Request fertig.');
            }
        });
    });
}

/*Products Paging table-footer*/
function ypagingf() {
    $(document).on("click", "ul#yPaginateFoot li", function (evt) {
        evt.preventDefault();
        var yTotal = parseInt($("#yTotalPages").val());
        var ynum = this.id;
        $("#yPaging #ycurrent_page").val(ynum);
        var yminus = 0;
        var yplus = 0;

        if (ynum > 1 && ynum < yTotal) {
            yminus = parseInt(ynum) - 1;
            yplus = parseInt(ynum) + 1;
            var yli = '';
            yli += '<ul class="pagination justify-content-end" id="yPaginate">';
                yli += '<li class="page-item" id="' + yminus + '">';
                    yli += '<a class="page-link" aria-label="Previous">';
                        yli += '<span aria-hidden="true">&laquo;</span>';
                    yli += '</a>';
                yli += '</li>';
                yli += '<li class="page-item page-active">';
                    yli += '<a class="page-link">' + ynum + '</a>';
                yli += '</li>';
                yli += '<li class="page-item" id="' + yplus + '">';
                    yli += '<a class="page-link" aria-label="Next">';
                        yli += '<span aria-hidden="true">&raquo;</span>';
                    yli += '</a>';
                yli += '</li>';
            yli += '</ul>';
            $('#yPaginate').replaceWith(yli);
            var yvon = '';
            yvon += '<ul class="pagination justify-content-center" id="yPaginateTwo">';
                yvon += '<li class="page-item">';
                    yvon += '<span class="y-page-link">' + ynum + ' von ' + yTotal + '</span>';
                yvon += '</li>';
            yvon += '</ul>';
            $('#yPaginateTwo').replaceWith(yvon);

            var ylif = '';
            ylif += '<ul class="pagination justify-content-end" id="yPaginateFoot">';
                ylif += '<li class="page-item" id="' + yminus + '">';
                    ylif += '<a class="page-link" aria-label="Previous">';
                        ylif += '<span aria-hidden="true">&laquo;</span>';
                    ylif += '</a>';
                ylif += '</li>';
                ylif += '<li class="page-item page-active">';
                    ylif += '<a class="page-link">' + ynum + '</a>';
                ylif += '</li>';
                ylif += '<li class="page-item" id="' + yplus + '">';
                    ylif += '<a class="page-link" aria-label="Next">';
                        ylif += '<span aria-hidden="true">&raquo;</span>';
                    ylif += '</a>';
                ylif += '</li>';
            ylif += '</ul>';
            $('#yPaginateFoot').replaceWith(ylif);
            var yvonf = '';
            yvonf += '<ul class="pagination justify-content-center" id="yPaginateTwoFoot">';
                yvonf += '<li class="page-item">';
                    yvonf += '<span class="y-page-link">' + ynum + ' von ' + yTotal + '</span>';
                yvonf += '</li>';
            yvonf += '</ul>';
            $('#yPaginateTwoFoot').replaceWith(yvonf);

        } else if (ynum == yTotal) {
            yminus = parseInt(yTotal - 1);
            var yli2 = '';
            yli2 += '<ul class="pagination justify-content-end" id="yPaginate">';
                yli2 += '<li class="page-item" id="' + yminus + '">';
                    yli2 += '<a class="page-link" aria-label="Previous">';
                        yli2 += '<span aria-hidden="true">&laquo;</span>';
                    yli2 += '</a>';
                yli2 += '</li>';
                yli2 += '<li class="page-item page-active">';
                    yli2 += '<a class="page-link">' + yTotal + '</a>';
                yli2 += '</li>';
                yli2 += '<li class="page-item disabled">';
                    yli2 += '<a class="page-link" aria-label="Next">';
                        yli2 += '<span aria-hidden="true">&raquo;</span>';
                    yli2 += '</a>';
                yli2 += '</li>';
            yli2 += '</ul>';
            $('#yPaginate').replaceWith(yli2);
            var yvon = '';
            yvon += '<ul class="pagination justify-content-center" id="yPaginateTwo">';
                yvon += '<li class="page-item">';
                    yvon += '<span class="y-page-link">' + ynum + ' von ' + yTotal + '</span>';
                yvon += '</li>';
            yvon += '</ul>';
            $('#yPaginateTwo').replaceWith(yvon);

            var yli2f = '';
            yli2f += '<ul class="pagination justify-content-end" id="yPaginateFoot">';
                yli2f += '<li class="page-item" id="' + yminus + '">';
                    yli2f += '<a class="page-link" aria-label="Previous">';
                        yli2f += '<span aria-hidden="true">&laquo;</span>';
                    yli2f += '</a>';
                yli2f += '</li>';
                yli2f += '<li class="page-item page-active">';
                    yli2f += '<a class="page-link">' + yTotal + '</a>';
                yli2f += '</li>';
                yli2f += '<li class="page-item disabled">';
                    yli2f += '<a class="page-link" aria-label="Next">';
                        yli2f += '<span aria-hidden="true">&raquo;</span>';
                    yli2f += '</a>';
                yli2f += '</li>';
            yli2f += '</ul>';
            $('#yPaginateFoot').replaceWith(yli2f);
            var yvonf = '';
            yvonf += '<ul class="pagination justify-content-center" id="yPaginateTwoFoot">';
                yvonf += '<li class="page-item">';
                    yvonf += '<span class="y-page-link">' + ynum + ' von ' + yTotal + '</span>';
                yvonf += '</li>';
            yvonf += '</ul>';
            $('#yPaginateTwoFoot').replaceWith(yvonf);

        } else if (ynum <= 1) {
            var yli3 = '';
            yli3 += '<ul class="pagination justify-content-end" id="yPaginate">';
                yli3 += '<li class="page-item disabled">';
                    yli3 += '<a class="page-link" aria-label="Previous">';
                        yli3 += '<span aria-hidden="true">&laquo;</span>';
                    yli3 += '</a>';
                yli3 += '</li>';
                yli3 += '<li class="page-item page-active">';
                    yli3 += '<a class="page-link">1</a>';
                yli3 += '</li>';
                yli3 += '<li class="page-item" id="2">';
                    yli3 += '<a class="page-link" aria-label="Next">';
                        yli3 += '<span aria-hidden="true">&raquo;</span>';
                    yli3 += '</a>';
                yli3 += '</li>';
            yli3 += '</ul>';
            $('#yPaginate').replaceWith(yli3);
            var yvon = '';
            yvon += '<ul class="pagination justify-content-center" id="yPaginateTwo">';
                yvon += '<li class="page-item">';
                    yvon += '<span class="y-page-link">' + ynum + ' von ' + yTotal + '</span>';
                yvon += '</li>';
            yvon += '</ul>';
            $('#yPaginateTwo').replaceWith(yvon);

            var yli3f = '';
            yli3f += '<ul class="pagination justify-content-end" id="yPaginateFoot">';
                yli3f += '<li class="page-item disabled">';
                    yli3f += '<a class="page-link" aria-label="Previous">';
                        yli3f += '<span aria-hidden="true">&laquo;</span>';
                    yli3f += '</a>';
                yli3f += '</li>';
                yli3f += '<li class="page-item page-active">';
                    yli3f += '<a class="page-link">1</a>';
                yli3f += '</li>';
                yli3f += '<li class="page-item" id="2">';
                    yli3f += '<a class="page-link" aria-label="Next">';
                        yli3f += '<span aria-hidden="true">&raquo;</span>';
                    yli3f += '</a>';
                yli3f += '</li>';
            yli3f += '</ul>';
            $('#yPaginateFoot').replaceWith(yli3f);
            var yvonf = '';
            yvonf += '<ul class="pagination justify-content-center" id="yPaginateTwoFoot">';
                yvonf += '<li class="page-item">';
                    yvonf += '<span class="y-page-link">' + ynum + ' von ' + yTotal + '</span>';
                yvonf += '</li>';
            yvonf += '</ul>';
            $('#yPaginateTwoFoot').replaceWith(yvonf);
        }
        let pagingAjaxUrl = "products-paging.php";
        let yPagingData =  $('#yPaging').serialize();
        $.ajax({
            async: true, 
            cache: false,
            type: 'POST',
            url: pagingAjaxUrl,
            data: yPagingData,
            beforeSend: function() {
                $(".loader").show();
            },
            success: function(result){
                $(".loader").hide();
                $('#pContent').html(result);
            },
            error: function(result){
                $(".loader").hide();
                $('#pContent').html(result.statusText);
            },
            complete: function(){
                console.log('Year products paging Request fertig.');
            }
        });
    });
}
ypaging();
ypagingf();
