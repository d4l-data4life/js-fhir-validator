<template>
  <AppSection>
    <footer class="footer">
      <div class="footer__content">
        <a
          href="https://twitter.com/d4l_engineering"
          class="footer__link footer__link--icon"
          aria-label="Twitter"
          title="Twitter"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            width="20"
            viewBox="0 0 24 20"
          >
            <path
              fill="#000e7e"
              fillRule="evenodd"
              d="M21.299 3.117s1.925-.157 2.699-.75c0 0-.187.683-2.5 2.845 0 0 .778 11.673-11.105 14.531 0 0-6.026 1.328-10.393-2.055 0 0 4.572.837 7.144-2.093 0 0-3.319.035-4.367-3.453 0 0 1.254.279 1.999-.07 0 0-3.76-.802-3.691-5.023 0 0 1.016.768 1.93.63 0 0-3.385-2.966-1.286-6.662 0 0 4.535 5.525 10.158 5.197a5.143 5.143 0 01-.151-1.238C11.736 2.23 13.898 0 16.567 0a4.75 4.75 0 013.444 1.486 5.425 5.425 0 003.284-1.08c-.005.002.07 1.066-1.996 2.711z"
            />
          </svg>
        </a>
        <a
          href="https://github.com/d4l-data4life"
          class="footer__link footer__link--icon"
          aria-label="Github"
          title="Github"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            width="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="#000e7e"
              d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
            />
          </svg>
        </a>

        <a
          href="https://www.data4life.care/en/jobs/#personio"
          class="footer__link"
          target="_blank"
          rel="noopener"
        >
          Jobs
        </a>
        <a
          href="https://www.data4life.care/en/imprint/"
          class="footer__link"
          target="_blank"
          rel="noopener"
        >
          Imprint
        </a>
        <a
          href="https://www.data4life.care/en/data-privacy/"
          class="footer__link"
          target="_blank"
          rel="noopener"
        >
          Privacy Policy
        </a>

        <span class="footer__text notranslate" translate="no">
          &copy; {{ year }} D4L data4life gGmbH
        </span>
      </div>
    </footer>
  </AppSection>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Footer",
  data: function() {
    const d = new Date();
    const year = d.getFullYear();

    return {
      year
    };
  }
});
</script>

<style scoped>
.footer {
  background-color: #ffdcce;
  margin: 0 auto;
  overflow: hidden;
  cursor: default;
  width: 100vw;
}
@media only screen and (min-width: 901px) {
  .footer {
    text-align: right;
    font-size: 0.8rem;
  }
}

.footer__content {
  max-width: 1350px;
  margin: 0 auto;
  padding: 32px;
  box-sizing: content-box;
}
@media only screen and (min-width: 576px) {
  .footer__content {
    display: flex;
    flex-flow: row wrap;
    align-items: flex-end;
    justify-content: flex-end;
  }
}

.footer__link,
.footer__text {
  display: block;
  color: #000e7e;
  padding: 8px 0;
  text-decoration: none;
  text-align: left;
}

@media only screen and (min-width: 576px) {
  .footer__link,
  .footer__text {
    padding: 8px;
  }
}

.footer__link:last-child,
.footer__text:last-child {
  padding-right: 0;
}

.footer__link--active,
.footer__link:hover {
  text-shadow: -0.25px -0.25px 0 currentColor, 0.25px 0.25px 0 currentColor,
    -0.25px 0.25px 0 currentColor, 0.25px -0.25px 0 currentColor;
}

.footer__social .footer__link {
  padding: 0;
}

.footer__link--icon {
  display: inline-block;
  padding-right: 16px;
}

.footer__link--icon svg {
  display: block;
}
</style>
