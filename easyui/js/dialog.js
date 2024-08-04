$(function(){
    $('#box').dialog({
        width : 400,
        height : 200,
        title: "对话框",
        collapsible : true, // 折叠框
        minimizable : true, // 最小化
        maximizable : true, // 最大化   
        resizable: true, // 是否可以拖动改变大小
        // 工具栏
        toolbar : [{
            text : '编辑',
            iconCls : 'icon-edit',
            handler : function () {
                alert('edit')
            }
        },{}],
        buttons : [{
            text: '确定',
        }],
        onClose : function () {
            alert("关闭时触发")
        }
    })
})