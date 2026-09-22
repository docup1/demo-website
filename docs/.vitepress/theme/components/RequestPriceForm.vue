<script setup lang="ts">
import { computed, ref } from 'vue'

const company = ref('')
const name = ref('')
const contact = ref('')
const phone = ref('')
const comment = ref('')
const sent = ref(false)

const MAILTO = 'oooissit84@gmail.com'
const SUBJECT = 'Запрос прайс-листа ООО «ИССИТ»'
const BODY = (): string =>
  [
    `Компания: ${company.value || '—'}`,
    `Контактное лицо: ${name.value || '—'}`,
    `E-mail / телефон: ${contact.value || '—'}`,
    `Дополнительный телефон: ${phone.value || '—'}`,
    ``,
    `Комментарий:`,
    comment.value || '—',
    ``,
    `Сообщение отправлено через сайт issit`
  ].join('\n')

const href = computed(() => {
  const params = new URLSearchParams({
    subject: SUBJECT,
    body: BODY()
  })
  return `${MAILTO}?${params}`
})

const rowsInComments = computed(() => comment.value.split('\n').length)

function submit() {
  window.location.href = href.value
  sent.value = true
}
</script>

<template>
  <div class="price-form">
  <h3 id="request-price" class="price-form__title">Запросить прайс-лист</h3>
    <p class="price-form__subtitle">
      Оставьте контакты — менеджер направит актуальные цены и условия поставки. Работаем только с юридическими лицами.
    </p>

    <form class="price-form__grid" @submit.prevent="submit">
      <label class="price-form__field">
        <span class="price-form__label">Компания *</span>
        <input v-model="company" name="company" autocomplete="organization" class="price-form__input" type="text" required placeholder="Название организации" />
      </label>

      <label class="price-form__field">
        <span class="price-form__label">Контактное лицо *</span>
        <input v-model="name" name="name" autocomplete="name" class="price-form__input" type="text" required placeholder="ФИО" />
      </label>

      <label class="price-form__field">
        <span class="price-form__label">E-mail *</span>
        <input v-model="contact" name="email" autocomplete="email" class="price-form__input" type="email" required placeholder="name@company.ru" />
      </label>

      <label class="price-form__field">
        <span class="price-form__label">Телефон</span>
        <input v-model="phone" name="phone" autocomplete="tel" class="price-form__input" type="tel" placeholder="+7 (___) ___-__-__" />
      </label>

      <label class="price-form__field price-form__field--wide">
        <span class="price-form__label">Комментарий</span>
        <textarea
          v-model="comment"
          name="comment"
          autocomplete="off"
          class="price-form__input price-form__textarea"
          :rows="rowsInComments < 3 ? 3 : Math.min(rowsInComments, 8)"
          placeholder="Какие продукты интересуют, объём заказа, регион доставки"
        />
      </label>

      <div class="price-form__actions price-form__field--wide">
        <button class="price-form__submit" type="submit">Отправить запрос</button>
        <p v-if="sent" class="price-form__note">Нажмите «Отправить» в почтовом клиенте для завершения.</p>
        <p class="price-form__hint">
          Запрос откроется в вашем почтовом клиенте на адрес
          <a :href="`mailto:${MAILTO}`">oooissit84@gmail.com</a>
        </p>
      </div>
    </form>
  </div>
</template>