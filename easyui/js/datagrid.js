$(function () {
    initdg();
  
});

function initdg() {
    $('#dg').datagrid({
        url: '../json/datagrid.json',
        width: 600,
        method: 'GET',
        columns: [
            [{
                    field: 'code',
                    title: '代码',
                    width: 100
                },
                {
                    field: 'name',
                    title: '名称',
                    width: 100
                },
                {
                    field: 'price',
                    title: '价格',
                    width: 100,
                    align: 'right'
                }
            ]
        ],
        pagination: true,
    })
}