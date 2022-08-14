<!--登录页面-->
<template>
  <div class="loginBody">
    <div class="login_box">
      <!-- 头像 -->
      <div class="avatar_box">
        <img src="../assets/logo.png" alt="" />
      </div>
      <!-- 表单 -->
      <div class="form">
        <a-form
          :model="formState"
          name="basic"
          :label-col="{ span: 8 }"
          :wrapper-col="{ span: 16 }"
          autocomplete="off"
          @finish="onFinish"
          ref="loginForm"
        >
          <a-form-item
            label="用户名"
            name="username"
            :rules="[{ required: true, message: '请输入用户名!' }]"
          >
            <a-input v-model:value="formState.username">
              <template #prefix>
                <user-outlined type="user" />
              </template>
            </a-input>
          </a-form-item>

          <a-form-item
            label="密码"
            name="password"
            :rules="[{ required: true, message: '请输入密码!' }]"
          >
            <a-input-password v-model:value="formState.password">
              <template #prefix>
                <shopping-outlined />
              </template>
            </a-input-password>
          </a-form-item>
          <a-form-item :wrapper-col="{ span: 14, offset: 8 }">
            <a-button type="primary" html-type="submit">登录</a-button>
            <a-button style="margin-left: 10px" @click="resetFields"
              >重置</a-button
            >
          </a-form-item>
        </a-form>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { reactive } from "vue";
import { UserOutlined, ShoppingOutlined } from "@ant-design/icons-vue";
import { Form, message } from "ant-design-vue";
import { loginHttp } from "../server/login";
import { useRouter } from "vue-router";
interface FormState {
  username: string;
  password: string;
}
const router = useRouter();
const formState = reactive<FormState>({
  username: "",
  password: "",
});
const useForm = Form.useForm;
const { resetFields } = useForm(formState);
const onFinish = async (values: any) => {
  const value = {
    username: values?.username,
    password: values?.password,
  };
  const loginMessageData = await loginHttp(value);
  console.log(loginMessageData, "datadd");
  if (loginMessageData) {
    const { data, meta } = loginMessageData;
    const { msg, status } = meta;
    if (status != 200) {
      message.error(`${msg}!`);
    }
    if (status == 200) {
      message.success("登录成功!");
      window.sessionStorage.setItem("token", data.token);
      router.push("/home");
    }
  }
};
</script>
<style scoped lang="less">
.loginBody {
  height: 100%;
  background-color: #2b4b6b;
  display: flex;
  align-items: center;
  justify-content: center;
}
.login_box {
  width: 450px;
  height: 300px;
  background: #fff;
  border-radius: 3px;
  .avatar_box {
    height: 130px;
    width: 130px;
    border: 1px solid #eee;
    border-radius: 50%;
    padding: 10px;
    box-shadow: 0 0 10px #ddd;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;

    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background-color: #eee;
    }
  }
  .form {
    margin-top: 80px;
    width: 88%;
  }
}
</style>
