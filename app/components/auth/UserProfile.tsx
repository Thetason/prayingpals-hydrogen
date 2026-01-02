'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuthStore } from '~/lib/store/authStore';

export function UserProfile() {
  const { user, isLoading, fetchUser, logout } = useAuthStore();
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  if (isLoading) {
    return (
      <div className="w-10 h-10 rounded-full bg-gray-200 animate-pulse" />
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="relative">
      {/* 프로필 버튼 */}
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="flex items-center gap-2 hover:opacity-80 transition-opacity"
      >
        {user.profileImage ? (
          <img
            src={user.profileImage}
            alt={user.name}
            className="w-10 h-10 rounded-full border-2 border-white shadow-lg"
          />
        ) : (
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center text-white font-bold">
            {user.name[0]}
          </div>
        )}
        <span className="text-sm font-medium hidden md:block">{user.name}</span>
      </button>

      {/* 드롭다운 메뉴 */}
      <AnimatePresence>
        {showMenu && (
          <>
            {/* 배경 클릭 시 닫기 */}
            <div
              className="fixed inset-0 z-40"
              onClick={() => setShowMenu(false)}
            />

            {/* 메뉴 */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute right-0 top-12 z-50 w-64 bg-white rounded-xl shadow-2xl overflow-hidden"
            >
              {/* 사용자 정보 */}
              <div className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 border-b">
                <div className="flex items-center gap-3">
                  {user.profileImage ? (
                    <img
                      src={user.profileImage}
                      alt={user.name}
                      className="w-12 h-12 rounded-full"
                    />
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center text-white font-bold text-lg">
                      {user.name[0]}
                    </div>
                  )}
                  <div>
                    <p className="font-bold text-gray-900">{user.name}</p>
                    <p className="text-xs text-gray-500">{user.email}</p>
                  </div>
                </div>

                {/* 채널 추가 상태 */}
                {user.kakaoChannelAdded && (
                  <div className="mt-3 flex items-center gap-2 text-xs text-green-600 bg-green-50 px-3 py-2 rounded-lg">
                    <span>✓</span>
                    <span>카카오톡 채널 연결됨</span>
                  </div>
                )}
              </div>

              {/* 메뉴 아이템 */}
              <div className="p-2">
                <button className="w-full text-left px-4 py-3 hover:bg-gray-50 rounded-lg transition-colors text-sm text-gray-700">
                  🎁 내 주문 내역
                </button>
                <button className="w-full text-left px-4 py-3 hover:bg-gray-50 rounded-lg transition-colors text-sm text-gray-700">
                  ⚙️ 설정
                </button>
                <button
                  onClick={() => {
                    logout();
                    setShowMenu(false);
                  }}
                  className="w-full text-left px-4 py-3 hover:bg-red-50 rounded-lg transition-colors text-sm text-red-600"
                >
                  🚪 로그아웃
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
