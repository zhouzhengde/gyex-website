/*
 * Copyright (c) 2015. Bond(China), java freestyle app
 */

jzen(['jquery',
        'model',
        'bootstrap',
        'react',
        'jsx!react-ui/input'],
    function ($,
              Model,
              bootstrap,
              React,
              Input) {

        var onchange = function () {

        };

        React.render(
            <div>
                <Input id="userName" name="userName" label="用户名：" type="text" tips="Please Entry 2"   onchange={onchange}/>
                <Input id="userName2" name="userName" label="用户名：" type="text" tips="Please Entry 2"   onchange={onchange}/>
                <Input id="userName3" name="userName" label="用户名：" type="text" tips="Please Entry 2"   onchange={onchange}/>
                <Input id="userName4" name="userName" label="用户名：" type="text" tips="Please Entry 2"   onchange={onchange}/>
                <Input id="userName5" name="userName" label="用户名：" type="text" tips="Please Entry 2"   onchange={onchange}/>
                <Input id="userName9" name="userName" label="用户名：" type="text" tips="Please Entry 2"   onchange={onchange}/>
                <Input id="userName7" name="userName" label="用户名：" type="text" tips="Please Entry 2"   onchange={onchange}/>
                <Input id="userName8" name="userName" label="用户名：" type="text" tips="Please Entry 2"   onchange={onchange}/>
                <Input id="userName8" name="userName" label="用户名：" type="text" tips="Please Entry 2"   onchange={onchange}/>
                <Input id="userName8" name="userName" label="用户名：" type="text" tips="Please Entry 2"   onchange={onchange}/>
                <Input id="userName8" name="userName" label="用户名：" type="text" tips="Please Entry 2"   onchange={onchange}/>
                <Input id="userName8" name="userName" label="用户名：" type="text" tips="Please Entry 2"   onchange={onchange}/>
            </div>,
            document.getElementById("input-demo")
        );
    });