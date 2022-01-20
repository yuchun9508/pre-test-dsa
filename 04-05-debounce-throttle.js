// 擇一實作 Debounce 或 Throttle
// debounce 是在 delay 時間內如果重新觸發會取消前一次並保留當下觸發的執行。
// throttle 在觸發後的 timeout 時間內只會執行一次。
// 建立函式 debounce 或 throttle 帶入參數如下範例:
// const debounceFunc = debounce(func, delay)
// const throttleFunc = throttle(func, timeout)

const debounce = (func, delay) => {
  let timer = null;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(func, delay);
  };
};

// (加分題) 使用 Event Loop 結合實際操作範例擇一敘述 Debounce 或 Throttle 的運
// 作方式
// 如文字輸入、scroll 操作與 button 連續點擊,或是其他可結合 Debounce 或 Throttle
// 的行為都可以拿來當作操作範例。

const inputElement = document.querySelector('input');

const keyupHandler = () => {
  console.log(inputElement.value);
};

const debounceFunc = debounce(keyupHandler, 500);

inputElement.addEventListener('keyup', debounceFunc);
