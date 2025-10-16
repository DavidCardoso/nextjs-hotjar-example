import { HOTJAR_ID } from "../constants";

// Generate the Hotjar initialization script as a string
export const getHotjarScript = () => `
  if (typeof window !== 'undefined') {
    (function(h,o,t,j,a,r){
      h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
      h._hjSettings={hjid:${HOTJAR_ID},hjsv:6,debug:true};
      a=o.getElementsByTagName('head')[0];
      r=o.createElement('script');r.async=1;
      r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
      a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');

    // Initialize feedback widget after Hotjar loads
    const initFeedbackWidget = () => {
      if (window.hj && typeof window.hj === 'function') {
        window.hj('trigger', 'show_feedback_widget');
      }
    };

    // Check if Hotjar is loaded and initialize widget
    const checkHotjarAndInit = () => {
      if (window.hj && typeof window.hj === 'function') {
        initFeedbackWidget();
      } else {
        setTimeout(checkHotjarAndInit, 100);
      }
    };

    // Start checking for Hotjar
    checkHotjarAndInit();
  }
`;
