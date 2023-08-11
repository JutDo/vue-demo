

<template >
 
<div id="login" class="login" >
  
  <van-row justify="center">
            <van-image
                    width="343"
                    src="../../public/images/loginbg.jpg"
                    style="background-position:center"
            />
        </van-row>
  <van-form @submit="onSubmit">
  <van-cell-group inset>
    <van-field
      v-model="username"
      name="用户名"
      label="用户名"
      placeholder="请输入你的名字拼音简写"
      :rules="[{ required: true, message: '请填写用户名' }]"
    />
    <van-field
      v-model="password"
      type="password"
      name="密码"
      label="密码"
      placeholder="请输入你的生日"
      :rules="[{ required: true, message: '请填写密码' }]"
    />
  </van-cell-group>
      <span style="right: 22px;position: fixed;font-size: 12px;color: #3c89fc;text-decoration: underline"
                  @click="toForget">忘记密码</span>
  <div style="margin: 16px;">
    <van-button style="margin-top: 10px;" round block type="primary" native-type="submit">
      登录
    </van-button>
    <van-button style="margin-top: 10px;" round block type="warning" native-type="submit">
      注册
    </van-button>
  </div>
</van-form>
</div>


</template>
<script setup>
import TheWelcome from '../components/TheWelcome.vue'
import { Form, Field, CellGroup,NavBar } from 'vant';
import { ref } from 'vue';
import 'vant/lib/index.css';

    const onClickLeft = () => history.back();

    const username = ref('');
    const password = ref('');
    const onSubmit = (values) => {
      console.log('submit', values);
    };
</script>

<style>
 .login{
  /* margin-top: 150px; */
  width: 100%;
  height: 100%;

}
</style>