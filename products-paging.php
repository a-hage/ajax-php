
function getProductsYearPaging($kunde, $current_page, $per_page){
    global $mspdo;
    $total = getAllProducts($kunde)[0]['ID'];
    //echo $total;
    $pages = ceil($total/$per_page);
    if($current_page > $pages){
        $currentPage = 1;
    }

    $start = ($current_page - 1) * $per_page;
    //echo $start;
    $this_year = date("Y");
    $sql = "SELECT * FROM products P
    LEFT JOIN Kunden K ON P.kundenId = K.ID
    LEFT JOIN Category C ON C.ID = P.categoryId
    WHERE YEAR(P.createDate) = '".$this_year."' AND k.Name LIKE '".$kunde."%' ORDER BY ID ASC OFFSET $start ROWS FETCH NEXT $per_page ROWS ONLY;
    ";
    $results = db_get_FETCH_ASSOC($mspdo, $sql);
    //print_r($results);

    $configPage = getConfig_Page($kunde);
    $product_Column = $configPage->products;

    $table = '';
    if(!empty($results)){
        $table .= '<form action="products-paging.php" id="yPaging" name="yPaging" method="POST">';
          $table .= '<input type="hidden" name="func_yPaging" id="func_yPaging" value="getProductsYearPaging" />';
          $table .= '<input type="hidden" name="ycurrent_page" id="ycurrent_page" value="'.$current_page.'" />';
          $table .= '<input type="hidden" name="yper_page" id="yper_page" value="'.$per_page.'" />';
          $table .= '<input type="hidden" name="ykunde" id="ykunde" value="'.$kunde.'" />';
        $table .= '</form>';
        $table .= '<table class="table table-striped">';
          $table .='<thead>';
            $table .= '<tr class="text-start">';
              for($i=0;$i<count($product_Column);$i++){
              $table .= '<th scope="col">'.$product_Column[$i].'</th>';
            }
            $table .= '</tr>';
          $table .= '</thead>';
          $table .= '<tbody>';
          foreach($results as $product){
            $table .= '<tr class="text-start">';
            for($i=0;$i<count($product_Column);$i++){
              $column = $product_Column[$i];
              //$value = $product[$column];
              $value = isset($product[$column]) ? $product[$column] : '---';
              $table .= '<td>'.$value.'</td>';
            }
            $table .= '</tr>';
          }
          $table .= '</tbody>';
        $table .= '</table>';
    }
    return $table;
}


/* PHP Ajax-Funktionen aufrufen */
if($_POST['func_yPaging'] == "getProductsYearPaging"){
    require("dbconnect.php");
    require('productsModule.php');
    global $mspdo;
    $current_page = $_POST['ycurrent_page'];
    $per_page = $_POST['yper_page'];
    $kunde = $_POST['ykunde'];

    echo getProductsYearPaging($kunde, $current_page, $per_page);
    exit(0);
}
