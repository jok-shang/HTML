$(function () {
    initdg();
    // getByCity();
        // $('#ff').form({
        //     url: 'https://xiaoapi.cn/API/zs_tq.php',
        //     method: 'post',
        //     onSubmit: function(param) {
        //         console.log('Submitting form with data:', param);
        //         return $(this).form('validate'); // 返回 false 将阻止表单提交
        //     },
        //     success: function(data) {
        //         console.log('Server response:', data);
        //         alert(data);
        //     }
        // });

        // // 绑定 submit 事件处理器
        // $('#ff').submit(function(event) {
        //     event.preventDefault(); // 取消默认提交行为
        //     $(this).form('submit'); // 使用 EasyUI 的 form('submit') 方法来提交表单数据
        // });
});
function getByCity() {
    // 初始化 form 插件
    // $('#ff').form({
    //     url: 'https://xiaoapi.cn/API/zs_tq.php',
    //     onSubmit: function(param) {
    //         // param.num = 20;
    //         // param.n = 1;
    //         // 在这里可以添加验证逻辑
    //         return $(this).form('validate'); // 返回 false 将阻止表单提交
    //     },
    //     success: function(data) {
    //         alert(data);
    //         console.log(data)
    //     }
    // });

    // // 绑定 submit 事件处理器
    // $('#ff').submit(function(event) {
    //     event.preventDefault(); // 取消默认提交行为
    //     $(this).form('submit'); // 使用 EasyUI 的 form('submit') 方法来提交表单数据
    // });
}

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

