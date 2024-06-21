<template>
  <Loading :active="isLoading"></Loading>
  <div class="form-box">
    <h3>請輸入收件資訊</h3>
    <Form @submit="onSubmit" v-slot="{errors}">
      <div class="mb-3">
        <label for="name" class="form-label">姓名</label>
        <Field id="name" name="姓名" type="name" class="form-control"
        rules="required" :class="{ 'is-invalid': errors['姓名'], 'is-valid': !errors['姓名'] && form.user.name }"
        v-model="form.user.name"
        placeholder="請輸入姓名"></Field>
        <ErrorMessage class="invalid-feedback" name="姓名"></ErrorMessage>
      </div>

      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <Field id="email" name="email" type="email" class="form-control"
        rules="email|required" :class="{ 'is-invalid': errors['email'], 'is-valid': !errors['email'] && form.user.email }"
        v-model="form.user.email"
        placeholder="請輸入Email"></Field>
        <ErrorMessage class="invalid-feedback" name="email"></ErrorMessage>
      </div>

      <div class="mb-3">
        <label for="phone" class="form-label">連絡電話</label>
        <Field id="phone" name="電話" type="text" class="form-control"
        rules="required" :class="{ 'is-invalid': errors['電話'], 'is-valid': !errors['電話'] && form.user.tel }"
        v-model="form.user.tel"
        placeholder="請輸入連絡電話"></Field>
        <ErrorMessage class="invalid-feedback" name="電話"></ErrorMessage>
      </div>

      <div class="mb-3">
        <label for="region" class="form-label">地區</label>
        <div class="input-group">
            <Field id="region" name="地區" class="form-select region-select"
                  as="select"
                  rules="required" :class="{ 'is-invalid': errors['地區'], 'is-valid': !errors['地區'] && region }"
                  v-model="region">
              <option value="">請選擇地區</option>
              <option value="臺北市">臺北市</option>
              <option value="新北市">新北市</option>
              <option value="桃園市">桃園市</option>
              <option value="臺中市">臺中市</option>
              <option value="臺南市">臺南市</option>
              <option value="高雄市">高雄市</option>
              <option value="新竹縣">新竹縣</option>
              <option value="苗栗縣">苗栗縣</option>
              <option value="彰化縣">彰化縣</option>
              <option value="南投縣">南投縣</option>
              <option value="雲林縣">雲林縣</option>
              <option value="嘉義縣">嘉義縣</option>
              <option value="屏東縣">屏東縣</option>
              <option value="宜蘭縣">宜蘭縣</option>
              <option value="花蓮縣">花蓮縣</option>
              <option value="臺東縣">臺東縣</option>
            </Field>

            <Field id="other_address" name="地址" type="text" class="form-control"
            rules="required" :class="{ 'is-invalid': errors['地址'], 'is-valid': !errors['地址'] && other_address }"
            v-model="other_address"
            placeholder="請輸入連絡地址"></Field>
            <ErrorMessage class="invalid-feedback" name="地區"></ErrorMessage>
            <ErrorMessage class="invalid-feedback" name="地址"></ErrorMessage>
        </div>
      </div>

      <div class="mb-3">
          <label for="message" class="form-label">備註</label>
          <textarea id="message" name="message" rows="4"
          class="form-control remark-message"
          v-model="form.message"
          placeholder="請輸入訊息"></textarea>
        </div>

      <button class="btn btn-success" type="submit" @click="placeOrder">前往付款</button>
    </Form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: ''
        },
        message: ''
      },
      region: '',
      other_address: '',
      isLoading: false
    }
  },
  methods: {
    onSubmit () {
      console.log(this.form.user)
    },
    placeOrder () {
      this.form.user.address = `${this.region}${this.other_address}`

      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order`
      this.isLoading = true
      this.$http.post(api, { data: this.form })
        .then((res) => {
          if (res.data.success) {
            this.isLoading = false
            this.$router.push(`/user/checkout/${res.data.orderId}`)
          } else {
            this.isLoading = false
            alert(res.data.message.join('\n'))
          }
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
}
</script>
