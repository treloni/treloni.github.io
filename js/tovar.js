document.querySelector("#sale").onclick = function () {
    const disp = document.getElementById("count")
    {
        if (disp.value < 10) {
            let lastDidit = disp.value % 10;
            if (lastDidit === 1) {
                toastr.success('В корзину добавлен ' + disp.value + ' товар');
            }
            if (lastDidit > 1 && lastDidit < 5) {
                toastr.success('В корзину добавлен ' + disp.value + ' товара');
            }
            if (lastDidit > 5 && lastDidit < 10) {
                toastr.success('В корзину добавлен ' + disp.value + ' товаров');
            }
        }
        else {
            toastr.success('В корзину добавлено ' + disp.value + ' товаров');
        }

    };

}