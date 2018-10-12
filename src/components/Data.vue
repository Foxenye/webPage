<template>
    <div class="block">
      <h1>{{ msg }}</h1>
      <p v-if="errors.length">
        <b class="errormessage"> Ret venligst de medfølgende fejl.</b>
        <ul>
          <li class="error" v-for="error in errors" :key=error>{{error}}</li>
        </ul>
      </p>
      <form>
            <br>
            <textarea id="AccMan" v-bind:class="textareaAcc" placeholder="Account Manager"></textarea>
            <br>
            <br>
            <textarea id="SerType" v-bind:class="textareaType" placeholder="Seviceaftale Type"></textarea>
            <br>
            <br>
            <textarea id="AfOm" v-bind:class="textareaone" placeholder="Aftalen omfatter følgende service"></textarea>
            <br>
            <br>
            <input v-bind:class="changestart" v-model="konkraktStart" placeholder="Kontraktstart">
            <input v-bind:class="changeophør" v-model="konkraktOphør" placeholder="Kontraktophør">
            <br>
            <br>
            <textarea id="OpVar" v-bind:class="textareaOp" placeholder="Opsigelsesvarsel"></textarea>
            <br>
            <br>
            <textarea id="VPM" v-bind:class="textareaVPM" placeholder="Vederlag pr. måned"></textarea>
            <br>
            <br>
            <button v-on:click=check class="button">Submit</button>
        </form>
      </div>
</template>

<script>

export default {
  name: 'Data',
  data () {
    return {
      msg: 'Data overblik',
      errors: [],
      konkraktStart: '',
      konkraktOphør: '',
      changestart: 'input',
      changeophør: 'input',
      textarea: 'textarea',
      textareaAcc: 'textarea',
      textareaType: 'textarea',
      textareaOp: 'textarea',
      textareaVPM: 'textarea',
      textareaone: 'textareaone'
    }
  },
  methods: {
    check: function (e) {
      this.errors = []

      if (!this.konkraktStart || !this.validDate(this.konkraktStart)) {
        this.changestart = 'inputWrong'
        this.errors.push('Invalid dato, indtast venligst gyldig dato - Kontraktstart')
      }
      if (this.validDate(this.konkraktStart)) {
        this.changestart = 'input'
      }
      if (!this.konkraktOphør || !this.validDate(this.konkraktOphør)) {
        this.changeophør = 'inputWrong'
        this.errors.push('Invalid dato, indtast venligst gyldig dato - Kontraktophør')
      }
      if (this.validDate(this.konkraktOphør)) {
        this.changeophør = 'input'
      }

      if (this.validDate(this.konkraktOphør) && this.validDate(this.konkraktStart)) {
        this.validateDates(this.konkraktStart, this.konkraktOphør)
      }
      if (document.getElementById('AccMan').value === '') {
        this.errors.push('Indtast valid data - Account manager')
        this.textareaAcc = 'textareaWrong'
      } else {
        this.textareaAcc = 'textarea'
      }
      if (document.getElementById('SerType').value === '') {
        this.errors.push('Indtast valid data - Service Type')
        this.textareaType = 'textareaWrong'
      } else {
        this.textareaType = 'textarea'
      }
      if (document.getElementById('AfOm').value === '') {
        this.errors.push('Indtast valid data - Aftalen omfatter følg. services')
        this.textareaone = 'textareaoneWrong'
      } else {
        this.textareaone = 'textareaone'
      }
      if (document.getElementById('OpVar').value === '') {
        this.errors.push('Indtast valid data - Opsigelsesvarsel')
        this.textareaOp = 'textareaWrong'
      } else {
        this.textareaOp = 'textarea'
      }
      if (document.getElementById('VPM').value === '') {
        this.errors.push('Indtast validt vederlag - Vederlag pr. måned')
        this.textareaVPM = 'textareaWrong'
      } else {
        this.textareaVPM = 'textarea'
      }
      console.log(this.errors)
    },
    validDate: function (dateobj) {
      var re = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/
      return re.test(dateobj)
    },
    validateDates: function (date1, date) {
      var s = date1.split('-')
      var d = date.split('-')
      if (s[2] > d[2]) {
        this.errors.push('Slutdato skal altid være større end startdato - Kontrakt start/slut')
        this.changeophør = 'inputWrong'
        this.changestart = 'inputWrong'
      }
      if (s[2] === d[2]) {
        if (s[1] > d[1]) {
          this.errors.push('Slutdato skal altid være større end startdato - Kontrakt start/slut')
          this.changeophør = 'inputWrong'
          this.changestart = 'inputWrong'
        }

        if (s[1] === d[1]) {
          if (s[0] > d[0]) {
            this.errors.push('Slutdato skal altid være større end startdato - Kontrakt start/slut')
            this.changeophør = 'inputWrong'
            this.changestart = 'inputWrong'
          }
        }
      }
    }
  }
}
</script>

<style>
input[type=text] {
    width: 50px;
    box-sizing: border-box;
    border: 2px solid #ccc;
    border-radius: 4px;
    font-size: 8px;
    background-color: white;
    background-position: 10px 10px;
    background-repeat: no-repeat;
    padding: 12px 20px 12px 40px;
    -webkit-transition: width 0.8s ease-in-out;
    transition: width 0.8s ease-in-out;
}

input[type=text]:focus {
    width: 50%;
}

textarea[placeholder] {
    width: 200px;
    height: 40px;
    box-sizing: border-box;
    border: 0px solid #ccc;
    border-radius: 0px;
    font-size: 16px;
    background-color: white;
    background-position: 10px 10px;
    background-repeat: no-repeat;
    padding: 10px;
    -webkit-transition: width 0.6s ease-in-out;
    transition: width 0.6s ease-in-out;
}

textarea[placeholder]:focus {
    width: 40%;
    height: 80px;
}

.button {
    background-color: #1AB188;
    border: none;
    color: black;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 16px;
    opacity: 0.4;
    transition: 0.3s;
}

.button:hover {opacity: 1}

input[placeholder] {
    width: 200px;
    height: 40px;
    box-sizing: border-box;
    border: 2px solid #ccc;
    border-radius: 0px;
    margin-right: 16px;
    margin-left: 16px;
    font-size: 16px;
    background-color: white;
    background-position: 10px 10px;
    background-repeat: no-repeat;
    padding: 10px;
    -webkit-transition: width 0.6s ease-in-out;
    transition: width 0.6s ease-in-out;
}

.error {
    font-size: 12px !important;
    font-family: Arial !important;
    color: #435159;
    text-align: center;
}
</style>
