'use client';

import { motion } from 'framer-motion';

export function KakaoLoginButton() {
  const handleLogin = () => {
    // Temporary redirection to default login until Kakao Auth is implemented
    window.location.href = '/account/login';
  };

  return (
    <motion.button
      onClick={handleLogin}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="flex items-center justify-center gap-3 w-full bg-gray-900 text-white font-bold py-4 px-6 rounded-xl shadow-lg hover:bg-gray-800 transition-all"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
      <span>로그인 / 회원가입</span>
    </motion.button>
  );
}
