import { useNavigate } from "@remix-run/react";
import { motion } from "framer-motion";

export default function FriendFinderTest() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-[#FFF5EB] flex flex-col items-center justify-center p-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-md w-full bg-white rounded-3xl p-8 shadow-2xl text-center"
            >
                <div className="text-6xl mb-6">✨</div>
                <h1 className="text-2xl font-bold text-[#4A3828] mb-4">
                    나에게 꼭 맞는<br />친구 찾기
                </h1>
                <p className="text-gray-600 mb-8">
                    몇 가지 간단한 질문으로<br />나만의 소울메이트를 찾아보세요!
                </p>

                <button
                    className="w-full bg-gradient-to-r from-[#FFB893] to-[#FF9B73] text-white font-bold py-4 rounded-xl hover:shadow-lg hover:scale-105 transition-all"
                    onClick={() => alert("테스트 기능은 곧 업데이트 될 예정입니다! (연결 확인 완료)")}
                >
                    테스트 시작하기
                </button>
            </motion.div>
        </div>
    );
}
