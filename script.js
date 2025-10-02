(function () {
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));
  let onboardingProgress = 0;
  const progressFill = document.querySelector('#progress-fill');
  const progressValue = document.querySelector('#progress-value');
  const dashboardConclusion = document.querySelector('#status-conclusao');
  function setProgress(value) {
    onboardingProgress = Math.max(0, Math.min(100, value));
    if (progressFill) progressFill.style.width = onboardingProgress + '