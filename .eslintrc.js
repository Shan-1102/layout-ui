module.exports={
    root:true,
    parserOptions:{
        parser:"babel-eslint",
        sourceType:"module"
    },
    env:{
        browser:true,
        node:true,
        es6:true,
    },
    extends:['plugin:vue/recommended','eslint:recommended'],
    rules: {
        "no-console":process.env.NODE_ENV === 'production' ? 'warn' : 'off' ,
        'no-debugger':process.env.NODE_ENV === 'production' ? 'warn' :'off' ,
        //在rules中添加自定义规则
        //关闭组件命名规则
        "vue/multi-word-component-names" :"off",
    },
    overrides:[
        {
            files:[
                '**/_tests_/*.{j,t}s?(x)',
                '**/tests/unit/**/*.spec.{j,t}s?(x)'
            ]
        }
    ],
    env:{
      jest:true
    }   
}