import React from 'react';

export default function Hero() {
    return (
        <div className="relative bg-white overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-blue-50 opacity-50"></div>
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
                <div className="text-center">
                    <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl mb-6">
                        <span className="block xl:inline">인공지능 체험하기</span>{' '}
                    </h1>
                    <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                        다양한 인공지능 도구와 실험 모델들을 직접 체험해보세요. <br />
                        이미지 생성부터 머신러닝 학습까지 경험할 수 있습니다.
                    </p>
                    <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                        <a href="#resources" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10 transition-all shadow-lg hover:shadow-xl">
                            체험 시작하기
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
