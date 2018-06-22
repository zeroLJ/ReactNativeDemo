/**
 * 通用发送post请求方法
 * @param url  请求地址
 * @param formData   需要附带的参数 let formData = new FormData(); formData.append('name','zero');....
 * @param callback   请求返回回调方法    (responseJson) => {console.log(responseJson);.......}
 * 可通过responseJson.key值来获取Json中的数据
 */
export function post(url, formData, callback) {
    // formData.append("mustKey","mustValue")//可以在此处放入每次都必须传入的参数
    let fetchOptions = {
        method: 'POST',
        headers: {
        },
        body: formData
    };
    let isFinish = false;//请求完成标识，控制只能执行请求超时、失败、成功其中一种
    //捕获异常
    fetch(url, fetchOptions)
        .then((response) => response.text())
        .then((responseText) => {
            if (isFinish){
                return
            }
            isFinish = true;
            let json =JSON.parse(responseText);
            callback(json);
        })
        .catch((error)=> {
            if (isFinish){
                return
            }
            isFinish = true;
            console.log(error)
            alert("请求失败！"+error);
        });
    //设置请求超时时间及操作
    setTimeout(()=>{
        if (isFinish){
            return
        }
        isFinish = true;
        alert("请求失败！"+"超时");
    }, 2000);


    //Promise使用示例，与网络请求无关，可注释掉
    a(true)
        .then((s)=> b(false))
        .then((s)=>{
        console.log("success:"+s)
    }).catch((e)=>{
        console.log("error:"+e);
    })


    // //捕获异常
    // fetch(url, fetchOptions)
    //     .then((response) => response.text())
    //     .then((responseText) => {
    //         let json =JSON.parse(responseText);
    //         callback(json);
    //     })
    //     .catch((error)=> {
    //         console.log(error)
    //         alert("请求失败！"+error);
    //     });

    //不捕获异常
    // fetch(url, fetchOptions)
    //     .then((response) => response.text())
    //     .then((responseText) => {
    //         let json =JSON.parse(responseText);
    //         callback(json);
    //     }).done();
}


function a(flag) {
    return new Promise(function (resolve, reject) {
        if (flag){
            resolve(1)
        }else {
            reject(2)
        }
    })
}

function b(flag) {
    return new Promise(function (resolve, reject) {
        console.log(1)
        if (flag){
            resolve(3)
        }else {
            reject(4)
        }
    })
}

