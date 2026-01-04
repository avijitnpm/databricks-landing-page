'use client';
import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
    return (
        <>
            <div className="flex-1" data-el-g1="body">
                <main id="main">
                    <div>
                        <section className="relative overflow-hidden bg-cover bg-no-repeat">
                            <div className="big-hero relative">
                                <div data-cy="BigHero"
                                    className="inner-wrapper flex flex-col pb-6 justify-center lg:justify-between gap-6 overflow-hidden pt-5 lg:flex-row lg:gap-8 lg:pt-12">
                                    <div className="lg:w-7/12">
                                        <h1 className="mb-2 font-medium leading-none text-5 md:text-7 xl:text-10">AI
                                            agents trained on your business data{/* */} <span
                                                className="text-green-05 lg:whitespace-nowrap"></span></h1>
                                        <div className="subtitle text-2.5 lg:text-3.5">
                                            <h3>Use Agent Bricks to build, train and deploy AI agents that work
                                            </h3>
                                        </div>
                                        <div className="no-wrap mt-4 flex flex-wrap items-start gap-2.5 lg:gap-4"><a
                                            data-external-link="true"
                                            href="/product/artificial-intelligence/agent-bricks?itm_data=homepage-hero-cta-exploretheproduct"
                                            data-cy="Button"
                                            className="b4 inline-block px-3 py-1 transition duration-200 ease-in-out hover:no-underline btn-primary  testId-primary"
                                            aria-data-label="Explore the product"
                                            title="Explore the product">Explore the product</a><a
                                                data-external-link="true"
                                                href="/resources/demos/library?platform=2514&amp;itm_data=homepage-hero-cta-seedemos"
                                                data-cy="Button"
                                                className="b4 inline-block px-3 py-1 transition duration-200 ease-in-out hover:no-underline btn-secondary  testId-secondary"
                                                aria-data-label="See demos" title="See demos">See demos</a></div>
                                    </div>
                                    <div
                                        className="relative animation rounded-md overflow-hidden w-full h-full max-w-lg lg:w-4/12">
                                        {/*$*/}{/*/$*/}
                                        <div>
                                            <div className=""><svg xmlns="http://www.w3.org/2000/svg"
                                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                                viewBox="0 0 468 340" width="468" height="340"
                                                preserveAspectRatio="xMidYMid meet"
                                                aria-data-label="homepage-agent-bricks-animation-468x340-09292025.json"
                                                aria-hidden="true" focusable="false"
                                                style={{ width: '100%', height: '100%', transform: 'translate3d(0px, 0px, 0px)', contentVisibility: 'visible' }}>
                                                <defs>
                                                    <clipPath id="__lottie_element_2">
                                                        <rect width="468" height="340" x="0" y="0"></rect>
                                                    </clipPath>
                                                    <clipPath id="__lottie_element_8">
                                                        <path d="M0,0 L425,0 L425,285 L0,285z"></path>
                                                    </clipPath>
                                                    <filter id="__lottie_element_23" x="0%" y="0%"
                                                        width="100%" height="100%">
                                                        <feGaussianBlur in="SourceAlpha"
                                                            result="filter_result_0_drop_shadow_1"
                                                            stdDeviation="0"></feGaussianBlur>
                                                        <feOffset dx="25" dy="0"
                                                            in="filter_result_0_drop_shadow_1"
                                                            result="filter_result_0_drop_shadow_2">
                                                        </feOffset>
                                                        <feFlood flood-color="#00ff00" flood-opacity="1"
                                                            result="filter_result_0_drop_shadow_3">
                                                        </feFlood>
                                                        <feComposite in="filter_result_0_drop_shadow_3"
                                                            in2="filter_result_0_drop_shadow_2"
                                                            operator="in"
                                                            result="filter_result_0_drop_shadow_4">
                                                        </feComposite>
                                                        <feMerge result="filter_result_0">
                                                            <feMergeNode in="filter_result_0_drop_shadow_4">
                                                            </feMergeNode>
                                                            <feMergeNode in="SourceGraphic"></feMergeNode>
                                                        </feMerge>
                                                        <feGaussianBlur in="SourceAlpha"
                                                            result="filter_result_1_drop_shadow_1"
                                                            stdDeviation="0"></feGaussianBlur>
                                                        <feOffset dx="25" dy="0"
                                                            in="filter_result_1_drop_shadow_1"
                                                            result="filter_result_1_drop_shadow_2">
                                                        </feOffset>
                                                        <feFlood flood-color="#00ff00" flood-opacity="1"
                                                            result="filter_result_1_drop_shadow_3">
                                                        </feFlood>
                                                        <feComposite in="filter_result_1_drop_shadow_3"
                                                            in2="filter_result_1_drop_shadow_2"
                                                            operator="in"
                                                            result="filter_result_1_drop_shadow_4">
                                                        </feComposite>
                                                        <feMerge result="filter_result_1">
                                                            <feMergeNode in="filter_result_1_drop_shadow_4">
                                                            </feMergeNode>
                                                            <feMergeNode in="filter_result_0"></feMergeNode>
                                                        </feMerge>
                                                        <feGaussianBlur in="SourceAlpha"
                                                            result="filter_result_2_drop_shadow_1"
                                                            stdDeviation="0"></feGaussianBlur>
                                                        <feOffset dx="25" dy="0"
                                                            in="filter_result_2_drop_shadow_1"
                                                            result="filter_result_2_drop_shadow_2">
                                                        </feOffset>
                                                        <feFlood flood-color="#00ff00" flood-opacity="1"
                                                            result="filter_result_2_drop_shadow_3">
                                                        </feFlood>
                                                        <feComposite in="filter_result_2_drop_shadow_3"
                                                            in2="filter_result_2_drop_shadow_2"
                                                            operator="in"
                                                            result="filter_result_2_drop_shadow_4">
                                                        </feComposite>
                                                        <feMerge result="filter_result_2">
                                                            <feMergeNode in="filter_result_2_drop_shadow_4">
                                                            </feMergeNode>
                                                            <feMergeNode in="filter_result_1"></feMergeNode>
                                                        </feMerge>
                                                        <feGaussianBlur in="SourceAlpha"
                                                            result="filter_result_3_drop_shadow_1"
                                                            stdDeviation="0"></feGaussianBlur>
                                                        <feOffset dx="25" dy="0"
                                                            in="filter_result_3_drop_shadow_1"
                                                            result="filter_result_3_drop_shadow_2">
                                                        </feOffset>
                                                        <feFlood flood-color="#00ff00" flood-opacity="1"
                                                            result="filter_result_3_drop_shadow_3">
                                                        </feFlood>
                                                        <feComposite in="filter_result_3_drop_shadow_3"
                                                            in2="filter_result_3_drop_shadow_2"
                                                            operator="in"
                                                            result="filter_result_3_drop_shadow_4">
                                                        </feComposite>
                                                        <feMerge result="filter_result_3">
                                                            <feMergeNode in="filter_result_3_drop_shadow_4">
                                                            </feMergeNode>
                                                            <feMergeNode in="filter_result_2"></feMergeNode>
                                                        </feMerge>
                                                        <feGaussianBlur in="SourceAlpha"
                                                            result="filter_result_4_drop_shadow_1"
                                                            stdDeviation="0"></feGaussianBlur>
                                                        <feOffset dx="25" dy="0"
                                                            in="filter_result_4_drop_shadow_1"
                                                            result="filter_result_4_drop_shadow_2">
                                                        </feOffset>
                                                        <feFlood flood-color="#00ff00" flood-opacity="1"
                                                            result="filter_result_4_drop_shadow_3">
                                                        </feFlood>
                                                        <feComposite in="filter_result_4_drop_shadow_3"
                                                            in2="filter_result_4_drop_shadow_2"
                                                            operator="in"
                                                            result="filter_result_4_drop_shadow_4">
                                                        </feComposite>
                                                        <feMerge result="filter_result_4">
                                                            <feMergeNode in="filter_result_4_drop_shadow_4">
                                                            </feMergeNode>
                                                            <feMergeNode in="filter_result_3"></feMergeNode>
                                                        </feMerge>
                                                        <feGaussianBlur in="SourceAlpha"
                                                            result="filter_result_5_drop_shadow_1"
                                                            stdDeviation="0"></feGaussianBlur>
                                                        <feOffset dx="25" dy="0"
                                                            in="filter_result_5_drop_shadow_1"
                                                            result="filter_result_5_drop_shadow_2">
                                                        </feOffset>
                                                        <feFlood flood-color="#00ff00" flood-opacity="1"
                                                            result="filter_result_5_drop_shadow_3">
                                                        </feFlood>
                                                        <feComposite in="filter_result_5_drop_shadow_3"
                                                            in2="filter_result_5_drop_shadow_2"
                                                            operator="in"
                                                            result="filter_result_5_drop_shadow_4">
                                                        </feComposite>
                                                        <feMerge result="filter_result_5">
                                                            <feMergeNode in="filter_result_5_drop_shadow_4">
                                                            </feMergeNode>
                                                            <feMergeNode in="filter_result_4"></feMergeNode>
                                                        </feMerge>
                                                        <feGaussianBlur in="SourceAlpha"
                                                            result="filter_result_6_drop_shadow_1"
                                                            stdDeviation="0"></feGaussianBlur>
                                                        <feOffset dx="25" dy="0"
                                                            in="filter_result_6_drop_shadow_1"
                                                            result="filter_result_6_drop_shadow_2">
                                                        </feOffset>
                                                        <feFlood flood-color="#00ff00" flood-opacity="1"
                                                            result="filter_result_6_drop_shadow_3">
                                                        </feFlood>
                                                        <feComposite in="filter_result_6_drop_shadow_3"
                                                            in2="filter_result_6_drop_shadow_2"
                                                            operator="in"
                                                            result="filter_result_6_drop_shadow_4">
                                                        </feComposite>
                                                        <feMerge result="filter_result_6">
                                                            <feMergeNode in="filter_result_6_drop_shadow_4">
                                                            </feMergeNode>
                                                            <feMergeNode in="filter_result_5"></feMergeNode>
                                                        </feMerge>
                                                        <feGaussianBlur in="SourceAlpha"
                                                            result="filter_result_7_drop_shadow_1"
                                                            stdDeviation="0"></feGaussianBlur>
                                                        <feOffset dx="25" dy="0"
                                                            in="filter_result_7_drop_shadow_1"
                                                            result="filter_result_7_drop_shadow_2">
                                                        </feOffset>
                                                        <feFlood flood-color="#00ff00" flood-opacity="1"
                                                            result="filter_result_7_drop_shadow_3">
                                                        </feFlood>
                                                        <feComposite in="filter_result_7_drop_shadow_3"
                                                            in2="filter_result_7_drop_shadow_2"
                                                            operator="in"
                                                            result="filter_result_7_drop_shadow_4">
                                                        </feComposite>
                                                        <feMerge result="filter_result_7">
                                                            <feMergeNode in="filter_result_7_drop_shadow_4">
                                                            </feMergeNode>
                                                            <feMergeNode in="filter_result_6"></feMergeNode>
                                                        </feMerge>
                                                        <feGaussianBlur in="SourceAlpha"
                                                            result="filter_result_8_drop_shadow_1"
                                                            stdDeviation="0"></feGaussianBlur>
                                                        <feOffset dx="25" dy="0"
                                                            in="filter_result_8_drop_shadow_1"
                                                            result="filter_result_8_drop_shadow_2">
                                                        </feOffset>
                                                        <feFlood flood-color="#00ff00" flood-opacity="1"
                                                            result="filter_result_8_drop_shadow_3">
                                                        </feFlood>
                                                        <feComposite in="filter_result_8_drop_shadow_3"
                                                            in2="filter_result_8_drop_shadow_2"
                                                            operator="in"
                                                            result="filter_result_8_drop_shadow_4">
                                                        </feComposite>
                                                        <feMerge result="filter_result_8">
                                                            <feMergeNode in="filter_result_8_drop_shadow_4">
                                                            </feMergeNode>
                                                            <feMergeNode in="filter_result_7"></feMergeNode>
                                                        </feMerge>
                                                        <feGaussianBlur in="SourceAlpha"
                                                            result="filter_result_9_drop_shadow_1"
                                                            stdDeviation="0"></feGaussianBlur>
                                                        <feOffset dx="25" dy="0"
                                                            in="filter_result_9_drop_shadow_1"
                                                            result="filter_result_9_drop_shadow_2">
                                                        </feOffset>
                                                        <feFlood flood-color="#00ff00" flood-opacity="1"
                                                            result="filter_result_9_drop_shadow_3">
                                                        </feFlood>
                                                        <feComposite in="filter_result_9_drop_shadow_3"
                                                            in2="filter_result_9_drop_shadow_2"
                                                            operator="in"
                                                            result="filter_result_9_drop_shadow_4">
                                                        </feComposite>
                                                        <feMerge result="filter_result_9">
                                                            <feMergeNode in="filter_result_9_drop_shadow_4">
                                                            </feMergeNode>
                                                            <feMergeNode in="filter_result_8"></feMergeNode>
                                                        </feMerge>
                                                        <feGaussianBlur in="SourceAlpha"
                                                            result="filter_result_10_drop_shadow_1"
                                                            stdDeviation="0"></feGaussianBlur>
                                                        <feOffset dx="25" dy="0"
                                                            in="filter_result_10_drop_shadow_1"
                                                            result="filter_result_10_drop_shadow_2">
                                                        </feOffset>
                                                        <feFlood flood-color="#00ff00" flood-opacity="1"
                                                            result="filter_result_10_drop_shadow_3">
                                                        </feFlood>
                                                        <feComposite in="filter_result_10_drop_shadow_3"
                                                            in2="filter_result_10_drop_shadow_2"
                                                            operator="in"
                                                            result="filter_result_10_drop_shadow_4">
                                                        </feComposite>
                                                        <feMerge result="filter_result_10">
                                                            <feMergeNode
                                                                in="filter_result_10_drop_shadow_4">
                                                            </feMergeNode>
                                                            <feMergeNode in="filter_result_9"></feMergeNode>
                                                        </feMerge>
                                                        <feGaussianBlur in="SourceAlpha"
                                                            result="filter_result_11_drop_shadow_1"
                                                            stdDeviation="0"></feGaussianBlur>
                                                        <feOffset dx="25" dy="0"
                                                            in="filter_result_11_drop_shadow_1"
                                                            result="filter_result_11_drop_shadow_2">
                                                        </feOffset>
                                                        <feFlood flood-color="#00ff00" flood-opacity="1"
                                                            result="filter_result_11_drop_shadow_3">
                                                        </feFlood>
                                                        <feComposite in="filter_result_11_drop_shadow_3"
                                                            in2="filter_result_11_drop_shadow_2"
                                                            operator="in"
                                                            result="filter_result_11_drop_shadow_4">
                                                        </feComposite>
                                                        <feMerge result="filter_result_11">
                                                            <feMergeNode
                                                                in="filter_result_11_drop_shadow_4">
                                                            </feMergeNode>
                                                            <feMergeNode in="filter_result_10">
                                                            </feMergeNode>
                                                        </feMerge>
                                                        <feGaussianBlur in="SourceAlpha"
                                                            result="filter_result_12_drop_shadow_1"
                                                            stdDeviation="0"></feGaussianBlur>
                                                        <feOffset dx="25" dy="0"
                                                            in="filter_result_12_drop_shadow_1"
                                                            result="filter_result_12_drop_shadow_2">
                                                        </feOffset>
                                                        <feFlood flood-color="#00ff00" flood-opacity="1"
                                                            result="filter_result_12_drop_shadow_3">
                                                        </feFlood>
                                                        <feComposite in="filter_result_12_drop_shadow_3"
                                                            in2="filter_result_12_drop_shadow_2"
                                                            operator="in"
                                                            result="filter_result_12_drop_shadow_4">
                                                        </feComposite>
                                                        <feMerge result="filter_result_12">
                                                            <feMergeNode
                                                                in="filter_result_12_drop_shadow_4">
                                                            </feMergeNode>
                                                            <feMergeNode in="filter_result_11">
                                                            </feMergeNode>
                                                        </feMerge>
                                                        <feGaussianBlur in="SourceAlpha"
                                                            result="filter_result_13_drop_shadow_1"
                                                            stdDeviation="0"></feGaussianBlur>
                                                        <feOffset dx="25" dy="0"
                                                            in="filter_result_13_drop_shadow_1"
                                                            result="filter_result_13_drop_shadow_2">
                                                        </feOffset>
                                                        <feFlood flood-color="#00ff00" flood-opacity="1"
                                                            result="filter_result_13_drop_shadow_3">
                                                        </feFlood>
                                                        <feComposite in="filter_result_13_drop_shadow_3"
                                                            in2="filter_result_13_drop_shadow_2"
                                                            operator="in"
                                                            result="filter_result_13_drop_shadow_4">
                                                        </feComposite>
                                                        <feMerge result="filter_result_13">
                                                            <feMergeNode
                                                                in="filter_result_13_drop_shadow_4">
                                                            </feMergeNode>
                                                            <feMergeNode in="filter_result_12">
                                                            </feMergeNode>
                                                        </feMerge>
                                                        <feGaussianBlur in="SourceAlpha"
                                                            result="filter_result_14_drop_shadow_1"
                                                            stdDeviation="0"></feGaussianBlur>
                                                        <feOffset dx="25" dy="0"
                                                            in="filter_result_14_drop_shadow_1"
                                                            result="filter_result_14_drop_shadow_2">
                                                        </feOffset>
                                                        <feFlood flood-color="#00ff00" flood-opacity="1"
                                                            result="filter_result_14_drop_shadow_3">
                                                        </feFlood>
                                                        <feComposite in="filter_result_14_drop_shadow_3"
                                                            in2="filter_result_14_drop_shadow_2"
                                                            operator="in"
                                                            result="filter_result_14_drop_shadow_4">
                                                        </feComposite>
                                                        <feMerge result="filter_result_14">
                                                            <feMergeNode
                                                                in="filter_result_14_drop_shadow_4">
                                                            </feMergeNode>
                                                            <feMergeNode in="filter_result_13">
                                                            </feMergeNode>
                                                        </feMerge>
                                                        <feGaussianBlur in="SourceAlpha"
                                                            result="filter_result_15_drop_shadow_1"
                                                            stdDeviation="0"></feGaussianBlur>
                                                        <feOffset dx="25" dy="0"
                                                            in="filter_result_15_drop_shadow_1"
                                                            result="filter_result_15_drop_shadow_2">
                                                        </feOffset>
                                                        <feFlood flood-color="#00ff00" flood-opacity="1"
                                                            result="filter_result_15_drop_shadow_3">
                                                        </feFlood>
                                                        <feComposite in="filter_result_15_drop_shadow_3"
                                                            in2="filter_result_15_drop_shadow_2"
                                                            operator="in"
                                                            result="filter_result_15_drop_shadow_4">
                                                        </feComposite>
                                                        <feMerge result="filter_result_15">
                                                            <feMergeNode
                                                                in="filter_result_15_drop_shadow_4">
                                                            </feMergeNode>
                                                            <feMergeNode in="filter_result_14">
                                                            </feMergeNode>
                                                        </feMerge>
                                                        <feGaussianBlur in="SourceAlpha"
                                                            result="filter_result_16_drop_shadow_1"
                                                            stdDeviation="0"></feGaussianBlur>
                                                        <feOffset dx="25" dy="0"
                                                            in="filter_result_16_drop_shadow_1"
                                                            result="filter_result_16_drop_shadow_2">
                                                        </feOffset>
                                                        <feFlood flood-color="#00ff00" flood-opacity="1"
                                                            result="filter_result_16_drop_shadow_3">
                                                        </feFlood>
                                                        <feComposite in="filter_result_16_drop_shadow_3"
                                                            in2="filter_result_16_drop_shadow_2"
                                                            operator="in"
                                                            result="filter_result_16_drop_shadow_4">
                                                        </feComposite>
                                                        <feMerge result="filter_result_16">
                                                            <feMergeNode
                                                                in="filter_result_16_drop_shadow_4">
                                                            </feMergeNode>
                                                            <feMergeNode in="filter_result_15">
                                                            </feMergeNode>
                                                        </feMerge>
                                                        <feGaussianBlur in="SourceAlpha"
                                                            result="filter_result_17_drop_shadow_1"
                                                            stdDeviation="0"></feGaussianBlur>
                                                        <feOffset dx="25" dy="0"
                                                            in="filter_result_17_drop_shadow_1"
                                                            result="filter_result_17_drop_shadow_2">
                                                        </feOffset>
                                                        <feFlood flood-color="#00ff00" flood-opacity="1"
                                                            result="filter_result_17_drop_shadow_3">
                                                        </feFlood>
                                                        <feComposite in="filter_result_17_drop_shadow_3"
                                                            in2="filter_result_17_drop_shadow_2"
                                                            operator="in"
                                                            result="filter_result_17_drop_shadow_4">
                                                        </feComposite>
                                                        <feMerge result="filter_result_17">
                                                            <feMergeNode
                                                                in="filter_result_17_drop_shadow_4">
                                                            </feMergeNode>
                                                            <feMergeNode in="filter_result_16">
                                                            </feMergeNode>
                                                        </feMerge>
                                                        <feGaussianBlur in="SourceAlpha"
                                                            result="filter_result_18_drop_shadow_1"
                                                            stdDeviation="0"></feGaussianBlur>
                                                        <feOffset dx="25" dy="0"
                                                            in="filter_result_18_drop_shadow_1"
                                                            result="filter_result_18_drop_shadow_2">
                                                        </feOffset>
                                                        <feFlood flood-color="#00ff00" flood-opacity="1"
                                                            result="filter_result_18_drop_shadow_3">
                                                        </feFlood>
                                                        <feComposite in="filter_result_18_drop_shadow_3"
                                                            in2="filter_result_18_drop_shadow_2"
                                                            operator="in"
                                                            result="filter_result_18_drop_shadow_4">
                                                        </feComposite>
                                                        <feMerge result="filter_result_18">
                                                            <feMergeNode
                                                                in="filter_result_18_drop_shadow_4">
                                                            </feMergeNode>
                                                            <feMergeNode in="filter_result_17">
                                                            </feMergeNode>
                                                        </feMerge>
                                                        <feGaussianBlur in="SourceAlpha"
                                                            result="filter_result_19_drop_shadow_1"
                                                            stdDeviation="0"></feGaussianBlur>
                                                        <feOffset dx="25" dy="0"
                                                            in="filter_result_19_drop_shadow_1"
                                                            result="filter_result_19_drop_shadow_2">
                                                        </feOffset>
                                                        <feFlood flood-color="#00ff00" flood-opacity="1"
                                                            result="filter_result_19_drop_shadow_3">
                                                        </feFlood>
                                                        <feComposite in="filter_result_19_drop_shadow_3"
                                                            in2="filter_result_19_drop_shadow_2"
                                                            operator="in"
                                                            result="filter_result_19_drop_shadow_4">
                                                        </feComposite>
                                                        <feMerge result="filter_result_19">
                                                            <feMergeNode
                                                                in="filter_result_19_drop_shadow_4">
                                                            </feMergeNode>
                                                            <feMergeNode in="filter_result_18">
                                                            </feMergeNode>
                                                        </feMerge>
                                                        <feGaussianBlur in="SourceAlpha"
                                                            result="filter_result_20_drop_shadow_1"
                                                            stdDeviation="0"></feGaussianBlur>
                                                        <feOffset dx="25" dy="0"
                                                            in="filter_result_20_drop_shadow_1"
                                                            result="filter_result_20_drop_shadow_2">
                                                        </feOffset>
                                                        <feFlood flood-color="#00ff00" flood-opacity="1"
                                                            result="filter_result_20_drop_shadow_3">
                                                        </feFlood>
                                                        <feComposite in="filter_result_20_drop_shadow_3"
                                                            in2="filter_result_20_drop_shadow_2"
                                                            operator="in"
                                                            result="filter_result_20_drop_shadow_4">
                                                        </feComposite>
                                                        <feMerge result="filter_result_20">
                                                            <feMergeNode
                                                                in="filter_result_20_drop_shadow_4">
                                                            </feMergeNode>
                                                            <feMergeNode in="filter_result_19">
                                                            </feMergeNode>
                                                        </feMerge>
                                                        <feGaussianBlur in="SourceAlpha"
                                                            result="filter_result_21_drop_shadow_1"
                                                            stdDeviation="0"></feGaussianBlur>
                                                        <feOffset dx="25" dy="0"
                                                            in="filter_result_21_drop_shadow_1"
                                                            result="filter_result_21_drop_shadow_2">
                                                        </feOffset>
                                                        <feFlood flood-color="#00ff00" flood-opacity="1"
                                                            result="filter_result_21_drop_shadow_3">
                                                        </feFlood>
                                                        <feComposite in="filter_result_21_drop_shadow_3"
                                                            in2="filter_result_21_drop_shadow_2"
                                                            operator="in"
                                                            result="filter_result_21_drop_shadow_4">
                                                        </feComposite>
                                                        <feMerge result="filter_result_21">
                                                            <feMergeNode
                                                                in="filter_result_21_drop_shadow_4">
                                                            </feMergeNode>
                                                            <feMergeNode in="filter_result_20">
                                                            </feMergeNode>
                                                        </feMerge>
                                                        <feGaussianBlur in="SourceAlpha"
                                                            result="filter_result_22_drop_shadow_1"
                                                            stdDeviation="0"></feGaussianBlur>
                                                        <feOffset dx="25" dy="0"
                                                            in="filter_result_22_drop_shadow_1"
                                                            result="filter_result_22_drop_shadow_2">
                                                        </feOffset>
                                                        <feFlood flood-color="#00ff00" flood-opacity="1"
                                                            result="filter_result_22_drop_shadow_3">
                                                        </feFlood>
                                                        <feComposite in="filter_result_22_drop_shadow_3"
                                                            in2="filter_result_22_drop_shadow_2"
                                                            operator="in"
                                                            result="filter_result_22_drop_shadow_4">
                                                        </feComposite>
                                                        <feMerge result="filter_result_22">
                                                            <feMergeNode
                                                                in="filter_result_22_drop_shadow_4">
                                                            </feMergeNode>
                                                            <feMergeNode in="filter_result_21">
                                                            </feMergeNode>
                                                        </feMerge>
                                                        <feGaussianBlur in="SourceAlpha"
                                                            result="filter_result_23_drop_shadow_1"
                                                            stdDeviation="0"></feGaussianBlur>
                                                        <feOffset dx="25" dy="0"
                                                            in="filter_result_23_drop_shadow_1"
                                                            result="filter_result_23_drop_shadow_2">
                                                        </feOffset>
                                                        <feFlood flood-color="#00ff00" flood-opacity="1"
                                                            result="filter_result_23_drop_shadow_3">
                                                        </feFlood>
                                                        <feComposite in="filter_result_23_drop_shadow_3"
                                                            in2="filter_result_23_drop_shadow_2"
                                                            operator="in"
                                                            result="filter_result_23_drop_shadow_4">
                                                        </feComposite>
                                                        <feMerge result="filter_result_23">
                                                            <feMergeNode
                                                                in="filter_result_23_drop_shadow_4">
                                                            </feMergeNode>
                                                            <feMergeNode in="filter_result_22">
                                                            </feMergeNode>
                                                        </feMerge>
                                                        <feGaussianBlur in="SourceAlpha"
                                                            result="filter_result_24_drop_shadow_1"
                                                            stdDeviation="0"></feGaussianBlur>
                                                        <feOffset dx="25" dy="0"
                                                            in="filter_result_24_drop_shadow_1"
                                                            result="filter_result_24_drop_shadow_2">
                                                        </feOffset>
                                                        <feFlood flood-color="#00ff00" flood-opacity="1"
                                                            result="filter_result_24_drop_shadow_3">
                                                        </feFlood>
                                                        <feComposite in="filter_result_24_drop_shadow_3"
                                                            in2="filter_result_24_drop_shadow_2"
                                                            operator="in"
                                                            result="filter_result_24_drop_shadow_4">
                                                        </feComposite>
                                                        <feMerge result="filter_result_24">
                                                            <feMergeNode
                                                                in="filter_result_24_drop_shadow_4">
                                                            </feMergeNode>
                                                            <feMergeNode in="filter_result_23">
                                                            </feMergeNode>
                                                        </feMerge>
                                                        <feGaussianBlur in="SourceAlpha"
                                                            result="filter_result_25_drop_shadow_1"
                                                            stdDeviation="0"></feGaussianBlur>
                                                        <feOffset dx="25" dy="0"
                                                            in="filter_result_25_drop_shadow_1"
                                                            result="filter_result_25_drop_shadow_2">
                                                        </feOffset>
                                                        <feFlood flood-color="#00ff00" flood-opacity="1"
                                                            result="filter_result_25_drop_shadow_3">
                                                        </feFlood>
                                                        <feComposite in="filter_result_25_drop_shadow_3"
                                                            in2="filter_result_25_drop_shadow_2"
                                                            operator="in"
                                                            result="filter_result_25_drop_shadow_4">
                                                        </feComposite>
                                                        <feMerge result="filter_result_25">
                                                            <feMergeNode
                                                                in="filter_result_25_drop_shadow_4">
                                                            </feMergeNode>
                                                            <feMergeNode in="filter_result_24">
                                                            </feMergeNode>
                                                        </feMerge>
                                                        <feGaussianBlur in="SourceAlpha"
                                                            result="filter_result_26_drop_shadow_1"
                                                            stdDeviation="0"></feGaussianBlur>
                                                        <feOffset dx="25" dy="0"
                                                            in="filter_result_26_drop_shadow_1"
                                                            result="filter_result_26_drop_shadow_2">
                                                        </feOffset>
                                                        <feFlood flood-color="#00ff00" flood-opacity="1"
                                                            result="filter_result_26_drop_shadow_3">
                                                        </feFlood>
                                                        <feComposite in="filter_result_26_drop_shadow_3"
                                                            in2="filter_result_26_drop_shadow_2"
                                                            operator="in"
                                                            result="filter_result_26_drop_shadow_4">
                                                        </feComposite>
                                                        <feMerge result="filter_result_26">
                                                            <feMergeNode
                                                                in="filter_result_26_drop_shadow_4">
                                                            </feMergeNode>
                                                            <feMergeNode in="filter_result_25">
                                                            </feMergeNode>
                                                        </feMerge>
                                                        <feGaussianBlur in="SourceAlpha"
                                                            result="filter_result_27_drop_shadow_1"
                                                            stdDeviation="0"></feGaussianBlur>
                                                        <feOffset dx="25" dy="0"
                                                            in="filter_result_27_drop_shadow_1"
                                                            result="filter_result_27_drop_shadow_2">
                                                        </feOffset>
                                                        <feFlood flood-color="#00ff00" flood-opacity="1"
                                                            result="filter_result_27_drop_shadow_3">
                                                        </feFlood>
                                                        <feComposite in="filter_result_27_drop_shadow_3"
                                                            in2="filter_result_27_drop_shadow_2"
                                                            operator="in"
                                                            result="filter_result_27_drop_shadow_4">
                                                        </feComposite>
                                                        <feMerge result="filter_result_27">
                                                            <feMergeNode
                                                                in="filter_result_27_drop_shadow_4">
                                                            </feMergeNode>
                                                            <feMergeNode in="filter_result_26">
                                                            </feMergeNode>
                                                        </feMerge>
                                                        <feGaussianBlur in="SourceAlpha"
                                                            result="filter_result_28_drop_shadow_1"
                                                            stdDeviation="0"></feGaussianBlur>
                                                        <feOffset dx="25" dy="0"
                                                            in="filter_result_28_drop_shadow_1"
                                                            result="filter_result_28_drop_shadow_2">
                                                        </feOffset>
                                                        <feFlood flood-color="#00ff00" flood-opacity="1"
                                                            result="filter_result_28_drop_shadow_3">
                                                        </feFlood>
                                                        <feComposite in="filter_result_28_drop_shadow_3"
                                                            in2="filter_result_28_drop_shadow_2"
                                                            operator="in"
                                                            result="filter_result_28_drop_shadow_4">
                                                        </feComposite>
                                                        <feMerge result="filter_result_28">
                                                            <feMergeNode
                                                                in="filter_result_28_drop_shadow_4">
                                                            </feMergeNode>
                                                            <feMergeNode in="filter_result_27">
                                                            </feMergeNode>
                                                        </feMerge>
                                                        <feGaussianBlur in="SourceAlpha"
                                                            result="filter_result_29_drop_shadow_1"
                                                            stdDeviation="0"></feGaussianBlur>
                                                        <feOffset dx="25" dy="0"
                                                            in="filter_result_29_drop_shadow_1"
                                                            result="filter_result_29_drop_shadow_2">
                                                        </feOffset>
                                                        <feFlood flood-color="#00ff00" flood-opacity="1"
                                                            result="filter_result_29_drop_shadow_3">
                                                        </feFlood>
                                                        <feComposite in="filter_result_29_drop_shadow_3"
                                                            in2="filter_result_29_drop_shadow_2"
                                                            operator="in"
                                                            result="filter_result_29_drop_shadow_4">
                                                        </feComposite>
                                                        <feMerge result="filter_result_29">
                                                            <feMergeNode
                                                                in="filter_result_29_drop_shadow_4">
                                                            </feMergeNode>
                                                            <feMergeNode in="filter_result_28">
                                                            </feMergeNode>
                                                        </feMerge>
                                                        <feGaussianBlur in="SourceAlpha"
                                                            result="filter_result_30_drop_shadow_1"
                                                            stdDeviation="0"></feGaussianBlur>
                                                        <feOffset dx="25" dy="0"
                                                            in="filter_result_30_drop_shadow_1"
                                                            result="filter_result_30_drop_shadow_2">
                                                        </feOffset>
                                                        <feFlood flood-color="#00ff00" flood-opacity="1"
                                                            result="filter_result_30_drop_shadow_3">
                                                        </feFlood>
                                                        <feComposite in="filter_result_30_drop_shadow_3"
                                                            in2="filter_result_30_drop_shadow_2"
                                                            operator="in"
                                                            result="filter_result_30_drop_shadow_4">
                                                        </feComposite>
                                                        <feMerge result="filter_result_30">
                                                            <feMergeNode
                                                                in="filter_result_30_drop_shadow_4">
                                                            </feMergeNode>
                                                            <feMergeNode in="filter_result_29">
                                                            </feMergeNode>
                                                        </feMerge>
                                                        <feGaussianBlur in="SourceAlpha"
                                                            result="filter_result_31_drop_shadow_1"
                                                            stdDeviation="0"></feGaussianBlur>
                                                        <feOffset dx="25" dy="0"
                                                            in="filter_result_31_drop_shadow_1"
                                                            result="filter_result_31_drop_shadow_2">
                                                        </feOffset>
                                                        <feFlood flood-color="#00ff00" flood-opacity="1"
                                                            result="filter_result_31_drop_shadow_3">
                                                        </feFlood>
                                                        <feComposite in="filter_result_31_drop_shadow_3"
                                                            in2="filter_result_31_drop_shadow_2"
                                                            operator="in"
                                                            result="filter_result_31_drop_shadow_4">
                                                        </feComposite>
                                                        <feMerge result="filter_result_31">
                                                            <feMergeNode
                                                                in="filter_result_31_drop_shadow_4">
                                                            </feMergeNode>
                                                            <feMergeNode in="filter_result_30">
                                                            </feMergeNode>
                                                        </feMerge>
                                                        <feGaussianBlur in="SourceAlpha"
                                                            result="filter_result_32_drop_shadow_1"
                                                            stdDeviation="0"></feGaussianBlur>
                                                        <feOffset dx="25" dy="0"
                                                            in="filter_result_32_drop_shadow_1"
                                                            result="filter_result_32_drop_shadow_2">
                                                        </feOffset>
                                                        <feFlood flood-color="#00ff00" flood-opacity="1"
                                                            result="filter_result_32_drop_shadow_3">
                                                        </feFlood>
                                                        <feComposite in="filter_result_32_drop_shadow_3"
                                                            in2="filter_result_32_drop_shadow_2"
                                                            operator="in"
                                                            result="filter_result_32_drop_shadow_4">
                                                        </feComposite>
                                                        <feMerge result="filter_result_32">
                                                            <feMergeNode
                                                                in="filter_result_32_drop_shadow_4">
                                                            </feMergeNode>
                                                            <feMergeNode in="filter_result_31">
                                                            </feMergeNode>
                                                        </feMerge>
                                                        <feGaussianBlur in="SourceAlpha"
                                                            result="filter_result_33_drop_shadow_1"
                                                            stdDeviation="0"></feGaussianBlur>
                                                        <feOffset dx="25" dy="0"
                                                            in="filter_result_33_drop_shadow_1"
                                                            result="filter_result_33_drop_shadow_2">
                                                        </feOffset>
                                                        <feFlood flood-color="#00ff00" flood-opacity="1"
                                                            result="filter_result_33_drop_shadow_3">
                                                        </feFlood>
                                                        <feComposite in="filter_result_33_drop_shadow_3"
                                                            in2="filter_result_33_drop_shadow_2"
                                                            operator="in"
                                                            result="filter_result_33_drop_shadow_4">
                                                        </feComposite>
                                                        <feMerge result="filter_result_33">
                                                            <feMergeNode
                                                                in="filter_result_33_drop_shadow_4">
                                                            </feMergeNode>
                                                            <feMergeNode in="filter_result_32">
                                                            </feMergeNode>
                                                        </feMerge>
                                                        <feGaussianBlur in="SourceAlpha"
                                                            result="filter_result_34_drop_shadow_1"
                                                            stdDeviation="0"></feGaussianBlur>
                                                        <feOffset dx="25" dy="0"
                                                            in="filter_result_34_drop_shadow_1"
                                                            result="filter_result_34_drop_shadow_2">
                                                        </feOffset>
                                                        <feFlood flood-color="#00ff00" flood-opacity="1"
                                                            result="filter_result_34_drop_shadow_3">
                                                        </feFlood>
                                                        <feComposite in="filter_result_34_drop_shadow_3"
                                                            in2="filter_result_34_drop_shadow_2"
                                                            operator="in"
                                                            result="filter_result_34_drop_shadow_4">
                                                        </feComposite>
                                                        <feMerge result="filter_result_34">
                                                            <feMergeNode
                                                                in="filter_result_34_drop_shadow_4">
                                                            </feMergeNode>
                                                            <feMergeNode in="filter_result_33">
                                                            </feMergeNode>
                                                        </feMerge>
                                                        <feGaussianBlur in="SourceAlpha"
                                                            result="filter_result_35_drop_shadow_1"
                                                            stdDeviation="0"></feGaussianBlur>
                                                        <feOffset dx="25" dy="0"
                                                            in="filter_result_35_drop_shadow_1"
                                                            result="filter_result_35_drop_shadow_2">
                                                        </feOffset>
                                                        <feFlood flood-color="#00ff00" flood-opacity="1"
                                                            result="filter_result_35_drop_shadow_3">
                                                        </feFlood>
                                                        <feComposite in="filter_result_35_drop_shadow_3"
                                                            in2="filter_result_35_drop_shadow_2"
                                                            operator="in"
                                                            result="filter_result_35_drop_shadow_4">
                                                        </feComposite>
                                                        <feMerge result="filter_result_35">
                                                            <feMergeNode
                                                                in="filter_result_35_drop_shadow_4">
                                                            </feMergeNode>
                                                            <feMergeNode in="filter_result_34">
                                                            </feMergeNode>
                                                        </feMerge>
                                                        <feGaussianBlur in="SourceAlpha"
                                                            result="filter_result_36_drop_shadow_1"
                                                            stdDeviation="0"></feGaussianBlur>
                                                        <feOffset dx="25" dy="0"
                                                            in="filter_result_36_drop_shadow_1"
                                                            result="filter_result_36_drop_shadow_2">
                                                        </feOffset>
                                                        <feFlood flood-color="#00ff00" flood-opacity="1"
                                                            result="filter_result_36_drop_shadow_3">
                                                        </feFlood>
                                                        <feComposite in="filter_result_36_drop_shadow_3"
                                                            in2="filter_result_36_drop_shadow_2"
                                                            operator="in"
                                                            result="filter_result_36_drop_shadow_4">
                                                        </feComposite>
                                                        <feMerge result="filter_result_36">
                                                            <feMergeNode
                                                                in="filter_result_36_drop_shadow_4">
                                                            </feMergeNode>
                                                            <feMergeNode in="filter_result_35">
                                                            </feMergeNode>
                                                        </feMerge>
                                                        <feGaussianBlur in="SourceAlpha"
                                                            result="filter_result_37_drop_shadow_1"
                                                            stdDeviation="0"></feGaussianBlur>
                                                        <feOffset dx="25" dy="0"
                                                            in="filter_result_37_drop_shadow_1"
                                                            result="filter_result_37_drop_shadow_2">
                                                        </feOffset>
                                                        <feFlood flood-color="#00ff00" flood-opacity="1"
                                                            result="filter_result_37_drop_shadow_3">
                                                        </feFlood>
                                                        <feComposite in="filter_result_37_drop_shadow_3"
                                                            in2="filter_result_37_drop_shadow_2"
                                                            operator="in"
                                                            result="filter_result_37_drop_shadow_4">
                                                        </feComposite>
                                                        <feMerge result="filter_result_37">
                                                            <feMergeNode
                                                                in="filter_result_37_drop_shadow_4">
                                                            </feMergeNode>
                                                            <feMergeNode in="filter_result_36">
                                                            </feMergeNode>
                                                        </feMerge>
                                                        <feGaussianBlur in="SourceAlpha"
                                                            result="filter_result_38_drop_shadow_1"
                                                            stdDeviation="0"></feGaussianBlur>
                                                        <feOffset dx="25" dy="0"
                                                            in="filter_result_38_drop_shadow_1"
                                                            result="filter_result_38_drop_shadow_2">
                                                        </feOffset>
                                                        <feFlood flood-color="#00ff00" flood-opacity="1"
                                                            result="filter_result_38_drop_shadow_3">
                                                        </feFlood>
                                                        <feComposite in="filter_result_38_drop_shadow_3"
                                                            in2="filter_result_38_drop_shadow_2"
                                                            operator="in"
                                                            result="filter_result_38_drop_shadow_4">
                                                        </feComposite>
                                                        <feMerge result="filter_result_38">
                                                            <feMergeNode
                                                                in="filter_result_38_drop_shadow_4">
                                                            </feMergeNode>
                                                            <feMergeNode in="filter_result_37">
                                                            </feMergeNode>
                                                        </feMerge>
                                                        <feGaussianBlur in="SourceAlpha"
                                                            result="filter_result_39_drop_shadow_1"
                                                            stdDeviation="0"></feGaussianBlur>
                                                        <feOffset dx="25" dy="0"
                                                            in="filter_result_39_drop_shadow_1"
                                                            result="filter_result_39_drop_shadow_2">
                                                        </feOffset>
                                                        <feFlood flood-color="#00ff00" flood-opacity="1"
                                                            result="filter_result_39_drop_shadow_3">
                                                        </feFlood>
                                                        <feComposite in="filter_result_39_drop_shadow_3"
                                                            in2="filter_result_39_drop_shadow_2"
                                                            operator="in"
                                                            result="filter_result_39_drop_shadow_4">
                                                        </feComposite>
                                                        <feMerge result="filter_result_39">
                                                            <feMergeNode
                                                                in="filter_result_39_drop_shadow_4">
                                                            </feMergeNode>
                                                            <feMergeNode in="filter_result_38">
                                                            </feMergeNode>
                                                        </feMerge>
                                                        <feGaussianBlur in="SourceAlpha"
                                                            result="filter_result_40_drop_shadow_1"
                                                            stdDeviation="0"></feGaussianBlur>
                                                        <feOffset dx="25" dy="0"
                                                            in="filter_result_40_drop_shadow_1"
                                                            result="filter_result_40_drop_shadow_2">
                                                        </feOffset>
                                                        <feFlood flood-color="#00ff00" flood-opacity="1"
                                                            result="filter_result_40_drop_shadow_3">
                                                        </feFlood>
                                                        <feComposite in="filter_result_40_drop_shadow_3"
                                                            in2="filter_result_40_drop_shadow_2"
                                                            operator="in"
                                                            result="filter_result_40_drop_shadow_4">
                                                        </feComposite>
                                                        <feMerge result="filter_result_40">
                                                            <feMergeNode
                                                                in="filter_result_40_drop_shadow_4">
                                                            </feMergeNode>
                                                            <feMergeNode in="filter_result_39">
                                                            </feMergeNode>
                                                        </feMerge>
                                                        <feGaussianBlur in="SourceAlpha"
                                                            result="filter_result_41_drop_shadow_1"
                                                            stdDeviation="0"></feGaussianBlur>
                                                        <feOffset dx="25" dy="0"
                                                            in="filter_result_41_drop_shadow_1"
                                                            result="filter_result_41_drop_shadow_2">
                                                        </feOffset>
                                                        <feFlood flood-color="#00ff00" flood-opacity="1"
                                                            result="filter_result_41_drop_shadow_3">
                                                        </feFlood>
                                                        <feComposite in="filter_result_41_drop_shadow_3"
                                                            in2="filter_result_41_drop_shadow_2"
                                                            operator="in"
                                                            result="filter_result_41_drop_shadow_4">
                                                        </feComposite>
                                                        <feMerge result="filter_result_41">
                                                            <feMergeNode
                                                                in="filter_result_41_drop_shadow_4">
                                                            </feMergeNode>
                                                            <feMergeNode in="filter_result_40">
                                                            </feMergeNode>
                                                        </feMerge>
                                                        <feGaussianBlur in="SourceAlpha"
                                                            result="filter_result_42_drop_shadow_1"
                                                            stdDeviation="0"></feGaussianBlur>
                                                        <feOffset dx="25" dy="0"
                                                            in="filter_result_42_drop_shadow_1"
                                                            result="filter_result_42_drop_shadow_2">
                                                        </feOffset>
                                                        <feFlood flood-color="#00ff00" flood-opacity="1"
                                                            result="filter_result_42_drop_shadow_3">
                                                        </feFlood>
                                                        <feComposite in="filter_result_42_drop_shadow_3"
                                                            in2="filter_result_42_drop_shadow_2"
                                                            operator="in"
                                                            result="filter_result_42_drop_shadow_4">
                                                        </feComposite>
                                                        <feMerge result="filter_result_42">
                                                            <feMergeNode
                                                                in="filter_result_42_drop_shadow_4">
                                                            </feMergeNode>
                                                            <feMergeNode in="filter_result_41">
                                                            </feMergeNode>
                                                        </feMerge>
                                                        <feGaussianBlur in="SourceAlpha"
                                                            result="filter_result_43_drop_shadow_1"
                                                            stdDeviation="0"></feGaussianBlur>
                                                        <feOffset dx="25" dy="0"
                                                            in="filter_result_43_drop_shadow_1"
                                                            result="filter_result_43_drop_shadow_2">
                                                        </feOffset>
                                                        <feFlood flood-color="#00ff00" flood-opacity="1"
                                                            result="filter_result_43_drop_shadow_3">
                                                        </feFlood>
                                                        <feComposite in="filter_result_43_drop_shadow_3"
                                                            in2="filter_result_43_drop_shadow_2"
                                                            operator="in"
                                                            result="filter_result_43_drop_shadow_4">
                                                        </feComposite>
                                                        <feMerge result="filter_result_43">
                                                            <feMergeNode
                                                                in="filter_result_43_drop_shadow_4">
                                                            </feMergeNode>
                                                            <feMergeNode in="filter_result_42">
                                                            </feMergeNode>
                                                        </feMerge>
                                                        <feGaussianBlur in="SourceAlpha"
                                                            result="filter_result_44_drop_shadow_1"
                                                            stdDeviation="0"></feGaussianBlur>
                                                        <feOffset dx="25" dy="0"
                                                            in="filter_result_44_drop_shadow_1"
                                                            result="filter_result_44_drop_shadow_2">
                                                        </feOffset>
                                                        <feFlood flood-color="#00ff00" flood-opacity="1"
                                                            result="filter_result_44_drop_shadow_3">
                                                        </feFlood>
                                                        <feComposite in="filter_result_44_drop_shadow_3"
                                                            in2="filter_result_44_drop_shadow_2"
                                                            operator="in"
                                                            result="filter_result_44_drop_shadow_4">
                                                        </feComposite>
                                                        <feMerge result="filter_result_44">
                                                            <feMergeNode
                                                                in="filter_result_44_drop_shadow_4">
                                                            </feMergeNode>
                                                            <feMergeNode in="filter_result_43">
                                                            </feMergeNode>
                                                        </feMerge>
                                                        <feGaussianBlur in="SourceAlpha"
                                                            result="filter_result_45_drop_shadow_1"
                                                            stdDeviation="0"></feGaussianBlur>
                                                        <feOffset dx="25" dy="0"
                                                            in="filter_result_45_drop_shadow_1"
                                                            result="filter_result_45_drop_shadow_2">
                                                        </feOffset>
                                                        <feFlood flood-color="#00ff00" flood-opacity="1"
                                                            result="filter_result_45_drop_shadow_3">
                                                        </feFlood>
                                                        <feComposite in="filter_result_45_drop_shadow_3"
                                                            in2="filter_result_45_drop_shadow_2"
                                                            operator="in"
                                                            result="filter_result_45_drop_shadow_4">
                                                        </feComposite>
                                                        <feMerge result="filter_result_45">
                                                            <feMergeNode
                                                                in="filter_result_45_drop_shadow_4">
                                                            </feMergeNode>
                                                            <feMergeNode in="filter_result_44">
                                                            </feMergeNode>
                                                        </feMerge>
                                                        <feGaussianBlur in="SourceAlpha"
                                                            result="filter_result_46_drop_shadow_1"
                                                            stdDeviation="0"></feGaussianBlur>
                                                        <feOffset dx="25" dy="0"
                                                            in="filter_result_46_drop_shadow_1"
                                                            result="filter_result_46_drop_shadow_2">
                                                        </feOffset>
                                                        <feFlood flood-color="#00ff00" flood-opacity="1"
                                                            result="filter_result_46_drop_shadow_3">
                                                        </feFlood>
                                                        <feComposite in="filter_result_46_drop_shadow_3"
                                                            in2="filter_result_46_drop_shadow_2"
                                                            operator="in"
                                                            result="filter_result_46_drop_shadow_4">
                                                        </feComposite>
                                                        <feMerge result="filter_result_46">
                                                            <feMergeNode
                                                                in="filter_result_46_drop_shadow_4">
                                                            </feMergeNode>
                                                            <feMergeNode in="filter_result_45">
                                                            </feMergeNode>
                                                        </feMerge>
                                                        <feGaussianBlur in="SourceAlpha"
                                                            result="filter_result_47_drop_shadow_1"
                                                            stdDeviation="0"></feGaussianBlur>
                                                        <feOffset dx="25" dy="0"
                                                            in="filter_result_47_drop_shadow_1"
                                                            result="filter_result_47_drop_shadow_2">
                                                        </feOffset>
                                                        <feFlood flood-color="#00ff00" flood-opacity="1"
                                                            result="filter_result_47_drop_shadow_3">
                                                        </feFlood>
                                                        <feComposite in="filter_result_47_drop_shadow_3"
                                                            in2="filter_result_47_drop_shadow_2"
                                                            operator="in"
                                                            result="filter_result_47_drop_shadow_4">
                                                        </feComposite>
                                                        <feMerge result="filter_result_47">
                                                            <feMergeNode
                                                                in="filter_result_47_drop_shadow_4">
                                                            </feMergeNode>
                                                            <feMergeNode in="filter_result_46">
                                                            </feMergeNode>
                                                        </feMerge>
                                                    </filter>
                                                    <g id="__lottie_element_24">
                                                        <g id="2020" style={{ display: 'block' }}
                                                            transform="matrix(1,0,0,1,550.0289916992188,128.66299438476562)"
                                                            opacity="1">
                                                            <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                                                                <path fill="rgb(217,217,217)"
                                                                    fillOpacity="1"
                                                                    d=" M725.5,-256.6159973144531 C725.5,-256.6159973144531 725.5,256.6159973144531 725.5,256.6159973144531 C725.5,261.03118896484375 721.9152221679688,264.6159973144531 717.5,264.6159973144531 C717.5,264.6159973144531 -717.5,264.6159973144531 -717.5,264.6159973144531 C-721.9152221679688,264.6159973144531 -725.5,261.03118896484375 -725.5,256.6159973144531 C-725.5,256.6159973144531 -725.5,-256.6159973144531 -725.5,-256.6159973144531 C-725.5,-261.03118896484375 -721.9152221679688,-264.6159973144531 -717.5,-264.6159973144531 C-717.5,-264.6159973144531 717.5,-264.6159973144531 717.5,-264.6159973144531 C721.9152221679688,-264.6159973144531 725.5,-261.03118896484375 725.5,-256.6159973144531z">
                                                                </path>
                                                            </g>
                                                        </g>
                                                    </g>
                                                    <mask id="__lottie_element_24_1" mask-type="alpha">
                                                        <use xlinkHref="#__lottie_element_24"></use>
                                                    </mask>
                                                    <filter id="__lottie_element_56" x="0%" y="0%"
                                                        width="100%" height="100%">
                                                        <feGaussianBlur in="SourceAlpha"
                                                            result="filter_result_0_drop_shadow_1"
                                                            stdDeviation="0"></feGaussianBlur>
                                                        <feOffset dx="25" dy="0"
                                                            in="filter_result_0_drop_shadow_1"
                                                            result="filter_result_0_drop_shadow_2">
                                                        </feOffset>
                                                        <feFlood flood-color="#00ff00" flood-opacity="1"
                                                            result="filter_result_0_drop_shadow_3">
                                                        </feFlood>
                                                        <feComposite in="filter_result_0_drop_shadow_3"
                                                            in2="filter_result_0_drop_shadow_2"
                                                            operator="in"
                                                            result="filter_result_0_drop_shadow_4">
                                                        </feComposite>
                                                        <feMerge result="filter_result_0">
                                                            <feMergeNode in="filter_result_0_drop_shadow_4">
                                                            </feMergeNode>
                                                            <feMergeNode in="SourceGraphic"></feMergeNode>
                                                        </feMerge>
                                                        <feGaussianBlur in="SourceAlpha"
                                                            result="filter_result_1_drop_shadow_1"
                                                            stdDeviation="0"></feGaussianBlur>
                                                        <feOffset dx="25" dy="0"
                                                            in="filter_result_1_drop_shadow_1"
                                                            result="filter_result_1_drop_shadow_2">
                                                        </feOffset>
                                                        <feFlood flood-color="#00ff00" flood-opacity="1"
                                                            result="filter_result_1_drop_shadow_3">
                                                        </feFlood>
                                                        <feComposite in="filter_result_1_drop_shadow_3"
                                                            in2="filter_result_1_drop_shadow_2"
                                                            operator="in"
                                                            result="filter_result_1_drop_shadow_4">
                                                        </feComposite>
                                                        <feMerge result="filter_result_1">
                                                            <feMergeNode in="filter_result_1_drop_shadow_4">
                                                            </feMergeNode>
                                                            <feMergeNode in="filter_result_0"></feMergeNode>
                                                        </feMerge>
                                                        <feGaussianBlur in="SourceAlpha"
                                                            result="filter_result_2_drop_shadow_1"
                                                            stdDeviation="0"></feGaussianBlur>
                                                        <feOffset dx="25" dy="0"
                                                            in="filter_result_2_drop_shadow_1"
                                                            result="filter_result_2_drop_shadow_2">
                                                        </feOffset>
                                                        <feFlood flood-color="#00ff00" flood-opacity="1"
                                                            result="filter_result_2_drop_shadow_3">
                                                        </feFlood>
                                                        <feComposite in="filter_result_2_drop_shadow_3"
                                                            in2="filter_result_2_drop_shadow_2"
                                                            operator="in"
                                                            result="filter_result_2_drop_shadow_4">
                                                        </feComposite>
                                                        <feMerge result="filter_result_2">
                                                            <feMergeNode in="filter_result_2_drop_shadow_4">
                                                            </feMergeNode>
                                                            <feMergeNode in="filter_result_1"></feMergeNode>
                                                        </feMerge>
                                                        <feGaussianBlur in="SourceAlpha"
                                                            result="filter_result_3_drop_shadow_1"
                                                            stdDeviation="0"></feGaussianBlur>
                                                        <feOffset dx="25" dy="0"
                                                            in="filter_result_3_drop_shadow_1"
                                                            result="filter_result_3_drop_shadow_2">
                                                        </feOffset>
                                                        <feFlood flood-color="#00ff00" flood-opacity="1"
                                                            result="filter_result_3_drop_shadow_3">
                                                        </feFlood>
                                                        <feComposite in="filter_result_3_drop_shadow_3"
                                                            in2="filter_result_3_drop_shadow_2"
                                                            operator="in"
                                                            result="filter_result_3_drop_shadow_4">
                                                        </feComposite>
                                                        <feMerge result="filter_result_3">
                                                            <feMergeNode in="filter_result_3_drop_shadow_4">
                                                            </feMergeNode>
                                                            <feMergeNode in="filter_result_2"></feMergeNode>
                                                        </feMerge>
                                                        <feGaussianBlur in="SourceAlpha"
                                                            result="filter_result_4_drop_shadow_1"
                                                            stdDeviation="0"></feGaussianBlur>
                                                        <feOffset dx="25" dy="0"
                                                            in="filter_result_4_drop_shadow_1"
                                                            result="filter_result_4_drop_shadow_2">
                                                        </feOffset>
                                                        <feFlood flood-color="#00ff00" flood-opacity="1"
                                                            result="filter_result_4_drop_shadow_3">
                                                        </feFlood>
                                                        <feComposite in="filter_result_4_drop_shadow_3"
                                                            in2="filter_result_4_drop_shadow_2"
                                                            operator="in"
                                                            result="filter_result_4_drop_shadow_4">
                                                        </feComposite>
                                                        <feMerge result="filter_result_4">
                                                            <feMergeNode in="filter_result_4_drop_shadow_4">
                                                            </feMergeNode>
                                                            <feMergeNode in="filter_result_3"></feMergeNode>
                                                        </feMerge>
                                                        <feGaussianBlur in="SourceAlpha"
                                                            result="filter_result_5_drop_shadow_1"
                                                            stdDeviation="0"></feGaussianBlur>
                                                        <feOffset dx="25" dy="0"
                                                            in="filter_result_5_drop_shadow_1"
                                                            result="filter_result_5_drop_shadow_2">
                                                        </feOffset>
                                                        <feFlood flood-color="#00ff00" flood-opacity="1"
                                                            result="filter_result_5_drop_shadow_3">
                                                        </feFlood>
                                                        <feComposite in="filter_result_5_drop_shadow_3"
                                                            in2="filter_result_5_drop_shadow_2"
                                                            operator="in"
                                                            result="filter_result_5_drop_shadow_4">
                                                        </feComposite>
                                                        <feMerge result="filter_result_5">
                                                            <feMergeNode in="filter_result_5_drop_shadow_4">
                                                            </feMergeNode>
                                                            <feMergeNode in="filter_result_4"></feMergeNode>
                                                        </feMerge>
                                                        <feGaussianBlur in="SourceAlpha"
                                                            result="filter_result_6_drop_shadow_1"
                                                            stdDeviation="0"></feGaussianBlur>
                                                        <feOffset dx="25" dy="0"
                                                            in="filter_result_6_drop_shadow_1"
                                                            result="filter_result_6_drop_shadow_2">
                                                        </feOffset>
                                                        <feFlood flood-color="#00ff00" flood-opacity="1"
                                                            result="filter_result_6_drop_shadow_3">
                                                        </feFlood>
                                                        <feComposite in="filter_result_6_drop_shadow_3"
                                                            in2="filter_result_6_drop_shadow_2"
                                                            operator="in"
                                                            result="filter_result_6_drop_shadow_4">
                                                        </feComposite>
                                                        <feMerge result="filter_result_6">
                                                            <feMergeNode in="filter_result_6_drop_shadow_4">
                                                            </feMergeNode>
                                                            <feMergeNode in="filter_result_5"></feMergeNode>
                                                        </feMerge>
                                                        <feGaussianBlur in="SourceAlpha"
                                                            result="filter_result_7_drop_shadow_1"
                                                            stdDeviation="0"></feGaussianBlur>
                                                        <feOffset dx="25" dy="0"
                                                            in="filter_result_7_drop_shadow_1"
                                                            result="filter_result_7_drop_shadow_2">
                                                        </feOffset>
                                                        <feFlood flood-color="#00ff00" flood-opacity="1"
                                                            result="filter_result_7_drop_shadow_3">
                                                        </feFlood>
                                                        <feComposite in="filter_result_7_drop_shadow_3"
                                                            in2="filter_result_7_drop_shadow_2"
                                                            operator="in"
                                                            result="filter_result_7_drop_shadow_4">
                                                        </feComposite>
                                                        <feMerge result="filter_result_7">
                                                            <feMergeNode in="filter_result_7_drop_shadow_4">
                                                            </feMergeNode>
                                                            <feMergeNode in="filter_result_6"></feMergeNode>
                                                        </feMerge>
                                                        <feGaussianBlur in="SourceAlpha"
                                                            result="filter_result_8_drop_shadow_1"
                                                            stdDeviation="0"></feGaussianBlur>
                                                        <feOffset dx="25" dy="0"
                                                            in="filter_result_8_drop_shadow_1"
                                                            result="filter_result_8_drop_shadow_2">
                                                        </feOffset>
                                                        <feFlood flood-color="#00ff00" flood-opacity="1"
                                                            result="filter_result_8_drop_shadow_3">
                                                        </feFlood>
                                                        <feComposite in="filter_result_8_drop_shadow_3"
                                                            in2="filter_result_8_drop_shadow_2"
                                                            operator="in"
                                                            result="filter_result_8_drop_shadow_4">
                                                        </feComposite>
                                                        <feMerge result="filter_result_8">
                                                            <feMergeNode in="filter_result_8_drop_shadow_4">
                                                            </feMergeNode>
                                                            <feMergeNode in="filter_result_7"></feMergeNode>
                                                        </feMerge>
                                                        <feGaussianBlur in="SourceAlpha"
                                                            result="filter_result_9_drop_shadow_1"
                                                            stdDeviation="0"></feGaussianBlur>
                                                        <feOffset dx="25" dy="0"
                                                            in="filter_result_9_drop_shadow_1"
                                                            result="filter_result_9_drop_shadow_2">
                                                        </feOffset>
                                                        <feFlood flood-color="#00ff00" flood-opacity="1"
                                                            result="filter_result_9_drop_shadow_3">
                                                        </feFlood>
                                                        <feComposite in="filter_result_9_drop_shadow_3"
                                                            in2="filter_result_9_drop_shadow_2"
                                                            operator="in"
                                                            result="filter_result_9_drop_shadow_4">
                                                        </feComposite>
                                                        <feMerge result="filter_result_9">
                                                            <feMergeNode in="filter_result_9_drop_shadow_4">
                                                            </feMergeNode>
                                                            <feMergeNode in="filter_result_8"></feMergeNode>
                                                        </feMerge>
                                                        <feGaussianBlur in="SourceAlpha"
                                                            result="filter_result_10_drop_shadow_1"
                                                            stdDeviation="0"></feGaussianBlur>
                                                        <feOffset dx="25" dy="0"
                                                            in="filter_result_10_drop_shadow_1"
                                                            result="filter_result_10_drop_shadow_2">
                                                        </feOffset>
                                                        <feFlood flood-color="#00ff00" flood-opacity="1"
                                                            result="filter_result_10_drop_shadow_3">
                                                        </feFlood>
                                                        <feComposite in="filter_result_10_drop_shadow_3"
                                                            in2="filter_result_10_drop_shadow_2"
                                                            operator="in"
                                                            result="filter_result_10_drop_shadow_4">
                                                        </feComposite>
                                                        <feMerge result="filter_result_10">
                                                            <feMergeNode
                                                                in="filter_result_10_drop_shadow_4">
                                                            </feMergeNode>
                                                            <feMergeNode in="filter_result_9"></feMergeNode>
                                                        </feMerge>
                                                        <feGaussianBlur in="SourceAlpha"
                                                            result="filter_result_11_drop_shadow_1"
                                                            stdDeviation="0"></feGaussianBlur>
                                                        <feOffset dx="25" dy="0"
                                                            in="filter_result_11_drop_shadow_1"
                                                            result="filter_result_11_drop_shadow_2">
                                                        </feOffset>
                                                        <feFlood flood-color="#00ff00" flood-opacity="1"
                                                            result="filter_result_11_drop_shadow_3">
                                                        </feFlood>
                                                        <feComposite in="filter_result_11_drop_shadow_3"
                                                            in2="filter_result_11_drop_shadow_2"
                                                            operator="in"
                                                            result="filter_result_11_drop_shadow_4">
                                                        </feComposite>
                                                        <feMerge result="filter_result_11">
                                                            <feMergeNode
                                                                in="filter_result_11_drop_shadow_4">
                                                            </feMergeNode>
                                                            <feMergeNode in="filter_result_10">
                                                            </feMergeNode>
                                                        </feMerge>
                                                        <feGaussianBlur in="SourceAlpha"
                                                            result="filter_result_12_drop_shadow_1"
                                                            stdDeviation="0"></feGaussianBlur>
                                                        <feOffset dx="25" dy="0"
                                                            in="filter_result_12_drop_shadow_1"
                                                            result="filter_result_12_drop_shadow_2">
                                                        </feOffset>
                                                        <feFlood flood-color="#00ff00" flood-opacity="1"
                                                            result="filter_result_12_drop_shadow_3">
                                                        </feFlood>
                                                        <feComposite in="filter_result_12_drop_shadow_3"
                                                            in2="filter_result_12_drop_shadow_2"
                                                            operator="in"
                                                            result="filter_result_12_drop_shadow_4">
                                                        </feComposite>
                                                        <feMerge result="filter_result_12">
                                                            <feMergeNode
                                                                in="filter_result_12_drop_shadow_4">
                                                            </feMergeNode>
                                                            <feMergeNode in="filter_result_11">
                                                            </feMergeNode>
                                                        </feMerge>
                                                        <feGaussianBlur in="SourceAlpha"
                                                            result="filter_result_13_drop_shadow_1"
                                                            stdDeviation="0"></feGaussianBlur>
                                                        <feOffset dx="25" dy="0"
                                                            in="filter_result_13_drop_shadow_1"
                                                            result="filter_result_13_drop_shadow_2">
                                                        </feOffset>
                                                        <feFlood flood-color="#00ff00" flood-opacity="1"
                                                            result="filter_result_13_drop_shadow_3">
                                                        </feFlood>
                                                        <feComposite in="filter_result_13_drop_shadow_3"
                                                            in2="filter_result_13_drop_shadow_2"
                                                            operator="in"
                                                            result="filter_result_13_drop_shadow_4">
                                                        </feComposite>
                                                        <feMerge result="filter_result_13">
                                                            <feMergeNode
                                                                in="filter_result_13_drop_shadow_4">
                                                            </feMergeNode>
                                                            <feMergeNode in="filter_result_12">
                                                            </feMergeNode>
                                                        </feMerge>
                                                        <feGaussianBlur in="SourceAlpha"
                                                            result="filter_result_14_drop_shadow_1"
                                                            stdDeviation="0"></feGaussianBlur>
                                                        <feOffset dx="25" dy="0"
                                                            in="filter_result_14_drop_shadow_1"
                                                            result="filter_result_14_drop_shadow_2">
                                                        </feOffset>
                                                        <feFlood flood-color="#00ff00" flood-opacity="1"
                                                            result="filter_result_14_drop_shadow_3">
                                                        </feFlood>
                                                        <feComposite in="filter_result_14_drop_shadow_3"
                                                            in2="filter_result_14_drop_shadow_2"
                                                            operator="in"
                                                            result="filter_result_14_drop_shadow_4">
                                                        </feComposite>
                                                        <feMerge result="filter_result_14">
                                                            <feMergeNode
                                                                in="filter_result_14_drop_shadow_4">
                                                            </feMergeNode>
                                                            <feMergeNode in="filter_result_13">
                                                            </feMergeNode>
                                                        </feMerge>
                                                        <feGaussianBlur in="SourceAlpha"
                                                            result="filter_result_15_drop_shadow_1"
                                                            stdDeviation="0"></feGaussianBlur>
                                                        <feOffset dx="25" dy="0"
                                                            in="filter_result_15_drop_shadow_1"
                                                            result="filter_result_15_drop_shadow_2">
                                                        </feOffset>
                                                        <feFlood flood-color="#00ff00" flood-opacity="1"
                                                            result="filter_result_15_drop_shadow_3">
                                                        </feFlood>
                                                        <feComposite in="filter_result_15_drop_shadow_3"
                                                            in2="filter_result_15_drop_shadow_2"
                                                            operator="in"
                                                            result="filter_result_15_drop_shadow_4">
                                                        </feComposite>
                                                        <feMerge result="filter_result_15">
                                                            <feMergeNode
                                                                in="filter_result_15_drop_shadow_4">
                                                            </feMergeNode>
                                                            <feMergeNode in="filter_result_14">
                                                            </feMergeNode>
                                                        </feMerge>
                                                        <feGaussianBlur in="SourceAlpha"
                                                            result="filter_result_16_drop_shadow_1"
                                                            stdDeviation="0"></feGaussianBlur>
                                                        <feOffset dx="25" dy="0"
                                                            in="filter_result_16_drop_shadow_1"
                                                            result="filter_result_16_drop_shadow_2">
                                                        </feOffset>
                                                        <feFlood flood-color="#00ff00" flood-opacity="1"
                                                            result="filter_result_16_drop_shadow_3">
                                                        </feFlood>
                                                        <feComposite in="filter_result_16_drop_shadow_3"
                                                            in2="filter_result_16_drop_shadow_2"
                                                            operator="in"
                                                            result="filter_result_16_drop_shadow_4">
                                                        </feComposite>
                                                        <feMerge result="filter_result_16">
                                                            <feMergeNode
                                                                in="filter_result_16_drop_shadow_4">
                                                            </feMergeNode>
                                                            <feMergeNode in="filter_result_15">
                                                            </feMergeNode>
                                                        </feMerge>
                                                        <feGaussianBlur in="SourceAlpha"
                                                            result="filter_result_17_drop_shadow_1"
                                                            stdDeviation="0"></feGaussianBlur>
                                                        <feOffset dx="25" dy="0"
                                                            in="filter_result_17_drop_shadow_1"
                                                            result="filter_result_17_drop_shadow_2">
                                                        </feOffset>
                                                        <feFlood flood-color="#00ff00" flood-opacity="1"
                                                            result="filter_result_17_drop_shadow_3">
                                                        </feFlood>
                                                        <feComposite in="filter_result_17_drop_shadow_3"
                                                            in2="filter_result_17_drop_shadow_2"
                                                            operator="in"
                                                            result="filter_result_17_drop_shadow_4">
                                                        </feComposite>
                                                        <feMerge result="filter_result_17">
                                                            <feMergeNode
                                                                in="filter_result_17_drop_shadow_4">
                                                            </feMergeNode>
                                                            <feMergeNode in="filter_result_16">
                                                            </feMergeNode>
                                                        </feMerge>
                                                        <feGaussianBlur in="SourceAlpha"
                                                            result="filter_result_18_drop_shadow_1"
                                                            stdDeviation="0"></feGaussianBlur>
                                                        <feOffset dx="25" dy="0"
                                                            in="filter_result_18_drop_shadow_1"
                                                            result="filter_result_18_drop_shadow_2">
                                                        </feOffset>
                                                        <feFlood flood-color="#00ff00" flood-opacity="1"
                                                            result="filter_result_18_drop_shadow_3">
                                                        </feFlood>
                                                        <feComposite in="filter_result_18_drop_shadow_3"
                                                            in2="filter_result_18_drop_shadow_2"
                                                            operator="in"
                                                            result="filter_result_18_drop_shadow_4">
                                                        </feComposite>
                                                        <feMerge result="filter_result_18">
                                                            <feMergeNode
                                                                in="filter_result_18_drop_shadow_4">
                                                            </feMergeNode>
                                                            <feMergeNode in="filter_result_17">
                                                            </feMergeNode>
                                                        </feMerge>
                                                        <feGaussianBlur in="SourceAlpha"
                                                            result="filter_result_19_drop_shadow_1"
                                                            stdDeviation="0"></feGaussianBlur>
                                                        <feOffset dx="25" dy="0"
                                                            in="filter_result_19_drop_shadow_1"
                                                            result="filter_result_19_drop_shadow_2">
                                                        </feOffset>
                                                        <feFlood flood-color="#00ff00" flood-opacity="1"
                                                            result="filter_result_19_drop_shadow_3">
                                                        </feFlood>
                                                        <feComposite in="filter_result_19_drop_shadow_3"
                                                            in2="filter_result_19_drop_shadow_2"
                                                            operator="in"
                                                            result="filter_result_19_drop_shadow_4">
                                                        </feComposite>
                                                        <feMerge result="filter_result_19">
                                                            <feMergeNode
                                                                in="filter_result_19_drop_shadow_4">
                                                            </feMergeNode>
                                                            <feMergeNode in="filter_result_18">
                                                            </feMergeNode>
                                                        </feMerge>
                                                        <feGaussianBlur in="SourceAlpha"
                                                            result="filter_result_20_drop_shadow_1"
                                                            stdDeviation="0"></feGaussianBlur>
                                                        <feOffset dx="25" dy="0"
                                                            in="filter_result_20_drop_shadow_1"
                                                            result="filter_result_20_drop_shadow_2">
                                                        </feOffset>
                                                        <feFlood flood-color="#00ff00" flood-opacity="1"
                                                            result="filter_result_20_drop_shadow_3">
                                                        </feFlood>
                                                        <feComposite in="filter_result_20_drop_shadow_3"
                                                            in2="filter_result_20_drop_shadow_2"
                                                            operator="in"
                                                            result="filter_result_20_drop_shadow_4">
                                                        </feComposite>
                                                        <feMerge result="filter_result_20">
                                                            <feMergeNode
                                                                in="filter_result_20_drop_shadow_4">
                                                            </feMergeNode>
                                                            <feMergeNode in="filter_result_19">
                                                            </feMergeNode>
                                                        </feMerge>
                                                        <feGaussianBlur in="SourceAlpha"
                                                            result="filter_result_21_drop_shadow_1"
                                                            stdDeviation="0"></feGaussianBlur>
                                                        <feOffset dx="25" dy="0"
                                                            in="filter_result_21_drop_shadow_1"
                                                            result="filter_result_21_drop_shadow_2">
                                                        </feOffset>
                                                        <feFlood flood-color="#00ff00" flood-opacity="1"
                                                            result="filter_result_21_drop_shadow_3">
                                                        </feFlood>
                                                        <feComposite in="filter_result_21_drop_shadow_3"
                                                            in2="filter_result_21_drop_shadow_2"
                                                            operator="in"
                                                            result="filter_result_21_drop_shadow_4">
                                                        </feComposite>
                                                        <feMerge result="filter_result_21">
                                                            <feMergeNode
                                                                in="filter_result_21_drop_shadow_4">
                                                            </feMergeNode>
                                                            <feMergeNode in="filter_result_20">
                                                            </feMergeNode>
                                                        </feMerge>
                                                        <feGaussianBlur in="SourceAlpha"
                                                            result="filter_result_22_drop_shadow_1"
                                                            stdDeviation="0"></feGaussianBlur>
                                                        <feOffset dx="25" dy="0"
                                                            in="filter_result_22_drop_shadow_1"
                                                            result="filter_result_22_drop_shadow_2">
                                                        </feOffset>
                                                        <feFlood flood-color="#00ff00" flood-opacity="1"
                                                            result="filter_result_22_drop_shadow_3">
                                                        </feFlood>
                                                        <feComposite in="filter_result_22_drop_shadow_3"
                                                            in2="filter_result_22_drop_shadow_2"
                                                            operator="in"
                                                            result="filter_result_22_drop_shadow_4">
                                                        </feComposite>
                                                        <feMerge result="filter_result_22">
                                                            <feMergeNode
                                                                in="filter_result_22_drop_shadow_4">
                                                            </feMergeNode>
                                                            <feMergeNode in="filter_result_21">
                                                            </feMergeNode>
                                                        </feMerge>
                                                        <feGaussianBlur in="SourceAlpha"
                                                            result="filter_result_23_drop_shadow_1"
                                                            stdDeviation="0"></feGaussianBlur>
                                                        <feOffset dx="25" dy="0"
                                                            in="filter_result_23_drop_shadow_1"
                                                            result="filter_result_23_drop_shadow_2">
                                                        </feOffset>
                                                        <feFlood flood-color="#00ff00" flood-opacity="1"
                                                            result="filter_result_23_drop_shadow_3">
                                                        </feFlood>
                                                        <feComposite in="filter_result_23_drop_shadow_3"
                                                            in2="filter_result_23_drop_shadow_2"
                                                            operator="in"
                                                            result="filter_result_23_drop_shadow_4">
                                                        </feComposite>
                                                        <feMerge result="filter_result_23">
                                                            <feMergeNode
                                                                in="filter_result_23_drop_shadow_4">
                                                            </feMergeNode>
                                                            <feMergeNode in="filter_result_22">
                                                            </feMergeNode>
                                                        </feMerge>
                                                        <feGaussianBlur in="SourceAlpha"
                                                            result="filter_result_24_drop_shadow_1"
                                                            stdDeviation="0"></feGaussianBlur>
                                                        <feOffset dx="25" dy="0"
                                                            in="filter_result_24_drop_shadow_1"
                                                            result="filter_result_24_drop_shadow_2">
                                                        </feOffset>
                                                        <feFlood flood-color="#00ff00" flood-opacity="1"
                                                            result="filter_result_24_drop_shadow_3">
                                                        </feFlood>
                                                        <feComposite in="filter_result_24_drop_shadow_3"
                                                            in2="filter_result_24_drop_shadow_2"
                                                            operator="in"
                                                            result="filter_result_24_drop_shadow_4">
                                                        </feComposite>
                                                        <feMerge result="filter_result_24">
                                                            <feMergeNode
                                                                in="filter_result_24_drop_shadow_4">
                                                            </feMergeNode>
                                                            <feMergeNode in="filter_result_23">
                                                            </feMergeNode>
                                                        </feMerge>
                                                        <feGaussianBlur in="SourceAlpha"
                                                            result="filter_result_25_drop_shadow_1"
                                                            stdDeviation="0"></feGaussianBlur>
                                                        <feOffset dx="25" dy="0"
                                                            in="filter_result_25_drop_shadow_1"
                                                            result="filter_result_25_drop_shadow_2">
                                                        </feOffset>
                                                        <feFlood flood-color="#00ff00" flood-opacity="1"
                                                            result="filter_result_25_drop_shadow_3">
                                                        </feFlood>
                                                        <feComposite in="filter_result_25_drop_shadow_3"
                                                            in2="filter_result_25_drop_shadow_2"
                                                            operator="in"
                                                            result="filter_result_25_drop_shadow_4">
                                                        </feComposite>
                                                        <feMerge result="filter_result_25">
                                                            <feMergeNode
                                                                in="filter_result_25_drop_shadow_4">
                                                            </feMergeNode>
                                                            <feMergeNode in="filter_result_24">
                                                            </feMergeNode>
                                                        </feMerge>
                                                        <feGaussianBlur in="SourceAlpha"
                                                            result="filter_result_26_drop_shadow_1"
                                                            stdDeviation="0"></feGaussianBlur>
                                                        <feOffset dx="25" dy="0"
                                                            in="filter_result_26_drop_shadow_1"
                                                            result="filter_result_26_drop_shadow_2">
                                                        </feOffset>
                                                        <feFlood flood-color="#00ff00" flood-opacity="1"
                                                            result="filter_result_26_drop_shadow_3">
                                                        </feFlood>
                                                        <feComposite in="filter_result_26_drop_shadow_3"
                                                            in2="filter_result_26_drop_shadow_2"
                                                            operator="in"
                                                            result="filter_result_26_drop_shadow_4">
                                                        </feComposite>
                                                        <feMerge result="filter_result_26">
                                                            <feMergeNode
                                                                in="filter_result_26_drop_shadow_4">
                                                            </feMergeNode>
                                                            <feMergeNode in="filter_result_25">
                                                            </feMergeNode>
                                                        </feMerge>
                                                        <feGaussianBlur in="SourceAlpha"
                                                            result="filter_result_27_drop_shadow_1"
                                                            stdDeviation="0"></feGaussianBlur>
                                                        <feOffset dx="25" dy="0"
                                                            in="filter_result_27_drop_shadow_1"
                                                            result="filter_result_27_drop_shadow_2">
                                                        </feOffset>
                                                        <feFlood flood-color="#00ff00" flood-opacity="1"
                                                            result="filter_result_27_drop_shadow_3">
                                                        </feFlood>
                                                        <feComposite in="filter_result_27_drop_shadow_3"
                                                            in2="filter_result_27_drop_shadow_2"
                                                            operator="in"
                                                            result="filter_result_27_drop_shadow_4">
                                                        </feComposite>
                                                        <feMerge result="filter_result_27">
                                                            <feMergeNode
                                                                in="filter_result_27_drop_shadow_4">
                                                            </feMergeNode>
                                                            <feMergeNode in="filter_result_26">
                                                            </feMergeNode>
                                                        </feMerge>
                                                        <feGaussianBlur in="SourceAlpha"
                                                            result="filter_result_28_drop_shadow_1"
                                                            stdDeviation="0"></feGaussianBlur>
                                                        <feOffset dx="25" dy="0"
                                                            in="filter_result_28_drop_shadow_1"
                                                            result="filter_result_28_drop_shadow_2">
                                                        </feOffset>
                                                        <feFlood flood-color="#00ff00" flood-opacity="1"
                                                            result="filter_result_28_drop_shadow_3">
                                                        </feFlood>
                                                        <feComposite in="filter_result_28_drop_shadow_3"
                                                            in2="filter_result_28_drop_shadow_2"
                                                            operator="in"
                                                            result="filter_result_28_drop_shadow_4">
                                                        </feComposite>
                                                        <feMerge result="filter_result_28">
                                                            <feMergeNode
                                                                in="filter_result_28_drop_shadow_4">
                                                            </feMergeNode>
                                                            <feMergeNode in="filter_result_27">
                                                            </feMergeNode>
                                                        </feMerge>
                                                        <feGaussianBlur in="SourceAlpha"
                                                            result="filter_result_29_drop_shadow_1"
                                                            stdDeviation="0"></feGaussianBlur>
                                                        <feOffset dx="25" dy="0"
                                                            in="filter_result_29_drop_shadow_1"
                                                            result="filter_result_29_drop_shadow_2">
                                                        </feOffset>
                                                        <feFlood flood-color="#00ff00" flood-opacity="1"
                                                            result="filter_result_29_drop_shadow_3">
                                                        </feFlood>
                                                        <feComposite in="filter_result_29_drop_shadow_3"
                                                            in2="filter_result_29_drop_shadow_2"
                                                            operator="in"
                                                            result="filter_result_29_drop_shadow_4">
                                                        </feComposite>
                                                        <feMerge result="filter_result_29">
                                                            <feMergeNode
                                                                in="filter_result_29_drop_shadow_4">
                                                            </feMergeNode>
                                                            <feMergeNode in="filter_result_28">
                                                            </feMergeNode>
                                                        </feMerge>
                                                        <feGaussianBlur in="SourceAlpha"
                                                            result="filter_result_30_drop_shadow_1"
                                                            stdDeviation="0"></feGaussianBlur>
                                                        <feOffset dx="25" dy="0"
                                                            in="filter_result_30_drop_shadow_1"
                                                            result="filter_result_30_drop_shadow_2">
                                                        </feOffset>
                                                        <feFlood flood-color="#00ff00" flood-opacity="1"
                                                            result="filter_result_30_drop_shadow_3">
                                                        </feFlood>
                                                        <feComposite in="filter_result_30_drop_shadow_3"
                                                            in2="filter_result_30_drop_shadow_2"
                                                            operator="in"
                                                            result="filter_result_30_drop_shadow_4">
                                                        </feComposite>
                                                        <feMerge result="filter_result_30">
                                                            <feMergeNode
                                                                in="filter_result_30_drop_shadow_4">
                                                            </feMergeNode>
                                                            <feMergeNode in="filter_result_29">
                                                            </feMergeNode>
                                                        </feMerge>
                                                        <feGaussianBlur in="SourceAlpha"
                                                            result="filter_result_31_drop_shadow_1"
                                                            stdDeviation="0"></feGaussianBlur>
                                                        <feOffset dx="25" dy="0"
                                                            in="filter_result_31_drop_shadow_1"
                                                            result="filter_result_31_drop_shadow_2">
                                                        </feOffset>
                                                        <feFlood flood-color="#00ff00" flood-opacity="1"
                                                            result="filter_result_31_drop_shadow_3">
                                                        </feFlood>
                                                        <feComposite in="filter_result_31_drop_shadow_3"
                                                            in2="filter_result_31_drop_shadow_2"
                                                            operator="in"
                                                            result="filter_result_31_drop_shadow_4">
                                                        </feComposite>
                                                        <feMerge result="filter_result_31">
                                                            <feMergeNode
                                                                in="filter_result_31_drop_shadow_4">
                                                            </feMergeNode>
                                                            <feMergeNode in="filter_result_30">
                                                            </feMergeNode>
                                                        </feMerge>
                                                        <feGaussianBlur in="SourceAlpha"
                                                            result="filter_result_32_drop_shadow_1"
                                                            stdDeviation="0"></feGaussianBlur>
                                                        <feOffset dx="25" dy="0"
                                                            in="filter_result_32_drop_shadow_1"
                                                            result="filter_result_32_drop_shadow_2">
                                                        </feOffset>
                                                        <feFlood flood-color="#00ff00" flood-opacity="1"
                                                            result="filter_result_32_drop_shadow_3">
                                                        </feFlood>
                                                        <feComposite in="filter_result_32_drop_shadow_3"
                                                            in2="filter_result_32_drop_shadow_2"
                                                            operator="in"
                                                            result="filter_result_32_drop_shadow_4">
                                                        </feComposite>
                                                        <feMerge result="filter_result_32">
                                                            <feMergeNode
                                                                in="filter_result_32_drop_shadow_4">
                                                            </feMergeNode>
                                                            <feMergeNode in="filter_result_31">
                                                            </feMergeNode>
                                                        </feMerge>
                                                        <feGaussianBlur in="SourceAlpha"
                                                            result="filter_result_33_drop_shadow_1"
                                                            stdDeviation="0"></feGaussianBlur>
                                                        <feOffset dx="25" dy="0"
                                                            in="filter_result_33_drop_shadow_1"
                                                            result="filter_result_33_drop_shadow_2">
                                                        </feOffset>
                                                        <feFlood flood-color="#00ff00" flood-opacity="1"
                                                            result="filter_result_33_drop_shadow_3">
                                                        </feFlood>
                                                        <feComposite in="filter_result_33_drop_shadow_3"
                                                            in2="filter_result_33_drop_shadow_2"
                                                            operator="in"
                                                            result="filter_result_33_drop_shadow_4">
                                                        </feComposite>
                                                        <feMerge result="filter_result_33">
                                                            <feMergeNode
                                                                in="filter_result_33_drop_shadow_4">
                                                            </feMergeNode>
                                                            <feMergeNode in="filter_result_32">
                                                            </feMergeNode>
                                                        </feMerge>
                                                        <feGaussianBlur in="SourceAlpha"
                                                            result="filter_result_34_drop_shadow_1"
                                                            stdDeviation="0"></feGaussianBlur>
                                                        <feOffset dx="25" dy="0"
                                                            in="filter_result_34_drop_shadow_1"
                                                            result="filter_result_34_drop_shadow_2">
                                                        </feOffset>
                                                        <feFlood flood-color="#00ff00" flood-opacity="1"
                                                            result="filter_result_34_drop_shadow_3">
                                                        </feFlood>
                                                        <feComposite in="filter_result_34_drop_shadow_3"
                                                            in2="filter_result_34_drop_shadow_2"
                                                            operator="in"
                                                            result="filter_result_34_drop_shadow_4">
                                                        </feComposite>
                                                        <feMerge result="filter_result_34">
                                                            <feMergeNode
                                                                in="filter_result_34_drop_shadow_4">
                                                            </feMergeNode>
                                                            <feMergeNode in="filter_result_33">
                                                            </feMergeNode>
                                                        </feMerge>
                                                        <feGaussianBlur in="SourceAlpha"
                                                            result="filter_result_35_drop_shadow_1"
                                                            stdDeviation="0"></feGaussianBlur>
                                                        <feOffset dx="25" dy="0"
                                                            in="filter_result_35_drop_shadow_1"
                                                            result="filter_result_35_drop_shadow_2">
                                                        </feOffset>
                                                        <feFlood flood-color="#00ff00" flood-opacity="1"
                                                            result="filter_result_35_drop_shadow_3">
                                                        </feFlood>
                                                        <feComposite in="filter_result_35_drop_shadow_3"
                                                            in2="filter_result_35_drop_shadow_2"
                                                            operator="in"
                                                            result="filter_result_35_drop_shadow_4">
                                                        </feComposite>
                                                        <feMerge result="filter_result_35">
                                                            <feMergeNode
                                                                in="filter_result_35_drop_shadow_4">
                                                            </feMergeNode>
                                                            <feMergeNode in="filter_result_34">
                                                            </feMergeNode>
                                                        </feMerge>
                                                        <feGaussianBlur in="SourceAlpha"
                                                            result="filter_result_36_drop_shadow_1"
                                                            stdDeviation="0"></feGaussianBlur>
                                                        <feOffset dx="25" dy="0"
                                                            in="filter_result_36_drop_shadow_1"
                                                            result="filter_result_36_drop_shadow_2">
                                                        </feOffset>
                                                        <feFlood flood-color="#00ff00" flood-opacity="1"
                                                            result="filter_result_36_drop_shadow_3">
                                                        </feFlood>
                                                        <feComposite in="filter_result_36_drop_shadow_3"
                                                            in2="filter_result_36_drop_shadow_2"
                                                            operator="in"
                                                            result="filter_result_36_drop_shadow_4">
                                                        </feComposite>
                                                        <feMerge result="filter_result_36">
                                                            <feMergeNode
                                                                in="filter_result_36_drop_shadow_4">
                                                            </feMergeNode>
                                                            <feMergeNode in="filter_result_35">
                                                            </feMergeNode>
                                                        </feMerge>
                                                        <feGaussianBlur in="SourceAlpha"
                                                            result="filter_result_37_drop_shadow_1"
                                                            stdDeviation="0"></feGaussianBlur>
                                                        <feOffset dx="25" dy="0"
                                                            in="filter_result_37_drop_shadow_1"
                                                            result="filter_result_37_drop_shadow_2">
                                                        </feOffset>
                                                        <feFlood flood-color="#00ff00" flood-opacity="1"
                                                            result="filter_result_37_drop_shadow_3">
                                                        </feFlood>
                                                        <feComposite in="filter_result_37_drop_shadow_3"
                                                            in2="filter_result_37_drop_shadow_2"
                                                            operator="in"
                                                            result="filter_result_37_drop_shadow_4">
                                                        </feComposite>
                                                        <feMerge result="filter_result_37">
                                                            <feMergeNode
                                                                in="filter_result_37_drop_shadow_4">
                                                            </feMergeNode>
                                                            <feMergeNode in="filter_result_36">
                                                            </feMergeNode>
                                                        </feMerge>
                                                        <feGaussianBlur in="SourceAlpha"
                                                            result="filter_result_38_drop_shadow_1"
                                                            stdDeviation="0"></feGaussianBlur>
                                                        <feOffset dx="25" dy="0"
                                                            in="filter_result_38_drop_shadow_1"
                                                            result="filter_result_38_drop_shadow_2">
                                                        </feOffset>
                                                        <feFlood flood-color="#00ff00" flood-opacity="1"
                                                            result="filter_result_38_drop_shadow_3">
                                                        </feFlood>
                                                        <feComposite in="filter_result_38_drop_shadow_3"
                                                            in2="filter_result_38_drop_shadow_2"
                                                            operator="in"
                                                            result="filter_result_38_drop_shadow_4">
                                                        </feComposite>
                                                        <feMerge result="filter_result_38">
                                                            <feMergeNode
                                                                in="filter_result_38_drop_shadow_4">
                                                            </feMergeNode>
                                                            <feMergeNode in="filter_result_37">
                                                            </feMergeNode>
                                                        </feMerge>
                                                        <feGaussianBlur in="SourceAlpha"
                                                            result="filter_result_39_drop_shadow_1"
                                                            stdDeviation="0"></feGaussianBlur>
                                                        <feOffset dx="25" dy="0"
                                                            in="filter_result_39_drop_shadow_1"
                                                            result="filter_result_39_drop_shadow_2">
                                                        </feOffset>
                                                        <feFlood flood-color="#00ff00" flood-opacity="1"
                                                            result="filter_result_39_drop_shadow_3">
                                                        </feFlood>
                                                        <feComposite in="filter_result_39_drop_shadow_3"
                                                            in2="filter_result_39_drop_shadow_2"
                                                            operator="in"
                                                            result="filter_result_39_drop_shadow_4">
                                                        </feComposite>
                                                        <feMerge result="filter_result_39">
                                                            <feMergeNode
                                                                in="filter_result_39_drop_shadow_4">
                                                            </feMergeNode>
                                                            <feMergeNode in="filter_result_38">
                                                            </feMergeNode>
                                                        </feMerge>
                                                        <feGaussianBlur in="SourceAlpha"
                                                            result="filter_result_40_drop_shadow_1"
                                                            stdDeviation="0"></feGaussianBlur>
                                                        <feOffset dx="25" dy="0"
                                                            in="filter_result_40_drop_shadow_1"
                                                            result="filter_result_40_drop_shadow_2">
                                                        </feOffset>
                                                        <feFlood flood-color="#00ff00" flood-opacity="1"
                                                            result="filter_result_40_drop_shadow_3">
                                                        </feFlood>
                                                        <feComposite in="filter_result_40_drop_shadow_3"
                                                            in2="filter_result_40_drop_shadow_2"
                                                            operator="in"
                                                            result="filter_result_40_drop_shadow_4">
                                                        </feComposite>
                                                        <feMerge result="filter_result_40">
                                                            <feMergeNode
                                                                in="filter_result_40_drop_shadow_4">
                                                            </feMergeNode>
                                                            <feMergeNode in="filter_result_39">
                                                            </feMergeNode>
                                                        </feMerge>
                                                        <feGaussianBlur in="SourceAlpha"
                                                            result="filter_result_41_drop_shadow_1"
                                                            stdDeviation="0"></feGaussianBlur>
                                                        <feOffset dx="25" dy="0"
                                                            in="filter_result_41_drop_shadow_1"
                                                            result="filter_result_41_drop_shadow_2">
                                                        </feOffset>
                                                        <feFlood flood-color="#00ff00" flood-opacity="1"
                                                            result="filter_result_41_drop_shadow_3">
                                                        </feFlood>
                                                        <feComposite in="filter_result_41_drop_shadow_3"
                                                            in2="filter_result_41_drop_shadow_2"
                                                            operator="in"
                                                            result="filter_result_41_drop_shadow_4">
                                                        </feComposite>
                                                        <feMerge result="filter_result_41">
                                                            <feMergeNode
                                                                in="filter_result_41_drop_shadow_4">
                                                            </feMergeNode>
                                                            <feMergeNode in="filter_result_40">
                                                            </feMergeNode>
                                                        </feMerge>
                                                        <feGaussianBlur in="SourceAlpha"
                                                            result="filter_result_42_drop_shadow_1"
                                                            stdDeviation="0"></feGaussianBlur>
                                                        <feOffset dx="25" dy="0"
                                                            in="filter_result_42_drop_shadow_1"
                                                            result="filter_result_42_drop_shadow_2">
                                                        </feOffset>
                                                        <feFlood flood-color="#00ff00" flood-opacity="1"
                                                            result="filter_result_42_drop_shadow_3">
                                                        </feFlood>
                                                        <feComposite in="filter_result_42_drop_shadow_3"
                                                            in2="filter_result_42_drop_shadow_2"
                                                            operator="in"
                                                            result="filter_result_42_drop_shadow_4">
                                                        </feComposite>
                                                        <feMerge result="filter_result_42">
                                                            <feMergeNode
                                                                in="filter_result_42_drop_shadow_4">
                                                            </feMergeNode>
                                                            <feMergeNode in="filter_result_41">
                                                            </feMergeNode>
                                                        </feMerge>
                                                        <feGaussianBlur in="SourceAlpha"
                                                            result="filter_result_43_drop_shadow_1"
                                                            stdDeviation="0"></feGaussianBlur>
                                                        <feOffset dx="25" dy="0"
                                                            in="filter_result_43_drop_shadow_1"
                                                            result="filter_result_43_drop_shadow_2">
                                                        </feOffset>
                                                        <feFlood flood-color="#00ff00" flood-opacity="1"
                                                            result="filter_result_43_drop_shadow_3">
                                                        </feFlood>
                                                        <feComposite in="filter_result_43_drop_shadow_3"
                                                            in2="filter_result_43_drop_shadow_2"
                                                            operator="in"
                                                            result="filter_result_43_drop_shadow_4">
                                                        </feComposite>
                                                        <feMerge result="filter_result_43">
                                                            <feMergeNode
                                                                in="filter_result_43_drop_shadow_4">
                                                            </feMergeNode>
                                                            <feMergeNode in="filter_result_42">
                                                            </feMergeNode>
                                                        </feMerge>
                                                        <feGaussianBlur in="SourceAlpha"
                                                            result="filter_result_44_drop_shadow_1"
                                                            stdDeviation="0"></feGaussianBlur>
                                                        <feOffset dx="25" dy="0"
                                                            in="filter_result_44_drop_shadow_1"
                                                            result="filter_result_44_drop_shadow_2">
                                                        </feOffset>
                                                        <feFlood flood-color="#00ff00" flood-opacity="1"
                                                            result="filter_result_44_drop_shadow_3">
                                                        </feFlood>
                                                        <feComposite in="filter_result_44_drop_shadow_3"
                                                            in2="filter_result_44_drop_shadow_2"
                                                            operator="in"
                                                            result="filter_result_44_drop_shadow_4">
                                                        </feComposite>
                                                        <feMerge result="filter_result_44">
                                                            <feMergeNode
                                                                in="filter_result_44_drop_shadow_4">
                                                            </feMergeNode>
                                                            <feMergeNode in="filter_result_43">
                                                            </feMergeNode>
                                                        </feMerge>
                                                        <feGaussianBlur in="SourceAlpha"
                                                            result="filter_result_45_drop_shadow_1"
                                                            stdDeviation="0"></feGaussianBlur>
                                                        <feOffset dx="25" dy="0"
                                                            in="filter_result_45_drop_shadow_1"
                                                            result="filter_result_45_drop_shadow_2">
                                                        </feOffset>
                                                        <feFlood flood-color="#00ff00" flood-opacity="1"
                                                            result="filter_result_45_drop_shadow_3">
                                                        </feFlood>
                                                        <feComposite in="filter_result_45_drop_shadow_3"
                                                            in2="filter_result_45_drop_shadow_2"
                                                            operator="in"
                                                            result="filter_result_45_drop_shadow_4">
                                                        </feComposite>
                                                        <feMerge result="filter_result_45">
                                                            <feMergeNode
                                                                in="filter_result_45_drop_shadow_4">
                                                            </feMergeNode>
                                                            <feMergeNode in="filter_result_44">
                                                            </feMergeNode>
                                                        </feMerge>
                                                        <feGaussianBlur in="SourceAlpha"
                                                            result="filter_result_46_drop_shadow_1"
                                                            stdDeviation="0"></feGaussianBlur>
                                                        <feOffset dx="25" dy="0"
                                                            in="filter_result_46_drop_shadow_1"
                                                            result="filter_result_46_drop_shadow_2">
                                                        </feOffset>
                                                        <feFlood flood-color="#00ff00" flood-opacity="1"
                                                            result="filter_result_46_drop_shadow_3">
                                                        </feFlood>
                                                        <feComposite in="filter_result_46_drop_shadow_3"
                                                            in2="filter_result_46_drop_shadow_2"
                                                            operator="in"
                                                            result="filter_result_46_drop_shadow_4">
                                                        </feComposite>
                                                        <feMerge result="filter_result_46">
                                                            <feMergeNode
                                                                in="filter_result_46_drop_shadow_4">
                                                            </feMergeNode>
                                                            <feMergeNode in="filter_result_45">
                                                            </feMergeNode>
                                                        </feMerge>
                                                        <feGaussianBlur in="SourceAlpha"
                                                            result="filter_result_47_drop_shadow_1"
                                                            stdDeviation="0"></feGaussianBlur>
                                                        <feOffset dx="25" dy="0"
                                                            in="filter_result_47_drop_shadow_1"
                                                            result="filter_result_47_drop_shadow_2">
                                                        </feOffset>
                                                        <feFlood flood-color="#00ff00" flood-opacity="1"
                                                            result="filter_result_47_drop_shadow_3">
                                                        </feFlood>
                                                        <feComposite in="filter_result_47_drop_shadow_3"
                                                            in2="filter_result_47_drop_shadow_2"
                                                            operator="in"
                                                            result="filter_result_47_drop_shadow_4">
                                                        </feComposite>
                                                        <feMerge result="filter_result_47">
                                                            <feMergeNode
                                                                in="filter_result_47_drop_shadow_4">
                                                            </feMergeNode>
                                                            <feMergeNode in="filter_result_46">
                                                            </feMergeNode>
                                                        </feMerge>
                                                    </filter>
                                                    <linearGradient id="__lottie_element_77"
                                                        spreadMethod="pad" gradientUnits="userSpaceOnUse"
                                                        x1="0" y1="0" x2="100" y2="0">
                                                        <stop offset="0%" stopColor="rgb(32,48,56)"></stop>
                                                        <stop offset="50%" stopColor="rgb(37,64,76)">
                                                        </stop>
                                                        <stop offset="100%" stopColor="rgb(42,80,96)">
                                                        </stop>
                                                    </linearGradient>
                                                    <clipPath id="__lottie_element_79">
                                                        <path d="M0,0 L321,0 L321,328 L0,328z"></path>
                                                    </clipPath>
                                                    <clipPath id="__lottie_element_149">
                                                        <path fill="#ffffff" clipRule="nonzero"
                                                            d=" M122.83000183105469,-92.90299987792969 C122.83000183105469,-92.90299987792969 -121.83999633789062,-92.90299987792969 -121.83999633789062,-92.90299987792969 C-121.83999633789062,-92.90299987792969 -121.83999633789062,-2.1630001068115234 -121.83999633789062,-2.1630001068115234 C-121.83999633789062,-2.1630001068115234 122.83000183105469,-2.1630001068115234 122.83000183105469,-2.1630001068115234 C122.83000183105469,-2.1630001068115234 122.83000183105469,-92.90299987792969 122.83000183105469,-92.90299987792969"
                                                            fillOpacity="1"></path>
                                                    </clipPath>
                                                    <clipPath id="__lottie_element_155">
                                                        <path d="M0,0 L328,0 L328,321 L0,321z"></path>
                                                    </clipPath>
                                                    <g id="__lottie_element_278">
                                                        <g id="2085"
                                                            transform="matrix(1,0,0,1,-209.9709930419922,100.66300201416016)"
                                                            opacity="1" style={{ display: 'block' }}>
                                                            <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                                                                <path fill="rgb(217,217,217)"
                                                                    fillOpacity="1"
                                                                    d=" M725.5,-256.6159973144531 C725.5,-256.6159973144531 725.5,256.6159973144531 725.5,256.6159973144531 C725.5,261.03118896484375 721.9152221679688,264.6159973144531 717.5,264.6159973144531 C717.5,264.6159973144531 -717.5,264.6159973144531 -717.5,264.6159973144531 C-721.9152221679688,264.6159973144531 -725.5,261.03118896484375 -725.5,256.6159973144531 C-725.5,256.6159973144531 -725.5,-256.6159973144531 -725.5,-256.6159973144531 C-725.5,-261.03118896484375 -721.9152221679688,-264.6159973144531 -717.5,-264.6159973144531 C-717.5,-264.6159973144531 717.5,-264.6159973144531 717.5,-264.6159973144531 C721.9152221679688,-264.6159973144531 725.5,-261.03118896484375 725.5,-256.6159973144531z">
                                                                </path>
                                                            </g>
                                                        </g>
                                                    </g>
                                                    <clipPath id="__lottie_element_285">
                                                        <path d="M0,0 L108,0 L108,106 L0,106z"></path>
                                                    </clipPath>
                                                </defs>
                                                <g clip-path="url(#__lottie_element_2)">
                                                    <g id="2174"
                                                        transform="matrix(1.5399999618530273,0,0,1.5399999618530273,234,170)"
                                                        opacity="1" style={{ display: 'block' }}>
                                                        <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                                                            <path fill="rgb(255,54,32)" fillOpacity="1"
                                                                d=" M234,-225 C234,-225 234,225 234,225 C234,225 -234,225 -234,225 C-234,225 -234,-225 -234,-225 C-234,-225 234,-225 234,-225z">
                                                            </path>
                                                            <path strokeLinecap="butt"
                                                                strokeLinejoin="miter" fillOpacity="0"
                                                                strokeMiterlimit="4"
                                                                stroke="rgb(228,233,241)" strokeOpacity="1"
                                                                strokeWidth="0"
                                                                d=" M234,-225 C234,-225 234,225 234,225 C234,225 -234,225 -234,225 C-234,225 -234,-225 -234,-225 C-234,-225 234,-225 234,-225z">
                                                            </path>
                                                        </g>
                                                    </g>
                                                    <g id="2175"
                                                        transform="matrix(0.9582507610321045,0,0,0.9582507610321045,375.4280090332031,-166.22947692871094)"
                                                        opacity="1" style={{ display: 'block' }}>
                                                        <g opacity="1"
                                                            transform="matrix(1,0,0,1,-35.76599884033203,239.76600646972656)">
                                                            <path fill="rgb(189,43,39)" fillOpacity="1"
                                                                d=" M0,-404.7655029296875 C223.39007568359375,-404.7655029296875 404.7655029296875,-223.39007568359375 404.7655029296875,0 C404.7655029296875,223.39007568359375 223.39007568359375,404.7655029296875 0,404.7655029296875 C-223.39007568359375,404.7655029296875 -404.7655029296875,223.39007568359375 -404.7655029296875,0 C-404.7655029296875,-223.39007568359375 -223.39007568359375,-404.7655029296875 0,-404.7655029296875z">
                                                            </path>
                                                            <path strokeLinecap="butt"
                                                                strokeLinejoin="miter" fillOpacity="0"
                                                                strokeMiterlimit="4"
                                                                stroke="rgb(228,233,241)" strokeOpacity="1"
                                                                strokeWidth="0"
                                                                d=" M0,-404.7655029296875 C223.39007568359375,-404.7655029296875 404.7655029296875,-223.39007568359375 404.7655029296875,0 C404.7655029296875,223.39007568359375 223.39007568359375,404.7655029296875 0,404.7655029296875 C-223.39007568359375,404.7655029296875 -404.7655029296875,223.39007568359375 -404.7655029296875,0 C-404.7655029296875,-223.39007568359375 -223.39007568359375,-404.7655029296875 0,-404.7655029296875z">
                                                            </path>
                                                        </g>
                                                    </g>
                                                    <g id="2254" style={{ display: 'none' }}
                                                        transform="matrix(1.9858850240707397,0,0,1.9858850240707397,240.7853546142578,445.0859375)"
                                                        opacity="0.000012048868103136102">
                                                        <g opacity="1"
                                                            transform="matrix(1,0,0,1,1.8819999694824219,26.149999618530273)">
                                                            <path strokeLinecap="butt"
                                                                strokeLinejoin="miter" fillOpacity="0"
                                                                strokeMiterlimit="4"
                                                                stroke="rgb(255,255,255)" strokeOpacity="1"
                                                                strokeWidth="1.5"
                                                                d=" M-127.49600219726562,-14.083000183105469 C-138.77000427246094,-14.083000183105469 -145.41799926757812,-14.083000183105469 -145.41799926757812,-14.083000183105469 C-150.38900756835938,-14.083000183105469 -154.41799926757812,-18.113000869750977 -154.41799926757812,-23.083999633789062 C-154.41799926757812,-23.083999633789062 -154.41799926757812,-151.30799865722656 -154.41799926757812,-151.30799865722656 C-154.41799926757812,-156.2779998779297 -150.38900756835938,-160.30799865722656 -145.41799926757812,-160.30799865722656 C-145.41799926757812,-160.30799865722656 142.22799682617188,-160.30799865722656 142.22799682617188,-160.30799865722656 C147.19900512695312,-160.30799865722656 151.22900390625,-156.2779998779297 151.22900390625,-151.30799865722656 C151.22900390625,-151.30799865722656 151.22900390625,-151.30799865722656 151.22900390625,-151.30799865722656 C151.22900390625,-151.30799865722656 151.22900390625,-23.083999633789062 151.22900390625,-23.083999633789062 C151.22900390625,-18.113000869750977 147.19900512695312,-14.083000183105469 142.22799682617188,-14.083000183105469 C142.22799682617188,-14.083000183105469 -64.60800170898438,-14.083000183105469 -127.49600219726562,-14.083000183105469">
                                                            </path>
                                                        </g>
                                                    </g>
                                                    <g id="2259"
                                                        transform="matrix(2.268354892730713,0,0,2.268354892730713,358.5116271972656,113.05852508544922)"
                                                        opacity="1" style={{ display: 'block' }}>
                                                        <g opacity="1"
                                                            transform="matrix(1,0,0,1,1.8819999694824219,26.149999618530273)">
                                                            <path strokeLinecap="butt"
                                                                strokeLinejoin="miter" fillOpacity="0"
                                                                strokeMiterlimit="4"
                                                                stroke="rgb(255,255,255)" strokeOpacity="1"
                                                                strokeWidth="1.5" d="M0 0"></path>
                                                        </g>
                                                    </g>
                                                    <g id="2187" style={{ display: 'none' }}
                                                        transform="matrix(0.923417329788208,0,0,0.923417329788208,196.21682739257812,370.6231384277344)"
                                                        opacity="0" fill="rgb(255,255,255)" font-size="36"
                                                        font-family="DM Sans" font-style={{}}
                                                        font-weight="500" aria-data-label="Unified governance">
                                                        <g strokeLinecap="butt" strokeLinejoin="round"
                                                            strokeMiterlimit="4"
                                                            transform="matrix(1,0,0,1,-62.892818450927734,12.56758975982666)"
                                                            opacity="1" style={{ display: 'inherit' }}>
                                                            <g>
                                                                <g transform="matrix(1,0,0,1,0,0)"
                                                                    opacity="1" style={{ display: 'block' }}>
                                                                    <path
                                                                        d=" M11.99,0.43 C10.19,0.43 8.56,0.08 7.11,-0.63 C5.66,-1.34 4.51,-2.42 3.65,-3.89 C2.8,-5.35 2.38,-7.21 2.38,-9.47 C2.38,-9.47 2.38,-25.2 2.38,-25.2 C2.38,-25.2 6.19,-25.2 6.19,-25.2 C6.19,-25.2 6.19,-9.43 6.19,-9.43 C6.19,-7.22 6.72,-5.6 7.78,-4.57 C8.83,-3.54 10.26,-3.02 12.06,-3.02 C13.84,-3.02 15.25,-3.54 16.31,-4.57 C17.36,-5.6 17.89,-7.22 17.89,-9.43 C17.89,-9.43 17.89,-25.2 17.89,-25.2 C17.89,-25.2 21.71,-25.2 21.71,-25.2 C21.71,-25.2 21.71,-9.47 21.71,-9.47 C21.71,-7.21 21.27,-5.35 20.39,-3.89 C19.52,-2.42 18.34,-1.34 16.87,-0.63 C15.39,0.08 13.76,0.43 11.99,0.43">
                                                                    </path>
                                                                    <g opacity="1"
                                                                        transform="matrix(0.36000001430511475,0,0,0.36000001430511475,0,0)">
                                                                    </g>
                                                                </g>
                                                            </g>
                                                        </g>
                                                        <g strokeLinecap="butt" strokeLinejoin="round"
                                                            strokeMiterlimit="4"
                                                            transform="matrix(1,0,0,1,-40.64482116699219,12.56758975982666)"
                                                            opacity="1" style={{ display: 'inherit' }}>
                                                            <g>
                                                                <g transform="matrix(1,0,0,1,0,0)"
                                                                    opacity="1" style={{ display: 'block' }}>
                                                                    <path
                                                                        d=" M6.23,0 C6.23,0 2.41,0 2.41,0 C2.41,0 2.41,-17.86 2.41,-17.86 C2.41,-17.86 5.8,-17.86 5.8,-17.86 C5.8,-17.86 6.08,-14.72 6.08,-14.72 C6.64,-15.83 7.45,-16.7 8.51,-17.33 C9.58,-17.97 10.81,-18.29 12.2,-18.29 C14.36,-18.29 16.06,-17.62 17.3,-16.27 C18.53,-14.93 19.15,-12.92 19.15,-10.26 C19.15,-10.26 19.15,0 19.15,0 C19.15,0 15.37,0 15.37,0 C15.37,0 15.37,-9.86 15.37,-9.86 C15.37,-13.32 13.96,-15.05 11.12,-15.05 C9.71,-15.05 8.54,-14.54 7.61,-13.54 C6.69,-12.53 6.23,-11.09 6.23,-9.22">
                                                                    </path>
                                                                    <g opacity="1"
                                                                        transform="matrix(0.36000001430511475,0,0,0.36000001430511475,0,0)">
                                                                    </g>
                                                                </g>
                                                            </g>
                                                        </g>
                                                        <g strokeLinecap="butt" strokeLinejoin="round"
                                                            strokeMiterlimit="4"
                                                            transform="matrix(1,0,0,1,-21.20482063293457,12.56758975982666)"
                                                            opacity="1" style={{ display: 'inherit' }}>
                                                            <g>
                                                                <g transform="matrix(1,0,0,1,0,0)"
                                                                    opacity="1" style={{ display: 'block' }}>
                                                                    <path
                                                                        d=" M6.48,0 C6.48,0 2.66,0 2.66,0 C2.66,0 2.66,-17.86 2.66,-17.86 C2.66,-17.86 6.48,-17.86 6.48,-17.86 M4.57,-21.24 C3.85,-21.24 3.26,-21.46 2.79,-21.91 C2.32,-22.35 2.09,-22.91 2.09,-23.58 C2.09,-24.25 2.32,-24.81 2.79,-25.25 C3.26,-25.7 3.85,-25.92 4.57,-25.92 C5.29,-25.92 5.89,-25.7 6.35,-25.25 C6.82,-24.81 7.06,-24.25 7.06,-23.58 C7.06,-22.91 6.82,-22.35 6.35,-21.91 C5.89,-21.46 5.29,-21.24 4.57,-21.24">
                                                                    </path>
                                                                    <g opacity="1"
                                                                        transform="matrix(0.36000001430511475,0,0,0.36000001430511475,0,0)">
                                                                    </g>
                                                                </g>
                                                            </g>
                                                        </g>
                                                        <g strokeLinecap="butt" strokeLinejoin="round"
                                                            strokeMiterlimit="4"
                                                            transform="matrix(1,0,0,1,-13.896819114685059,12.56758975982666)"
                                                            opacity="1" style={{ display: 'inherit' }}>
                                                            <g>
                                                                <g transform="matrix(1,0,0,1,0,0)"
                                                                    opacity="1" style={{ display: 'block' }}>
                                                                    <path
                                                                        d=" M7.13,0 C7.13,0 3.31,0 3.31,0 C3.31,0 3.31,-14.65 3.31,-14.65 C3.31,-14.65 0.76,-14.65 0.76,-14.65 C0.76,-14.65 0.76,-17.86 0.76,-17.86 C0.76,-17.86 3.31,-17.86 3.31,-17.86 C3.31,-17.86 3.31,-20.45 3.31,-20.45 C3.31,-22.39 3.8,-23.79 4.77,-24.64 C5.74,-25.49 7.12,-25.92 8.89,-25.92 C8.89,-25.92 10.76,-25.92 10.76,-25.92 C10.76,-25.92 10.76,-22.68 10.76,-22.68 C10.76,-22.68 9.47,-22.68 9.47,-22.68 C8.63,-22.68 8.03,-22.51 7.67,-22.16 C7.31,-21.81 7.13,-21.23 7.13,-20.41 C7.13,-20.41 7.13,-17.86 7.13,-17.86 C7.13,-17.86 11.23,-17.86 11.23,-17.86 C11.23,-17.86 11.23,-14.65 11.23,-14.65 C11.23,-14.65 7.13,-14.65 7.13,-14.65">
                                                                    </path>
                                                                    <g opacity="1"
                                                                        transform="matrix(0.36000001430511475,0,0,0.36000001430511475,0,0)">
                                                                    </g>
                                                                </g>
                                                            </g>
                                                        </g>
                                                        <g strokeLinecap="butt" strokeLinejoin="round"
                                                            strokeMiterlimit="4"
                                                            transform="matrix(1,0,0,1,-3.2408204078674316,12.56758975982666)"
                                                            opacity="1" style={{ display: 'inherit' }}>
                                                            <g>
                                                                <g transform="matrix(1,0,0,1,0,0)"
                                                                    opacity="1" style={{ display: 'block' }}>
                                                                    <path
                                                                        d=" M6.48,0 C6.48,0 2.66,0 2.66,0 C2.66,0 2.66,-17.86 2.66,-17.86 C2.66,-17.86 6.48,-17.86 6.48,-17.86 M4.57,-21.24 C3.85,-21.24 3.26,-21.46 2.79,-21.91 C2.32,-22.35 2.09,-22.91 2.09,-23.58 C2.09,-24.25 2.32,-24.81 2.79,-25.25 C3.26,-25.7 3.85,-25.92 4.57,-25.92 C5.29,-25.92 5.89,-25.7 6.35,-25.25 C6.82,-24.81 7.06,-24.25 7.06,-23.58 C7.06,-22.91 6.82,-22.35 6.35,-21.91 C5.89,-21.46 5.29,-21.24 4.57,-21.24">
                                                                    </path>
                                                                    <g opacity="1"
                                                                        transform="matrix(0.36000001430511475,0,0,0.36000001430511475,0,0)">
                                                                    </g>
                                                                </g>
                                                            </g>
                                                        </g>
                                                        <g strokeLinecap="butt" strokeLinejoin="round"
                                                            strokeMiterlimit="4"
                                                            transform="matrix(1,0,0,1,4.067178249359131,12.56758975982666)"
                                                            opacity="1" style={{ display: 'inherit' }}>
                                                            <g>
                                                                <g transform="matrix(1,0,0,1,0,0)"
                                                                    opacity="1" style={{ display: 'block' }}>
                                                                    <path
                                                                        d=" M10.76,-15.16 C9.49,-15.16 8.36,-14.78 7.38,-14.02 C6.4,-13.27 5.8,-12.13 5.58,-10.62 C5.58,-10.62 15.66,-10.62 15.66,-10.62 C15.59,-12.01 15.1,-13.12 14.18,-13.93 C13.27,-14.75 12.13,-15.16 10.76,-15.16 M10.76,0.43 C9.01,0.43 7.46,0.04 6.1,-0.74 C4.75,-1.52 3.68,-2.6 2.92,-4 C2.15,-5.39 1.76,-7.01 1.76,-8.86 C1.76,-10.73 2.14,-12.37 2.9,-13.79 C3.65,-15.2 4.71,-16.31 6.07,-17.1 C7.42,-17.89 9,-18.29 10.8,-18.29 C12.55,-18.29 14.08,-17.9 15.37,-17.12 C16.67,-16.34 17.68,-15.3 18.4,-14 C19.12,-12.71 19.48,-11.28 19.48,-9.72 C19.48,-9.48 19.47,-9.22 19.46,-8.95 C19.45,-8.67 19.43,-8.36 19.4,-8.03 C19.4,-8.03 5.51,-8.03 5.51,-8.03 C5.63,-6.3 6.2,-4.99 7.22,-4.09 C8.24,-3.19 9.42,-2.74 10.76,-2.74 C11.84,-2.74 12.75,-2.98 13.48,-3.47 C14.21,-3.97 14.76,-4.63 15.12,-5.47 C15.12,-5.47 18.94,-5.47 18.94,-5.47 C18.46,-3.79 17.5,-2.39 16.07,-1.26 C14.65,-0.13 12.88,0.43 10.76,0.43">
                                                                    </path>
                                                                    <g opacity="1"
                                                                        transform="matrix(0.36000001430511475,0,0,0.36000001430511475,0,0)">
                                                                    </g>
                                                                </g>
                                                            </g>
                                                        </g>
                                                        <g strokeLinecap="butt" strokeLinejoin="round"
                                                            strokeMiterlimit="4"
                                                            transform="matrix(1,0,0,1,23.291181564331055,12.56758975982666)"
                                                            opacity="1" style={{ display: 'inherit' }}>
                                                            <g>
                                                                <g transform="matrix(1,0,0,1,0,0)"
                                                                    opacity="1" style={{ display: 'block' }}>
                                                                    <path
                                                                        d=" M11.23,-2.88 C12.86,-2.88 14.2,-3.44 15.25,-4.57 C16.29,-5.7 16.81,-7.15 16.81,-8.93 C16.81,-10.73 16.29,-12.19 15.25,-13.3 C14.2,-14.42 12.86,-14.98 11.23,-14.98 C9.6,-14.98 8.26,-14.42 7.2,-13.3 C6.14,-12.19 5.62,-10.73 5.62,-8.93 C5.62,-7.75 5.86,-6.71 6.34,-5.8 C6.82,-4.88 7.48,-4.17 8.33,-3.65 C9.19,-3.14 10.15,-2.88 11.23,-2.88 M10.55,0.43 C8.82,0.43 7.3,0.02 5.98,-0.79 C4.66,-1.61 3.62,-2.72 2.88,-4.14 C2.14,-5.56 1.76,-7.16 1.76,-8.96 C1.76,-10.76 2.14,-12.37 2.88,-13.77 C3.62,-15.17 4.66,-16.28 5.99,-17.08 C7.33,-17.89 8.86,-18.29 10.58,-18.29 C12,-18.29 13.24,-18.01 14.31,-17.46 C15.38,-16.91 16.21,-16.13 16.81,-15.12 C16.81,-15.12 16.81,-25.92 16.81,-25.92 C16.81,-25.92 20.63,-25.92 20.63,-25.92 C20.63,-25.92 20.63,0 20.63,0 C20.63,0 17.21,0 17.21,0 C17.21,0 16.81,-2.77 16.81,-2.77 C16.24,-1.93 15.44,-1.19 14.44,-0.54 C13.43,0.11 12.13,0.43 10.55,0.43">
                                                                    </path>
                                                                    <g opacity="1"
                                                                        transform="matrix(0.36000001430511475,0,0,0.36000001430511475,0,0)">
                                                                    </g>
                                                                </g>
                                                            </g>
                                                        </g>
                                                        <g strokeLinecap="butt" strokeLinejoin="round"
                                                            strokeMiterlimit="4"
                                                            transform="matrix(1,0,0,1,44.53118133544922,12.56758975982666)"
                                                            opacity="1" style={{ display: 'inherit' }}>
                                                            <g>
                                                                <g transform="matrix(1,0,0,1,0,0)"
                                                                    opacity="1" style={{ display: 'block' }}>
                                                                    <path d="M0 0"></path>
                                                                    <g opacity="1"
                                                                        transform="matrix(0.36000001430511475,0,0,0.36000001430511475,0,0)">
                                                                    </g>
                                                                </g>
                                                            </g>
                                                        </g>
                                                        <g strokeLinecap="butt" strokeLinejoin="round"
                                                            strokeMiterlimit="4"
                                                            transform="matrix(1,0,0,1,51.80318069458008,12.56758975982666)"
                                                            opacity="1" style={{ display: 'inherit' }}>
                                                            <g>
                                                                <g transform="matrix(1,0,0,1,0,0)"
                                                                    opacity="1" style={{ display: 'block' }}>
                                                                    <path
                                                                        d=" M4.93,2.27 C4.93,3.3 5.39,4.07 6.3,4.59 C7.21,5.11 8.35,5.36 9.72,5.36 C11.04,5.36 12.11,5.08 12.92,4.52 C13.74,3.95 14.15,3.2 14.15,2.27 C14.15,1.57 13.87,0.98 13.32,0.49 C12.77,-0.01 11.72,-0.31 10.19,-0.43 C9.04,-0.5 8.02,-0.61 7.13,-0.76 C6.29,-0.3 5.71,0.19 5.4,0.72 C5.09,1.25 4.93,1.76 4.93,2.27 M9.72,-8.46 C10.82,-8.46 11.72,-8.75 12.4,-9.34 C13.09,-9.93 13.43,-10.76 13.43,-11.84 C13.43,-12.95 13.09,-13.79 12.4,-14.36 C11.72,-14.94 10.82,-15.23 9.72,-15.23 C8.59,-15.23 7.69,-14.94 7,-14.36 C6.32,-13.79 5.98,-12.95 5.98,-11.84 C5.98,-10.76 6.32,-9.93 7,-9.34 C7.69,-8.75 8.59,-8.46 9.72,-8.46 M9.72,-5.47 C8.78,-5.47 7.92,-5.58 7.13,-5.8 C7.13,-5.8 5.58,-4.28 5.58,-4.28 C5.84,-4.12 6.17,-3.97 6.55,-3.85 C6.94,-3.73 7.48,-3.62 8.17,-3.53 C8.87,-3.43 9.82,-3.34 11.02,-3.24 C13.39,-3.02 15.11,-2.45 16.16,-1.53 C17.22,-0.61 17.75,0.62 17.75,2.16 C17.75,3.22 17.47,4.22 16.9,5.17 C16.34,6.11 15.46,6.88 14.27,7.47 C13.09,8.06 11.57,8.35 9.72,8.35 C7.22,8.35 5.2,7.88 3.65,6.93 C2.11,5.98 1.33,4.55 1.33,2.63 C1.33,1.88 1.53,1.15 1.93,0.41 C2.32,-0.32 2.95,-1.01 3.82,-1.66 C3.31,-1.87 2.87,-2.11 2.5,-2.36 C2.13,-2.61 1.8,-2.87 1.51,-3.13 C1.51,-3.13 1.51,-4 1.51,-4 C1.51,-4 4.61,-7.16 4.61,-7.16 C3.22,-8.36 2.52,-9.94 2.52,-11.88 C2.52,-13.06 2.8,-14.13 3.37,-15.1 C3.93,-16.07 4.75,-16.85 5.83,-17.42 C6.91,-18 8.21,-18.29 9.72,-18.29 C10.73,-18.29 11.66,-18.14 12.53,-17.86 C12.53,-17.86 19.19,-17.86 19.19,-17.86 C19.19,-17.86 19.19,-15.34 19.19,-15.34 C19.19,-15.34 16.02,-15.16 16.02,-15.16 C16.6,-14.17 16.88,-13.08 16.88,-11.88 C16.88,-10.68 16.6,-9.6 16.04,-8.64 C15.47,-7.68 14.66,-6.91 13.59,-6.34 C12.52,-5.76 11.23,-5.47 9.72,-5.47">
                                                                    </path>
                                                                    <g opacity="1"
                                                                        transform="matrix(0.36000001430511475,0,0,0.36000001430511475,0,0)">
                                                                    </g>
                                                                </g>
                                                            </g>
                                                        </g>
                                                        <g strokeLinecap="butt" strokeLinejoin="round"
                                                            strokeMiterlimit="4"
                                                            transform="matrix(1,0,0,1,70.19918060302734,12.56758975982666)"
                                                            opacity="1" style={{ display: 'inherit' }}>
                                                            <g>
                                                                <g transform="matrix(1,0,0,1,0,0)"
                                                                    opacity="1" style={{ display: 'block' }}>
                                                                    <path
                                                                        d=" M10.76,-2.84 C11.68,-2.84 12.52,-3.07 13.3,-3.53 C14.08,-3.98 14.71,-4.66 15.19,-5.56 C15.67,-6.46 15.91,-7.58 15.91,-8.93 C15.91,-10.27 15.68,-11.39 15.21,-12.29 C14.74,-13.19 14.12,-13.87 13.34,-14.33 C12.56,-14.78 11.71,-15.01 10.8,-15.01 C9.89,-15.01 9.04,-14.78 8.26,-14.33 C7.48,-13.87 6.85,-13.19 6.37,-12.29 C5.89,-11.39 5.65,-10.27 5.65,-8.93 C5.65,-7.58 5.89,-6.46 6.37,-5.56 C6.85,-4.66 7.48,-3.98 8.24,-3.53 C9.01,-3.07 9.85,-2.84 10.76,-2.84 M10.76,0.43 C9.06,0.43 7.53,0.04 6.17,-0.74 C4.82,-1.52 3.74,-2.61 2.95,-4.01 C2.16,-5.42 1.76,-7.06 1.76,-8.93 C1.76,-10.8 2.17,-12.44 2.97,-13.84 C3.77,-15.25 4.86,-16.34 6.23,-17.12 C7.6,-17.9 9.12,-18.29 10.8,-18.29 C12.5,-18.29 14.03,-17.9 15.39,-17.12 C16.75,-16.34 17.83,-15.25 18.63,-13.84 C19.43,-12.44 19.84,-10.8 19.84,-8.93 C19.84,-7.06 19.43,-5.42 18.63,-4.01 C17.83,-2.61 16.74,-1.52 15.37,-0.74 C14,0.04 12.47,0.43 10.76,0.43">
                                                                    </path>
                                                                    <g opacity="1"
                                                                        transform="matrix(0.36000001430511475,0,0,0.36000001430511475,0,0)">
                                                                    </g>
                                                                </g>
                                                            </g>
                                                        </g>
                                                        <g strokeLinecap="butt" strokeLinejoin="round"
                                                            strokeMiterlimit="4"
                                                            transform="matrix(1,0,0,1,89.96318054199219,12.56758975982666)"
                                                            opacity="1" style={{ display: 'inherit' }}>
                                                            <g>
                                                                <g transform="matrix(1,0,0,1,0,0)"
                                                                    opacity="1" style={{ display: 'block' }}>
                                                                    <path
                                                                        d=" M11.95,0 C11.95,0 7.42,0 7.42,0 C7.42,0 0.72,-17.86 0.72,-17.86 C0.72,-17.86 4.72,-17.86 4.72,-17.86 C4.72,-17.86 9.68,-3.64 9.68,-3.64 C9.68,-3.64 14.65,-17.86 14.65,-17.86 C14.65,-17.86 18.61,-17.86 18.61,-17.86">
                                                                    </path>
                                                                    <g opacity="1"
                                                                        transform="matrix(0.36000001430511475,0,0,0.36000001430511475,0,0)">
                                                                    </g>
                                                                </g>
                                                            </g>
                                                        </g>
                                                        <g strokeLinecap="butt" strokeLinejoin="round"
                                                            strokeMiterlimit="4"
                                                            transform="matrix(1,0,0,1,107.49518585205078,12.56758975982666)"
                                                            opacity="1" style={{ display: 'inherit' }}>
                                                            <g>
                                                                <g transform="matrix(1,0,0,1,0,0)"
                                                                    opacity="1" style={{ display: 'block' }}>
                                                                    <path
                                                                        d=" M10.76,-15.16 C9.49,-15.16 8.36,-14.78 7.38,-14.02 C6.4,-13.27 5.8,-12.13 5.58,-10.62 C5.58,-10.62 15.66,-10.62 15.66,-10.62 C15.59,-12.01 15.1,-13.12 14.18,-13.93 C13.27,-14.75 12.13,-15.16 10.76,-15.16 M10.76,0.43 C9.01,0.43 7.46,0.04 6.1,-0.74 C4.75,-1.52 3.68,-2.6 2.92,-4 C2.15,-5.39 1.76,-7.01 1.76,-8.86 C1.76,-10.73 2.14,-12.37 2.9,-13.79 C3.65,-15.2 4.71,-16.31 6.07,-17.1 C7.42,-17.89 9,-18.29 10.8,-18.29 C12.55,-18.29 14.08,-17.9 15.37,-17.12 C16.67,-16.34 17.68,-15.3 18.4,-14 C19.12,-12.71 19.48,-11.28 19.48,-9.72 C19.48,-9.48 19.47,-9.22 19.46,-8.95 C19.45,-8.67 19.43,-8.36 19.4,-8.03 C19.4,-8.03 5.51,-8.03 5.51,-8.03 C5.63,-6.3 6.2,-4.99 7.22,-4.09 C8.24,-3.19 9.42,-2.74 10.76,-2.74 C11.84,-2.74 12.75,-2.98 13.48,-3.47 C14.21,-3.97 14.76,-4.63 15.12,-5.47 C15.12,-5.47 18.94,-5.47 18.94,-5.47 C18.46,-3.79 17.5,-2.39 16.07,-1.26 C14.65,-0.13 12.88,0.43 10.76,0.43">
                                                                    </path>
                                                                    <g opacity="1"
                                                                        transform="matrix(0.36000001430511475,0,0,0.36000001430511475,0,0)">
                                                                    </g>
                                                                </g>
                                                            </g>
                                                        </g>
                                                        <g strokeLinecap="butt" strokeLinejoin="round"
                                                            strokeMiterlimit="4"
                                                            transform="matrix(1,0,0,1,126.71917724609375,12.56758975982666)"
                                                            opacity="1" style={{ display: 'inherit' }}>
                                                            <g>
                                                                <g transform="matrix(1,0,0,1,0,0)"
                                                                    opacity="1" style={{ display: 'block' }}>
                                                                    <path
                                                                        d=" M6.23,0 C6.23,0 2.41,0 2.41,0 C2.41,0 2.41,-17.86 2.41,-17.86 C2.41,-17.86 5.83,-17.86 5.83,-17.86 C5.83,-17.86 6.16,-14.47 6.16,-14.47 C6.78,-15.65 7.65,-16.58 8.77,-17.26 C9.88,-17.95 11.23,-18.29 12.82,-18.29 C12.82,-18.29 12.82,-14.29 12.82,-14.29 C12.82,-14.29 11.77,-14.29 11.77,-14.29 C10.72,-14.29 9.77,-14.12 8.95,-13.77 C8.12,-13.42 7.46,-12.83 6.97,-12.01 C6.47,-11.18 6.23,-10.03 6.23,-8.57">
                                                                    </path>
                                                                    <g opacity="1"
                                                                        transform="matrix(0.36000001430511475,0,0,0.36000001430511475,0,0)">
                                                                    </g>
                                                                </g>
                                                            </g>
                                                        </g>
                                                        <g strokeLinecap="butt" strokeLinejoin="round"
                                                            strokeMiterlimit="4"
                                                            transform="matrix(1,0,0,1,138.5991668701172,12.56758975982666)"
                                                            opacity="1" style={{ display: 'inherit' }}>
                                                            <g>
                                                                <g transform="matrix(1,0,0,1,0,0)"
                                                                    opacity="1" style={{ display: 'block' }}>
                                                                    <path
                                                                        d=" M6.23,0 C6.23,0 2.41,0 2.41,0 C2.41,0 2.41,-17.86 2.41,-17.86 C2.41,-17.86 5.8,-17.86 5.8,-17.86 C5.8,-17.86 6.08,-14.72 6.08,-14.72 C6.64,-15.83 7.45,-16.7 8.51,-17.33 C9.58,-17.97 10.81,-18.29 12.2,-18.29 C14.36,-18.29 16.06,-17.62 17.3,-16.27 C18.53,-14.93 19.15,-12.92 19.15,-10.26 C19.15,-10.26 19.15,0 19.15,0 C19.15,0 15.37,0 15.37,0 C15.37,0 15.37,-9.86 15.37,-9.86 C15.37,-13.32 13.96,-15.05 11.12,-15.05 C9.71,-15.05 8.54,-14.54 7.61,-13.54 C6.69,-12.53 6.23,-11.09 6.23,-9.22">
                                                                    </path>
                                                                    <g opacity="1"
                                                                        transform="matrix(0.36000001430511475,0,0,0.36000001430511475,0,0)">
                                                                    </g>
                                                                </g>
                                                            </g>
                                                        </g>
                                                        <g strokeLinecap="butt" strokeLinejoin="round"
                                                            strokeMiterlimit="4"
                                                            transform="matrix(1,0,0,1,158.03916931152344,12.56758975982666)"
                                                            opacity="1" style={{ display: 'inherit' }}>
                                                            <g>
                                                                <g transform="matrix(1,0,0,1,0,0)"
                                                                    opacity="1" style={{ display: 'block' }}>
                                                                    <path
                                                                        d=" M9.22,-2.66 C10.25,-2.66 11.12,-2.91 11.83,-3.4 C12.53,-3.89 13.09,-4.55 13.48,-5.36 C13.88,-6.18 14.12,-7.08 14.22,-8.06 C14.22,-8.06 9.97,-8.06 9.97,-8.06 C8.46,-8.06 7.39,-7.8 6.75,-7.27 C6.11,-6.74 5.8,-6.08 5.8,-5.29 C5.8,-4.48 6.1,-3.83 6.71,-3.37 C7.33,-2.9 8.16,-2.66 9.22,-2.66 M8.46,0.43 C6.95,0.43 5.7,0.18 4.72,-0.32 C3.73,-0.83 3,-1.49 2.52,-2.32 C2.04,-3.15 1.8,-4.06 1.8,-5.04 C1.8,-6.77 2.47,-8.14 3.82,-9.14 C5.16,-10.15 7.08,-10.66 9.58,-10.66 C9.58,-10.66 14.26,-10.66 14.26,-10.66 C14.26,-10.66 14.26,-10.98 14.26,-10.98 C14.26,-12.37 13.88,-13.42 13.12,-14.11 C12.37,-14.81 11.39,-15.16 10.19,-15.16 C9.13,-15.16 8.21,-14.9 7.43,-14.38 C6.65,-13.87 6.18,-13.1 6.01,-12.1 C6.01,-12.1 2.2,-12.1 2.2,-12.1 C2.32,-13.39 2.75,-14.5 3.51,-15.43 C4.27,-16.35 5.23,-17.06 6.39,-17.55 C7.55,-18.04 8.83,-18.29 10.22,-18.29 C12.72,-18.29 14.65,-17.63 16.02,-16.33 C17.39,-15.02 18.07,-13.24 18.07,-10.98 C18.07,-10.98 18.07,0 18.07,0 C18.07,0 14.76,0 14.76,0 C14.76,0 14.44,-3.06 14.44,-3.06 C13.93,-2.08 13.2,-1.25 12.24,-0.58 C11.28,0.1 10.02,0.43 8.46,0.43">
                                                                    </path>
                                                                    <g opacity="1"
                                                                        transform="matrix(0.36000001430511475,0,0,0.36000001430511475,0,0)">
                                                                    </g>
                                                                </g>
                                                            </g>
                                                        </g>
                                                        <g strokeLinecap="butt" strokeLinejoin="round"
                                                            strokeMiterlimit="4"
                                                            transform="matrix(1,0,0,1,176.36317443847656,12.56758975982666)"
                                                            opacity="1" style={{ display: 'inherit' }}>
                                                            <g>
                                                                <g transform="matrix(1,0,0,1,0,0)"
                                                                    opacity="1" style={{ display: 'block' }}>
                                                                    <path
                                                                        d=" M6.23,0 C6.23,0 2.41,0 2.41,0 C2.41,0 2.41,-17.86 2.41,-17.86 C2.41,-17.86 5.8,-17.86 5.8,-17.86 C5.8,-17.86 6.08,-14.72 6.08,-14.72 C6.64,-15.83 7.45,-16.7 8.51,-17.33 C9.58,-17.97 10.81,-18.29 12.2,-18.29 C14.36,-18.29 16.06,-17.62 17.3,-16.27 C18.53,-14.93 19.15,-12.92 19.15,-10.26 C19.15,-10.26 19.15,0 19.15,0 C19.15,0 15.37,0 15.37,0 C15.37,0 15.37,-9.86 15.37,-9.86 C15.37,-13.32 13.96,-15.05 11.12,-15.05 C9.71,-15.05 8.54,-14.54 7.61,-13.54 C6.69,-12.53 6.23,-11.09 6.23,-9.22">
                                                                    </path>
                                                                    <g opacity="1"
                                                                        transform="matrix(0.36000001430511475,0,0,0.36000001430511475,0,0)">
                                                                    </g>
                                                                </g>
                                                            </g>
                                                        </g>
                                                        <g strokeLinecap="butt" strokeLinejoin="round"
                                                            strokeMiterlimit="4"
                                                            transform="matrix(1,0,0,1,195.8031768798828,12.56758975982666)"
                                                            opacity="1" style={{ display: 'inherit' }}>
                                                            <g>
                                                                <g transform="matrix(1,0,0,1,0,0)"
                                                                    opacity="1" style={{ display: 'block' }}>
                                                                    <path
                                                                        d=" M10.87,0.43 C9.12,0.43 7.55,0.04 6.17,-0.76 C4.79,-1.55 3.71,-2.65 2.93,-4.05 C2.15,-5.45 1.76,-7.08 1.76,-8.93 C1.76,-10.78 2.15,-12.4 2.93,-13.81 C3.71,-15.21 4.79,-16.31 6.17,-17.1 C7.55,-17.89 9.12,-18.29 10.87,-18.29 C13.08,-18.29 14.93,-17.71 16.43,-16.56 C17.93,-15.41 18.9,-13.85 19.33,-11.88 C19.33,-11.88 15.34,-11.88 15.34,-11.88 C15.1,-12.86 14.57,-13.63 13.75,-14.18 C12.94,-14.74 11.98,-15.01 10.87,-15.01 C9.94,-15.01 9.07,-14.78 8.28,-14.31 C7.49,-13.84 6.85,-13.16 6.37,-12.26 C5.89,-11.36 5.65,-10.25 5.65,-8.93 C5.65,-7.61 5.89,-6.5 6.37,-5.6 C6.85,-4.7 7.49,-4.01 8.28,-3.53 C9.07,-3.05 9.94,-2.81 10.87,-2.81 C11.98,-2.81 12.94,-3.08 13.75,-3.64 C14.57,-4.19 15.1,-4.97 15.34,-5.98 C15.34,-5.98 19.33,-5.98 19.33,-5.98 C18.92,-4.06 17.96,-2.51 16.45,-1.33 C14.94,-0.16 13.08,0.43 10.87,0.43">
                                                                    </path>
                                                                    <g opacity="1"
                                                                        transform="matrix(0.36000001430511475,0,0,0.36000001430511475,0,0)">
                                                                    </g>
                                                                </g>
                                                            </g>
                                                        </g>
                                                        <g strokeLinecap="butt" strokeLinejoin="round"
                                                            strokeMiterlimit="4"
                                                            transform="matrix(1,0,0,1,215.06317138671875,12.56758975982666)"
                                                            opacity="1" style={{ display: 'inherit' }}>
                                                            <g>
                                                                <g transform="matrix(1,0,0,1,0,0)"
                                                                    opacity="1" style={{ display: 'block' }}>
                                                                    <path
                                                                        d=" M10.76,-15.16 C9.49,-15.16 8.36,-14.78 7.38,-14.02 C6.4,-13.27 5.8,-12.13 5.58,-10.62 C5.58,-10.62 15.66,-10.62 15.66,-10.62 C15.59,-12.01 15.1,-13.12 14.18,-13.93 C13.27,-14.75 12.13,-15.16 10.76,-15.16 M10.76,0.43 C9.01,0.43 7.46,0.04 6.1,-0.74 C4.75,-1.52 3.68,-2.6 2.92,-4 C2.15,-5.39 1.76,-7.01 1.76,-8.86 C1.76,-10.73 2.14,-12.37 2.9,-13.79 C3.65,-15.2 4.71,-16.31 6.07,-17.1 C7.42,-17.89 9,-18.29 10.8,-18.29 C12.55,-18.29 14.08,-17.9 15.37,-17.12 C16.67,-16.34 17.68,-15.3 18.4,-14 C19.12,-12.71 19.48,-11.28 19.48,-9.72 C19.48,-9.48 19.47,-9.22 19.46,-8.95 C19.45,-8.67 19.43,-8.36 19.4,-8.03 C19.4,-8.03 5.51,-8.03 5.51,-8.03 C5.63,-6.3 6.2,-4.99 7.22,-4.09 C8.24,-3.19 9.42,-2.74 10.76,-2.74 C11.84,-2.74 12.75,-2.98 13.48,-3.47 C14.21,-3.97 14.76,-4.63 15.12,-5.47 C15.12,-5.47 18.94,-5.47 18.94,-5.47 C18.46,-3.79 17.5,-2.39 16.07,-1.26 C14.65,-0.13 12.88,0.43 10.76,0.43">
                                                                    </path>
                                                                    <g opacity="1"
                                                                        transform="matrix(0.36000001430511475,0,0,0.36000001430511475,0,0)">
                                                                    </g>
                                                                </g>
                                                            </g>
                                                        </g>
                                                    </g>
                                                    <g id="2188" clip-path="url(#__lottie_element_285)"
                                                        style={{ display: 'none' }}
                                                        transform="matrix(0.4842585027217865,0,0,0.4842585027217865,76.26336669921875,346.55865478515625)"
                                                        opacity="1">
                                                        <g id="1152" style={{ display: 'block' }}
                                                            transform="matrix(-0.3572964370250702,1.966027021408081,-1.966027021408081,-0.3572964370250702,54.535335540771484,54.4542121887207)"
                                                            opacity="1">
                                                            <g opacity="1"
                                                                transform="matrix(1,0,0,1,9.071000099182129,-15.666999816894531)">
                                                                <path fill="rgb(250,190,185)"
                                                                    fillOpacity="1"
                                                                    d=" M-6.1620001792907715,1.6460000276565552 C-6.1620001792907715,1.6460000276565552 -1.6469999551773071,-6.1570000648498535 -1.6469999551773071,-6.1570000648498535 C-1.6469999551773071,-6.1570000648498535 6.1620001792907715,-1.6460000276565552 6.1620001792907715,-1.6460000276565552 C6.1620001792907715,-1.6460000276565552 1.6469999551773071,6.1570000648498535 1.6469999551773071,6.1570000648498535 C1.6469999551773071,6.1570000648498535 -6.1620001792907715,1.6460000276565552 -6.1620001792907715,1.6460000276565552z">
                                                                </path>
                                                            </g>
                                                        </g>
                                                        <g id="1151" style={{ display: 'block' }}
                                                            transform="matrix(-0.3572964370250702,1.966027021408081,-1.966027021408081,-0.3572964370250702,54.53443145751953,54.45508575439453)"
                                                            opacity="1">
                                                            <g opacity="1"
                                                                transform="matrix(1,0,0,1,18.121000289916992,0.0010000000474974513)">
                                                                <path fill="rgb(250,190,185)"
                                                                    fillOpacity="1"
                                                                    d=" M-4.514999866485596,-4.511000156402588 C-4.514999866485596,-4.511000156402588 4.514999866485596,-4.511000156402588 4.514999866485596,-4.511000156402588 C4.514999866485596,-4.511000156402588 4.514999866485596,4.511000156402588 4.514999866485596,4.511000156402588 C4.514999866485596,4.511000156402588 -4.514999866485596,4.511000156402588 -4.514999866485596,4.511000156402588 C-4.514999866485596,4.511000156402588 -4.514999866485596,-4.511000156402588 -4.514999866485596,-4.511000156402588z">
                                                                </path>
                                                            </g>
                                                        </g>
                                                        <g id="1150" style={{ display: 'block' }}
                                                            transform="matrix(-0.3572964370250702,1.966027021408081,-1.966027021408081,-0.3572964370250702,54.534812927246094,54.45411682128906)"
                                                            opacity="1">
                                                            <g opacity="1"
                                                                transform="matrix(1,0,0,1,9.071000099182129,15.708000183105469)">
                                                                <path fill="rgb(250,190,185)"
                                                                    fillOpacity="1"
                                                                    d=" M-6.1620001792907715,-1.6460000276565552 C-6.1620001792907715,-1.6460000276565552 1.6469999551773071,-6.1570000648498535 1.6469999551773071,-6.1570000648498535 C1.6469999551773071,-6.1570000648498535 6.1620001792907715,1.6460000276565552 6.1620001792907715,1.6460000276565552 C6.1620001792907715,1.6460000276565552 -1.6469999551773071,6.1570000648498535 -1.6469999551773071,6.1570000648498535 C-1.6469999551773071,6.1570000648498535 -6.1620001792907715,-1.6460000276565552 -6.1620001792907715,-1.6460000276565552z">
                                                                </path>
                                                            </g>
                                                        </g>
                                                        <g id="1149" style={{ display: 'block' }}
                                                            transform="matrix(-0.3572964370250702,1.966027021408081,-1.966027021408081,-0.3572964370250702,54.53465270996094,54.45499038696289)"
                                                            opacity="1">
                                                            <g opacity="1"
                                                                transform="matrix(1,0,0,1,-9.071000099182129,15.708000183105469)">
                                                                <path fill="rgb(250,190,185)"
                                                                    fillOpacity="1"
                                                                    d=" M-6.1620001792907715,1.6460000276565552 C-6.1620001792907715,1.6460000276565552 -1.6469999551773071,-6.1570000648498535 -1.6469999551773071,-6.1570000648498535 C-1.6469999551773071,-6.1570000648498535 6.1620001792907715,-1.6460000276565552 6.1620001792907715,-1.6460000276565552 C6.1620001792907715,-1.6460000276565552 1.6469999551773071,6.1570000648498535 1.6469999551773071,6.1570000648498535 C1.6469999551773071,6.1570000648498535 -6.1620001792907715,1.6460000276565552 -6.1620001792907715,1.6460000276565552z">
                                                                </path>
                                                            </g>
                                                        </g>
                                                        <g id="1148" style={{ display: 'block' }}
                                                            transform="matrix(-0.3572964370250702,1.966027021408081,-1.966027021408081,-0.3572964370250702,54.534637451171875,54.45395278930664)"
                                                            opacity="1">
                                                            <g opacity="1"
                                                                transform="matrix(1,0,0,1,-18.121000289916992,0.0010000000474974513)">
                                                                <path fill="rgb(250,190,185)"
                                                                    fillOpacity="1"
                                                                    d=" M-4.514999866485596,-4.511000156402588 C-4.514999866485596,-4.511000156402588 4.514999866485596,-4.511000156402588 4.514999866485596,-4.511000156402588 C4.514999866485596,-4.511000156402588 4.514999866485596,4.511000156402588 4.514999866485596,4.511000156402588 C4.514999866485596,4.511000156402588 -4.514999866485596,4.511000156402588 -4.514999866485596,4.511000156402588 C-4.514999866485596,4.511000156402588 -4.514999866485596,-4.511000156402588 -4.514999866485596,-4.511000156402588z">
                                                                </path>
                                                            </g>
                                                        </g>
                                                        <g id="1147" style={{ display: 'block' }}
                                                            transform="matrix(-0.3572964370250702,1.966027021408081,-1.966027021408081,-0.3572964370250702,54.535179138183594,54.45508575439453)"
                                                            opacity="1">
                                                            <g opacity="1"
                                                                transform="matrix(1,0,0,1,-9.071000099182129,-15.666999816894531)">
                                                                <path fill="rgb(250,190,185)"
                                                                    fillOpacity="1"
                                                                    d=" M-6.1620001792907715,-1.6460000276565552 C-6.1620001792907715,-1.6460000276565552 1.6469999551773071,-6.1570000648498535 1.6469999551773071,-6.1570000648498535 C1.6469999551773071,-6.1570000648498535 6.1620001792907715,1.6460000276565552 6.1620001792907715,1.6460000276565552 C6.1620001792907715,1.6460000276565552 -1.6469999551773071,6.1570000648498535 -1.6469999551773071,6.1570000648498535 C-1.6469999551773071,6.1570000648498535 -6.1620001792907715,-1.6460000276565552 -6.1620001792907715,-1.6460000276565552z">
                                                                </path>
                                                            </g>
                                                        </g>
                                                        <g id="1146" style={{ display: 'block' }}
                                                            transform="matrix(-0.3572964370250702,1.966027021408081,-1.966027021408081,-0.3572964370250702,54.53444290161133,54.455047607421875)"
                                                            opacity="1">
                                                            <g opacity="1"
                                                                transform="matrix(1,0,0,1,0.019999999552965164,0)">
                                                                <path fill="rgb(255,94,69)" fillOpacity="1"
                                                                    d=" M-6.751999855041504,-3.9019999504089355 C-6.751999855041504,-3.9019999504089355 0,-7.802999973297119 0,-7.802999973297119 C0,-7.802999973297119 6.751999855041504,-3.9019999504089355 6.751999855041504,-3.9019999504089355 C6.751999855041504,-3.9019999504089355 6.751999855041504,3.9019999504089355 6.751999855041504,3.9019999504089355 C6.751999855041504,3.9019999504089355 0,7.802999973297119 0,7.802999973297119 C0,7.802999973297119 -6.751999855041504,3.9019999504089355 -6.751999855041504,3.9019999504089355 C-6.751999855041504,3.9019999504089355 -6.751999855041504,-3.9019999504089355 -6.751999855041504,-3.9019999504089355z">
                                                                </path>
                                                            </g>
                                                        </g>
                                                        <g id="1145" style={{ display: 'block' }}
                                                            transform="matrix(-0.3572964370250702,1.966027021408081,-1.966027021408081,-0.3572964370250702,54.5352783203125,54.453243255615234)"
                                                            opacity="1">
                                                            <g opacity="1"
                                                                transform="matrix(1,0,0,1,18.142000198364258,-11.581999778747559)">
                                                                <path fill="rgb(255,94,69)" fillOpacity="1"
                                                                    d=" M3.884999990463257,3.372999906539917 C3.884999990463257,3.372999906539917 -3.884999990463257,3.372999906539917 -3.884999990463257,3.372999906539917 C-3.884999990463257,3.372999906539917 -0.019999999552965164,-3.372999906539917 -0.019999999552965164,-3.372999906539917 C-0.019999999552965164,-3.372999906539917 3.884999990463257,3.372999906539917 3.884999990463257,3.372999906539917z">
                                                                </path>
                                                            </g>
                                                        </g>
                                                        <g id="1144" style={{ display: 'block' }}
                                                            transform="matrix(-0.3572964370250702,1.966027021408081,-1.966027021408081,-0.3572964370250702,54.53501510620117,54.45424270629883)"
                                                            opacity="1">
                                                            <g opacity="1"
                                                                transform="matrix(1,0,0,1,18.16200065612793,11.625)">
                                                                <path fill="rgb(255,94,69)" fillOpacity="1"
                                                                    d=" M0,3.372999906539917 C0,3.372999906539917 -3.9049999713897705,-3.372999906539917 -3.9049999713897705,-3.372999906539917 C-3.9049999713897705,-3.372999906539917 3.9049999713897705,-3.372999906539917 3.9049999713897705,-3.372999906539917 C3.9049999713897705,-3.372999906539917 0,3.372999906539917 0,3.372999906539917z">
                                                                </path>
                                                            </g>
                                                        </g>
                                                        <g id="1143" style={{ display: 'block' }}
                                                            transform="matrix(-0.3572964370250702,1.966027021408081,-1.966027021408081,-0.3572964370250702,54.53459167480469,54.45402145385742)"
                                                            opacity="1">
                                                            <g opacity="1"
                                                                transform="matrix(1,0,0,1,0,19.792999267578125)">
                                                                <path fill="rgb(255,94,69)" fillOpacity="1"
                                                                    d=" M3.884999990463257,3.372999906539917 C3.884999990463257,3.372999906539917 -3.884999990463257,3.372999906539917 -3.884999990463257,3.372999906539917 C-3.884999990463257,3.372999906539917 -0.019999999552965164,-3.372999906539917 -0.019999999552965164,-3.372999906539917 C-0.019999999552965164,-3.372999906539917 3.884999990463257,3.372999906539917 3.884999990463257,3.372999906539917z">
                                                                </path>
                                                            </g>
                                                        </g>
                                                        <g id="1142" style={{ display: 'block' }}
                                                            transform="matrix(-0.3572964370250702,1.966027021408081,-1.966027021408081,-0.3572964370250702,54.535057067871094,54.45402908325195)"
                                                            opacity="1">
                                                            <g opacity="1"
                                                                transform="matrix(1,0,0,1,-18.121000289916992,11.625)">
                                                                <path fill="rgb(255,94,69)" fillOpacity="1"
                                                                    d=" M0,3.372999906539917 C0,3.372999906539917 -3.9049999713897705,-3.372999906539917 -3.9049999713897705,-3.372999906539917 C-3.9049999713897705,-3.372999906539917 3.9049999713897705,-3.372999906539917 3.9049999713897705,-3.372999906539917 C3.9049999713897705,-3.372999906539917 0,3.372999906539917 0,3.372999906539917z">
                                                                </path>
                                                            </g>
                                                        </g>
                                                        <g id="1141" style={{ display: 'block' }}
                                                            transform="matrix(-0.3572964370250702,1.966027021408081,-1.966027021408081,-0.3572964370250702,54.53496170043945,54.45499038696289)"
                                                            opacity="1">
                                                            <g opacity="1"
                                                                transform="matrix(1,0,0,1,-18.142000198364258,-11.581999778747559)">
                                                                <path fill="rgb(255,94,69)" fillOpacity="1"
                                                                    d=" M3.884999990463257,3.372999906539917 C3.884999990463257,3.372999906539917 -3.884999990463257,3.372999906539917 -3.884999990463257,3.372999906539917 C-3.884999990463257,3.372999906539917 -0.019999999552965164,-3.372999906539917 -0.019999999552965164,-3.372999906539917 C-0.019999999552965164,-3.372999906539917 3.884999990463257,3.372999906539917 3.884999990463257,3.372999906539917z">
                                                                </path>
                                                            </g>
                                                        </g>
                                                        <g id="1140" style={{ display: 'block' }}
                                                            transform="matrix(-0.3572964370250702,1.966027021408081,-1.966027021408081,-0.3572964370250702,54.53447723388672,54.45505142211914)"
                                                            opacity="1">
                                                            <g opacity="1"
                                                                transform="matrix(1,0,0,1,0.019999999552965164,-19.792999267578125)">
                                                                <path fill="rgb(255,94,69)" fillOpacity="1"
                                                                    d=" M0,3.372999906539917 C0,3.372999906539917 -3.9049999713897705,-3.372999906539917 -3.9049999713897705,-3.372999906539917 C-3.9049999713897705,-3.372999906539917 3.9049999713897705,-3.372999906539917 3.9049999713897705,-3.372999906539917 C3.9049999713897705,-3.372999906539917 0,3.372999906539917 0,3.372999906539917z">
                                                                </path>
                                                            </g>
                                                        </g>
                                                    </g>
                                                    <g id="2180" clip-path="url(#__lottie_element_155)"
                                                        style={{ display: 'block' }}
                                                        transform="matrix(0.7994480729103088,0,0,0.7994480729103088,97.86311340332031,43.56211853027344)"
                                                        opacity="1">
                                                        <g id="2154"
                                                            transform="matrix(1,0,0,1,161.9810028076172,157.80799865722656)"
                                                            opacity="1" style={{ display: 'block' }}>
                                                            <g opacity="1"
                                                                transform="matrix(1,0,0,1,1.1779999732971191,2.384000062942505)">
                                                                <path fill="rgb(255,255,255)"
                                                                    fillOpacity="1"
                                                                    d=" M154.41050720214844,-142.11700439453125 C154.41050720214844,-142.11700439453125 154.41050720214844,142.11700439453125 154.41050720214844,142.11700439453125 C154.41050720214844,147.63600158691406 149.92950439453125,152.11700439453125 144.41050720214844,152.11700439453125 C144.41050720214844,152.11700439453125 -144.41050720214844,152.11700439453125 -144.41050720214844,152.11700439453125 C-149.92950439453125,152.11700439453125 -154.41050720214844,147.63600158691406 -154.41050720214844,142.11700439453125 C-154.41050720214844,142.11700439453125 -154.41050720214844,-142.11700439453125 -154.41050720214844,-142.11700439453125 C-154.41050720214844,-147.63600158691406 -149.92950439453125,-152.11700439453125 -144.41050720214844,-152.11700439453125 C-144.41050720214844,-152.11700439453125 144.41050720214844,-152.11700439453125 144.41050720214844,-152.11700439453125 C149.92950439453125,-152.11700439453125 154.41050720214844,-147.63600158691406 154.41050720214844,-142.11700439453125z">
                                                                </path>
                                                                <path strokeLinecap="butt"
                                                                    strokeLinejoin="miter" fillOpacity="0"
                                                                    strokeMiterlimit="4"
                                                                    stroke="rgb(228,233,241)"
                                                                    strokeOpacity="1" strokeWidth="1"
                                                                    d=" M154.41050720214844,-142.11700439453125 C154.41050720214844,-142.11700439453125 154.41050720214844,142.11700439453125 154.41050720214844,142.11700439453125 C154.41050720214844,147.63600158691406 149.92950439453125,152.11700439453125 144.41050720214844,152.11700439453125 C144.41050720214844,152.11700439453125 -144.41050720214844,152.11700439453125 -144.41050720214844,152.11700439453125 C-149.92950439453125,152.11700439453125 -154.41050720214844,147.63600158691406 -154.41050720214844,142.11700439453125 C-154.41050720214844,142.11700439453125 -154.41050720214844,-142.11700439453125 -154.41050720214844,-142.11700439453125 C-154.41050720214844,-147.63600158691406 -149.92950439453125,-152.11700439453125 -144.41050720214844,-152.11700439453125 C-144.41050720214844,-152.11700439453125 144.41050720214844,-152.11700439453125 144.41050720214844,-152.11700439453125 C149.92950439453125,-152.11700439453125 154.41050720214844,-147.63600158691406 154.41050720214844,-142.11700439453125z">
                                                                </path>
                                                            </g>
                                                        </g>
                                                        <g id="2088" style={{ display: 'block' }}
                                                            transform="matrix(1,0,0,1,164,160.5)"
                                                            opacity="1">
                                                            <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                                                                <g opacity="1"
                                                                    transform="matrix(1,0,0,1,0,0)">
                                                                    <g opacity="1"
                                                                        transform="matrix(1,0,0,1,-383.38397216796875,-116.21699523925781)">
                                                                        <g opacity="1"
                                                                            transform="matrix(1,0,0,1,0,0)">
                                                                            <g opacity="1"
                                                                                transform="matrix(1,0,0,1,452.82598876953125,58.93299865722656)">
                                                                                <path
                                                                                    fill="rgb(185,232,217)"
                                                                                    fillOpacity="1"
                                                                                    d=" M17.74650001525879,-6.75 C17.74650001525879,-6.75 17.74650001525879,6.75 17.74650001525879,6.75 C17.74650001525879,7.9216837882995605 16.795183181762695,8.873000144958496 15.623499870300293,8.873000144958496 C15.623499870300293,8.873000144958496 -15.623499870300293,8.873000144958496 -15.623499870300293,8.873000144958496 C-16.795183181762695,8.873000144958496 -17.74650001525879,7.9216837882995605 -17.74650001525879,6.75 C-17.74650001525879,6.75 -17.74650001525879,-6.75 -17.74650001525879,-6.75 C-17.74650001525879,-7.9216837882995605 -16.795183181762695,-8.873000144958496 -15.623499870300293,-8.873000144958496 C-15.623499870300293,-8.873000144958496 15.623499870300293,-8.873000144958496 15.623499870300293,-8.873000144958496 C16.795183181762695,-8.873000144958496 17.74650001525879,-7.9216837882995605 17.74650001525879,-6.75z">
                                                                                </path>
                                                                            </g>
                                                                            <g opacity="1"
                                                                                transform="matrix(1,0,0,1,493.9649963378906,58.93299865722656)">
                                                                                <path
                                                                                    fill="rgb(250,190,185)"
                                                                                    fillOpacity="1"
                                                                                    d=" M17.74650001525879,-6.75 C17.74650001525879,-6.75 17.74650001525879,6.75 17.74650001525879,6.75 C17.74650001525879,7.9216837882995605 16.795183181762695,8.873000144958496 15.623499870300293,8.873000144958496 C15.623499870300293,8.873000144958496 -15.623499870300293,8.873000144958496 -15.623499870300293,8.873000144958496 C-16.795183181762695,8.873000144958496 -17.74650001525879,7.9216837882995605 -17.74650001525879,6.75 C-17.74650001525879,6.75 -17.74650001525879,-6.75 -17.74650001525879,-6.75 C-17.74650001525879,-7.9216837882995605 -16.795183181762695,-8.873000144958496 -15.623499870300293,-8.873000144958496 C-15.623499870300293,-8.873000144958496 15.623499870300293,-8.873000144958496 15.623499870300293,-8.873000144958496 C16.795183181762695,-8.873000144958496 17.74650001525879,-7.9216837882995605 17.74650001525879,-6.75z">
                                                                                </path>
                                                                            </g>
                                                                        </g>
                                                                    </g>
                                                                </g>
                                                            </g>
                                                        </g>
                                                        <g id="2089" style={{ display: 'block' }}
                                                            transform="matrix(1,0,0,1,267.06298828125,103.88600158691406)"
                                                            opacity="1">
                                                            <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                                                                <path fill="rgb(189,42,37)" fillOpacity="1"
                                                                    d=" M5.243500232696533,0 C5.243500232696533,0 5.243500232696533,0 5.243500232696533,0 C5.243500232696533,1.3355979919433594 4.159098148345947,2.4200000762939453 2.823500156402588,2.4200000762939453 C2.823500156402588,2.4200000762939453 -2.823500156402588,2.4200000762939453 -2.823500156402588,2.4200000762939453 C-4.159098148345947,2.4200000762939453 -5.243500232696533,1.3355979919433594 -5.243500232696533,0 C-5.243500232696533,0 -5.243500232696533,0 -5.243500232696533,0 C-5.243500232696533,-1.3355979919433594 -4.159098148345947,-2.4200000762939453 -2.823500156402588,-2.4200000762939453 C-2.823500156402588,-2.4200000762939453 2.823500156402588,-2.4200000762939453 2.823500156402588,-2.4200000762939453 C4.159098148345947,-2.4200000762939453 5.243500232696533,-1.3355979919433594 5.243500232696533,0z">
                                                                </path>
                                                            </g>
                                                        </g>
                                                        <g id="2090" style={{ display: 'block' }}
                                                            transform="matrix(1,0,0,1,283.7030029296875,103.69000244140625)"
                                                            opacity="1">
                                                            <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                                                                <path fill="rgb(189,42,37)" fillOpacity="1"
                                                                    d=" M-2.2739999294281006,-1.4780000448226929 C-2.2739999294281006,-1.4780000448226929 -0.7960000038146973,0 -0.7960000038146973,0 C-0.7960000038146973,0 -2.2739999294281006,1.4780000448226929 -2.2739999294281006,1.4780000448226929 C-2.2739999294281006,1.4780000448226929 -1.4780000448226929,2.2739999294281006 -1.4780000448226929,2.2739999294281006 C-1.4780000448226929,2.2739999294281006 0,0.7960000038146973 0,0.7960000038146973 C0,0.7960000038146973 1.4780000448226929,2.2739999294281006 1.4780000448226929,2.2739999294281006 C1.4780000448226929,2.2739999294281006 2.2739999294281006,1.4780000448226929 2.2739999294281006,1.4780000448226929 C2.2739999294281006,1.4780000448226929 0.7960000038146973,0 0.7960000038146973,0 C0.7960000038146973,0 2.2739999294281006,-1.4780000448226929 2.2739999294281006,-1.4780000448226929 C2.2739999294281006,-1.4780000448226929 1.4780000448226929,-2.2739999294281006 1.4780000448226929,-2.2739999294281006 C1.4780000448226929,-2.2739999294281006 0,-0.7960000038146973 0,-0.7960000038146973 C0,-0.7960000038146973 -1.4780000448226929,-2.2739999294281006 -1.4780000448226929,-2.2739999294281006 C-1.4780000448226929,-2.2739999294281006 -2.2739999294281006,-1.4780000448226929 -2.2739999294281006,-1.4780000448226929z M0,-6.001999855041504 C-3.315000057220459,-6.001999855041504 -6.001999855041504,-3.315000057220459 -6.001999855041504,0 C-6.001999855041504,3.315000057220459 -3.315000057220459,6.001999855041504 0,6.001999855041504 C3.315000057220459,6.001999855041504 6.001999855041504,3.315000057220459 6.001999855041504,0 C6.001999855041504,-3.315000057220459 3.315000057220459,-6.001999855041504 0,-6.001999855041504z M-4.876999855041504,0 C-4.876999855041504,-2.693000078201294 -2.693000078201294,-4.876999855041504 0,-4.876999855041504 C2.693000078201294,-4.876999855041504 4.876999855041504,-2.693000078201294 4.876999855041504,0 C4.876999855041504,2.693000078201294 2.693000078201294,4.876999855041504 0,4.876999855041504 C-2.693000078201294,4.876999855041504 -4.876999855041504,2.693000078201294 -4.876999855041504,0z">
                                                                </path>
                                                            </g>
                                                        </g>
                                                        <g id="2091" style={{ display: 'block' }}
                                                            transform="matrix(1,0,0,1,225.9219970703125,103.88600158691406)"
                                                            opacity="1">
                                                            <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                                                                <path fill="rgb(0,134,92)" fillOpacity="1"
                                                                    d=" M5.243500232696533,0 C5.243500232696533,0 5.243500232696533,0 5.243500232696533,0 C5.243500232696533,1.3355979919433594 4.159098148345947,2.4200000762939453 2.823500156402588,2.4200000762939453 C2.823500156402588,2.4200000762939453 -2.823500156402588,2.4200000762939453 -2.823500156402588,2.4200000762939453 C-4.159098148345947,2.4200000762939453 -5.243500232696533,1.3355979919433594 -5.243500232696533,0 C-5.243500232696533,0 -5.243500232696533,0 -5.243500232696533,0 C-5.243500232696533,-1.3355979919433594 -4.159098148345947,-2.4200000762939453 -2.823500156402588,-2.4200000762939453 C-2.823500156402588,-2.4200000762939453 2.823500156402588,-2.4200000762939453 2.823500156402588,-2.4200000762939453 C4.159098148345947,-2.4200000762939453 5.243500232696533,-1.3355979919433594 5.243500232696533,0z">
                                                                </path>
                                                            </g>
                                                        </g>
                                                        <g id="2092" style={{ display: 'block' }}
                                                            transform="matrix(1,0,0,1,242.56500244140625,103.69000244140625)"
                                                            opacity="1">
                                                            <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                                                                <path fill="rgb(0,134,92)" fillOpacity="1"
                                                                    d=" M1.8530000448226929,-1.8980000019073486 C1.8530000448226929,-1.8980000019073486 2.6489999294281006,-1.1030000448226929 2.6489999294281006,-1.1030000448226929 C2.6489999294281006,-1.1030000448226929 -0.35199999809265137,1.8980000019073486 -0.35199999809265137,1.8980000019073486 C-0.35199999809265137,1.8980000019073486 -0.75,2.2960000038146973 -0.75,2.2960000038146973 C-0.75,2.2960000038146973 -1.1480000019073486,1.8980000019073486 -1.1480000019073486,1.8980000019073486 C-1.1480000019073486,1.8980000019073486 -2.6489999294281006,0.39800000190734863 -2.6489999294281006,0.39800000190734863 C-2.6489999294281006,0.39800000190734863 -1.8530000448226929,-0.39800000190734863 -1.8530000448226929,-0.39800000190734863 C-1.8530000448226929,-0.39800000190734863 -0.75,0.7049999833106995 -0.75,0.7049999833106995 C-0.75,0.7049999833106995 1.8530000448226929,-1.8980000019073486 1.8530000448226929,-1.8980000019073486z M-6.001999855041504,0 C-6.001999855041504,-3.315000057220459 -3.315000057220459,-6.001999855041504 0,-6.001999855041504 C3.315000057220459,-6.001999855041504 6.001999855041504,-3.315000057220459 6.001999855041504,0 C6.001999855041504,3.315000057220459 3.315000057220459,6.001999855041504 0,6.001999855041504 C-3.315000057220459,6.001999855041504 -6.001999855041504,3.315000057220459 -6.001999855041504,0z M0,-4.876999855041504 C-2.693000078201294,-4.876999855041504 -4.876999855041504,-2.693000078201294 -4.876999855041504,0 C-4.876999855041504,2.693000078201294 -2.693000078201294,4.876999855041504 0,4.876999855041504 C2.693000078201294,4.876999855041504 4.876999855041504,2.693000078201294 4.876999855041504,0 C4.876999855041504,-2.693000078201294 2.693000078201294,-4.876999855041504 0,-4.876999855041504z">
                                                                </path>
                                                            </g>
                                                        </g>
                                                        <g id="2093" style={{ display: 'block' }}
                                                            transform="matrix(1,0,0,1,164,230.2679901123047)"
                                                            opacity="1">
                                                            <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                                                                <g opacity="1"
                                                                    transform="matrix(1,0,0,1,0,0)">
                                                                    <g opacity="1"
                                                                        transform="matrix(1,0,0,1,-383.38397216796875,-116.21699523925781)">
                                                                        <g opacity="1"
                                                                            transform="matrix(1,0,0,1,0,0)">
                                                                            <g opacity="1"
                                                                                transform="matrix(1,0,0,1,452.82598876953125,58.93299865722656)">
                                                                                <path
                                                                                    fill="rgb(185,232,217)"
                                                                                    fillOpacity="1"
                                                                                    d=" M17.74650001525879,-6.75 C17.74650001525879,-6.75 17.74650001525879,6.75 17.74650001525879,6.75 C17.74650001525879,7.9216837882995605 16.795183181762695,8.873000144958496 15.623499870300293,8.873000144958496 C15.623499870300293,8.873000144958496 -15.623499870300293,8.873000144958496 -15.623499870300293,8.873000144958496 C-16.795183181762695,8.873000144958496 -17.74650001525879,7.9216837882995605 -17.74650001525879,6.75 C-17.74650001525879,6.75 -17.74650001525879,-6.75 -17.74650001525879,-6.75 C-17.74650001525879,-7.9216837882995605 -16.795183181762695,-8.873000144958496 -15.623499870300293,-8.873000144958496 C-15.623499870300293,-8.873000144958496 15.623499870300293,-8.873000144958496 15.623499870300293,-8.873000144958496 C16.795183181762695,-8.873000144958496 17.74650001525879,-7.9216837882995605 17.74650001525879,-6.75z">
                                                                                </path>
                                                                            </g>
                                                                            <g opacity="1"
                                                                                transform="matrix(1,0,0,1,493.9649963378906,58.93299865722656)">
                                                                                <path
                                                                                    fill="rgb(250,190,185)"
                                                                                    fillOpacity="1"
                                                                                    d=" M17.74650001525879,-6.75 C17.74650001525879,-6.75 17.74650001525879,6.75 17.74650001525879,6.75 C17.74650001525879,7.9216837882995605 16.795183181762695,8.873000144958496 15.623499870300293,8.873000144958496 C15.623499870300293,8.873000144958496 -15.623499870300293,8.873000144958496 -15.623499870300293,8.873000144958496 C-16.795183181762695,8.873000144958496 -17.74650001525879,7.9216837882995605 -17.74650001525879,6.75 C-17.74650001525879,6.75 -17.74650001525879,-6.75 -17.74650001525879,-6.75 C-17.74650001525879,-7.9216837882995605 -16.795183181762695,-8.873000144958496 -15.623499870300293,-8.873000144958496 C-15.623499870300293,-8.873000144958496 15.623499870300293,-8.873000144958496 15.623499870300293,-8.873000144958496 C16.795183181762695,-8.873000144958496 17.74650001525879,-7.9216837882995605 17.74650001525879,-6.75z">
                                                                                </path>
                                                                            </g>
                                                                        </g>
                                                                    </g>
                                                                </g>
                                                            </g>
                                                        </g>
                                                        <g id="2094" style={{ display: 'block' }}
                                                            transform="matrix(1,0,0,1,267.06298828125,172.94898986816406)"
                                                            opacity="1">
                                                            <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                                                                <path fill="rgb(189,42,37)" fillOpacity="1"
                                                                    d=" M5.243500232696533,0 C5.243500232696533,0 5.243500232696533,0 5.243500232696533,0 C5.243500232696533,1.3355979919433594 4.159098148345947,2.4200000762939453 2.823500156402588,2.4200000762939453 C2.823500156402588,2.4200000762939453 -2.823500156402588,2.4200000762939453 -2.823500156402588,2.4200000762939453 C-4.159098148345947,2.4200000762939453 -5.243500232696533,1.3355979919433594 -5.243500232696533,0 C-5.243500232696533,0 -5.243500232696533,0 -5.243500232696533,0 C-5.243500232696533,-1.3355979919433594 -4.159098148345947,-2.4200000762939453 -2.823500156402588,-2.4200000762939453 C-2.823500156402588,-2.4200000762939453 2.823500156402588,-2.4200000762939453 2.823500156402588,-2.4200000762939453 C4.159098148345947,-2.4200000762939453 5.243500232696533,-1.3355979919433594 5.243500232696533,0z">
                                                                </path>
                                                            </g>
                                                        </g>
                                                        <g id="2095" style={{ display: 'block' }}
                                                            transform="matrix(1,0,0,1,283.7030029296875,172.75399780273438)"
                                                            opacity="1">
                                                            <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                                                                <path fill="rgb(189,42,37)" fillOpacity="1"
                                                                    d=" M-2.2739999294281006,-1.4780000448226929 C-2.2739999294281006,-1.4780000448226929 -0.7960000038146973,0 -0.7960000038146973,0 C-0.7960000038146973,0 -2.2739999294281006,1.4780000448226929 -2.2739999294281006,1.4780000448226929 C-2.2739999294281006,1.4780000448226929 -1.4780000448226929,2.2739999294281006 -1.4780000448226929,2.2739999294281006 C-1.4780000448226929,2.2739999294281006 0,0.7960000038146973 0,0.7960000038146973 C0,0.7960000038146973 1.4780000448226929,2.2739999294281006 1.4780000448226929,2.2739999294281006 C1.4780000448226929,2.2739999294281006 2.2739999294281006,1.4780000448226929 2.2739999294281006,1.4780000448226929 C2.2739999294281006,1.4780000448226929 0.7960000038146973,0 0.7960000038146973,0 C0.7960000038146973,0 2.2739999294281006,-1.4780000448226929 2.2739999294281006,-1.4780000448226929 C2.2739999294281006,-1.4780000448226929 1.4780000448226929,-2.2739999294281006 1.4780000448226929,-2.2739999294281006 C1.4780000448226929,-2.2739999294281006 0,-0.7960000038146973 0,-0.7960000038146973 C0,-0.7960000038146973 -1.4780000448226929,-2.2739999294281006 -1.4780000448226929,-2.2739999294281006 C-1.4780000448226929,-2.2739999294281006 -2.2739999294281006,-1.4780000448226929 -2.2739999294281006,-1.4780000448226929z M0,-6.001999855041504 C-3.315000057220459,-6.001999855041504 -6.001999855041504,-3.315000057220459 -6.001999855041504,0 C-6.001999855041504,3.315000057220459 -3.315000057220459,6.001999855041504 0,6.001999855041504 C3.315000057220459,6.001999855041504 6.001999855041504,3.315000057220459 6.001999855041504,0 C6.001999855041504,-3.315000057220459 3.315000057220459,-6.001999855041504 0,-6.001999855041504z M-4.876999855041504,0 C-4.876999855041504,-2.693000078201294 -2.693000078201294,-4.876999855041504 0,-4.876999855041504 C2.693000078201294,-4.876999855041504 4.876999855041504,-2.693000078201294 4.876999855041504,0 C4.876999855041504,2.693000078201294 2.693000078201294,4.876999855041504 0,4.876999855041504 C-2.693000078201294,4.876999855041504 -4.876999855041504,2.693000078201294 -4.876999855041504,0z">
                                                                </path>
                                                            </g>
                                                        </g>
                                                        <g id="2096" style={{ display: 'block' }}
                                                            transform="matrix(1,0,0,1,225.9219970703125,172.94898986816406)"
                                                            opacity="1">
                                                            <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                                                                <path fill="rgb(0,134,92)" fillOpacity="1"
                                                                    d=" M5.243500232696533,0 C5.243500232696533,0 5.243500232696533,0 5.243500232696533,0 C5.243500232696533,1.3355979919433594 4.159098148345947,2.4200000762939453 2.823500156402588,2.4200000762939453 C2.823500156402588,2.4200000762939453 -2.823500156402588,2.4200000762939453 -2.823500156402588,2.4200000762939453 C-4.159098148345947,2.4200000762939453 -5.243500232696533,1.3355979919433594 -5.243500232696533,0 C-5.243500232696533,0 -5.243500232696533,0 -5.243500232696533,0 C-5.243500232696533,-1.3355979919433594 -4.159098148345947,-2.4200000762939453 -2.823500156402588,-2.4200000762939453 C-2.823500156402588,-2.4200000762939453 2.823500156402588,-2.4200000762939453 2.823500156402588,-2.4200000762939453 C4.159098148345947,-2.4200000762939453 5.243500232696533,-1.3355979919433594 5.243500232696533,0z">
                                                                </path>
                                                            </g>
                                                        </g>
                                                        <g id="2097" style={{ display: 'block' }}
                                                            transform="matrix(1,0,0,1,242.56500244140625,172.75399780273438)"
                                                            opacity="1">
                                                            <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                                                                <path fill="rgb(0,134,92)" fillOpacity="1"
                                                                    d=" M1.8530000448226929,-1.8980000019073486 C1.8530000448226929,-1.8980000019073486 2.6489999294281006,-1.1030000448226929 2.6489999294281006,-1.1030000448226929 C2.6489999294281006,-1.1030000448226929 -0.35199999809265137,1.8980000019073486 -0.35199999809265137,1.8980000019073486 C-0.35199999809265137,1.8980000019073486 -0.75,2.2960000038146973 -0.75,2.2960000038146973 C-0.75,2.2960000038146973 -1.1480000019073486,1.8980000019073486 -1.1480000019073486,1.8980000019073486 C-1.1480000019073486,1.8980000019073486 -2.6489999294281006,0.39800000190734863 -2.6489999294281006,0.39800000190734863 C-2.6489999294281006,0.39800000190734863 -1.8530000448226929,-0.39800000190734863 -1.8530000448226929,-0.39800000190734863 C-1.8530000448226929,-0.39800000190734863 -0.75,0.7049999833106995 -0.75,0.7049999833106995 C-0.75,0.7049999833106995 1.8530000448226929,-1.8980000019073486 1.8530000448226929,-1.8980000019073486z M-6.001999855041504,0 C-6.001999855041504,-3.315000057220459 -3.315000057220459,-6.001999855041504 0,-6.001999855041504 C3.315000057220459,-6.001999855041504 6.001999855041504,-3.315000057220459 6.001999855041504,0 C6.001999855041504,3.315000057220459 3.315000057220459,6.001999855041504 0,6.001999855041504 C-3.315000057220459,6.001999855041504 -6.001999855041504,3.315000057220459 -6.001999855041504,0z M0,-4.876999855041504 C-2.693000078201294,-4.876999855041504 -4.876999855041504,-2.693000078201294 -4.876999855041504,0 C-4.876999855041504,2.693000078201294 -2.693000078201294,4.876999855041504 0,4.876999855041504 C2.693000078201294,4.876999855041504 4.876999855041504,2.693000078201294 4.876999855041504,0 C4.876999855041504,-2.693000078201294 2.693000078201294,-4.876999855041504 0,-4.876999855041504z">
                                                                </path>
                                                            </g>
                                                        </g>
                                                        <g id="2098" style={{ display: 'block' }}
                                                            transform="matrix(1,0,0,1,164.68699645996094,295.9120178222656)"
                                                            opacity="1">
                                                            <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                                                                <g opacity="1"
                                                                    transform="matrix(1,0,0,1,0,0)">
                                                                    <g opacity="1"
                                                                        transform="matrix(1,0,0,1,-383.38397216796875,-116.21699523925781)">
                                                                        <g opacity="1"
                                                                            transform="matrix(1,0,0,1,0,0)">
                                                                            <g opacity="1"
                                                                                transform="matrix(1,0,0,1,452.82598876953125,58.93299865722656)">
                                                                                <path
                                                                                    fill="rgb(185,232,217)"
                                                                                    fillOpacity="1"
                                                                                    d=" M17.74650001525879,-6.75 C17.74650001525879,-6.75 17.74650001525879,6.75 17.74650001525879,6.75 C17.74650001525879,7.9216837882995605 16.795183181762695,8.873000144958496 15.623499870300293,8.873000144958496 C15.623499870300293,8.873000144958496 -15.623499870300293,8.873000144958496 -15.623499870300293,8.873000144958496 C-16.795183181762695,8.873000144958496 -17.74650001525879,7.9216837882995605 -17.74650001525879,6.75 C-17.74650001525879,6.75 -17.74650001525879,-6.75 -17.74650001525879,-6.75 C-17.74650001525879,-7.9216837882995605 -16.795183181762695,-8.873000144958496 -15.623499870300293,-8.873000144958496 C-15.623499870300293,-8.873000144958496 15.623499870300293,-8.873000144958496 15.623499870300293,-8.873000144958496 C16.795183181762695,-8.873000144958496 17.74650001525879,-7.9216837882995605 17.74650001525879,-6.75z">
                                                                                </path>
                                                                            </g>
                                                                            <g opacity="1"
                                                                                transform="matrix(1,0,0,1,493.9649963378906,58.93299865722656)">
                                                                                <path
                                                                                    fill="rgb(250,190,185)"
                                                                                    fillOpacity="1"
                                                                                    d=" M17.74650001525879,-6.75 C17.74650001525879,-6.75 17.74650001525879,6.75 17.74650001525879,6.75 C17.74650001525879,7.9216837882995605 16.795183181762695,8.873000144958496 15.623499870300293,8.873000144958496 C15.623499870300293,8.873000144958496 -15.623499870300293,8.873000144958496 -15.623499870300293,8.873000144958496 C-16.795183181762695,8.873000144958496 -17.74650001525879,7.9216837882995605 -17.74650001525879,6.75 C-17.74650001525879,6.75 -17.74650001525879,-6.75 -17.74650001525879,-6.75 C-17.74650001525879,-7.9216837882995605 -16.795183181762695,-8.873000144958496 -15.623499870300293,-8.873000144958496 C-15.623499870300293,-8.873000144958496 15.623499870300293,-8.873000144958496 15.623499870300293,-8.873000144958496 C16.795183181762695,-8.873000144958496 17.74650001525879,-7.9216837882995605 17.74650001525879,-6.75z">
                                                                                </path>
                                                                            </g>
                                                                        </g>
                                                                    </g>
                                                                </g>
                                                            </g>
                                                        </g>
                                                        <g id="2099" style={{ display: 'block' }}
                                                            transform="matrix(1,0,0,1,267.06201171875,239.17501831054688)"
                                                            opacity="1">
                                                            <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                                                                <path fill="rgb(189,42,37)" fillOpacity="1"
                                                                    d=" M5.243500232696533,0 C5.243500232696533,0 5.243500232696533,0 5.243500232696533,0 C5.243500232696533,1.3355979919433594 4.159098148345947,2.4200000762939453 2.823500156402588,2.4200000762939453 C2.823500156402588,2.4200000762939453 -2.823500156402588,2.4200000762939453 -2.823500156402588,2.4200000762939453 C-4.159098148345947,2.4200000762939453 -5.243500232696533,1.3355979919433594 -5.243500232696533,0 C-5.243500232696533,0 -5.243500232696533,0 -5.243500232696533,0 C-5.243500232696533,-1.3355979919433594 -4.159098148345947,-2.4200000762939453 -2.823500156402588,-2.4200000762939453 C-2.823500156402588,-2.4200000762939453 2.823500156402588,-2.4200000762939453 2.823500156402588,-2.4200000762939453 C4.159098148345947,-2.4200000762939453 5.243500232696533,-1.3355979919433594 5.243500232696533,0z">
                                                                </path>
                                                            </g>
                                                        </g>
                                                        <g id="2100" style={{ display: 'block' }}
                                                            transform="matrix(1,0,0,1,283.7030029296875,238.98001098632812)"
                                                            opacity="1">
                                                            <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                                                                <path fill="rgb(189,42,37)" fillOpacity="1"
                                                                    d=" M-2.2739999294281006,-1.4780000448226929 C-2.2739999294281006,-1.4780000448226929 -0.7960000038146973,0 -0.7960000038146973,0 C-0.7960000038146973,0 -2.2739999294281006,1.4780000448226929 -2.2739999294281006,1.4780000448226929 C-2.2739999294281006,1.4780000448226929 -1.4780000448226929,2.2739999294281006 -1.4780000448226929,2.2739999294281006 C-1.4780000448226929,2.2739999294281006 0,0.7960000038146973 0,0.7960000038146973 C0,0.7960000038146973 1.4780000448226929,2.2739999294281006 1.4780000448226929,2.2739999294281006 C1.4780000448226929,2.2739999294281006 2.2739999294281006,1.4780000448226929 2.2739999294281006,1.4780000448226929 C2.2739999294281006,1.4780000448226929 0.7960000038146973,0 0.7960000038146973,0 C0.7960000038146973,0 2.2739999294281006,-1.4780000448226929 2.2739999294281006,-1.4780000448226929 C2.2739999294281006,-1.4780000448226929 1.4780000448226929,-2.2739999294281006 1.4780000448226929,-2.2739999294281006 C1.4780000448226929,-2.2739999294281006 0,-0.7960000038146973 0,-0.7960000038146973 C0,-0.7960000038146973 -1.4780000448226929,-2.2739999294281006 -1.4780000448226929,-2.2739999294281006 C-1.4780000448226929,-2.2739999294281006 -2.2739999294281006,-1.4780000448226929 -2.2739999294281006,-1.4780000448226929z M0,-6.001999855041504 C-3.315000057220459,-6.001999855041504 -6.001999855041504,-3.315000057220459 -6.001999855041504,0 C-6.001999855041504,3.315000057220459 -3.315000057220459,6.001999855041504 0,6.001999855041504 C3.315000057220459,6.001999855041504 6.001999855041504,3.315000057220459 6.001999855041504,0 C6.001999855041504,-3.315000057220459 3.315000057220459,-6.001999855041504 0,-6.001999855041504z M-4.876999855041504,0 C-4.876999855041504,-2.693000078201294 -2.693000078201294,-4.876999855041504 0,-4.876999855041504 C2.693000078201294,-4.876999855041504 4.876999855041504,-2.693000078201294 4.876999855041504,0 C4.876999855041504,2.693000078201294 2.693000078201294,4.876999855041504 0,4.876999855041504 C-2.693000078201294,4.876999855041504 -4.876999855041504,2.693000078201294 -4.876999855041504,0z">
                                                                </path>
                                                            </g>
                                                        </g>
                                                        <g id="2101" style={{ display: 'block' }}
                                                            transform="matrix(1,0,0,1,225.9219970703125,239.17501831054688)"
                                                            opacity="1">
                                                            <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                                                                <path fill="rgb(0,134,92)" fillOpacity="1"
                                                                    d=" M5.243500232696533,0 C5.243500232696533,0 5.243500232696533,0 5.243500232696533,0 C5.243500232696533,1.3355979919433594 4.159098148345947,2.4200000762939453 2.823500156402588,2.4200000762939453 C2.823500156402588,2.4200000762939453 -2.823500156402588,2.4200000762939453 -2.823500156402588,2.4200000762939453 C-4.159098148345947,2.4200000762939453 -5.243500232696533,1.3355979919433594 -5.243500232696533,0 C-5.243500232696533,0 -5.243500232696533,0 -5.243500232696533,0 C-5.243500232696533,-1.3355979919433594 -4.159098148345947,-2.4200000762939453 -2.823500156402588,-2.4200000762939453 C-2.823500156402588,-2.4200000762939453 2.823500156402588,-2.4200000762939453 2.823500156402588,-2.4200000762939453 C4.159098148345947,-2.4200000762939453 5.243500232696533,-1.3355979919433594 5.243500232696533,0z">
                                                                </path>
                                                            </g>
                                                        </g>
                                                        <g id="2102" style={{ display: 'block' }}
                                                            transform="matrix(1,0,0,1,242.56399536132812,238.98001098632812)"
                                                            opacity="1">
                                                            <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                                                                <path fill="rgb(0,134,92)" fillOpacity="1"
                                                                    d=" M1.8530000448226929,-1.8980000019073486 C1.8530000448226929,-1.8980000019073486 2.6489999294281006,-1.1030000448226929 2.6489999294281006,-1.1030000448226929 C2.6489999294281006,-1.1030000448226929 -0.35199999809265137,1.8980000019073486 -0.35199999809265137,1.8980000019073486 C-0.35199999809265137,1.8980000019073486 -0.75,2.2960000038146973 -0.75,2.2960000038146973 C-0.75,2.2960000038146973 -1.1480000019073486,1.8980000019073486 -1.1480000019073486,1.8980000019073486 C-1.1480000019073486,1.8980000019073486 -2.6489999294281006,0.39800000190734863 -2.6489999294281006,0.39800000190734863 C-2.6489999294281006,0.39800000190734863 -1.8530000448226929,-0.39800000190734863 -1.8530000448226929,-0.39800000190734863 C-1.8530000448226929,-0.39800000190734863 -0.75,0.7049999833106995 -0.75,0.7049999833106995 C-0.75,0.7049999833106995 1.8530000448226929,-1.8980000019073486 1.8530000448226929,-1.8980000019073486z M-6.001999855041504,0 C-6.001999855041504,-3.315000057220459 -3.315000057220459,-6.001999855041504 0,-6.001999855041504 C3.315000057220459,-6.001999855041504 6.001999855041504,-3.315000057220459 6.001999855041504,0 C6.001999855041504,3.315000057220459 3.315000057220459,6.001999855041504 0,6.001999855041504 C-3.315000057220459,6.001999855041504 -6.001999855041504,3.315000057220459 -6.001999855041504,0z M0,-4.876999855041504 C-2.693000078201294,-4.876999855041504 -4.876999855041504,-2.693000078201294 -4.876999855041504,0 C-4.876999855041504,2.693000078201294 -2.693000078201294,4.876999855041504 0,4.876999855041504 C2.693000078201294,4.876999855041504 4.876999855041504,2.693000078201294 4.876999855041504,0 C4.876999855041504,-2.693000078201294 2.693000078201294,-4.876999855041504 0,-4.876999855041504z">
                                                                </path>
                                                            </g>
                                                        </g>
                                                        <g id="2103"
                                                            transform="matrix(1,0,0,1,80.80500030517578,52.52299880981445)"
                                                            opacity="1" fill="rgb(27,49,57)" font-size="24"
                                                            font-family="DM Sans" font-style={{}}
                                                            font-weight="500" aria-data-label="Optimize"
                                                            style={{ display: 'block' }}>
                                                            <g strokeLinecap="butt" strokeLinejoin="round"
                                                                strokeMiterlimit="4"
                                                                transform="matrix(1,0,0,1,-50.316410064697266,4.32597017288208)"
                                                                opacity="1" style={{ display: 'inherit' }}>
                                                                <g>
                                                                    <g transform="matrix(1,0,0,1,0,0)"
                                                                        opacity="1" style={{ display: 'block' }}>
                                                                        <path
                                                                            d=" M9.46,-1.99 C10.61,-1.99 11.61,-2.25 12.47,-2.76 C13.32,-3.27 13.99,-4.01 14.47,-4.97 C14.95,-5.93 15.19,-7.07 15.19,-8.4 C15.19,-9.73 14.95,-10.87 14.47,-11.83 C13.99,-12.79 13.32,-13.53 12.47,-14.04 C11.61,-14.55 10.61,-14.81 9.46,-14.81 C8.3,-14.81 7.3,-14.55 6.43,-14.04 C5.57,-13.53 4.9,-12.79 4.43,-11.83 C3.96,-10.87 3.72,-9.73 3.72,-8.4 C3.72,-7.07 3.96,-5.93 4.43,-4.97 C4.9,-4.01 5.57,-3.27 6.43,-2.76 C7.3,-2.25 8.3,-1.99 9.46,-1.99 M9.46,0.29 C7.79,0.29 6.34,-0.08 5.09,-0.82 C3.84,-1.55 2.86,-2.57 2.16,-3.88 C1.46,-5.18 1.1,-6.69 1.1,-8.4 C1.1,-10.11 1.46,-11.62 2.16,-12.92 C2.86,-14.23 3.84,-15.25 5.09,-15.98 C6.34,-16.72 7.79,-17.09 9.46,-17.09 C11.12,-17.09 12.58,-16.72 13.82,-15.98 C15.07,-15.25 16.04,-14.23 16.74,-12.92 C17.44,-11.62 17.78,-10.11 17.78,-8.4 C17.78,-6.69 17.44,-5.18 16.74,-3.88 C16.04,-2.57 15.07,-1.55 13.82,-0.82 C12.58,-0.08 11.12,0.29 9.46,0.29">
                                                                        </path>
                                                                        <g opacity="1"
                                                                            transform="matrix(0.23999999463558197,0,0,0.23999999463558197,0,0)">
                                                                        </g>
                                                                    </g>
                                                                </g>
                                                            </g>
                                                            <g strokeLinecap="butt" strokeLinejoin="round"
                                                                strokeMiterlimit="4"
                                                                transform="matrix(1,0,0,1,-32.604408264160156,4.32597017288208)"
                                                                opacity="1" style={{ display: 'inherit' }}>
                                                                <g>
                                                                    <g transform="matrix(1,0,0,1,0,0)"
                                                                        opacity="1" style={{ display: 'block' }}>
                                                                        <path
                                                                            d=" M7.87,-1.92 C8.96,-1.92 9.86,-2.29 10.56,-3.04 C11.26,-3.78 11.62,-4.75 11.62,-5.95 C11.62,-6.74 11.46,-7.43 11.14,-8.04 C10.82,-8.65 10.38,-9.12 9.82,-9.47 C9.26,-9.81 8.61,-9.98 7.87,-9.98 C6.78,-9.98 5.89,-9.61 5.2,-8.86 C4.5,-8.1 4.15,-7.14 4.15,-5.95 C4.15,-4.75 4.5,-3.78 5.2,-3.04 C5.89,-2.29 6.78,-1.92 7.87,-1.92 M4.15,5.28 C4.15,5.28 1.61,5.28 1.61,5.28 C1.61,5.28 1.61,-11.9 1.61,-11.9 C1.61,-11.9 3.89,-11.9 3.89,-11.9 C3.89,-11.9 4.15,-10.06 4.15,-10.06 C4.54,-10.62 5.06,-11.11 5.74,-11.54 C6.41,-11.98 7.27,-12.19 8.33,-12.19 C9.48,-12.19 10.5,-11.92 11.38,-11.38 C12.26,-10.83 12.95,-10.09 13.45,-9.14 C13.96,-8.2 14.21,-7.13 14.21,-5.93 C14.21,-4.73 13.96,-3.66 13.45,-2.72 C12.95,-1.79 12.26,-1.05 11.38,-0.52 C10.5,0.02 9.47,0.29 8.3,0.29 C7.38,0.29 6.56,0.1 5.84,-0.26 C5.13,-0.63 4.57,-1.15 4.15,-1.82 C4.15,-1.82 4.15,5.28 4.15,5.28">
                                                                        </path>
                                                                        <g opacity="1"
                                                                            transform="matrix(0.23999999463558197,0,0,0.23999999463558197,0,0)">
                                                                        </g>
                                                                    </g>
                                                                </g>
                                                            </g>
                                                            <g strokeLinecap="butt" strokeLinejoin="round"
                                                                strokeMiterlimit="4"
                                                                transform="matrix(1,0,0,1,-18.44441032409668,4.32597017288208)"
                                                                opacity="1" style={{ display: 'inherit' }}>
                                                                <g>
                                                                    <g transform="matrix(1,0,0,1,0,0)"
                                                                        opacity="1" style={{ display: 'block' }}>
                                                                        <path
                                                                            d=" M8.57,0 C8.57,0 6.6,0 6.6,0 C5.43,0 4.5,-0.28 3.82,-0.85 C3.13,-1.42 2.78,-2.43 2.78,-3.89 C2.78,-3.89 2.78,-9.77 2.78,-9.77 C2.78,-9.77 0.74,-9.77 0.74,-9.77 C0.74,-9.77 0.74,-11.9 0.74,-11.9 C0.74,-11.9 2.78,-11.9 2.78,-11.9 C2.78,-11.9 3.1,-14.93 3.1,-14.93 C3.1,-14.93 5.33,-14.93 5.33,-14.93 C5.33,-14.93 5.33,-11.9 5.33,-11.9 C5.33,-11.9 8.69,-11.9 8.69,-11.9 C8.69,-11.9 8.69,-9.77 8.69,-9.77 C8.69,-9.77 5.33,-9.77 5.33,-9.77 C5.33,-9.77 5.33,-3.89 5.33,-3.89 C5.33,-3.23 5.47,-2.78 5.75,-2.53 C6.03,-2.28 6.51,-2.16 7.2,-2.16 C7.2,-2.16 8.57,-2.16 8.57,-2.16">
                                                                        </path>
                                                                        <g opacity="1"
                                                                            transform="matrix(0.23999999463558197,0,0,0.23999999463558197,0,0)">
                                                                        </g>
                                                                    </g>
                                                                </g>
                                                            </g>
                                                            <g strokeLinecap="butt" strokeLinejoin="round"
                                                                strokeMiterlimit="4"
                                                                transform="matrix(1,0,0,1,-9.948409080505371,4.32597017288208)"
                                                                opacity="1" style={{ display: 'inherit' }}>
                                                                <g>
                                                                    <g transform="matrix(1,0,0,1,0,0)"
                                                                        opacity="1" style={{ display: 'block' }}>
                                                                        <path
                                                                            d=" M4.32,0 C4.32,0 1.78,0 1.78,0 C1.78,0 1.78,-11.9 1.78,-11.9 C1.78,-11.9 4.32,-11.9 4.32,-11.9 M3.05,-14.16 C2.57,-14.16 2.17,-14.31 1.86,-14.6 C1.55,-14.9 1.39,-15.27 1.39,-15.72 C1.39,-16.17 1.55,-16.54 1.86,-16.84 C2.17,-17.13 2.57,-17.28 3.05,-17.28 C3.53,-17.28 3.92,-17.13 4.24,-16.84 C4.55,-16.54 4.7,-16.17 4.7,-15.72 C4.7,-15.27 4.55,-14.9 4.24,-14.6 C3.92,-14.31 3.53,-14.16 3.05,-14.16">
                                                                        </path>
                                                                        <g opacity="1"
                                                                            transform="matrix(0.23999999463558197,0,0,0.23999999463558197,0,0)">
                                                                        </g>
                                                                    </g>
                                                                </g>
                                                            </g>
                                                            <g strokeLinecap="butt" strokeLinejoin="round"
                                                                strokeMiterlimit="4"
                                                                transform="matrix(1,0,0,1,-5.076408863067627,4.32597017288208)"
                                                                opacity="1" style={{ display: 'inherit' }}>
                                                                <g>
                                                                    <g transform="matrix(1,0,0,1,0,0)"
                                                                        opacity="1" style={{ display: 'block' }}>
                                                                        <path
                                                                            d=" M4.15,0 C4.15,0 1.61,0 1.61,0 C1.61,0 1.61,-11.9 1.61,-11.9 C1.61,-11.9 3.86,-11.9 3.86,-11.9 C3.86,-11.9 4.08,-10.22 4.08,-10.22 C4.46,-10.83 4.97,-11.31 5.6,-11.66 C6.24,-12.02 6.97,-12.19 7.8,-12.19 C9.69,-12.19 11,-11.45 11.74,-9.96 C12.17,-10.65 12.75,-11.19 13.48,-11.59 C14.2,-11.99 14.99,-12.19 15.84,-12.19 C17.33,-12.19 18.5,-11.74 19.34,-10.85 C20.19,-9.95 20.62,-8.62 20.62,-6.84 C20.62,-6.84 20.62,0 20.62,0 C20.62,0 18.07,0 18.07,0 C18.07,0 18.07,-6.58 18.07,-6.58 C18.07,-8.88 17.19,-10.03 15.43,-10.03 C14.54,-10.03 13.8,-9.7 13.24,-9.02 C12.67,-8.35 12.38,-7.39 12.38,-6.14 C12.38,-6.14 12.38,0 12.38,0 C12.38,0 9.84,0 9.84,0 C9.84,0 9.84,-6.58 9.84,-6.58 C9.84,-8.88 8.95,-10.03 7.18,-10.03 C6.3,-10.03 5.57,-9.7 5,-9.02 C4.44,-8.35 4.15,-7.39 4.15,-6.14">
                                                                        </path>
                                                                        <g opacity="1"
                                                                            transform="matrix(0.23999999463558197,0,0,0.23999999463558197,0,0)">
                                                                        </g>
                                                                    </g>
                                                                </g>
                                                            </g>
                                                            <g strokeLinecap="butt" strokeLinejoin="round"
                                                                strokeMiterlimit="4"
                                                                transform="matrix(1,0,0,1,15.707589149475098,4.32597017288208)"
                                                                opacity="1" style={{ display: 'inherit' }}>
                                                                <g>
                                                                    <g transform="matrix(1,0,0,1,0,0)"
                                                                        opacity="1" style={{ display: 'block' }}>
                                                                        <path
                                                                            d=" M4.32,0 C4.32,0 1.78,0 1.78,0 C1.78,0 1.78,-11.9 1.78,-11.9 C1.78,-11.9 4.32,-11.9 4.32,-11.9 M3.05,-14.16 C2.57,-14.16 2.17,-14.31 1.86,-14.6 C1.55,-14.9 1.39,-15.27 1.39,-15.72 C1.39,-16.17 1.55,-16.54 1.86,-16.84 C2.17,-17.13 2.57,-17.28 3.05,-17.28 C3.53,-17.28 3.92,-17.13 4.24,-16.84 C4.55,-16.54 4.7,-16.17 4.7,-15.72 C4.7,-15.27 4.55,-14.9 4.24,-14.6 C3.92,-14.31 3.53,-14.16 3.05,-14.16">
                                                                        </path>
                                                                        <g opacity="1"
                                                                            transform="matrix(0.23999999463558197,0,0,0.23999999463558197,0,0)">
                                                                        </g>
                                                                    </g>
                                                                </g>
                                                            </g>
                                                            <g strokeLinecap="butt" strokeLinejoin="round"
                                                                strokeMiterlimit="4"
                                                                transform="matrix(1,0,0,1,20.57958984375,4.32597017288208)"
                                                                opacity="1" style={{ display: 'inherit' }}>
                                                                <g>
                                                                    <g transform="matrix(1,0,0,1,0,0)"
                                                                        opacity="1" style={{ display: 'block' }}>
                                                                        <path
                                                                            d=" M10.18,0 C10.18,0 0.82,0 0.82,0 C0.82,0 0.82,-2.06 0.82,-2.06 C0.82,-2.06 7.18,-9.79 7.18,-9.79 C7.18,-9.79 0.91,-9.79 0.91,-9.79 C0.91,-9.79 0.91,-11.9 0.91,-11.9 C0.91,-11.9 10.06,-11.9 10.06,-11.9 C10.06,-11.9 10.06,-9.84 10.06,-9.84 C10.06,-9.84 3.65,-2.11 3.65,-2.11 C3.65,-2.11 10.18,-2.11 10.18,-2.11">
                                                                        </path>
                                                                        <g opacity="1"
                                                                            transform="matrix(0.23999999463558197,0,0,0.23999999463558197,0,0)">
                                                                        </g>
                                                                    </g>
                                                                </g>
                                                            </g>
                                                            <g strokeLinecap="butt" strokeLinejoin="round"
                                                                strokeMiterlimit="4"
                                                                transform="matrix(1,0,0,1,30.56359100341797,4.32597017288208)"
                                                                opacity="1" style={{ display: 'inherit' }}>
                                                                <g>
                                                                    <g transform="matrix(1,0,0,1,0,0)"
                                                                        opacity="1" style={{ display: 'block' }}>
                                                                        <path
                                                                            d=" M7.18,-10.1 C6.33,-10.1 5.58,-9.85 4.92,-9.35 C4.26,-8.84 3.86,-8.09 3.72,-7.08 C3.72,-7.08 10.44,-7.08 10.44,-7.08 C10.39,-8.01 10.06,-8.74 9.46,-9.29 C8.85,-9.83 8.09,-10.1 7.18,-10.1 M7.18,0.29 C6.01,0.29 4.97,0.03 4.07,-0.49 C3.16,-1.01 2.46,-1.74 1.94,-2.66 C1.43,-3.59 1.18,-4.67 1.18,-5.9 C1.18,-7.15 1.43,-8.25 1.93,-9.19 C2.44,-10.14 3.14,-10.87 4.04,-11.4 C4.95,-11.93 6,-12.19 7.2,-12.19 C8.37,-12.19 9.38,-11.93 10.25,-11.41 C11.11,-10.89 11.78,-10.2 12.26,-9.34 C12.74,-8.47 12.98,-7.52 12.98,-6.48 C12.98,-6.32 12.98,-6.15 12.97,-5.96 C12.96,-5.78 12.95,-5.58 12.94,-5.35 C12.94,-5.35 3.67,-5.35 3.67,-5.35 C3.75,-4.2 4.13,-3.32 4.81,-2.72 C5.49,-2.12 6.28,-1.82 7.18,-1.82 C7.9,-1.82 8.5,-1.99 8.99,-2.32 C9.48,-2.64 9.84,-3.09 10.08,-3.65 C10.08,-3.65 12.62,-3.65 12.62,-3.65 C12.3,-2.53 11.67,-1.59 10.72,-0.84 C9.76,-0.09 8.58,0.29 7.18,0.29">
                                                                        </path>
                                                                        <g opacity="1"
                                                                            transform="matrix(0.23999999463558197,0,0,0.23999999463558197,0,0)">
                                                                        </g>
                                                                    </g>
                                                                </g>
                                                            </g>
                                                        </g>
                                                        <g id="2159"
                                                            transform="matrix(1.0299999713897705,0,0,1.0299999713897705,115.5645980834961,140.3846435546875)"
                                                            opacity="1" style={{ display: 'block' }}>
                                                            <g opacity="1"
                                                                transform="matrix(1,0,0,1,114.18000030517578,-89.48799896240234)">
                                                                <path fill="rgb(255,255,255)"
                                                                    fillOpacity="1"
                                                                    d=" M69.26399993896484,0 C69.26399993896484,0 69.26399993896484,0 69.26399993896484,0 C69.26399993896484,9.716198921203613 61.37519836425781,17.604999542236328 51.659000396728516,17.604999542236328 C51.659000396728516,17.604999542236328 -51.659000396728516,17.604999542236328 -51.659000396728516,17.604999542236328 C-61.37519836425781,17.604999542236328 -69.26399993896484,9.716198921203613 -69.26399993896484,0 C-69.26399993896484,0 -69.26399993896484,0 -69.26399993896484,0 C-69.26399993896484,-9.716198921203613 -61.37519836425781,-17.604999542236328 -51.659000396728516,-17.604999542236328 C-51.659000396728516,-17.604999542236328 51.659000396728516,-17.604999542236328 51.659000396728516,-17.604999542236328 C61.37519836425781,-17.604999542236328 69.26399993896484,-9.716198921203613 69.26399993896484,0z">
                                                                </path>
                                                                <path strokeLinecap="butt"
                                                                    strokeLinejoin="miter" fillOpacity="0"
                                                                    strokeMiterlimit="4"
                                                                    stroke="rgb(223,228,233)"
                                                                    strokeOpacity="1" strokeWidth="1"
                                                                    d=" M69.26399993896484,0 C69.26399993896484,0 69.26399993896484,0 69.26399993896484,0 C69.26399993896484,9.716198921203613 61.37519836425781,17.604999542236328 51.659000396728516,17.604999542236328 C51.659000396728516,17.604999542236328 -51.659000396728516,17.604999542236328 -51.659000396728516,17.604999542236328 C-61.37519836425781,17.604999542236328 -69.26399993896484,9.716198921203613 -69.26399993896484,0 C-69.26399993896484,0 -69.26399993896484,0 -69.26399993896484,0 C-69.26399993896484,-9.716198921203613 -61.37519836425781,-17.604999542236328 -51.659000396728516,-17.604999542236328 C-51.659000396728516,-17.604999542236328 51.659000396728516,-17.604999542236328 51.659000396728516,-17.604999542236328 C61.37519836425781,-17.604999542236328 69.26399993896484,-9.716198921203613 69.26399993896484,0z">
                                                                </path>
                                                            </g>
                                                        </g>
                                                        <g id="2104"
                                                            transform="matrix(1,0,0,1,247.17898559570312,49.18899917602539)"
                                                            opacity="1" fill="rgb(27,49,57)"
                                                            font-size="15.13299" font-family="DM Sans"
                                                            font-style={{}} font-weight="500"
                                                            aria-data-label="Agent Bricks"
                                                            style={{ display: 'block' }}>
                                                            <g strokeLinecap="butt" strokeLinejoin="round"
                                                                strokeMiterlimit="4"
                                                                transform="matrix(1,0,0,1,-43.85283279418945,2.6278328895568848)"
                                                                opacity="1" style={{ display: 'inherit' }}>
                                                                <g>
                                                                    <g transform="matrix(1,0,0,1,0,0)"
                                                                        opacity="1" style={{ display: 'block' }}>
                                                                        <path
                                                                            d=" M5.16,-8.69 C5.16,-8.69 3.45,-3.86 3.45,-3.86 C3.45,-3.86 6.87,-3.86 6.87,-3.86 M2.09,0 C2.09,0 0.39,0 0.39,0 C0.39,0 4.3,-10.59 4.3,-10.59 C4.3,-10.59 6.05,-10.59 6.05,-10.59 C6.05,-10.59 9.93,0 9.93,0 C9.93,0 8.23,0 8.23,0 C8.23,0 7.32,-2.59 7.32,-2.59 C7.32,-2.59 3,-2.59 3,-2.59 C3,-2.59 2.09,0 2.09,0">
                                                                        </path>
                                                                        <g opacity="1"
                                                                            transform="matrix(0.151329904794693,0,0,0.151329904794693,0,0)">
                                                                        </g>
                                                                    </g>
                                                                </g>
                                                            </g>
                                                            <g strokeLinecap="butt" strokeLinejoin="round"
                                                                strokeMiterlimit="4"
                                                                transform="matrix(1,0,0,1,-34.27364730834961,2.6278328895568848)"
                                                                opacity="1" style={{ display: 'inherit' }}>
                                                                <g>
                                                                    <g transform="matrix(1,0,0,1,0,0)"
                                                                        opacity="1" style={{ display: 'block' }}>
                                                                        <path
                                                                            d=" M2.07,0.95 C2.07,1.39 2.26,1.71 2.65,1.93 C3.03,2.15 3.51,2.25 4.09,2.25 C4.64,2.25 5.09,2.14 5.43,1.9 C5.78,1.66 5.95,1.35 5.95,0.95 C5.95,0.66 5.83,0.41 5.6,0.2 C5.37,0 4.93,-0.13 4.28,-0.18 C3.8,-0.21 3.37,-0.26 3,-0.32 C2.64,-0.13 2.4,0.08 2.27,0.3 C2.14,0.52 2.07,0.74 2.07,0.95 M4.09,-3.56 C4.55,-3.56 4.93,-3.68 5.21,-3.93 C5.5,-4.17 5.64,-4.52 5.64,-4.98 C5.64,-5.44 5.5,-5.8 5.21,-6.04 C4.93,-6.28 4.55,-6.4 4.09,-6.4 C3.61,-6.4 3.23,-6.28 2.94,-6.04 C2.66,-5.8 2.51,-5.44 2.51,-4.98 C2.51,-4.52 2.66,-4.17 2.94,-3.93 C3.23,-3.68 3.61,-3.56 4.09,-3.56 M4.09,-2.3 C3.69,-2.3 3.33,-2.35 3,-2.44 C3,-2.44 2.35,-1.8 2.35,-1.8 C2.46,-1.73 2.59,-1.67 2.75,-1.62 C2.92,-1.57 3.14,-1.52 3.44,-1.48 C3.73,-1.44 4.13,-1.4 4.63,-1.36 C5.63,-1.27 6.35,-1.03 6.79,-0.64 C7.24,-0.25 7.46,0.26 7.46,0.91 C7.46,1.35 7.34,1.77 7.1,2.17 C6.87,2.57 6.5,2.89 6,3.14 C5.5,3.39 4.86,3.51 4.09,3.51 C3.04,3.51 2.19,3.31 1.54,2.91 C0.89,2.51 0.56,1.91 0.56,1.1 C0.56,0.79 0.64,0.48 0.81,0.17 C0.98,-0.13 1.24,-0.42 1.6,-0.7 C1.39,-0.79 1.21,-0.89 1.05,-0.99 C0.9,-1.1 0.76,-1.21 0.64,-1.32 C0.64,-1.32 0.64,-1.68 0.64,-1.68 C0.64,-1.68 1.94,-3.01 1.94,-3.01 C1.35,-3.52 1.06,-4.18 1.06,-4.99 C1.06,-5.49 1.18,-5.94 1.41,-6.35 C1.65,-6.76 2,-7.08 2.45,-7.32 C2.91,-7.57 3.45,-7.69 4.09,-7.69 C4.51,-7.69 4.9,-7.63 5.27,-7.51 C5.27,-7.51 8.07,-7.51 8.07,-7.51 C8.07,-7.51 8.07,-6.45 8.07,-6.45 C8.07,-6.45 6.73,-6.37 6.73,-6.37 C6.98,-5.96 7.1,-5.5 7.1,-4.99 C7.1,-4.49 6.98,-4.04 6.74,-3.63 C6.5,-3.23 6.16,-2.91 5.71,-2.66 C5.26,-2.42 4.72,-2.3 4.09,-2.3">
                                                                        </path>
                                                                        <g opacity="1"
                                                                            transform="matrix(0.151329904794693,0,0,0.151329904794693,0,0)">
                                                                        </g>
                                                                    </g>
                                                                </g>
                                                            </g>
                                                            <g strokeLinecap="butt" strokeLinejoin="round"
                                                                strokeMiterlimit="4"
                                                                transform="matrix(1,0,0,1,-26.54068946838379,2.6278328895568848)"
                                                                opacity="1" style={{ display: 'inherit' }}>
                                                                <g>
                                                                    <g transform="matrix(1,0,0,1,0,0)"
                                                                        opacity="1" style={{ display: 'block' }}>
                                                                        <path
                                                                            d=" M4.52,-6.37 C3.99,-6.37 3.52,-6.21 3.1,-5.89 C2.69,-5.58 2.44,-5.1 2.35,-4.46 C2.35,-4.46 6.58,-4.46 6.58,-4.46 C6.55,-5.05 6.35,-5.51 5.96,-5.86 C5.58,-6.2 5.1,-6.37 4.52,-6.37 M4.52,0.18 C3.79,0.18 3.14,0.02 2.57,-0.31 C2,-0.64 1.55,-1.09 1.23,-1.68 C0.9,-2.26 0.74,-2.95 0.74,-3.72 C0.74,-4.51 0.9,-5.2 1.22,-5.8 C1.54,-6.39 1.98,-6.86 2.55,-7.19 C3.12,-7.52 3.78,-7.69 4.54,-7.69 C5.28,-7.69 5.92,-7.52 6.46,-7.2 C7.01,-6.87 7.43,-6.43 7.73,-5.89 C8.04,-5.34 8.19,-4.74 8.19,-4.09 C8.19,-3.99 8.18,-3.88 8.18,-3.76 C8.17,-3.64 8.17,-3.52 8.16,-3.37 C8.16,-3.37 2.32,-3.37 2.32,-3.37 C2.37,-2.65 2.61,-2.1 3.03,-1.72 C3.46,-1.34 3.96,-1.15 4.52,-1.15 C4.98,-1.15 5.36,-1.25 5.67,-1.46 C5.98,-1.67 6.2,-1.95 6.36,-2.3 C6.36,-2.3 7.96,-2.3 7.96,-2.3 C7.76,-1.59 7.36,-1 6.76,-0.53 C6.16,-0.06 5.41,0.18 4.52,0.18">
                                                                        </path>
                                                                        <g opacity="1"
                                                                            transform="matrix(0.151329904794693,0,0,0.151329904794693,0,0)">
                                                                        </g>
                                                                    </g>
                                                                </g>
                                                            </g>
                                                            <g strokeLinecap="butt" strokeLinejoin="round"
                                                                strokeMiterlimit="4"
                                                                transform="matrix(1,0,0,1,-18.459674835205078,2.6278328895568848)"
                                                                opacity="1" style={{ display: 'inherit' }}>
                                                                <g>
                                                                    <g transform="matrix(1,0,0,1,0,0)"
                                                                        opacity="1" style={{ display: 'block' }}>
                                                                        <path
                                                                            d=" M2.62,0 C2.62,0 1.01,0 1.01,0 C1.01,0 1.01,-7.51 1.01,-7.51 C1.01,-7.51 2.44,-7.51 2.44,-7.51 C2.44,-7.51 2.56,-6.19 2.56,-6.19 C2.79,-6.65 3.13,-7.02 3.58,-7.29 C4.03,-7.55 4.54,-7.69 5.13,-7.69 C6.04,-7.69 6.75,-7.41 7.27,-6.84 C7.79,-6.28 8.05,-5.43 8.05,-4.31 C8.05,-4.31 8.05,0 8.05,0 C8.05,0 6.46,0 6.46,0 C6.46,0 6.46,-4.15 6.46,-4.15 C6.46,-5.6 5.87,-6.33 4.68,-6.33 C4.08,-6.33 3.59,-6.11 3.2,-5.69 C2.81,-5.27 2.62,-4.66 2.62,-3.87">
                                                                        </path>
                                                                        <g opacity="1"
                                                                            transform="matrix(0.151329904794693,0,0,0.151329904794693,0,0)">
                                                                        </g>
                                                                    </g>
                                                                </g>
                                                            </g>
                                                            <g strokeLinecap="butt" strokeLinejoin="round"
                                                                strokeMiterlimit="4"
                                                                transform="matrix(1,0,0,1,-10.287858009338379,2.6278328895568848)"
                                                                opacity="1" style={{ display: 'inherit' }}>
                                                                <g>
                                                                    <g transform="matrix(1,0,0,1,0,0)"
                                                                        opacity="1" style={{ display: 'block' }}>
                                                                        <path
                                                                            d=" M5.4,0 C5.4,0 4.16,0 4.16,0 C3.43,0 2.84,-0.18 2.41,-0.54 C1.97,-0.9 1.76,-1.53 1.76,-2.45 C1.76,-2.45 1.76,-6.16 1.76,-6.16 C1.76,-6.16 0.47,-6.16 0.47,-6.16 C0.47,-6.16 0.47,-7.51 0.47,-7.51 C0.47,-7.51 1.76,-7.51 1.76,-7.51 C1.76,-7.51 1.95,-9.41 1.95,-9.41 C1.95,-9.41 3.36,-9.41 3.36,-9.41 C3.36,-9.41 3.36,-7.51 3.36,-7.51 C3.36,-7.51 5.48,-7.51 5.48,-7.51 C5.48,-7.51 5.48,-6.16 5.48,-6.16 C5.48,-6.16 3.36,-6.16 3.36,-6.16 C3.36,-6.16 3.36,-2.45 3.36,-2.45 C3.36,-2.04 3.45,-1.75 3.62,-1.6 C3.8,-1.44 4.11,-1.36 4.54,-1.36 C4.54,-1.36 5.4,-1.36 5.4,-1.36">
                                                                        </path>
                                                                        <g opacity="1"
                                                                            transform="matrix(0.151329904794693,0,0,0.151329904794693,0,0)">
                                                                        </g>
                                                                    </g>
                                                                </g>
                                                            </g>
                                                            <g strokeLinecap="butt" strokeLinejoin="round"
                                                                strokeMiterlimit="4"
                                                                transform="matrix(1,0,0,1,-4.930779933929443,2.6278328895568848)"
                                                                opacity="1" style={{ display: 'inherit' }}>
                                                                <g>
                                                                    <g transform="matrix(1,0,0,1,0,0)"
                                                                        opacity="1" style={{ display: 'block' }}>
                                                                        <path d="M0 0"></path>
                                                                        <g opacity="1"
                                                                            transform="matrix(0.151329904794693,0,0,0.151329904794693,0,0)">
                                                                        </g>
                                                                    </g>
                                                                </g>
                                                            </g>
                                                            <g strokeLinecap="butt" strokeLinejoin="round"
                                                                strokeMiterlimit="4"
                                                                transform="matrix(1,0,0,1,-1.8739159107208252,2.6278328895568848)"
                                                                opacity="1" style={{ display: 'inherit' }}>
                                                                <g>
                                                                    <g transform="matrix(1,0,0,1,0,0)"
                                                                        opacity="1" style={{ display: 'block' }}>
                                                                        <path
                                                                            d=" M2.68,-4.81 C2.68,-4.81 2.68,-1.32 2.68,-1.32 C2.68,-1.32 4.98,-1.32 4.98,-1.32 C5.62,-1.32 6.13,-1.47 6.48,-1.77 C6.84,-2.07 7.02,-2.5 7.02,-3.04 C7.02,-3.59 6.84,-4.02 6.46,-4.34 C6.09,-4.65 5.58,-4.81 4.95,-4.81 M2.68,-9.29 C2.68,-9.29 2.68,-6.05 2.68,-6.05 C2.68,-6.05 4.87,-6.05 4.87,-6.05 C5.49,-6.05 5.96,-6.2 6.28,-6.48 C6.6,-6.77 6.76,-7.17 6.76,-7.67 C6.76,-8.17 6.61,-8.56 6.29,-8.85 C5.97,-9.15 5.49,-9.29 4.84,-9.29 C4.84,-9.29 2.68,-9.29 2.68,-9.29 M5.19,0 C5.19,0 1.07,0 1.07,0 C1.07,0 1.07,-10.59 1.07,-10.59 C1.07,-10.59 5.07,-10.59 5.07,-10.59 C6.17,-10.59 7,-10.34 7.57,-9.82 C8.13,-9.31 8.41,-8.66 8.41,-7.88 C8.41,-7.21 8.23,-6.67 7.87,-6.27 C7.51,-5.87 7.07,-5.6 6.55,-5.46 C6.96,-5.38 7.32,-5.22 7.63,-4.98 C7.95,-4.74 8.2,-4.43 8.38,-4.07 C8.57,-3.71 8.66,-3.31 8.66,-2.89 C8.66,-2.35 8.52,-1.85 8.26,-1.41 C7.99,-0.98 7.6,-0.63 7.08,-0.38 C6.57,-0.13 5.94,0 5.19,0">
                                                                        </path>
                                                                        <g opacity="1"
                                                                            transform="matrix(0.151329904794693,0,0,0.151329904794693,0,0)">
                                                                        </g>
                                                                    </g>
                                                                </g>
                                                            </g>
                                                            <g strokeLinecap="butt" strokeLinejoin="round"
                                                                strokeMiterlimit="4"
                                                                transform="matrix(1,0,0,1,6.706489562988281,2.6278328895568848)"
                                                                opacity="1" style={{ display: 'inherit' }}>
                                                                <g>
                                                                    <g transform="matrix(1,0,0,1,0,0)"
                                                                        opacity="1" style={{ display: 'block' }}>
                                                                        <path
                                                                            d=" M2.62,0 C2.62,0 1.01,0 1.01,0 C1.01,0 1.01,-7.51 1.01,-7.51 C1.01,-7.51 2.45,-7.51 2.45,-7.51 C2.45,-7.51 2.59,-6.08 2.59,-6.08 C2.85,-6.58 3.22,-6.97 3.68,-7.26 C4.15,-7.54 4.72,-7.69 5.39,-7.69 C5.39,-7.69 5.39,-6.01 5.39,-6.01 C5.39,-6.01 4.95,-6.01 4.95,-6.01 C4.5,-6.01 4.11,-5.93 3.76,-5.79 C3.41,-5.64 3.14,-5.39 2.93,-5.05 C2.72,-4.7 2.62,-4.22 2.62,-3.6">
                                                                        </path>
                                                                        <g opacity="1"
                                                                            transform="matrix(0.151329904794693,0,0,0.151329904794693,0,0)">
                                                                        </g>
                                                                    </g>
                                                                </g>
                                                            </g>
                                                            <g strokeLinecap="butt" strokeLinejoin="round"
                                                                strokeMiterlimit="4"
                                                                transform="matrix(1,0,0,1,11.700374603271484,2.6278328895568848)"
                                                                opacity="1" style={{ display: 'inherit' }}>
                                                                <g>
                                                                    <g transform="matrix(1,0,0,1,0,0)"
                                                                        opacity="1" style={{ display: 'block' }}>
                                                                        <path
                                                                            d=" M2.72,0 C2.72,0 1.12,0 1.12,0 C1.12,0 1.12,-7.51 1.12,-7.51 C1.12,-7.51 2.72,-7.51 2.72,-7.51 M1.92,-8.93 C1.62,-8.93 1.37,-9.02 1.17,-9.21 C0.98,-9.4 0.88,-9.63 0.88,-9.91 C0.88,-10.19 0.98,-10.43 1.17,-10.62 C1.37,-10.8 1.62,-10.9 1.92,-10.9 C2.22,-10.9 2.47,-10.8 2.67,-10.62 C2.87,-10.43 2.97,-10.19 2.97,-9.91 C2.97,-9.63 2.87,-9.4 2.67,-9.21 C2.47,-9.02 2.22,-8.93 1.92,-8.93">
                                                                        </path>
                                                                        <g opacity="1"
                                                                            transform="matrix(0.151329904794693,0,0,0.151329904794693,0,0)">
                                                                        </g>
                                                                    </g>
                                                                </g>
                                                            </g>
                                                            <g strokeLinecap="butt" strokeLinejoin="round"
                                                                strokeMiterlimit="4"
                                                                transform="matrix(1,0,0,1,14.772372245788574,2.6278328895568848)"
                                                                opacity="1" style={{ display: 'inherit' }}>
                                                                <g>
                                                                    <g transform="matrix(1,0,0,1,0,0)"
                                                                        opacity="1" style={{ display: 'block' }}>
                                                                        <path
                                                                            d=" M4.57,0.18 C3.83,0.18 3.18,0.02 2.6,-0.32 C2.02,-0.65 1.56,-1.11 1.23,-1.7 C0.91,-2.29 0.74,-2.98 0.74,-3.75 C0.74,-4.53 0.91,-5.21 1.23,-5.8 C1.56,-6.39 2.02,-6.86 2.6,-7.19 C3.18,-7.52 3.83,-7.69 4.57,-7.69 C5.5,-7.69 6.28,-7.45 6.91,-6.96 C7.54,-6.48 7.94,-5.82 8.13,-4.99 C8.13,-4.99 6.45,-4.99 6.45,-4.99 C6.35,-5.41 6.12,-5.73 5.78,-5.96 C5.44,-6.19 5.03,-6.31 4.57,-6.31 C4.18,-6.31 3.81,-6.21 3.48,-6.02 C3.15,-5.82 2.88,-5.53 2.68,-5.15 C2.48,-4.77 2.38,-4.31 2.38,-3.75 C2.38,-3.2 2.48,-2.73 2.68,-2.35 C2.88,-1.97 3.15,-1.68 3.48,-1.48 C3.81,-1.28 4.18,-1.18 4.57,-1.18 C5.03,-1.18 5.44,-1.3 5.78,-1.53 C6.12,-1.76 6.35,-2.09 6.45,-2.51 C6.45,-2.51 8.13,-2.51 8.13,-2.51 C7.95,-1.7 7.55,-1.05 6.92,-0.56 C6.28,-0.07 5.5,0.18 4.57,0.18">
                                                                        </path>
                                                                        <g opacity="1"
                                                                            transform="matrix(0.151329904794693,0,0,0.151329904794693,0,0)">
                                                                        </g>
                                                                    </g>
                                                                </g>
                                                            </g>
                                                            <g strokeLinecap="butt" strokeLinejoin="round"
                                                                strokeMiterlimit="4"
                                                                transform="matrix(1,0,0,1,22.868520736694336,2.6278328895568848)"
                                                                opacity="1" style={{ display: 'inherit' }}>
                                                                <g>
                                                                    <g transform="matrix(1,0,0,1,0,0)"
                                                                        opacity="1" style={{ display: 'block' }}>
                                                                        <path
                                                                            d=" M2.62,0 C2.62,0 1.01,0 1.01,0 C1.01,0 1.01,-10.9 1.01,-10.9 C1.01,-10.9 2.62,-10.9 2.62,-10.9 C2.62,-10.9 2.62,-4.4 2.62,-4.4 C2.62,-4.4 5.49,-7.51 5.49,-7.51 C5.49,-7.51 7.42,-7.51 7.42,-7.51 C7.42,-7.51 4.22,-4.1 4.22,-4.1 C4.22,-4.1 7.88,0 7.88,0 C7.88,0 5.86,0 5.86,0 C5.86,0 2.62,-3.84 2.62,-3.84">
                                                                        </path>
                                                                        <g opacity="1"
                                                                            transform="matrix(0.151329904794693,0,0,0.151329904794693,0,0)">
                                                                        </g>
                                                                    </g>
                                                                </g>
                                                            </g>
                                                            <g strokeLinecap="butt" strokeLinejoin="round"
                                                                strokeMiterlimit="4"
                                                                transform="matrix(1,0,0,1,30.22315788269043,2.6278328895568848)"
                                                                opacity="1" style={{ display: 'inherit' }}>
                                                                <g>
                                                                    <g transform="matrix(1,0,0,1,0,0)"
                                                                        opacity="1" style={{ display: 'block' }}>
                                                                        <path
                                                                            d=" M4.01,0.18 C3.06,0.18 2.28,-0.05 1.66,-0.51 C1.05,-0.98 0.7,-1.59 0.61,-2.36 C0.61,-2.36 2.22,-2.36 2.22,-2.36 C2.31,-2.02 2.5,-1.72 2.8,-1.48 C3.1,-1.23 3.5,-1.1 4,-1.1 C4.48,-1.1 4.83,-1.21 5.05,-1.41 C5.28,-1.61 5.39,-1.84 5.39,-2.1 C5.39,-2.49 5.23,-2.75 4.93,-2.88 C4.62,-3.02 4.19,-3.14 3.65,-3.25 C3.22,-3.34 2.8,-3.47 2.38,-3.62 C1.96,-3.77 1.62,-3.98 1.34,-4.26 C1.06,-4.54 0.92,-4.91 0.92,-5.39 C0.92,-6.04 1.18,-6.59 1.68,-7.03 C2.18,-7.47 2.89,-7.69 3.8,-7.69 C4.64,-7.69 5.31,-7.49 5.83,-7.08 C6.35,-6.68 6.66,-6.11 6.75,-5.37 C6.75,-5.37 5.21,-5.37 5.21,-5.37 C5.16,-5.7 5.01,-5.95 4.76,-6.13 C4.51,-6.31 4.18,-6.4 3.77,-6.4 C3.36,-6.4 3.05,-6.32 2.83,-6.15 C2.61,-5.99 2.5,-5.77 2.5,-5.51 C2.5,-5.25 2.65,-5.04 2.96,-4.89 C3.27,-4.74 3.67,-4.6 4.18,-4.48 C4.68,-4.37 5.15,-4.24 5.58,-4.09 C6.01,-3.95 6.35,-3.73 6.61,-3.45 C6.88,-3.17 7.01,-2.75 7.01,-2.21 C7.02,-1.52 6.75,-0.95 6.21,-0.5 C5.67,-0.05 4.94,0.18 4.01,0.18">
                                                                        </path>
                                                                        <g opacity="1"
                                                                            transform="matrix(0.151329904794693,0,0,0.151329904794693,0,0)">
                                                                        </g>
                                                                    </g>
                                                                </g>
                                                            </g>
                                                        </g>
                                                        <g id="2106"
                                                            transform="matrix(1,0,0,1,155.80599975585938,264.8330078125)"
                                                            opacity="1" style={{ display: 'block' }}>
                                                            <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                                                                <path fill="rgb(208,217,225)"
                                                                    fillOpacity="1"
                                                                    d=" M28.38249969482422,0 C28.38249969482422,0 28.38249969482422,0 28.38249969482422,0 C28.38249969482422,2.3497142791748047 26.474714279174805,4.257500171661377 24.125,4.257500171661377 C24.125,4.257500171661377 -24.125,4.257500171661377 -24.125,4.257500171661377 C-26.474714279174805,4.257500171661377 -28.38249969482422,2.3497142791748047 -28.38249969482422,0 C-28.38249969482422,0 -28.38249969482422,0 -28.38249969482422,0 C-28.38249969482422,-2.3497142791748047 -26.474714279174805,-4.257500171661377 -24.125,-4.257500171661377 C-24.125,-4.257500171661377 24.125,-4.257500171661377 24.125,-4.257500171661377 C26.474714279174805,-4.257500171661377 28.38249969482422,-2.3497142791748047 28.38249969482422,0z">
                                                                </path>
                                                            </g>
                                                        </g>
                                                        <g id="2107"
                                                            transform="matrix(1,0,0,1,159.1179962158203,249.6959991455078)"
                                                            opacity="1" style={{ display: 'block' }}>
                                                            <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                                                                <path fill="rgb(208,217,225)"
                                                                    fillOpacity="1"
                                                                    d=" M31.693500518798828,0 C31.693500518798828,0 31.693500518798828,0 31.693500518798828,0 C31.693500518798828,2.3497142791748047 29.785715103149414,4.257500171661377 27.43600082397461,4.257500171661377 C27.43600082397461,4.257500171661377 -27.43600082397461,4.257500171661377 -27.43600082397461,4.257500171661377 C-29.785715103149414,4.257500171661377 -31.693500518798828,2.3497142791748047 -31.693500518798828,0 C-31.693500518798828,0 -31.693500518798828,0 -31.693500518798828,0 C-31.693500518798828,-2.3497142791748047 -29.785715103149414,-4.257500171661377 -27.43600082397461,-4.257500171661377 C-27.43600082397461,-4.257500171661377 27.43600082397461,-4.257500171661377 27.43600082397461,-4.257500171661377 C29.785715103149414,-4.257500171661377 31.693500518798828,-2.3497142791748047 31.693500518798828,0z">
                                                                </path>
                                                            </g>
                                                        </g>
                                                        <g id="2108"
                                                            transform="matrix(1,0,0,1,151.0760040283203,234.5590057373047)"
                                                            opacity="1" style={{ display: 'block' }}>
                                                            <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                                                                <path fill="rgb(208,217,225)"
                                                                    fillOpacity="1"
                                                                    d=" M23.652000427246094,0 C23.652000427246094,0 23.652000427246094,0 23.652000427246094,0 C23.652000427246094,2.3497142791748047 21.74421501159668,4.257500171661377 19.394500732421875,4.257500171661377 C19.394500732421875,4.257500171661377 -19.394500732421875,4.257500171661377 -19.394500732421875,4.257500171661377 C-21.74421501159668,4.257500171661377 -23.652000427246094,2.3497142791748047 -23.652000427246094,0 C-23.652000427246094,0 -23.652000427246094,0 -23.652000427246094,0 C-23.652000427246094,-2.3497142791748047 -21.74421501159668,-4.257500171661377 -19.394500732421875,-4.257500171661377 C-19.394500732421875,-4.257500171661377 19.394500732421875,-4.257500171661377 19.394500732421875,-4.257500171661377 C21.74421501159668,-4.257500171661377 23.652000427246094,-2.3497142791748047 23.652000427246094,0z">
                                                                </path>
                                                            </g>
                                                        </g>
                                                        <g id="2109"
                                                            transform="matrix(1,0,0,1,63.80799865722656,264.8330078125)"
                                                            opacity="1" style={{ display: 'block' }}>
                                                            <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                                                                <path fill="rgb(208,217,225)"
                                                                    fillOpacity="0.5"
                                                                    d=" M31.693500518798828,0 C31.693500518798828,0 31.693500518798828,0 31.693500518798828,0 C31.693500518798828,2.3497142791748047 29.785715103149414,4.257500171661377 27.43600082397461,4.257500171661377 C27.43600082397461,4.257500171661377 -27.43600082397461,4.257500171661377 -27.43600082397461,4.257500171661377 C-29.785715103149414,4.257500171661377 -31.693500518798828,2.3497142791748047 -31.693500518798828,0 C-31.693500518798828,0 -31.693500518798828,0 -31.693500518798828,0 C-31.693500518798828,-2.3497142791748047 -29.785715103149414,-4.257500171661377 -27.43600082397461,-4.257500171661377 C-27.43600082397461,-4.257500171661377 27.43600082397461,-4.257500171661377 27.43600082397461,-4.257500171661377 C29.785715103149414,-4.257500171661377 31.693500518798828,-2.3497142791748047 31.693500518798828,0z">
                                                                </path>
                                                            </g>
                                                        </g>
                                                        <g id="2110"
                                                            transform="matrix(1,0,0,1,63.80799865722656,249.6959991455078)"
                                                            opacity="1" style={{ display: 'block' }}>
                                                            <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                                                                <path fill="rgb(208,217,225)"
                                                                    fillOpacity="0.5"
                                                                    d=" M31.693500518798828,0 C31.693500518798828,0 31.693500518798828,0 31.693500518798828,0 C31.693500518798828,2.3497142791748047 29.785715103149414,4.257500171661377 27.43600082397461,4.257500171661377 C27.43600082397461,4.257500171661377 -27.43600082397461,4.257500171661377 -27.43600082397461,4.257500171661377 C-29.785715103149414,4.257500171661377 -31.693500518798828,2.3497142791748047 -31.693500518798828,0 C-31.693500518798828,0 -31.693500518798828,0 -31.693500518798828,0 C-31.693500518798828,-2.3497142791748047 -29.785715103149414,-4.257500171661377 -27.43600082397461,-4.257500171661377 C-27.43600082397461,-4.257500171661377 27.43600082397461,-4.257500171661377 27.43600082397461,-4.257500171661377 C29.785715103149414,-4.257500171661377 31.693500518798828,-2.3497142791748047 31.693500518798828,0z">
                                                                </path>
                                                            </g>
                                                        </g>
                                                        <g id="2111"
                                                            transform="matrix(1,0,0,1,51.50899887084961,234.5590057373047)"
                                                            opacity="1" style={{ display: 'block' }}>
                                                            <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                                                                <path fill="rgb(208,217,225)"
                                                                    fillOpacity="0.5"
                                                                    d=" M19.394500732421875,0 C19.394500732421875,0 19.394500732421875,0 19.394500732421875,0 C19.394500732421875,2.3497142791748047 17.48671531677246,4.257500171661377 15.137001037597656,4.257500171661377 C15.137001037597656,4.257500171661377 -15.137001037597656,4.257500171661377 -15.137001037597656,4.257500171661377 C-17.48671531677246,4.257500171661377 -19.394500732421875,2.3497142791748047 -19.394500732421875,0 C-19.394500732421875,0 -19.394500732421875,0 -19.394500732421875,0 C-19.394500732421875,-2.3497142791748047 -17.48671531677246,-4.257500171661377 -15.137001037597656,-4.257500171661377 C-15.137001037597656,-4.257500171661377 15.137001037597656,-4.257500171661377 15.137001037597656,-4.257500171661377 C17.48671531677246,-4.257500171661377 19.394500732421875,-2.3497142791748047 19.394500732421875,0z">
                                                                </path>
                                                            </g>
                                                        </g>
                                                        <g id="2112"
                                                            transform="matrix(1,0,0,1,155.80599975585938,198.60800170898438)"
                                                            opacity="1" style={{ display: 'block' }}>
                                                            <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                                                                <path fill="rgb(208,217,225)"
                                                                    fillOpacity="1"
                                                                    d=" M28.38249969482422,0 C28.38249969482422,0 28.38249969482422,0 28.38249969482422,0 C28.38249969482422,2.3497142791748047 26.474714279174805,4.257500171661377 24.125,4.257500171661377 C24.125,4.257500171661377 -24.125,4.257500171661377 -24.125,4.257500171661377 C-26.474714279174805,4.257500171661377 -28.38249969482422,2.3497142791748047 -28.38249969482422,0 C-28.38249969482422,0 -28.38249969482422,0 -28.38249969482422,0 C-28.38249969482422,-2.3497142791748047 -26.474714279174805,-4.257500171661377 -24.125,-4.257500171661377 C-24.125,-4.257500171661377 24.125,-4.257500171661377 24.125,-4.257500171661377 C26.474714279174805,-4.257500171661377 28.38249969482422,-2.3497142791748047 28.38249969482422,0z">
                                                                </path>
                                                            </g>
                                                        </g>
                                                        <g id="2113"
                                                            transform="matrix(1,0,0,1,159.1179962158203,183.4709930419922)"
                                                            opacity="1" style={{ display: 'block' }}>
                                                            <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                                                                <path fill="rgb(208,217,225)"
                                                                    fillOpacity="1"
                                                                    d=" M31.693500518798828,0 C31.693500518798828,0 31.693500518798828,0 31.693500518798828,0 C31.693500518798828,2.3497142791748047 29.785715103149414,4.257500171661377 27.43600082397461,4.257500171661377 C27.43600082397461,4.257500171661377 -27.43600082397461,4.257500171661377 -27.43600082397461,4.257500171661377 C-29.785715103149414,4.257500171661377 -31.693500518798828,2.3497142791748047 -31.693500518798828,0 C-31.693500518798828,0 -31.693500518798828,0 -31.693500518798828,0 C-31.693500518798828,-2.3497142791748047 -29.785715103149414,-4.257500171661377 -27.43600082397461,-4.257500171661377 C-27.43600082397461,-4.257500171661377 27.43600082397461,-4.257500171661377 27.43600082397461,-4.257500171661377 C29.785715103149414,-4.257500171661377 31.693500518798828,-2.3497142791748047 31.693500518798828,0z">
                                                                </path>
                                                            </g>
                                                        </g>
                                                        <g id="2114"
                                                            transform="matrix(1,0,0,1,151.0760040283203,168.33299255371094)"
                                                            opacity="1" style={{ display: 'block' }}>
                                                            <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                                                                <path fill="rgb(208,217,225)"
                                                                    fillOpacity="1"
                                                                    d=" M23.652000427246094,0 C23.652000427246094,0 23.652000427246094,0 23.652000427246094,0 C23.652000427246094,2.3497142791748047 21.74421501159668,4.257500171661377 19.394500732421875,4.257500171661377 C19.394500732421875,4.257500171661377 -19.394500732421875,4.257500171661377 -19.394500732421875,4.257500171661377 C-21.74421501159668,4.257500171661377 -23.652000427246094,2.3497142791748047 -23.652000427246094,0 C-23.652000427246094,0 -23.652000427246094,0 -23.652000427246094,0 C-23.652000427246094,-2.3497142791748047 -21.74421501159668,-4.257500171661377 -19.394500732421875,-4.257500171661377 C-19.394500732421875,-4.257500171661377 19.394500732421875,-4.257500171661377 19.394500732421875,-4.257500171661377 C21.74421501159668,-4.257500171661377 23.652000427246094,-2.3497142791748047 23.652000427246094,0z">
                                                                </path>
                                                            </g>
                                                        </g>
                                                        <g id="2115"
                                                            transform="matrix(1,0,0,1,63.80799865722656,198.60800170898438)"
                                                            opacity="1" style={{ display: 'block' }}>
                                                            <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                                                                <path fill="rgb(208,217,225)"
                                                                    fillOpacity="0.5"
                                                                    d=" M31.693500518798828,0 C31.693500518798828,0 31.693500518798828,0 31.693500518798828,0 C31.693500518798828,2.3497142791748047 29.785715103149414,4.257500171661377 27.43600082397461,4.257500171661377 C27.43600082397461,4.257500171661377 -27.43600082397461,4.257500171661377 -27.43600082397461,4.257500171661377 C-29.785715103149414,4.257500171661377 -31.693500518798828,2.3497142791748047 -31.693500518798828,0 C-31.693500518798828,0 -31.693500518798828,0 -31.693500518798828,0 C-31.693500518798828,-2.3497142791748047 -29.785715103149414,-4.257500171661377 -27.43600082397461,-4.257500171661377 C-27.43600082397461,-4.257500171661377 27.43600082397461,-4.257500171661377 27.43600082397461,-4.257500171661377 C29.785715103149414,-4.257500171661377 31.693500518798828,-2.3497142791748047 31.693500518798828,0z">
                                                                </path>
                                                            </g>
                                                        </g>
                                                        <g id="2116"
                                                            transform="matrix(1,0,0,1,63.80799865722656,183.4709930419922)"
                                                            opacity="1" style={{ display: 'block' }}>
                                                            <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                                                                <path fill="rgb(208,217,225)"
                                                                    fillOpacity="0.5"
                                                                    d=" M31.693500518798828,0 C31.693500518798828,0 31.693500518798828,0 31.693500518798828,0 C31.693500518798828,2.3497142791748047 29.785715103149414,4.257500171661377 27.43600082397461,4.257500171661377 C27.43600082397461,4.257500171661377 -27.43600082397461,4.257500171661377 -27.43600082397461,4.257500171661377 C-29.785715103149414,4.257500171661377 -31.693500518798828,2.3497142791748047 -31.693500518798828,0 C-31.693500518798828,0 -31.693500518798828,0 -31.693500518798828,0 C-31.693500518798828,-2.3497142791748047 -29.785715103149414,-4.257500171661377 -27.43600082397461,-4.257500171661377 C-27.43600082397461,-4.257500171661377 27.43600082397461,-4.257500171661377 27.43600082397461,-4.257500171661377 C29.785715103149414,-4.257500171661377 31.693500518798828,-2.3497142791748047 31.693500518798828,0z">
                                                                </path>
                                                            </g>
                                                        </g>
                                                        <g id="2117"
                                                            transform="matrix(1,0,0,1,51.50899887084961,168.33299255371094)"
                                                            opacity="1" style={{ display: 'block' }}>
                                                            <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                                                                <path fill="rgb(208,217,225)"
                                                                    fillOpacity="0.5"
                                                                    d=" M19.394500732421875,0 C19.394500732421875,0 19.394500732421875,0 19.394500732421875,0 C19.394500732421875,2.3497142791748047 17.48671531677246,4.257500171661377 15.137001037597656,4.257500171661377 C15.137001037597656,4.257500171661377 -15.137001037597656,4.257500171661377 -15.137001037597656,4.257500171661377 C-17.48671531677246,4.257500171661377 -19.394500732421875,2.3497142791748047 -19.394500732421875,0 C-19.394500732421875,0 -19.394500732421875,0 -19.394500732421875,0 C-19.394500732421875,-2.3497142791748047 -17.48671531677246,-4.257500171661377 -15.137001037597656,-4.257500171661377 C-15.137001037597656,-4.257500171661377 15.137001037597656,-4.257500171661377 15.137001037597656,-4.257500171661377 C17.48671531677246,-4.257500171661377 19.394500732421875,-2.3497142791748047 19.394500732421875,0z">
                                                                </path>
                                                            </g>
                                                        </g>
                                                        <g id="2118"
                                                            transform="matrix(1,0,0,1,155.80599975585938,129.54400634765625)"
                                                            opacity="1" style={{ display: 'block' }}>
                                                            <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                                                                <path fill="rgb(208,217,225)"
                                                                    fillOpacity="1"
                                                                    d=" M28.38249969482422,0 C28.38249969482422,0 28.38249969482422,0 28.38249969482422,0 C28.38249969482422,2.3497142791748047 26.474714279174805,4.257500171661377 24.125,4.257500171661377 C24.125,4.257500171661377 -24.125,4.257500171661377 -24.125,4.257500171661377 C-26.474714279174805,4.257500171661377 -28.38249969482422,2.3497142791748047 -28.38249969482422,0 C-28.38249969482422,0 -28.38249969482422,0 -28.38249969482422,0 C-28.38249969482422,-2.3497142791748047 -26.474714279174805,-4.257500171661377 -24.125,-4.257500171661377 C-24.125,-4.257500171661377 24.125,-4.257500171661377 24.125,-4.257500171661377 C26.474714279174805,-4.257500171661377 28.38249969482422,-2.3497142791748047 28.38249969482422,0z">
                                                                </path>
                                                            </g>
                                                        </g>
                                                        <g id="2119"
                                                            transform="matrix(1,0,0,1,159.1179962158203,114.40699768066406)"
                                                            opacity="1" style={{ display: 'block' }}>
                                                            <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                                                                <path fill="rgb(208,217,225)"
                                                                    fillOpacity="1"
                                                                    d=" M31.693500518798828,0 C31.693500518798828,0 31.693500518798828,0 31.693500518798828,0 C31.693500518798828,2.3497142791748047 29.785715103149414,4.257500171661377 27.43600082397461,4.257500171661377 C27.43600082397461,4.257500171661377 -27.43600082397461,4.257500171661377 -27.43600082397461,4.257500171661377 C-29.785715103149414,4.257500171661377 -31.693500518798828,2.3497142791748047 -31.693500518798828,0 C-31.693500518798828,0 -31.693500518798828,0 -31.693500518798828,0 C-31.693500518798828,-2.3497142791748047 -29.785715103149414,-4.257500171661377 -27.43600082397461,-4.257500171661377 C-27.43600082397461,-4.257500171661377 27.43600082397461,-4.257500171661377 27.43600082397461,-4.257500171661377 C29.785715103149414,-4.257500171661377 31.693500518798828,-2.3497142791748047 31.693500518798828,0z">
                                                                </path>
                                                            </g>
                                                        </g>
                                                        <g id="2120"
                                                            transform="matrix(1,0,0,1,151.0760040283203,99.2699966430664)"
                                                            opacity="1" style={{ display: 'block' }}>
                                                            <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                                                                <path fill="rgb(208,217,225)"
                                                                    fillOpacity="1"
                                                                    d=" M23.652000427246094,0 C23.652000427246094,0 23.652000427246094,0 23.652000427246094,0 C23.652000427246094,2.3497142791748047 21.74421501159668,4.257500171661377 19.394500732421875,4.257500171661377 C19.394500732421875,4.257500171661377 -19.394500732421875,4.257500171661377 -19.394500732421875,4.257500171661377 C-21.74421501159668,4.257500171661377 -23.652000427246094,2.3497142791748047 -23.652000427246094,0 C-23.652000427246094,0 -23.652000427246094,0 -23.652000427246094,0 C-23.652000427246094,-2.3497142791748047 -21.74421501159668,-4.257500171661377 -19.394500732421875,-4.257500171661377 C-19.394500732421875,-4.257500171661377 19.394500732421875,-4.257500171661377 19.394500732421875,-4.257500171661377 C21.74421501159668,-4.257500171661377 23.652000427246094,-2.3497142791748047 23.652000427246094,0z">
                                                                </path>
                                                            </g>
                                                        </g>
                                                        <g id="2121"
                                                            transform="matrix(1,0,0,1,63.80799865722656,129.54400634765625)"
                                                            opacity="1" style={{ display: 'block' }}>
                                                            <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                                                                <path fill="rgb(208,217,225)"
                                                                    fillOpacity="0.5"
                                                                    d=" M31.693500518798828,0 C31.693500518798828,0 31.693500518798828,0 31.693500518798828,0 C31.693500518798828,2.3497142791748047 29.785715103149414,4.257500171661377 27.43600082397461,4.257500171661377 C27.43600082397461,4.257500171661377 -27.43600082397461,4.257500171661377 -27.43600082397461,4.257500171661377 C-29.785715103149414,4.257500171661377 -31.693500518798828,2.3497142791748047 -31.693500518798828,0 C-31.693500518798828,0 -31.693500518798828,0 -31.693500518798828,0 C-31.693500518798828,-2.3497142791748047 -29.785715103149414,-4.257500171661377 -27.43600082397461,-4.257500171661377 C-27.43600082397461,-4.257500171661377 27.43600082397461,-4.257500171661377 27.43600082397461,-4.257500171661377 C29.785715103149414,-4.257500171661377 31.693500518798828,-2.3497142791748047 31.693500518798828,0z">
                                                                </path>
                                                            </g>
                                                        </g>
                                                        <g id="2122"
                                                            transform="matrix(1,0,0,1,63.80799865722656,114.40699768066406)"
                                                            opacity="1" style={{ display: 'block' }}>
                                                            <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                                                                <path fill="rgb(208,217,225)"
                                                                    fillOpacity="0.5"
                                                                    d=" M31.693500518798828,0 C31.693500518798828,0 31.693500518798828,0 31.693500518798828,0 C31.693500518798828,2.3497142791748047 29.785715103149414,4.257500171661377 27.43600082397461,4.257500171661377 C27.43600082397461,4.257500171661377 -27.43600082397461,4.257500171661377 -27.43600082397461,4.257500171661377 C-29.785715103149414,4.257500171661377 -31.693500518798828,2.3497142791748047 -31.693500518798828,0 C-31.693500518798828,0 -31.693500518798828,0 -31.693500518798828,0 C-31.693500518798828,-2.3497142791748047 -29.785715103149414,-4.257500171661377 -27.43600082397461,-4.257500171661377 C-27.43600082397461,-4.257500171661377 27.43600082397461,-4.257500171661377 27.43600082397461,-4.257500171661377 C29.785715103149414,-4.257500171661377 31.693500518798828,-2.3497142791748047 31.693500518798828,0z">
                                                                </path>
                                                            </g>
                                                        </g>
                                                        <g id="2123"
                                                            transform="matrix(1,0,0,1,51.50899887084961,99.2699966430664)"
                                                            opacity="1" style={{ display: 'block' }}>
                                                            <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                                                                <path fill="rgb(208,217,225)"
                                                                    fillOpacity="0.5"
                                                                    d=" M19.394500732421875,0 C19.394500732421875,0 19.394500732421875,0 19.394500732421875,0 C19.394500732421875,2.3497142791748047 17.48671531677246,4.257500171661377 15.137001037597656,4.257500171661377 C15.137001037597656,4.257500171661377 -15.137001037597656,4.257500171661377 -15.137001037597656,4.257500171661377 C-17.48671531677246,4.257500171661377 -19.394500732421875,2.3497142791748047 -19.394500732421875,0 C-19.394500732421875,0 -19.394500732421875,0 -19.394500732421875,0 C-19.394500732421875,-2.3497142791748047 -17.48671531677246,-4.257500171661377 -15.137001037597656,-4.257500171661377 C-15.137001037597656,-4.257500171661377 15.137001037597656,-4.257500171661377 15.137001037597656,-4.257500171661377 C17.48671531677246,-4.257500171661377 19.394500732421875,-2.3497142791748047 19.394500732421875,0z">
                                                                </path>
                                                            </g>
                                                        </g>
                                                        <g id="2143"
                                                            transform="matrix(1,0,0,1,122.28099822998047,138.24400329589844)"
                                                            opacity="1" style={{ display: 'block' }}>
                                                            <g opacity="1"
                                                                transform="matrix(1,0,0,1.0246399641036987,66.86799621582031,-97.39299774169922)">
                                                                <path fill="rgb(250,190,185)"
                                                                    fillOpacity="1"
                                                                    d=" M4.427499771118164,-2.00600004196167 C4.427499771118164,-2.00600004196167 4.427499771118164,2.00600004196167 4.427499771118164,2.00600004196167 C4.427499771118164,2.00600004196167 -4.427499771118164,2.00600004196167 -4.427499771118164,2.00600004196167 C-4.427499771118164,2.00600004196167 -4.427499771118164,-2.00600004196167 -4.427499771118164,-2.00600004196167 C-4.427499771118164,-2.00600004196167 4.427499771118164,-2.00600004196167 4.427499771118164,-2.00600004196167z">
                                                                </path>
                                                                <path strokeLinecap="butt"
                                                                    strokeLinejoin="miter" fillOpacity="0"
                                                                    strokeMiterlimit="4"
                                                                    stroke="rgb(255,255,255)"
                                                                    strokeOpacity="1" strokeWidth="0"
                                                                    d=" M4.427499771118164,-2.00600004196167 C4.427499771118164,-2.00600004196167 4.427499771118164,2.00600004196167 4.427499771118164,2.00600004196167 C4.427499771118164,2.00600004196167 -4.427499771118164,2.00600004196167 -4.427499771118164,2.00600004196167 C-4.427499771118164,2.00600004196167 -4.427499771118164,-2.00600004196167 -4.427499771118164,-2.00600004196167 C-4.427499771118164,-2.00600004196167 4.427499771118164,-2.00600004196167 4.427499771118164,-2.00600004196167z">
                                                                </path>
                                                            </g>
                                                            <g opacity="1"
                                                                transform="matrix(1,0,0,1.0613700151443481,66.86799621582031,-88.61000061035156)">
                                                                <path fill="rgb(250,190,185)"
                                                                    fillOpacity="1"
                                                                    d=" M4.427499771118164,-2.00600004196167 C4.427499771118164,-2.00600004196167 4.427499771118164,2.00600004196167 4.427499771118164,2.00600004196167 C4.427499771118164,2.00600004196167 -4.427499771118164,2.00600004196167 -4.427499771118164,2.00600004196167 C-4.427499771118164,2.00600004196167 -4.427499771118164,-2.00600004196167 -4.427499771118164,-2.00600004196167 C-4.427499771118164,-2.00600004196167 4.427499771118164,-2.00600004196167 4.427499771118164,-2.00600004196167z">
                                                                </path>
                                                                <path strokeLinecap="butt"
                                                                    strokeLinejoin="miter" fillOpacity="0"
                                                                    strokeMiterlimit="4"
                                                                    stroke="rgb(255,255,255)"
                                                                    strokeOpacity="1" strokeWidth="0"
                                                                    d=" M4.427499771118164,-2.00600004196167 C4.427499771118164,-2.00600004196167 4.427499771118164,2.00600004196167 4.427499771118164,2.00600004196167 C4.427499771118164,2.00600004196167 -4.427499771118164,2.00600004196167 -4.427499771118164,2.00600004196167 C-4.427499771118164,2.00600004196167 -4.427499771118164,-2.00600004196167 -4.427499771118164,-2.00600004196167 C-4.427499771118164,-2.00600004196167 4.427499771118164,-2.00600004196167 4.427499771118164,-2.00600004196167z">
                                                                </path>
                                                            </g>
                                                            <g opacity="1"
                                                                transform="matrix(1,0,0,1.0950100421905518,58.053001403808594,-93.00800323486328)">
                                                                <path fill="rgb(255,94,69)" fillOpacity="1"
                                                                    d=" M4.427499771118164,-2.00600004196167 C4.427499771118164,-2.00600004196167 4.427499771118164,2.00600004196167 4.427499771118164,2.00600004196167 C4.427499771118164,2.00600004196167 -4.427499771118164,2.00600004196167 -4.427499771118164,2.00600004196167 C-4.427499771118164,2.00600004196167 -4.427499771118164,-2.00600004196167 -4.427499771118164,-2.00600004196167 C-4.427499771118164,-2.00600004196167 4.427499771118164,-2.00600004196167 4.427499771118164,-2.00600004196167z">
                                                                </path>
                                                                <path strokeLinecap="butt"
                                                                    strokeLinejoin="miter" fillOpacity="0"
                                                                    strokeMiterlimit="4"
                                                                    stroke="rgb(255,255,255)"
                                                                    strokeOpacity="1" strokeWidth="0"
                                                                    d=" M4.427499771118164,-2.00600004196167 C4.427499771118164,-2.00600004196167 4.427499771118164,2.00600004196167 4.427499771118164,2.00600004196167 C4.427499771118164,2.00600004196167 -4.427499771118164,2.00600004196167 -4.427499771118164,2.00600004196167 C-4.427499771118164,2.00600004196167 -4.427499771118164,-2.00600004196167 -4.427499771118164,-2.00600004196167 C-4.427499771118164,-2.00600004196167 4.427499771118164,-2.00600004196167 4.427499771118164,-2.00600004196167z">
                                                                </path>
                                                            </g>
                                                            <g opacity="1"
                                                                transform="matrix(1,0,0,0.9637899994850159,58.05099868774414,-84.51799774169922)">
                                                                <path fill="rgb(255,94,69)" fillOpacity="1"
                                                                    d=" M4.427499771118164,-2.00600004196167 C4.427499771118164,-2.00600004196167 4.427499771118164,2.00600004196167 4.427499771118164,2.00600004196167 C4.427499771118164,2.00600004196167 -4.427499771118164,2.00600004196167 -4.427499771118164,2.00600004196167 C-4.427499771118164,2.00600004196167 -4.427499771118164,-2.00600004196167 -4.427499771118164,-2.00600004196167 C-4.427499771118164,-2.00600004196167 4.427499771118164,-2.00600004196167 4.427499771118164,-2.00600004196167z">
                                                                </path>
                                                                <path strokeLinecap="butt"
                                                                    strokeLinejoin="miter" fillOpacity="0"
                                                                    strokeMiterlimit="4"
                                                                    stroke="rgb(255,255,255)"
                                                                    strokeOpacity="1" strokeWidth="0"
                                                                    d=" M4.427499771118164,-2.00600004196167 C4.427499771118164,-2.00600004196167 4.427499771118164,2.00600004196167 4.427499771118164,2.00600004196167 C4.427499771118164,2.00600004196167 -4.427499771118164,2.00600004196167 -4.427499771118164,2.00600004196167 C-4.427499771118164,2.00600004196167 -4.427499771118164,-2.00600004196167 -4.427499771118164,-2.00600004196167 C-4.427499771118164,-2.00600004196167 4.427499771118164,-2.00600004196167 4.427499771118164,-2.00600004196167z">
                                                                </path>
                                                            </g>
                                                        </g>
                                                        <g id="2155" transform="matrix(1,0,0,1,164,161.5)"
                                                            opacity="1" style={{ display: 'block' }}>
                                                            <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                                                                <path fill="rgb(255,255,255)"
                                                                    fillOpacity="1"
                                                                    d=" M-131.02499389648438,-11.777000427246094 C-131.02499389648438,-11.777000427246094 129.40899658203125,-11.777000427246094 129.40899658203125,-11.777000427246094">
                                                                </path>
                                                                <path strokeLinecap="butt"
                                                                    strokeLinejoin="miter" fillOpacity="0"
                                                                    strokeMiterlimit="4"
                                                                    stroke="rgb(228,233,241)"
                                                                    strokeOpacity="1" strokeWidth="1"
                                                                    d=" M-131.02499389648438,-11.777000427246094 C-131.02499389648438,-11.777000427246094 129.40899658203125,-11.777000427246094 129.40899658203125,-11.777000427246094">
                                                                </path>
                                                            </g>
                                                        </g>
                                                        <g id="2157"
                                                            transform="matrix(1,0,0,1,163.32699584960938,226.77700805664062)"
                                                            opacity="1" style={{ display: 'block' }}>
                                                            <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                                                                <path fill="rgb(255,255,255)"
                                                                    fillOpacity="1"
                                                                    d=" M-131.02499389648438,-11.777000427246094 C-131.02499389648438,-11.777000427246094 129.40899658203125,-11.777000427246094 129.40899658203125,-11.777000427246094">
                                                                </path>
                                                                <path strokeLinecap="butt"
                                                                    strokeLinejoin="miter" fillOpacity="0"
                                                                    strokeMiterlimit="4"
                                                                    stroke="rgb(228,233,241)"
                                                                    strokeOpacity="1" strokeWidth="1"
                                                                    d=" M-131.02499389648438,-11.777000427246094 C-131.02499389648438,-11.777000427246094 129.40899658203125,-11.777000427246094 129.40899658203125,-11.777000427246094">
                                                                </path>
                                                            </g>
                                                        </g>
                                                    </g>
                                                    <g id="2181" clip-path="url(#__lottie_element_79)"
                                                        style={{ display: 'block' }}
                                                        transform="matrix(0.8166179656982422,0,0,0.8166179656982422,395.998291015625,36.26597213745117)"
                                                        opacity="1">
                                                        <g id="2170"
                                                            transform="matrix(1.0099999904632568,0,0,1.0099999904632568,158.02896118164062,162.3621063232422)"
                                                            opacity="1" style={{ display: 'block' }}>
                                                            <g opacity="1"
                                                                transform="matrix(1,0,0,1,0.5249999761581421,-0.32499998807907104)">
                                                                <path fill="rgb(255,255,255)"
                                                                    fillOpacity="1"
                                                                    d=" M145.885498046875,-141.0175018310547 C145.885498046875,-141.0175018310547 145.885498046875,141.0175018310547 145.885498046875,141.0175018310547 C145.885498046875,145.98460388183594 141.85260009765625,150.0175018310547 136.885498046875,150.0175018310547 C136.885498046875,150.0175018310547 -136.885498046875,150.0175018310547 -136.885498046875,150.0175018310547 C-141.85260009765625,150.0175018310547 -145.885498046875,145.98460388183594 -145.885498046875,141.0175018310547 C-145.885498046875,141.0175018310547 -145.885498046875,-141.0175018310547 -145.885498046875,-141.0175018310547 C-145.885498046875,-145.98460388183594 -141.85260009765625,-150.0175018310547 -136.885498046875,-150.0175018310547 C-136.885498046875,-150.0175018310547 136.885498046875,-150.0175018310547 136.885498046875,-150.0175018310547 C141.85260009765625,-150.0175018310547 145.885498046875,-145.98460388183594 145.885498046875,-141.0175018310547z">
                                                                </path>
                                                                <path strokeLinecap="butt"
                                                                    strokeLinejoin="miter" fillOpacity="0"
                                                                    strokeMiterlimit="4"
                                                                    stroke="rgb(228,233,241)"
                                                                    strokeOpacity="1" strokeWidth="1"
                                                                    d=" M145.885498046875,-141.0175018310547 C145.885498046875,-141.0175018310547 145.885498046875,141.0175018310547 145.885498046875,141.0175018310547 C145.885498046875,145.98460388183594 141.85260009765625,150.0175018310547 136.885498046875,150.0175018310547 C136.885498046875,150.0175018310547 -136.885498046875,150.0175018310547 -136.885498046875,150.0175018310547 C-141.85260009765625,150.0175018310547 -145.885498046875,145.98460388183594 -145.885498046875,141.0175018310547 C-145.885498046875,141.0175018310547 -145.885498046875,-141.0175018310547 -145.885498046875,-141.0175018310547 C-145.885498046875,-145.98460388183594 -141.85260009765625,-150.0175018310547 -136.885498046875,-150.0175018310547 C-136.885498046875,-150.0175018310547 136.885498046875,-150.0175018310547 136.885498046875,-150.0175018310547 C141.85260009765625,-150.0175018310547 145.885498046875,-145.98460388183594 145.885498046875,-141.0175018310547z">
                                                                </path>
                                                            </g>
                                                        </g>
                                                        <g id="2051" clip-path="url(#__lottie_element_149)"
                                                            style={{ display: 'block' }}
                                                            transform="matrix(1,0,0,1,160.5,162.73199462890625)"
                                                            opacity="1">
                                                            <g opacity="1"
                                                                transform="matrix(1,0,0,1,-0.6690000295639038,-44.18000030517578)">
                                                                <path fill="rgb(250,236,234)"
                                                                    fillOpacity="1"
                                                                    d=" M122.48899841308594,-37.0890007019043 C122.48899841308594,-37.0890007019043 122.60800170898438,36.67499923706055 122.60800170898438,36.67499923706055 C122.60800170898438,36.67499923706055 -122.73899841308594,36.67499923706055 -122.73899841308594,36.67499923706055 C-122.73899841308594,36.67499923706055 -120.16600036621094,36.018001556396484 -120.16600036621094,36.018001556396484 C-120.16600036621094,36.018001556396484 -50.683998107910156,6.3460001945495605 -50.683998107910156,6.3460001945495605 C-50.683998107910156,6.3460001945495605 -7.9629998207092285,22.04199981689453 -7.9629998207092285,22.04199981689453 C-7.9629998207092285,22.04199981689453 55.606998443603516,-8.869999885559082 55.606998443603516,-8.869999885559082 C55.606998443603516,-8.869999885559082 96.88500213623047,-8.8100004196167 96.88500213623047,-8.8100004196167 C96.88500213623047,-8.8100004196167 122.48899841308594,-37.0890007019043 122.48899841308594,-37.0890007019043z">
                                                                </path>
                                                                <path strokeLinecap="butt"
                                                                    strokeLinejoin="miter" fillOpacity="0"
                                                                    strokeMiterlimit="4"
                                                                    stroke="rgb(55,18,22)"
                                                                    strokeOpacity="1" strokeWidth="0"
                                                                    d=" M122.48899841308594,-37.0890007019043 C122.48899841308594,-37.0890007019043 122.60800170898438,36.67499923706055 122.60800170898438,36.67499923706055 C122.60800170898438,36.67499923706055 -122.73899841308594,36.67499923706055 -122.73899841308594,36.67499923706055 C-122.73899841308594,36.67499923706055 -120.16600036621094,36.018001556396484 -120.16600036621094,36.018001556396484 C-120.16600036621094,36.018001556396484 -50.683998107910156,6.3460001945495605 -50.683998107910156,6.3460001945495605 C-50.683998107910156,6.3460001945495605 -7.9629998207092285,22.04199981689453 -7.9629998207092285,22.04199981689453 C-7.9629998207092285,22.04199981689453 55.606998443603516,-8.869999885559082 55.606998443603516,-8.869999885559082 C55.606998443603516,-8.869999885559082 96.88500213623047,-8.8100004196167 96.88500213623047,-8.8100004196167 C96.88500213623047,-8.8100004196167 122.48899841308594,-37.0890007019043 122.48899841308594,-37.0890007019043z">
                                                                </path>
                                                            </g>
                                                        </g>
                                                        <g id="2161"
                                                            transform="matrix(1,0,0,1,111.02799224853516,277.4079895019531)"
                                                            opacity="1" style={{ display: 'block' }}>
                                                            <g opacity="1"
                                                                transform="matrix(1,0,0,1,48.25199890136719,-158.7740020751953)">
                                                                <path strokeLinecap="butt"
                                                                    strokeLinejoin="miter" fillOpacity="0"
                                                                    strokeMiterlimit="4"
                                                                    stroke="rgb(255,54,32)"
                                                                    strokeOpacity="1" strokeWidth="2.084"
                                                                    d=" M-122.78700256347656,37.347999572753906 C-122.78700256347656,37.347999572753906 -50.18299865722656,6.439000129699707 -50.18299865722656,6.439000129699707 C-50.18299865722656,6.439000129699707 -7.473999977111816,21.893999099731445 -7.473999977111816,21.893999099731445 C-7.473999977111816,21.893999099731445 56.5890007019043,-9.015000343322754 56.5890007019043,-9.015000343322754 C56.5890007019043,-9.015000343322754 97.16200256347656,-9.015000343322754 97.16200256347656,-9.015000343322754 C97.16200256347656,-9.015000343322754 122.78700256347656,-37.347999572753906 122.78700256347656,-37.347999572753906">
                                                                </path>
                                                            </g>
                                                        </g>
                                                        <g id="2160"
                                                            transform="matrix(1.0299999713897705,0,0,1.0299999713897705,99.15860748291016,141.0326385498047)"
                                                            opacity="1" style={{ display: 'block' }}>
                                                            <g opacity="1"
                                                                transform="matrix(1,0,0,1,114.18000030517578,-89.48799896240234)">
                                                                <path fill="rgb(255,255,255)"
                                                                    fillOpacity="1"
                                                                    d=" M69.26399993896484,0 C69.26399993896484,0 69.26399993896484,0 69.26399993896484,0 C69.26399993896484,9.716198921203613 61.37519836425781,17.604999542236328 51.659000396728516,17.604999542236328 C51.659000396728516,17.604999542236328 -51.659000396728516,17.604999542236328 -51.659000396728516,17.604999542236328 C-61.37519836425781,17.604999542236328 -69.26399993896484,9.716198921203613 -69.26399993896484,0 C-69.26399993896484,0 -69.26399993896484,0 -69.26399993896484,0 C-69.26399993896484,-9.716198921203613 -61.37519836425781,-17.604999542236328 -51.659000396728516,-17.604999542236328 C-51.659000396728516,-17.604999542236328 51.659000396728516,-17.604999542236328 51.659000396728516,-17.604999542236328 C61.37519836425781,-17.604999542236328 69.26399993896484,-9.716198921203613 69.26399993896484,0z">
                                                                </path>
                                                                <path strokeLinecap="butt"
                                                                    strokeLinejoin="miter" fillOpacity="0"
                                                                    strokeMiterlimit="4"
                                                                    stroke="rgb(223,228,233)"
                                                                    strokeOpacity="1" strokeWidth="1"
                                                                    d=" M69.26399993896484,0 C69.26399993896484,0 69.26399993896484,0 69.26399993896484,0 C69.26399993896484,9.716198921203613 61.37519836425781,17.604999542236328 51.659000396728516,17.604999542236328 C51.659000396728516,17.604999542236328 -51.659000396728516,17.604999542236328 -51.659000396728516,17.604999542236328 C-61.37519836425781,17.604999542236328 -69.26399993896484,9.716198921203613 -69.26399993896484,0 C-69.26399993896484,0 -69.26399993896484,0 -69.26399993896484,0 C-69.26399993896484,-9.716198921203613 -61.37519836425781,-17.604999542236328 -51.659000396728516,-17.604999542236328 C-51.659000396728516,-17.604999542236328 51.659000396728516,-17.604999542236328 51.659000396728516,-17.604999542236328 C61.37519836425781,-17.604999542236328 69.26399993896484,-9.716198921203613 69.26399993896484,0z">
                                                                </path>
                                                            </g>
                                                        </g>
                                                        <g id="2054"
                                                            transform="matrix(1,0,0,1,111.02799987792969,277.40899658203125)"
                                                            opacity="1" style={{ display: 'block' }}>
                                                            <g opacity="1"
                                                                transform="matrix(1,0,0,1,48.08700180053711,-3.0309998989105225)">
                                                                <path fill="rgb(255,255,255)"
                                                                    fillOpacity="1"
                                                                    d=" M146.8679962158203,-14.554500579833984 C146.8679962158203,-14.554500579833984 146.8679962158203,14.554500579833984 146.8679962158203,14.554500579833984 C146.8679962158203,16.762100219726562 145.07559204101562,18.554500579833984 142.8679962158203,18.554500579833984 C142.8679962158203,18.554500579833984 -142.8679962158203,18.554500579833984 -142.8679962158203,18.554500579833984 C-145.07559204101562,18.554500579833984 -146.8679962158203,16.762100219726562 -146.8679962158203,14.554500579833984 C-146.8679962158203,14.554500579833984 -146.8679962158203,-14.554500579833984 -146.8679962158203,-14.554500579833984 C-146.8679962158203,-16.762100219726562 -145.07559204101562,-18.554500579833984 -142.8679962158203,-18.554500579833984 C-142.8679962158203,-18.554500579833984 142.8679962158203,-18.554500579833984 142.8679962158203,-18.554500579833984 C145.07559204101562,-18.554500579833984 146.8679962158203,-16.762100219726562 146.8679962158203,-14.554500579833984z">
                                                                </path>
                                                                <path strokeLinecap="butt"
                                                                    strokeLinejoin="miter" fillOpacity="0"
                                                                    strokeMiterlimit="4"
                                                                    stroke="rgb(228,233,241)"
                                                                    strokeOpacity="1" strokeWidth="0"
                                                                    d=" M146.8679962158203,-14.554500579833984 C146.8679962158203,-14.554500579833984 146.8679962158203,14.554500579833984 146.8679962158203,14.554500579833984 C146.8679962158203,16.762100219726562 145.07559204101562,18.554500579833984 142.8679962158203,18.554500579833984 C142.8679962158203,18.554500579833984 -142.8679962158203,18.554500579833984 -142.8679962158203,18.554500579833984 C-145.07559204101562,18.554500579833984 -146.8679962158203,16.762100219726562 -146.8679962158203,14.554500579833984 C-146.8679962158203,14.554500579833984 -146.8679962158203,-14.554500579833984 -146.8679962158203,-14.554500579833984 C-146.8679962158203,-16.762100219726562 -145.07559204101562,-18.554500579833984 -142.8679962158203,-18.554500579833984 C-142.8679962158203,-18.554500579833984 142.8679962158203,-18.554500579833984 142.8679962158203,-18.554500579833984 C145.07559204101562,-18.554500579833984 146.8679962158203,-16.762100219726562 146.8679962158203,-14.554500579833984z">
                                                                </path>
                                                            </g>
                                                            <g opacity="1"
                                                                transform="matrix(-1,0,0,-1,90.1240005493164,-2.265000104904175)">
                                                                <path fill="rgb(185,232,217)"
                                                                    fillOpacity="1"
                                                                    d=" M10.744000434875488,-8.160000801086426 C10.744000434875488,-8.160000801086426 10.744000434875488,8.160000801086426 10.744000434875488,8.160000801086426 C10.744000434875488,9.58611011505127 9.58611011505127,10.744000434875488 8.160000801086426,10.744000434875488 C8.160000801086426,10.744000434875488 -8.160000801086426,10.744000434875488 -8.160000801086426,10.744000434875488 C-9.58611011505127,10.744000434875488 -10.744000434875488,9.58611011505127 -10.744000434875488,8.160000801086426 C-10.744000434875488,8.160000801086426 -10.744000434875488,-8.160000801086426 -10.744000434875488,-8.160000801086426 C-10.744000434875488,-9.58611011505127 -9.58611011505127,-10.744000434875488 -8.160000801086426,-10.744000434875488 C-8.160000801086426,-10.744000434875488 8.160000801086426,-10.744000434875488 8.160000801086426,-10.744000434875488 C9.58611011505127,-10.744000434875488 10.744000434875488,-9.58611011505127 10.744000434875488,-8.160000801086426z">
                                                                </path>
                                                            </g>
                                                        </g>
                                                        <g id="2055"
                                                            transform="matrix(1.0000029802322388,0,0,1.0000029802322388,111.02784729003906,277.40911865234375)"
                                                            opacity="1" style={{ display: 'block' }}>
                                                            <g opacity="1"
                                                                transform="matrix(1,0,0,1,47.854000091552734,-42.87099838256836)">
                                                                <path fill="rgb(255,255,255)"
                                                                    fillOpacity="1"
                                                                    d=" M146.8679962158203,-14.554500579833984 C146.8679962158203,-14.554500579833984 146.8679962158203,14.554500579833984 146.8679962158203,14.554500579833984 C146.8679962158203,16.762100219726562 145.07559204101562,18.554500579833984 142.8679962158203,18.554500579833984 C142.8679962158203,18.554500579833984 -142.8679962158203,18.554500579833984 -142.8679962158203,18.554500579833984 C-145.07559204101562,18.554500579833984 -146.8679962158203,16.762100219726562 -146.8679962158203,14.554500579833984 C-146.8679962158203,14.554500579833984 -146.8679962158203,-14.554500579833984 -146.8679962158203,-14.554500579833984 C-146.8679962158203,-16.762100219726562 -145.07559204101562,-18.554500579833984 -142.8679962158203,-18.554500579833984 C-142.8679962158203,-18.554500579833984 142.8679962158203,-18.554500579833984 142.8679962158203,-18.554500579833984 C145.07559204101562,-18.554500579833984 146.8679962158203,-16.762100219726562 146.8679962158203,-14.554500579833984z">
                                                                </path>
                                                                <path strokeLinecap="butt"
                                                                    strokeLinejoin="miter" fillOpacity="0"
                                                                    strokeMiterlimit="4"
                                                                    stroke="rgb(228,233,241)"
                                                                    strokeOpacity="1" strokeWidth="0"
                                                                    d=" M146.8679962158203,-14.554500579833984 C146.8679962158203,-14.554500579833984 146.8679962158203,14.554500579833984 146.8679962158203,14.554500579833984 C146.8679962158203,16.762100219726562 145.07559204101562,18.554500579833984 142.8679962158203,18.554500579833984 C142.8679962158203,18.554500579833984 -142.8679962158203,18.554500579833984 -142.8679962158203,18.554500579833984 C-145.07559204101562,18.554500579833984 -146.8679962158203,16.762100219726562 -146.8679962158203,14.554500579833984 C-146.8679962158203,14.554500579833984 -146.8679962158203,-14.554500579833984 -146.8679962158203,-14.554500579833984 C-146.8679962158203,-16.762100219726562 -145.07559204101562,-18.554500579833984 -142.8679962158203,-18.554500579833984 C-142.8679962158203,-18.554500579833984 142.8679962158203,-18.554500579833984 142.8679962158203,-18.554500579833984 C145.07559204101562,-18.554500579833984 146.8679962158203,-16.762100219726562 146.8679962158203,-14.554500579833984z">
                                                                </path>
                                                            </g>
                                                            <g opacity="1"
                                                                transform="matrix(-1,0,0,-1,90.1240005493164,-41.40299987792969)">
                                                                <path fill="rgb(185,232,217)"
                                                                    fillOpacity="1"
                                                                    d=" M10.744000434875488,-8.160000801086426 C10.744000434875488,-8.160000801086426 10.744000434875488,8.160000801086426 10.744000434875488,8.160000801086426 C10.744000434875488,9.58611011505127 9.58611011505127,10.744000434875488 8.160000801086426,10.744000434875488 C8.160000801086426,10.744000434875488 -8.160000801086426,10.744000434875488 -8.160000801086426,10.744000434875488 C-9.58611011505127,10.744000434875488 -10.744000434875488,9.58611011505127 -10.744000434875488,8.160000801086426 C-10.744000434875488,8.160000801086426 -10.744000434875488,-8.160000801086426 -10.744000434875488,-8.160000801086426 C-10.744000434875488,-9.58611011505127 -9.58611011505127,-10.744000434875488 -8.160000801086426,-10.744000434875488 C-8.160000801086426,-10.744000434875488 8.160000801086426,-10.744000434875488 8.160000801086426,-10.744000434875488 C9.58611011505127,-10.744000434875488 10.744000434875488,-9.58611011505127 10.744000434875488,-8.160000801086426z">
                                                                </path>
                                                            </g>
                                                        </g>
                                                        <g id="2056"
                                                            transform="matrix(-1.0000029802322388,0,0,-1.0000029802322388,201.1221160888672,235.97898864746094)"
                                                            opacity="1" style={{ display: 'block' }}>
                                                            <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                                                                <path fill="rgb(0,134,92)" fillOpacity="1"
                                                                    d=" M6.420000076293945,0 C6.420000076293945,0 0,-6.420000076293945 0,-6.420000076293945 C0,-6.420000076293945 -6.420000076293945,0 -6.420000076293945,0 C-6.420000076293945,0 -5.452000141143799,0.968999981880188 -5.452000141143799,0.968999981880188 C-5.452000141143799,0.968999981880188 -0.6850000023841858,-3.7980000972747803 -0.6850000023841858,-3.7980000972747803 C-0.6850000023841858,-3.7980000972747803 -0.6850000023841858,6.420000076293945 -0.6850000023841858,6.420000076293945 C-0.6850000023841858,6.420000076293945 0.6850000023841858,6.420000076293945 0.6850000023841858,6.420000076293945 C0.6850000023841858,6.420000076293945 0.6850000023841858,-3.7980000972747803 0.6850000023841858,-3.7980000972747803 C0.6850000023841858,-3.7980000972747803 5.452000141143799,0.968999981880188 5.452000141143799,0.968999981880188 C5.452000141143799,0.968999981880188 6.420000076293945,0 6.420000076293945,0z">
                                                                </path>
                                                            </g>
                                                        </g>
                                                        <g id="2057"
                                                            transform="matrix(1.0000029802322388,0,0,1.0000029802322388,167.385009765625,236.51800537109375)"
                                                            opacity="1" style={{ display: 'block' }}>
                                                            <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                                                                <path fill="rgb(219,244,236)"
                                                                    fillOpacity="1"
                                                                    d=" M12.790499687194824,0 C12.790499687194824,0 12.790499687194824,0 12.790499687194824,0 C12.790499687194824,2.3999369144439697 10.841937065124512,4.348499774932861 8.441999435424805,4.348499774932861 C8.441999435424805,4.348499774932861 -8.441999435424805,4.348499774932861 -8.441999435424805,4.348499774932861 C-10.841937065124512,4.348499774932861 -12.790499687194824,2.3999369144439697 -12.790499687194824,0 C-12.790499687194824,0 -12.790499687194824,0 -12.790499687194824,0 C-12.790499687194824,-2.3999369144439697 -10.841937065124512,-4.348499774932861 -8.441999435424805,-4.348499774932861 C-8.441999435424805,-4.348499774932861 8.441999435424805,-4.348499774932861 8.441999435424805,-4.348499774932861 C10.841937065124512,-4.348499774932861 12.790499687194824,-2.3999369144439697 12.790499687194824,0z">
                                                                </path>
                                                            </g>
                                                        </g>
                                                        <g id="2058"
                                                            transform="matrix(1.0000029802322388,0,0,1.0000029802322388,265.3583068847656,236.51800537109375)"
                                                            opacity="1" style={{ display: 'block' }}>
                                                            <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                                                                <path fill="rgb(208,217,225)"
                                                                    fillOpacity="1"
                                                                    d=" M16.627500534057617,0 C16.627500534057617,0 16.627500534057617,0 16.627500534057617,0 C16.627500534057617,2.3999369144439697 14.678937911987305,4.348499774932861 12.279001235961914,4.348499774932861 C12.279001235961914,4.348499774932861 -12.279001235961914,4.348499774932861 -12.279001235961914,4.348499774932861 C-14.678937911987305,4.348499774932861 -16.627500534057617,2.3999369144439697 -16.627500534057617,0 C-16.627500534057617,0 -16.627500534057617,0 -16.627500534057617,0 C-16.627500534057617,-2.3999369144439697 -14.678937911987305,-4.348499774932861 -12.279001235961914,-4.348499774932861 C-12.279001235961914,-4.348499774932861 12.279001235961914,-4.348499774932861 12.279001235961914,-4.348499774932861 C14.678937911987305,-4.348499774932861 16.627500534057617,-2.3999369144439697 16.627500534057617,0z">
                                                                </path>
                                                            </g>
                                                        </g>
                                                        <g id="2059"
                                                            transform="matrix(1.0000029802322388,0,0,1.0000029802322388,75.29273986816406,236.51800537109375)"
                                                            opacity="1" style={{ display: 'block' }}>
                                                            <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                                                                <path fill="rgb(208,217,225)"
                                                                    fillOpacity="1"
                                                                    d=" M36.83599853515625,0 C36.83599853515625,0 36.83599853515625,0 36.83599853515625,0 C36.83599853515625,2.3999369144439697 34.88743591308594,4.348499774932861 32.48749923706055,4.348499774932861 C32.48749923706055,4.348499774932861 -32.48749923706055,4.348499774932861 -32.48749923706055,4.348499774932861 C-34.88743591308594,4.348499774932861 -36.83599853515625,2.3999369144439697 -36.83599853515625,0 C-36.83599853515625,0 -36.83599853515625,0 -36.83599853515625,0 C-36.83599853515625,-2.3999369144439697 -34.88743591308594,-4.348499774932861 -32.48749923706055,-4.348499774932861 C-32.48749923706055,-4.348499774932861 32.48749923706055,-4.348499774932861 32.48749923706055,-4.348499774932861 C34.88743591308594,-4.348499774932861 36.83599853515625,-2.3999369144439697 36.83599853515625,0z">
                                                                </path>
                                                            </g>
                                                        </g>
                                                        <g id="2061"
                                                            transform="matrix(1,0,0,1,111.02799987792969,277.40899658203125)"
                                                            opacity="1" style={{ display: 'block' }}>
                                                            <g opacity="1"
                                                                transform="matrix(1,0,0,1,47.935001373291016,-82.177001953125)">
                                                                <path fill="rgb(255,255,255)"
                                                                    fillOpacity="1"
                                                                    d=" M146.8679962158203,-14.554500579833984 C146.8679962158203,-14.554500579833984 146.8679962158203,14.554500579833984 146.8679962158203,14.554500579833984 C146.8679962158203,16.762100219726562 145.07559204101562,18.554500579833984 142.8679962158203,18.554500579833984 C142.8679962158203,18.554500579833984 -142.8679962158203,18.554500579833984 -142.8679962158203,18.554500579833984 C-145.07559204101562,18.554500579833984 -146.8679962158203,16.762100219726562 -146.8679962158203,14.554500579833984 C-146.8679962158203,14.554500579833984 -146.8679962158203,-14.554500579833984 -146.8679962158203,-14.554500579833984 C-146.8679962158203,-16.762100219726562 -145.07559204101562,-18.554500579833984 -142.8679962158203,-18.554500579833984 C-142.8679962158203,-18.554500579833984 142.8679962158203,-18.554500579833984 142.8679962158203,-18.554500579833984 C145.07559204101562,-18.554500579833984 146.8679962158203,-16.762100219726562 146.8679962158203,-14.554500579833984z">
                                                                </path>
                                                                <path strokeLinecap="butt"
                                                                    strokeLinejoin="miter" fillOpacity="0"
                                                                    strokeMiterlimit="4"
                                                                    stroke="rgb(228,233,241)"
                                                                    strokeOpacity="1" strokeWidth="0"
                                                                    d=" M146.8679962158203,-14.554500579833984 C146.8679962158203,-14.554500579833984 146.8679962158203,14.554500579833984 146.8679962158203,14.554500579833984 C146.8679962158203,16.762100219726562 145.07559204101562,18.554500579833984 142.8679962158203,18.554500579833984 C142.8679962158203,18.554500579833984 -142.8679962158203,18.554500579833984 -142.8679962158203,18.554500579833984 C-145.07559204101562,18.554500579833984 -146.8679962158203,16.762100219726562 -146.8679962158203,14.554500579833984 C-146.8679962158203,14.554500579833984 -146.8679962158203,-14.554500579833984 -146.8679962158203,-14.554500579833984 C-146.8679962158203,-16.762100219726562 -145.07559204101562,-18.554500579833984 -142.8679962158203,-18.554500579833984 C-142.8679962158203,-18.554500579833984 142.8679962158203,-18.554500579833984 142.8679962158203,-18.554500579833984 C145.07559204101562,-18.554500579833984 146.8679962158203,-16.762100219726562 146.8679962158203,-14.554500579833984z">
                                                                </path>
                                                            </g>
                                                            <g opacity="1"
                                                                transform="matrix(-1,0,0,-1,89.91200256347656,-81.54199981689453)">
                                                                <path fill="rgb(185,232,217)"
                                                                    fillOpacity="1"
                                                                    d=" M10.744000434875488,-8.160000801086426 C10.744000434875488,-8.160000801086426 10.744000434875488,8.160000801086426 10.744000434875488,8.160000801086426 C10.744000434875488,9.58611011505127 9.58611011505127,10.744000434875488 8.160000801086426,10.744000434875488 C8.160000801086426,10.744000434875488 -8.160000801086426,10.744000434875488 -8.160000801086426,10.744000434875488 C-9.58611011505127,10.744000434875488 -10.744000434875488,9.58611011505127 -10.744000434875488,8.160000801086426 C-10.744000434875488,8.160000801086426 -10.744000434875488,-8.160000801086426 -10.744000434875488,-8.160000801086426 C-10.744000434875488,-9.58611011505127 -9.58611011505127,-10.744000434875488 -8.160000801086426,-10.744000434875488 C-8.160000801086426,-10.744000434875488 8.160000801086426,-10.744000434875488 8.160000801086426,-10.744000434875488 C9.58611011505127,-10.744000434875488 10.744000434875488,-9.58611011505127 10.744000434875488,-8.160000801086426z">
                                                                </path>
                                                            </g>
                                                        </g>
                                                        <g id="2062"
                                                            transform="matrix(1,0,0,1,201.18099975585938,195.87100219726562)"
                                                            opacity="1" style={{ display: 'block' }}>
                                                            <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                                                                <path fill="rgb(0,134,92)" fillOpacity="1"
                                                                    d=" M6.420000076293945,0 C6.420000076293945,0 0,-6.420000076293945 0,-6.420000076293945 C0,-6.420000076293945 -6.420000076293945,0 -6.420000076293945,0 C-6.420000076293945,0 -5.452000141143799,0.968999981880188 -5.452000141143799,0.968999981880188 C-5.452000141143799,0.968999981880188 -0.6850000023841858,-3.7980000972747803 -0.6850000023841858,-3.7980000972747803 C-0.6850000023841858,-3.7980000972747803 -0.6850000023841858,6.420000076293945 -0.6850000023841858,6.420000076293945 C-0.6850000023841858,6.420000076293945 0.6850000023841858,6.420000076293945 0.6850000023841858,6.420000076293945 C0.6850000023841858,6.420000076293945 0.6850000023841858,-3.7980000972747803 0.6850000023841858,-3.7980000972747803 C0.6850000023841858,-3.7980000972747803 5.452000141143799,0.968999981880188 5.452000141143799,0.968999981880188 C5.452000141143799,0.968999981880188 6.420000076293945,0 6.420000076293945,0z">
                                                                </path>
                                                            </g>
                                                        </g>
                                                        <g id="2063"
                                                            transform="matrix(1,0,0,1,167.38499450683594,197.63499450683594)"
                                                            opacity="1" style={{ display: 'block' }}>
                                                            <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                                                                <path fill="rgb(219,244,236)"
                                                                    fillOpacity="1"
                                                                    d=" M12.790499687194824,0 C12.790499687194824,0 12.790499687194824,0 12.790499687194824,0 C12.790499687194824,2.3999369144439697 10.841937065124512,4.348499774932861 8.441999435424805,4.348499774932861 C8.441999435424805,4.348499774932861 -8.441999435424805,4.348499774932861 -8.441999435424805,4.348499774932861 C-10.841937065124512,4.348499774932861 -12.790499687194824,2.3999369144439697 -12.790499687194824,0 C-12.790499687194824,0 -12.790499687194824,0 -12.790499687194824,0 C-12.790499687194824,-2.3999369144439697 -10.841937065124512,-4.348499774932861 -8.441999435424805,-4.348499774932861 C-8.441999435424805,-4.348499774932861 8.441999435424805,-4.348499774932861 8.441999435424805,-4.348499774932861 C10.841937065124512,-4.348499774932861 12.790499687194824,-2.3999369144439697 12.790499687194824,0z">
                                                                </path>
                                                            </g>
                                                        </g>
                                                        <g id="2064"
                                                            transform="matrix(1,0,0,1,270.2200012207031,197.63499450683594)"
                                                            opacity="1" style={{ display: 'block' }}>
                                                            <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                                                                <path fill="rgb(208,217,225)"
                                                                    fillOpacity="1"
                                                                    d=" M11.767000198364258,0 C11.767000198364258,0 11.767000198364258,0 11.767000198364258,0 C11.767000198364258,2.3999369144439697 9.818437576293945,4.348499774932861 7.4185004234313965,4.348499774932861 C7.4185004234313965,4.348499774932861 -7.4185004234313965,4.348499774932861 -7.4185004234313965,4.348499774932861 C-9.818437576293945,4.348499774932861 -11.767000198364258,2.3999369144439697 -11.767000198364258,0 C-11.767000198364258,0 -11.767000198364258,0 -11.767000198364258,0 C-11.767000198364258,-2.3999369144439697 -9.818437576293945,-4.348499774932861 -7.4185004234313965,-4.348499774932861 C-7.4185004234313965,-4.348499774932861 7.4185004234313965,-4.348499774932861 7.4185004234313965,-4.348499774932861 C9.818437576293945,-4.348499774932861 11.767000198364258,-2.3999369144439697 11.767000198364258,0z">
                                                                </path>
                                                            </g>
                                                        </g>
                                                        <g id="2065"
                                                            transform="matrix(1,0,0,1,64.21699523925781,197.63499450683594)"
                                                            opacity="1" style={{ display: 'block' }}>
                                                            <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                                                                <path fill="rgb(208,217,225)"
                                                                    fillOpacity="1"
                                                                    d=" M25.83650016784668,0 C25.83650016784668,0 25.83650016784668,0 25.83650016784668,0 C25.83650016784668,2.3999369144439697 23.887937545776367,4.348499774932861 21.488000869750977,4.348499774932861 C21.488000869750977,4.348499774932861 -21.488000869750977,4.348499774932861 -21.488000869750977,4.348499774932861 C-23.887937545776367,4.348499774932861 -25.83650016784668,2.3999369144439697 -25.83650016784668,0 C-25.83650016784668,0 -25.83650016784668,0 -25.83650016784668,0 C-25.83650016784668,-2.3999369144439697 -23.887937545776367,-4.348499774932861 -21.488000869750977,-4.348499774932861 C-21.488000869750977,-4.348499774932861 21.488000869750977,-4.348499774932861 21.488000869750977,-4.348499774932861 C23.887937545776367,-4.348499774932861 25.83650016784668,-2.3999369144439697 25.83650016784668,0z">
                                                                </path>
                                                            </g>
                                                        </g>
                                                        <g id="2066"
                                                            transform="matrix(1,0,0,1,167.38499450683594,275.4010009765625)"
                                                            opacity="1" style={{ display: 'block' }}>
                                                            <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                                                                <path fill="rgb(219,244,236)"
                                                                    fillOpacity="1"
                                                                    d=" M12.790499687194824,0 C12.790499687194824,0 12.790499687194824,0 12.790499687194824,0 C12.790499687194824,2.3999369144439697 10.841937065124512,4.348499774932861 8.441999435424805,4.348499774932861 C8.441999435424805,4.348499774932861 -8.441999435424805,4.348499774932861 -8.441999435424805,4.348499774932861 C-10.841937065124512,4.348499774932861 -12.790499687194824,2.3999369144439697 -12.790499687194824,0 C-12.790499687194824,0 -12.790499687194824,0 -12.790499687194824,0 C-12.790499687194824,-2.3999369144439697 -10.841937065124512,-4.348499774932861 -8.441999435424805,-4.348499774932861 C-8.441999435424805,-4.348499774932861 8.441999435424805,-4.348499774932861 8.441999435424805,-4.348499774932861 C10.841937065124512,-4.348499774932861 12.790499687194824,-2.3999369144439697 12.790499687194824,0z">
                                                                </path>
                                                            </g>
                                                        </g>
                                                        <g id="2067"
                                                            transform="matrix(1,0,0,1,270.2200012207031,275.4010009765625)"
                                                            opacity="1" style={{ display: 'block' }}>
                                                            <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                                                                <path fill="rgb(208,217,225)"
                                                                    fillOpacity="1"
                                                                    d=" M11.767000198364258,0 C11.767000198364258,0 11.767000198364258,0 11.767000198364258,0 C11.767000198364258,2.3999369144439697 9.818437576293945,4.348499774932861 7.4185004234313965,4.348499774932861 C7.4185004234313965,4.348499774932861 -7.4185004234313965,4.348499774932861 -7.4185004234313965,4.348499774932861 C-9.818437576293945,4.348499774932861 -11.767000198364258,2.3999369144439697 -11.767000198364258,0 C-11.767000198364258,0 -11.767000198364258,0 -11.767000198364258,0 C-11.767000198364258,-2.3999369144439697 -9.818437576293945,-4.348499774932861 -7.4185004234313965,-4.348499774932861 C-7.4185004234313965,-4.348499774932861 7.4185004234313965,-4.348499774932861 7.4185004234313965,-4.348499774932861 C9.818437576293945,-4.348499774932861 11.767000198364258,-2.3999369144439697 11.767000198364258,0z">
                                                                </path>
                                                            </g>
                                                        </g>
                                                        <g id="2068"
                                                            transform="matrix(1,0,0,1,59.68899917602539,275.4010009765625)"
                                                            opacity="1" style={{ display: 'block' }}>
                                                            <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                                                                <path fill="rgb(208,217,225)"
                                                                    fillOpacity="1"
                                                                    d=" M21.23200035095215,0 C21.23200035095215,0 21.23200035095215,0 21.23200035095215,0 C21.23200035095215,2.3999369144439697 19.283437728881836,4.348499774932861 16.883501052856445,4.348499774932861 C16.883501052856445,4.348499774932861 -16.883501052856445,4.348499774932861 -16.883501052856445,4.348499774932861 C-19.283437728881836,4.348499774932861 -21.23200035095215,2.3999369144439697 -21.23200035095215,0 C-21.23200035095215,0 -21.23200035095215,0 -21.23200035095215,0 C-21.23200035095215,-2.3999369144439697 -19.283437728881836,-4.348499774932861 -16.883501052856445,-4.348499774932861 C-16.883501052856445,-4.348499774932861 16.883501052856445,-4.348499774932861 16.883501052856445,-4.348499774932861 C19.283437728881836,-4.348499774932861 21.23200035095215,-2.3999369144439697 21.23200035095215,0z">
                                                                </path>
                                                            </g>
                                                        </g>
                                                        <g id="2069"
                                                            transform="matrix(-1,0,0,-1,201.12200927734375,275.11700439453125)"
                                                            opacity="1" style={{ display: 'block' }}>
                                                            <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                                                                <path fill="rgb(0,134,92)" fillOpacity="1"
                                                                    d=" M6.420000076293945,0 C6.420000076293945,0 0,-6.420000076293945 0,-6.420000076293945 C0,-6.420000076293945 -6.420000076293945,0 -6.420000076293945,0 C-6.420000076293945,0 -5.452000141143799,0.968999981880188 -5.452000141143799,0.968999981880188 C-5.452000141143799,0.968999981880188 -0.6850000023841858,-3.7980000972747803 -0.6850000023841858,-3.7980000972747803 C-0.6850000023841858,-3.7980000972747803 -0.6850000023841858,6.420000076293945 -0.6850000023841858,6.420000076293945 C-0.6850000023841858,6.420000076293945 0.6850000023841858,6.420000076293945 0.6850000023841858,6.420000076293945 C0.6850000023841858,6.420000076293945 0.6850000023841858,-3.7980000972747803 0.6850000023841858,-3.7980000972747803 C0.6850000023841858,-3.7980000972747803 5.452000141143799,0.968999981880188 5.452000141143799,0.968999981880188 C5.452000141143799,0.968999981880188 6.420000076293945,0 6.420000076293945,0z">
                                                                </path>
                                                            </g>
                                                        </g>
                                                        <g id="2070"
                                                            transform="matrix(1,0,0,1,81.91999816894531,51.022003173828125)"
                                                            opacity="1" fill="rgb(27,49,57)" font-size="24"
                                                            font-family="DM Sans" font-style={{}}
                                                            font-weight="500" aria-data-label="Evaluate"
                                                            style={{ display: 'block' }}>
                                                            <g strokeLinecap="butt" strokeLinejoin="round"
                                                                strokeMiterlimit="4"
                                                                transform="matrix(1,0,0,1,-46.38959884643555,7.137569904327393)"
                                                                opacity="1" style={{ display: 'inherit' }}>
                                                                <g>
                                                                    <g transform="matrix(1,0,0,1,0,0)"
                                                                        opacity="1" style={{ display: 'block' }}>
                                                                        <path
                                                                            d=" M12.38,0 C12.38,0 1.7,0 1.7,0 C1.7,0 1.7,-16.8 1.7,-16.8 C1.7,-16.8 12.38,-16.8 12.38,-16.8 C12.38,-16.8 12.38,-14.74 12.38,-14.74 C12.38,-14.74 4.25,-14.74 4.25,-14.74 C4.25,-14.74 4.25,-9.5 4.25,-9.5 C4.25,-9.5 11.66,-9.5 11.66,-9.5 C11.66,-9.5 11.66,-7.49 11.66,-7.49 C11.66,-7.49 4.25,-7.49 4.25,-7.49 C4.25,-7.49 4.25,-2.06 4.25,-2.06 C4.25,-2.06 12.38,-2.06 12.38,-2.06">
                                                                        </path>
                                                                        <g opacity="1"
                                                                            transform="matrix(0.23999999463558197,0,0,0.23999999463558197,0,0)">
                                                                        </g>
                                                                    </g>
                                                                </g>
                                                            </g>
                                                            <g strokeLinecap="butt" strokeLinejoin="round"
                                                                strokeMiterlimit="4"
                                                                transform="matrix(1,0,0,1,-33.88560104370117,7.137569904327393)"
                                                                opacity="1" style={{ display: 'inherit' }}>
                                                                <g>
                                                                    <g transform="matrix(1,0,0,1,0,0)"
                                                                        opacity="1" style={{ display: 'block' }}>
                                                                        <path
                                                                            d=" M7.97,0 C7.97,0 4.94,0 4.94,0 C4.94,0 0.48,-11.9 0.48,-11.9 C0.48,-11.9 3.14,-11.9 3.14,-11.9 C3.14,-11.9 6.46,-2.42 6.46,-2.42 C6.46,-2.42 9.77,-11.9 9.77,-11.9 C9.77,-11.9 12.41,-11.9 12.41,-11.9">
                                                                        </path>
                                                                        <g opacity="1"
                                                                            transform="matrix(0.23999999463558197,0,0,0.23999999463558197,0,0)">
                                                                        </g>
                                                                    </g>
                                                                </g>
                                                            </g>
                                                            <g strokeLinecap="butt" strokeLinejoin="round"
                                                                strokeMiterlimit="4"
                                                                transform="matrix(1,0,0,1,-22.197601318359375,7.137569904327393)"
                                                                opacity="1" style={{ display: 'inherit' }}>
                                                                <g>
                                                                    <g transform="matrix(1,0,0,1,0,0)"
                                                                        opacity="1" style={{ display: 'block' }}>
                                                                        <path
                                                                            d=" M6.14,-1.78 C6.83,-1.78 7.41,-1.94 7.88,-2.27 C8.36,-2.6 8.72,-3.03 8.99,-3.58 C9.25,-4.12 9.42,-4.72 9.48,-5.38 C9.48,-5.38 6.65,-5.38 6.65,-5.38 C5.64,-5.38 4.92,-5.2 4.5,-4.85 C4.08,-4.5 3.86,-4.06 3.86,-3.53 C3.86,-2.98 4.07,-2.56 4.48,-2.24 C4.88,-1.93 5.44,-1.78 6.14,-1.78 M5.64,0.29 C4.63,0.29 3.8,0.12 3.14,-0.22 C2.49,-0.55 2,-1 1.68,-1.55 C1.36,-2.1 1.2,-2.7 1.2,-3.36 C1.2,-4.51 1.65,-5.42 2.54,-6.1 C3.44,-6.77 4.72,-7.1 6.38,-7.1 C6.38,-7.1 9.5,-7.1 9.5,-7.1 C9.5,-7.1 9.5,-7.32 9.5,-7.32 C9.5,-8.25 9.25,-8.94 8.75,-9.41 C8.24,-9.87 7.59,-10.1 6.79,-10.1 C6.09,-10.1 5.48,-9.93 4.96,-9.59 C4.44,-9.24 4.12,-8.74 4.01,-8.06 C4.01,-8.06 1.46,-8.06 1.46,-8.06 C1.54,-8.93 1.84,-9.67 2.34,-10.28 C2.84,-10.9 3.48,-11.37 4.26,-11.7 C5.04,-12.03 5.89,-12.19 6.82,-12.19 C8.48,-12.19 9.77,-11.76 10.68,-10.88 C11.59,-10.01 12.05,-8.82 12.05,-7.32 C12.05,-7.32 12.05,0 12.05,0 C12.05,0 9.84,0 9.84,0 C9.84,0 9.62,-2.04 9.62,-2.04 C9.29,-1.38 8.8,-0.83 8.16,-0.38 C7.52,0.06 6.68,0.29 5.64,0.29">
                                                                        </path>
                                                                        <g opacity="1"
                                                                            transform="matrix(0.23999999463558197,0,0,0.23999999463558197,0,0)">
                                                                        </g>
                                                                    </g>
                                                                </g>
                                                            </g>
                                                            <g strokeLinecap="butt" strokeLinejoin="round"
                                                                strokeMiterlimit="4"
                                                                transform="matrix(1,0,0,1,-9.981599807739258,7.137569904327393)"
                                                                opacity="1" style={{ display: 'inherit' }}>
                                                                <g>
                                                                    <g transform="matrix(1,0,0,1,0,0)"
                                                                        opacity="1" style={{ display: 'block' }}>
                                                                        <path
                                                                            d=" M4.15,0 C4.15,0 1.61,0 1.61,0 C1.61,0 1.61,-17.28 1.61,-17.28 C1.61,-17.28 4.15,-17.28 4.15,-17.28">
                                                                        </path>
                                                                        <g opacity="1"
                                                                            transform="matrix(0.23999999463558197,0,0,0.23999999463558197,0,0)">
                                                                        </g>
                                                                    </g>
                                                                </g>
                                                            </g>
                                                            <g strokeLinecap="butt" strokeLinejoin="round"
                                                                strokeMiterlimit="4"
                                                                transform="matrix(1,0,0,1,-5.421599388122559,7.137569904327393)"
                                                                opacity="1" style={{ display: 'inherit' }}>
                                                                <g>
                                                                    <g transform="matrix(1,0,0,1,0,0)"
                                                                        opacity="1" style={{ display: 'block' }}>
                                                                        <path
                                                                            d=" M6,0.29 C4.56,0.29 3.43,-0.16 2.6,-1.06 C1.78,-1.95 1.37,-3.29 1.37,-5.06 C1.37,-5.06 1.37,-11.9 1.37,-11.9 C1.37,-11.9 3.91,-11.9 3.91,-11.9 C3.91,-11.9 3.91,-5.33 3.91,-5.33 C3.91,-3.02 4.86,-1.87 6.74,-1.87 C7.69,-1.87 8.46,-2.21 9.07,-2.88 C9.68,-3.55 9.98,-4.51 9.98,-5.76 C9.98,-5.76 9.98,-11.9 9.98,-11.9 C9.98,-11.9 12.53,-11.9 12.53,-11.9 C12.53,-11.9 12.53,0 12.53,0 C12.53,0 10.27,0 10.27,0 C10.27,0 10.08,-2.09 10.08,-2.09 C9.71,-1.35 9.17,-0.77 8.46,-0.35 C7.75,0.08 6.93,0.29 6,0.29">
                                                                        </path>
                                                                        <g opacity="1"
                                                                            transform="matrix(0.23999999463558197,0,0,0.23999999463558197,0,0)">
                                                                        </g>
                                                                    </g>
                                                                </g>
                                                            </g>
                                                            <g strokeLinecap="butt" strokeLinejoin="round"
                                                                strokeMiterlimit="4"
                                                                transform="matrix(1,0,0,1,7.538401126861572,7.137569904327393)"
                                                                opacity="1" style={{ display: 'inherit' }}>
                                                                <g>
                                                                    <g transform="matrix(1,0,0,1,0,0)"
                                                                        opacity="1" style={{ display: 'block' }}>
                                                                        <path
                                                                            d=" M6.14,-1.78 C6.83,-1.78 7.41,-1.94 7.88,-2.27 C8.36,-2.6 8.72,-3.03 8.99,-3.58 C9.25,-4.12 9.42,-4.72 9.48,-5.38 C9.48,-5.38 6.65,-5.38 6.65,-5.38 C5.64,-5.38 4.92,-5.2 4.5,-4.85 C4.08,-4.5 3.86,-4.06 3.86,-3.53 C3.86,-2.98 4.07,-2.56 4.48,-2.24 C4.88,-1.93 5.44,-1.78 6.14,-1.78 M5.64,0.29 C4.63,0.29 3.8,0.12 3.14,-0.22 C2.49,-0.55 2,-1 1.68,-1.55 C1.36,-2.1 1.2,-2.7 1.2,-3.36 C1.2,-4.51 1.65,-5.42 2.54,-6.1 C3.44,-6.77 4.72,-7.1 6.38,-7.1 C6.38,-7.1 9.5,-7.1 9.5,-7.1 C9.5,-7.1 9.5,-7.32 9.5,-7.32 C9.5,-8.25 9.25,-8.94 8.75,-9.41 C8.24,-9.87 7.59,-10.1 6.79,-10.1 C6.09,-10.1 5.48,-9.93 4.96,-9.59 C4.44,-9.24 4.12,-8.74 4.01,-8.06 C4.01,-8.06 1.46,-8.06 1.46,-8.06 C1.54,-8.93 1.84,-9.67 2.34,-10.28 C2.84,-10.9 3.48,-11.37 4.26,-11.7 C5.04,-12.03 5.89,-12.19 6.82,-12.19 C8.48,-12.19 9.77,-11.76 10.68,-10.88 C11.59,-10.01 12.05,-8.82 12.05,-7.32 C12.05,-7.32 12.05,0 12.05,0 C12.05,0 9.84,0 9.84,0 C9.84,0 9.62,-2.04 9.62,-2.04 C9.29,-1.38 8.8,-0.83 8.16,-0.38 C7.52,0.06 6.68,0.29 5.64,0.29">
                                                                        </path>
                                                                        <g opacity="1"
                                                                            transform="matrix(0.23999999463558197,0,0,0.23999999463558197,0,0)">
                                                                        </g>
                                                                    </g>
                                                                </g>
                                                            </g>
                                                            <g strokeLinecap="butt" strokeLinejoin="round"
                                                                strokeMiterlimit="4"
                                                                transform="matrix(1,0,0,1,19.75440216064453,7.137569904327393)"
                                                                opacity="1" style={{ display: 'inherit' }}>
                                                                <g>
                                                                    <g transform="matrix(1,0,0,1,0,0)"
                                                                        opacity="1" style={{ display: 'block' }}>
                                                                        <path
                                                                            d=" M8.57,0 C8.57,0 6.6,0 6.6,0 C5.43,0 4.5,-0.28 3.82,-0.85 C3.13,-1.42 2.78,-2.43 2.78,-3.89 C2.78,-3.89 2.78,-9.77 2.78,-9.77 C2.78,-9.77 0.74,-9.77 0.74,-9.77 C0.74,-9.77 0.74,-11.9 0.74,-11.9 C0.74,-11.9 2.78,-11.9 2.78,-11.9 C2.78,-11.9 3.1,-14.93 3.1,-14.93 C3.1,-14.93 5.33,-14.93 5.33,-14.93 C5.33,-14.93 5.33,-11.9 5.33,-11.9 C5.33,-11.9 8.69,-11.9 8.69,-11.9 C8.69,-11.9 8.69,-9.77 8.69,-9.77 C8.69,-9.77 5.33,-9.77 5.33,-9.77 C5.33,-9.77 5.33,-3.89 5.33,-3.89 C5.33,-3.23 5.47,-2.78 5.75,-2.53 C6.03,-2.28 6.51,-2.16 7.2,-2.16 C7.2,-2.16 8.57,-2.16 8.57,-2.16">
                                                                        </path>
                                                                        <g opacity="1"
                                                                            transform="matrix(0.23999999463558197,0,0,0.23999999463558197,0,0)">
                                                                        </g>
                                                                    </g>
                                                                </g>
                                                            </g>
                                                            <g strokeLinecap="butt" strokeLinejoin="round"
                                                                strokeMiterlimit="4"
                                                                transform="matrix(1,0,0,1,28.250402450561523,7.137569904327393)"
                                                                opacity="1" style={{ display: 'inherit' }}>
                                                                <g>
                                                                    <g transform="matrix(1,0,0,1,0,0)"
                                                                        opacity="1" style={{ display: 'block' }}>
                                                                        <path
                                                                            d=" M7.18,-10.1 C6.33,-10.1 5.58,-9.85 4.92,-9.35 C4.26,-8.84 3.86,-8.09 3.72,-7.08 C3.72,-7.08 10.44,-7.08 10.44,-7.08 C10.39,-8.01 10.06,-8.74 9.46,-9.29 C8.85,-9.83 8.09,-10.1 7.18,-10.1 M7.18,0.29 C6.01,0.29 4.97,0.03 4.07,-0.49 C3.16,-1.01 2.46,-1.74 1.94,-2.66 C1.43,-3.59 1.18,-4.67 1.18,-5.9 C1.18,-7.15 1.43,-8.25 1.93,-9.19 C2.44,-10.14 3.14,-10.87 4.04,-11.4 C4.95,-11.93 6,-12.19 7.2,-12.19 C8.37,-12.19 9.38,-11.93 10.25,-11.41 C11.11,-10.89 11.78,-10.2 12.26,-9.34 C12.74,-8.47 12.98,-7.52 12.98,-6.48 C12.98,-6.32 12.98,-6.15 12.97,-5.96 C12.96,-5.78 12.95,-5.58 12.94,-5.35 C12.94,-5.35 3.67,-5.35 3.67,-5.35 C3.75,-4.2 4.13,-3.32 4.81,-2.72 C5.49,-2.12 6.28,-1.82 7.18,-1.82 C7.9,-1.82 8.5,-1.99 8.99,-2.32 C9.48,-2.64 9.84,-3.09 10.08,-3.65 C10.08,-3.65 12.62,-3.65 12.62,-3.65 C12.3,-2.53 11.67,-1.59 10.72,-0.84 C9.76,-0.09 8.58,0.29 7.18,0.29">
                                                                        </path>
                                                                        <g opacity="1"
                                                                            transform="matrix(0.23999999463558197,0,0,0.23999999463558197,0,0)">
                                                                        </g>
                                                                    </g>
                                                                </g>
                                                            </g>
                                                        </g>
                                                        <g id="2071"
                                                            transform="matrix(1,0,0,1,234.44699096679688,49.954002380371094)"
                                                            opacity="1" fill="rgb(27,49,57)"
                                                            font-size="15.13299" font-family="DM Sans"
                                                            font-style={{}} font-weight="500"
                                                            aria-data-label="Agent Bricks"
                                                            style={{ display: 'block' }}>
                                                            <g strokeLinecap="butt" strokeLinejoin="round"
                                                                strokeMiterlimit="4"
                                                                transform="matrix(1,0,0,1,-43.85283279418945,2.6278328895568848)"
                                                                opacity="1" style={{ display: 'inherit' }}>
                                                                <g>
                                                                    <g transform="matrix(1,0,0,1,0,0)"
                                                                        opacity="1" style={{ display: 'block' }}>
                                                                        <path
                                                                            d=" M5.16,-8.69 C5.16,-8.69 3.45,-3.86 3.45,-3.86 C3.45,-3.86 6.87,-3.86 6.87,-3.86 M2.09,0 C2.09,0 0.39,0 0.39,0 C0.39,0 4.3,-10.59 4.3,-10.59 C4.3,-10.59 6.05,-10.59 6.05,-10.59 C6.05,-10.59 9.93,0 9.93,0 C9.93,0 8.23,0 8.23,0 C8.23,0 7.32,-2.59 7.32,-2.59 C7.32,-2.59 3,-2.59 3,-2.59 C3,-2.59 2.09,0 2.09,0">
                                                                        </path>
                                                                        <g opacity="1"
                                                                            transform="matrix(0.151329904794693,0,0,0.151329904794693,0,0)">
                                                                        </g>
                                                                    </g>
                                                                </g>
                                                            </g>
                                                            <g strokeLinecap="butt" strokeLinejoin="round"
                                                                strokeMiterlimit="4"
                                                                transform="matrix(1,0,0,1,-34.27364730834961,2.6278328895568848)"
                                                                opacity="1" style={{ display: 'inherit' }}>
                                                                <g>
                                                                    <g transform="matrix(1,0,0,1,0,0)"
                                                                        opacity="1" style={{ display: 'block' }}>
                                                                        <path
                                                                            d=" M2.07,0.95 C2.07,1.39 2.26,1.71 2.65,1.93 C3.03,2.15 3.51,2.25 4.09,2.25 C4.64,2.25 5.09,2.14 5.43,1.9 C5.78,1.66 5.95,1.35 5.95,0.95 C5.95,0.66 5.83,0.41 5.6,0.2 C5.37,0 4.93,-0.13 4.28,-0.18 C3.8,-0.21 3.37,-0.26 3,-0.32 C2.64,-0.13 2.4,0.08 2.27,0.3 C2.14,0.52 2.07,0.74 2.07,0.95 M4.09,-3.56 C4.55,-3.56 4.93,-3.68 5.21,-3.93 C5.5,-4.17 5.64,-4.52 5.64,-4.98 C5.64,-5.44 5.5,-5.8 5.21,-6.04 C4.93,-6.28 4.55,-6.4 4.09,-6.4 C3.61,-6.4 3.23,-6.28 2.94,-6.04 C2.66,-5.8 2.51,-5.44 2.51,-4.98 C2.51,-4.52 2.66,-4.17 2.94,-3.93 C3.23,-3.68 3.61,-3.56 4.09,-3.56 M4.09,-2.3 C3.69,-2.3 3.33,-2.35 3,-2.44 C3,-2.44 2.35,-1.8 2.35,-1.8 C2.46,-1.73 2.59,-1.67 2.75,-1.62 C2.92,-1.57 3.14,-1.52 3.44,-1.48 C3.73,-1.44 4.13,-1.4 4.63,-1.36 C5.63,-1.27 6.35,-1.03 6.79,-0.64 C7.24,-0.25 7.46,0.26 7.46,0.91 C7.46,1.35 7.34,1.77 7.1,2.17 C6.87,2.57 6.5,2.89 6,3.14 C5.5,3.39 4.86,3.51 4.09,3.51 C3.04,3.51 2.19,3.31 1.54,2.91 C0.89,2.51 0.56,1.91 0.56,1.1 C0.56,0.79 0.64,0.48 0.81,0.17 C0.98,-0.13 1.24,-0.42 1.6,-0.7 C1.39,-0.79 1.21,-0.89 1.05,-0.99 C0.9,-1.1 0.76,-1.21 0.64,-1.32 C0.64,-1.32 0.64,-1.68 0.64,-1.68 C0.64,-1.68 1.94,-3.01 1.94,-3.01 C1.35,-3.52 1.06,-4.18 1.06,-4.99 C1.06,-5.49 1.18,-5.94 1.41,-6.35 C1.65,-6.76 2,-7.08 2.45,-7.32 C2.91,-7.57 3.45,-7.69 4.09,-7.69 C4.51,-7.69 4.9,-7.63 5.27,-7.51 C5.27,-7.51 8.07,-7.51 8.07,-7.51 C8.07,-7.51 8.07,-6.45 8.07,-6.45 C8.07,-6.45 6.73,-6.37 6.73,-6.37 C6.98,-5.96 7.1,-5.5 7.1,-4.99 C7.1,-4.49 6.98,-4.04 6.74,-3.63 C6.5,-3.23 6.16,-2.91 5.71,-2.66 C5.26,-2.42 4.72,-2.3 4.09,-2.3">
                                                                        </path>
                                                                        <g opacity="1"
                                                                            transform="matrix(0.151329904794693,0,0,0.151329904794693,0,0)">
                                                                        </g>
                                                                    </g>
                                                                </g>
                                                            </g>
                                                            <g strokeLinecap="butt" strokeLinejoin="round"
                                                                strokeMiterlimit="4"
                                                                transform="matrix(1,0,0,1,-26.54068946838379,2.6278328895568848)"
                                                                opacity="1" style={{ display: 'inherit' }}>
                                                                <g>
                                                                    <g transform="matrix(1,0,0,1,0,0)"
                                                                        opacity="1" style={{ display: 'block' }}>
                                                                        <path
                                                                            d=" M4.52,-6.37 C3.99,-6.37 3.52,-6.21 3.1,-5.89 C2.69,-5.58 2.44,-5.1 2.35,-4.46 C2.35,-4.46 6.58,-4.46 6.58,-4.46 C6.55,-5.05 6.35,-5.51 5.96,-5.86 C5.58,-6.2 5.1,-6.37 4.52,-6.37 M4.52,0.18 C3.79,0.18 3.14,0.02 2.57,-0.31 C2,-0.64 1.55,-1.09 1.23,-1.68 C0.9,-2.26 0.74,-2.95 0.74,-3.72 C0.74,-4.51 0.9,-5.2 1.22,-5.8 C1.54,-6.39 1.98,-6.86 2.55,-7.19 C3.12,-7.52 3.78,-7.69 4.54,-7.69 C5.28,-7.69 5.92,-7.52 6.46,-7.2 C7.01,-6.87 7.43,-6.43 7.73,-5.89 C8.04,-5.34 8.19,-4.74 8.19,-4.09 C8.19,-3.99 8.18,-3.88 8.18,-3.76 C8.17,-3.64 8.17,-3.52 8.16,-3.37 C8.16,-3.37 2.32,-3.37 2.32,-3.37 C2.37,-2.65 2.61,-2.1 3.03,-1.72 C3.46,-1.34 3.96,-1.15 4.52,-1.15 C4.98,-1.15 5.36,-1.25 5.67,-1.46 C5.98,-1.67 6.2,-1.95 6.36,-2.3 C6.36,-2.3 7.96,-2.3 7.96,-2.3 C7.76,-1.59 7.36,-1 6.76,-0.53 C6.16,-0.06 5.41,0.18 4.52,0.18">
                                                                        </path>
                                                                        <g opacity="1"
                                                                            transform="matrix(0.151329904794693,0,0,0.151329904794693,0,0)">
                                                                        </g>
                                                                    </g>
                                                                </g>
                                                            </g>
                                                            <g strokeLinecap="butt" strokeLinejoin="round"
                                                                strokeMiterlimit="4"
                                                                transform="matrix(1,0,0,1,-18.459674835205078,2.6278328895568848)"
                                                                opacity="1" style={{ display: 'inherit' }}>
                                                                <g>
                                                                    <g transform="matrix(1,0,0,1,0,0)"
                                                                        opacity="1" style={{ display: 'block' }}>
                                                                        <path
                                                                            d=" M2.62,0 C2.62,0 1.01,0 1.01,0 C1.01,0 1.01,-7.51 1.01,-7.51 C1.01,-7.51 2.44,-7.51 2.44,-7.51 C2.44,-7.51 2.56,-6.19 2.56,-6.19 C2.79,-6.65 3.13,-7.02 3.58,-7.29 C4.03,-7.55 4.54,-7.69 5.13,-7.69 C6.04,-7.69 6.75,-7.41 7.27,-6.84 C7.79,-6.28 8.05,-5.43 8.05,-4.31 C8.05,-4.31 8.05,0 8.05,0 C8.05,0 6.46,0 6.46,0 C6.46,0 6.46,-4.15 6.46,-4.15 C6.46,-5.6 5.87,-6.33 4.68,-6.33 C4.08,-6.33 3.59,-6.11 3.2,-5.69 C2.81,-5.27 2.62,-4.66 2.62,-3.87">
                                                                        </path>
                                                                        <g opacity="1"
                                                                            transform="matrix(0.151329904794693,0,0,0.151329904794693,0,0)">
                                                                        </g>
                                                                    </g>
                                                                </g>
                                                            </g>
                                                            <g strokeLinecap="butt" strokeLinejoin="round"
                                                                strokeMiterlimit="4"
                                                                transform="matrix(1,0,0,1,-10.287858009338379,2.6278328895568848)"
                                                                opacity="1" style={{ display: 'inherit' }}>
                                                                <g>
                                                                    <g transform="matrix(1,0,0,1,0,0)"
                                                                        opacity="1" style={{ display: 'block' }}>
                                                                        <path
                                                                            d=" M5.4,0 C5.4,0 4.16,0 4.16,0 C3.43,0 2.84,-0.18 2.41,-0.54 C1.97,-0.9 1.76,-1.53 1.76,-2.45 C1.76,-2.45 1.76,-6.16 1.76,-6.16 C1.76,-6.16 0.47,-6.16 0.47,-6.16 C0.47,-6.16 0.47,-7.51 0.47,-7.51 C0.47,-7.51 1.76,-7.51 1.76,-7.51 C1.76,-7.51 1.95,-9.41 1.95,-9.41 C1.95,-9.41 3.36,-9.41 3.36,-9.41 C3.36,-9.41 3.36,-7.51 3.36,-7.51 C3.36,-7.51 5.48,-7.51 5.48,-7.51 C5.48,-7.51 5.48,-6.16 5.48,-6.16 C5.48,-6.16 3.36,-6.16 3.36,-6.16 C3.36,-6.16 3.36,-2.45 3.36,-2.45 C3.36,-2.04 3.45,-1.75 3.62,-1.6 C3.8,-1.44 4.11,-1.36 4.54,-1.36 C4.54,-1.36 5.4,-1.36 5.4,-1.36">
                                                                        </path>
                                                                        <g opacity="1"
                                                                            transform="matrix(0.151329904794693,0,0,0.151329904794693,0,0)">
                                                                        </g>
                                                                    </g>
                                                                </g>
                                                            </g>
                                                            <g strokeLinecap="butt" strokeLinejoin="round"
                                                                strokeMiterlimit="4"
                                                                transform="matrix(1,0,0,1,-4.930779933929443,2.6278328895568848)"
                                                                opacity="1" style={{ display: 'inherit' }}>
                                                                <g>
                                                                    <g transform="matrix(1,0,0,1,0,0)"
                                                                        opacity="1" style={{ display: 'block' }}>
                                                                        <path d="M0 0"></path>
                                                                        <g opacity="1"
                                                                            transform="matrix(0.151329904794693,0,0,0.151329904794693,0,0)">
                                                                        </g>
                                                                    </g>
                                                                </g>
                                                            </g>
                                                            <g strokeLinecap="butt" strokeLinejoin="round"
                                                                strokeMiterlimit="4"
                                                                transform="matrix(1,0,0,1,-1.8739159107208252,2.6278328895568848)"
                                                                opacity="1" style={{ display: 'inherit' }}>
                                                                <g>
                                                                    <g transform="matrix(1,0,0,1,0,0)"
                                                                        opacity="1" style={{ display: 'block' }}>
                                                                        <path
                                                                            d=" M2.68,-4.81 C2.68,-4.81 2.68,-1.32 2.68,-1.32 C2.68,-1.32 4.98,-1.32 4.98,-1.32 C5.62,-1.32 6.13,-1.47 6.48,-1.77 C6.84,-2.07 7.02,-2.5 7.02,-3.04 C7.02,-3.59 6.84,-4.02 6.46,-4.34 C6.09,-4.65 5.58,-4.81 4.95,-4.81 M2.68,-9.29 C2.68,-9.29 2.68,-6.05 2.68,-6.05 C2.68,-6.05 4.87,-6.05 4.87,-6.05 C5.49,-6.05 5.96,-6.2 6.28,-6.48 C6.6,-6.77 6.76,-7.17 6.76,-7.67 C6.76,-8.17 6.61,-8.56 6.29,-8.85 C5.97,-9.15 5.49,-9.29 4.84,-9.29 C4.84,-9.29 2.68,-9.29 2.68,-9.29 M5.19,0 C5.19,0 1.07,0 1.07,0 C1.07,0 1.07,-10.59 1.07,-10.59 C1.07,-10.59 5.07,-10.59 5.07,-10.59 C6.17,-10.59 7,-10.34 7.57,-9.82 C8.13,-9.31 8.41,-8.66 8.41,-7.88 C8.41,-7.21 8.23,-6.67 7.87,-6.27 C7.51,-5.87 7.07,-5.6 6.55,-5.46 C6.96,-5.38 7.32,-5.22 7.63,-4.98 C7.95,-4.74 8.2,-4.43 8.38,-4.07 C8.57,-3.71 8.66,-3.31 8.66,-2.89 C8.66,-2.35 8.52,-1.85 8.26,-1.41 C7.99,-0.98 7.6,-0.63 7.08,-0.38 C6.57,-0.13 5.94,0 5.19,0">
                                                                        </path>
                                                                        <g opacity="1"
                                                                            transform="matrix(0.151329904794693,0,0,0.151329904794693,0,0)">
                                                                        </g>
                                                                    </g>
                                                                </g>
                                                            </g>
                                                            <g strokeLinecap="butt" strokeLinejoin="round"
                                                                strokeMiterlimit="4"
                                                                transform="matrix(1,0,0,1,6.706489562988281,2.6278328895568848)"
                                                                opacity="1" style={{ display: 'inherit' }}>
                                                                <g>
                                                                    <g transform="matrix(1,0,0,1,0,0)"
                                                                        opacity="1" style={{ display: 'block' }}>
                                                                        <path
                                                                            d=" M2.62,0 C2.62,0 1.01,0 1.01,0 C1.01,0 1.01,-7.51 1.01,-7.51 C1.01,-7.51 2.45,-7.51 2.45,-7.51 C2.45,-7.51 2.59,-6.08 2.59,-6.08 C2.85,-6.58 3.22,-6.97 3.68,-7.26 C4.15,-7.54 4.72,-7.69 5.39,-7.69 C5.39,-7.69 5.39,-6.01 5.39,-6.01 C5.39,-6.01 4.95,-6.01 4.95,-6.01 C4.5,-6.01 4.11,-5.93 3.76,-5.79 C3.41,-5.64 3.14,-5.39 2.93,-5.05 C2.72,-4.7 2.62,-4.22 2.62,-3.6">
                                                                        </path>
                                                                        <g opacity="1"
                                                                            transform="matrix(0.151329904794693,0,0,0.151329904794693,0,0)">
                                                                        </g>
                                                                    </g>
                                                                </g>
                                                            </g>
                                                            <g strokeLinecap="butt" strokeLinejoin="round"
                                                                strokeMiterlimit="4"
                                                                transform="matrix(1,0,0,1,11.700374603271484,2.6278328895568848)"
                                                                opacity="1" style={{ display: 'inherit' }}>
                                                                <g>
                                                                    <g transform="matrix(1,0,0,1,0,0)"
                                                                        opacity="1" style={{ display: 'block' }}>
                                                                        <path
                                                                            d=" M2.72,0 C2.72,0 1.12,0 1.12,0 C1.12,0 1.12,-7.51 1.12,-7.51 C1.12,-7.51 2.72,-7.51 2.72,-7.51 M1.92,-8.93 C1.62,-8.93 1.37,-9.02 1.17,-9.21 C0.98,-9.4 0.88,-9.63 0.88,-9.91 C0.88,-10.19 0.98,-10.43 1.17,-10.62 C1.37,-10.8 1.62,-10.9 1.92,-10.9 C2.22,-10.9 2.47,-10.8 2.67,-10.62 C2.87,-10.43 2.97,-10.19 2.97,-9.91 C2.97,-9.63 2.87,-9.4 2.67,-9.21 C2.47,-9.02 2.22,-8.93 1.92,-8.93">
                                                                        </path>
                                                                        <g opacity="1"
                                                                            transform="matrix(0.151329904794693,0,0,0.151329904794693,0,0)">
                                                                        </g>
                                                                    </g>
                                                                </g>
                                                            </g>
                                                            <g strokeLinecap="butt" strokeLinejoin="round"
                                                                strokeMiterlimit="4"
                                                                transform="matrix(1,0,0,1,14.772372245788574,2.6278328895568848)"
                                                                opacity="1" style={{ display: 'inherit' }}>
                                                                <g>
                                                                    <g transform="matrix(1,0,0,1,0,0)"
                                                                        opacity="1" style={{ display: 'block' }}>
                                                                        <path
                                                                            d=" M4.57,0.18 C3.83,0.18 3.18,0.02 2.6,-0.32 C2.02,-0.65 1.56,-1.11 1.23,-1.7 C0.91,-2.29 0.74,-2.98 0.74,-3.75 C0.74,-4.53 0.91,-5.21 1.23,-5.8 C1.56,-6.39 2.02,-6.86 2.6,-7.19 C3.18,-7.52 3.83,-7.69 4.57,-7.69 C5.5,-7.69 6.28,-7.45 6.91,-6.96 C7.54,-6.48 7.94,-5.82 8.13,-4.99 C8.13,-4.99 6.45,-4.99 6.45,-4.99 C6.35,-5.41 6.12,-5.73 5.78,-5.96 C5.44,-6.19 5.03,-6.31 4.57,-6.31 C4.18,-6.31 3.81,-6.21 3.48,-6.02 C3.15,-5.82 2.88,-5.53 2.68,-5.15 C2.48,-4.77 2.38,-4.31 2.38,-3.75 C2.38,-3.2 2.48,-2.73 2.68,-2.35 C2.88,-1.97 3.15,-1.68 3.48,-1.48 C3.81,-1.28 4.18,-1.18 4.57,-1.18 C5.03,-1.18 5.44,-1.3 5.78,-1.53 C6.12,-1.76 6.35,-2.09 6.45,-2.51 C6.45,-2.51 8.13,-2.51 8.13,-2.51 C7.95,-1.7 7.55,-1.05 6.92,-0.56 C6.28,-0.07 5.5,0.18 4.57,0.18">
                                                                        </path>
                                                                        <g opacity="1"
                                                                            transform="matrix(0.151329904794693,0,0,0.151329904794693,0,0)">
                                                                        </g>
                                                                    </g>
                                                                </g>
                                                            </g>
                                                            <g strokeLinecap="butt" strokeLinejoin="round"
                                                                strokeMiterlimit="4"
                                                                transform="matrix(1,0,0,1,22.868520736694336,2.6278328895568848)"
                                                                opacity="1" style={{ display: 'inherit' }}>
                                                                <g>
                                                                    <g transform="matrix(1,0,0,1,0,0)"
                                                                        opacity="1" style={{ display: 'block' }}>
                                                                        <path
                                                                            d=" M2.62,0 C2.62,0 1.01,0 1.01,0 C1.01,0 1.01,-10.9 1.01,-10.9 C1.01,-10.9 2.62,-10.9 2.62,-10.9 C2.62,-10.9 2.62,-4.4 2.62,-4.4 C2.62,-4.4 5.49,-7.51 5.49,-7.51 C5.49,-7.51 7.42,-7.51 7.42,-7.51 C7.42,-7.51 4.22,-4.1 4.22,-4.1 C4.22,-4.1 7.88,0 7.88,0 C7.88,0 5.86,0 5.86,0 C5.86,0 2.62,-3.84 2.62,-3.84">
                                                                        </path>
                                                                        <g opacity="1"
                                                                            transform="matrix(0.151329904794693,0,0,0.151329904794693,0,0)">
                                                                        </g>
                                                                    </g>
                                                                </g>
                                                            </g>
                                                            <g strokeLinecap="butt" strokeLinejoin="round"
                                                                strokeMiterlimit="4"
                                                                transform="matrix(1,0,0,1,30.22315788269043,2.6278328895568848)"
                                                                opacity="1" style={{ display: 'inherit' }}>
                                                                <g>
                                                                    <g transform="matrix(1,0,0,1,0,0)"
                                                                        opacity="1" style={{ display: 'block' }}>
                                                                        <path
                                                                            d=" M4.01,0.18 C3.06,0.18 2.28,-0.05 1.66,-0.51 C1.05,-0.98 0.7,-1.59 0.61,-2.36 C0.61,-2.36 2.22,-2.36 2.22,-2.36 C2.31,-2.02 2.5,-1.72 2.8,-1.48 C3.1,-1.23 3.5,-1.1 4,-1.1 C4.48,-1.1 4.83,-1.21 5.05,-1.41 C5.28,-1.61 5.39,-1.84 5.39,-2.1 C5.39,-2.49 5.23,-2.75 4.93,-2.88 C4.62,-3.02 4.19,-3.14 3.65,-3.25 C3.22,-3.34 2.8,-3.47 2.38,-3.62 C1.96,-3.77 1.62,-3.98 1.34,-4.26 C1.06,-4.54 0.92,-4.91 0.92,-5.39 C0.92,-6.04 1.18,-6.59 1.68,-7.03 C2.18,-7.47 2.89,-7.69 3.8,-7.69 C4.64,-7.69 5.31,-7.49 5.83,-7.08 C6.35,-6.68 6.66,-6.11 6.75,-5.37 C6.75,-5.37 5.21,-5.37 5.21,-5.37 C5.16,-5.7 5.01,-5.95 4.76,-6.13 C4.51,-6.31 4.18,-6.4 3.77,-6.4 C3.36,-6.4 3.05,-6.32 2.83,-6.15 C2.61,-5.99 2.5,-5.77 2.5,-5.51 C2.5,-5.25 2.65,-5.04 2.96,-4.89 C3.27,-4.74 3.67,-4.6 4.18,-4.48 C4.68,-4.37 5.15,-4.24 5.58,-4.09 C6.01,-3.95 6.35,-3.73 6.61,-3.45 C6.88,-3.17 7.01,-2.75 7.01,-2.21 C7.02,-1.52 6.75,-0.95 6.21,-0.5 C5.67,-0.05 4.94,0.18 4.01,0.18">
                                                                        </path>
                                                                        <g opacity="1"
                                                                            transform="matrix(0.151329904794693,0,0,0.151329904794693,0,0)">
                                                                        </g>
                                                                    </g>
                                                                </g>
                                                            </g>
                                                        </g>
                                                        <g id="2142"
                                                            transform="matrix(1,0,0,1,109.62200164794922,139.44400024414062)"
                                                            opacity="1" style={{ display: 'block' }}>
                                                            <g opacity="1"
                                                                transform="matrix(1,0,0,1.0246399641036987,66.86799621582031,-97.39299774169922)">
                                                                <path fill="rgb(250,190,185)"
                                                                    fillOpacity="1"
                                                                    d=" M4.427499771118164,-2.00600004196167 C4.427499771118164,-2.00600004196167 4.427499771118164,2.00600004196167 4.427499771118164,2.00600004196167 C4.427499771118164,2.00600004196167 -4.427499771118164,2.00600004196167 -4.427499771118164,2.00600004196167 C-4.427499771118164,2.00600004196167 -4.427499771118164,-2.00600004196167 -4.427499771118164,-2.00600004196167 C-4.427499771118164,-2.00600004196167 4.427499771118164,-2.00600004196167 4.427499771118164,-2.00600004196167z">
                                                                </path>
                                                                <path strokeLinecap="butt"
                                                                    strokeLinejoin="miter" fillOpacity="0"
                                                                    strokeMiterlimit="4"
                                                                    stroke="rgb(255,255,255)"
                                                                    strokeOpacity="1" strokeWidth="0"
                                                                    d=" M4.427499771118164,-2.00600004196167 C4.427499771118164,-2.00600004196167 4.427499771118164,2.00600004196167 4.427499771118164,2.00600004196167 C4.427499771118164,2.00600004196167 -4.427499771118164,2.00600004196167 -4.427499771118164,2.00600004196167 C-4.427499771118164,2.00600004196167 -4.427499771118164,-2.00600004196167 -4.427499771118164,-2.00600004196167 C-4.427499771118164,-2.00600004196167 4.427499771118164,-2.00600004196167 4.427499771118164,-2.00600004196167z">
                                                                </path>
                                                            </g>
                                                            <g opacity="1"
                                                                transform="matrix(1,0,0,1.0613700151443481,66.86799621582031,-88.61000061035156)">
                                                                <path fill="rgb(250,190,185)"
                                                                    fillOpacity="1"
                                                                    d=" M4.427499771118164,-2.00600004196167 C4.427499771118164,-2.00600004196167 4.427499771118164,2.00600004196167 4.427499771118164,2.00600004196167 C4.427499771118164,2.00600004196167 -4.427499771118164,2.00600004196167 -4.427499771118164,2.00600004196167 C-4.427499771118164,2.00600004196167 -4.427499771118164,-2.00600004196167 -4.427499771118164,-2.00600004196167 C-4.427499771118164,-2.00600004196167 4.427499771118164,-2.00600004196167 4.427499771118164,-2.00600004196167z">
                                                                </path>
                                                                <path strokeLinecap="butt"
                                                                    strokeLinejoin="miter" fillOpacity="0"
                                                                    strokeMiterlimit="4"
                                                                    stroke="rgb(255,255,255)"
                                                                    strokeOpacity="1" strokeWidth="0"
                                                                    d=" M4.427499771118164,-2.00600004196167 C4.427499771118164,-2.00600004196167 4.427499771118164,2.00600004196167 4.427499771118164,2.00600004196167 C4.427499771118164,2.00600004196167 -4.427499771118164,2.00600004196167 -4.427499771118164,2.00600004196167 C-4.427499771118164,2.00600004196167 -4.427499771118164,-2.00600004196167 -4.427499771118164,-2.00600004196167 C-4.427499771118164,-2.00600004196167 4.427499771118164,-2.00600004196167 4.427499771118164,-2.00600004196167z">
                                                                </path>
                                                            </g>
                                                            <g opacity="1"
                                                                transform="matrix(1,0,0,1.0950100421905518,58.053001403808594,-93.00800323486328)">
                                                                <path fill="rgb(255,94,69)" fillOpacity="1"
                                                                    d=" M4.427499771118164,-2.00600004196167 C4.427499771118164,-2.00600004196167 4.427499771118164,2.00600004196167 4.427499771118164,2.00600004196167 C4.427499771118164,2.00600004196167 -4.427499771118164,2.00600004196167 -4.427499771118164,2.00600004196167 C-4.427499771118164,2.00600004196167 -4.427499771118164,-2.00600004196167 -4.427499771118164,-2.00600004196167 C-4.427499771118164,-2.00600004196167 4.427499771118164,-2.00600004196167 4.427499771118164,-2.00600004196167z">
                                                                </path>
                                                                <path strokeLinecap="butt"
                                                                    strokeLinejoin="miter" fillOpacity="0"
                                                                    strokeMiterlimit="4"
                                                                    stroke="rgb(255,255,255)"
                                                                    strokeOpacity="1" strokeWidth="0"
                                                                    d=" M4.427499771118164,-2.00600004196167 C4.427499771118164,-2.00600004196167 4.427499771118164,2.00600004196167 4.427499771118164,2.00600004196167 C4.427499771118164,2.00600004196167 -4.427499771118164,2.00600004196167 -4.427499771118164,2.00600004196167 C-4.427499771118164,2.00600004196167 -4.427499771118164,-2.00600004196167 -4.427499771118164,-2.00600004196167 C-4.427499771118164,-2.00600004196167 4.427499771118164,-2.00600004196167 4.427499771118164,-2.00600004196167z">
                                                                </path>
                                                            </g>
                                                            <g opacity="1"
                                                                transform="matrix(1,0,0,0.9637899994850159,58.05099868774414,-84.51799774169922)">
                                                                <path fill="rgb(255,94,69)" fillOpacity="1"
                                                                    d=" M4.427499771118164,-2.00600004196167 C4.427499771118164,-2.00600004196167 4.427499771118164,2.00600004196167 4.427499771118164,2.00600004196167 C4.427499771118164,2.00600004196167 -4.427499771118164,2.00600004196167 -4.427499771118164,2.00600004196167 C-4.427499771118164,2.00600004196167 -4.427499771118164,-2.00600004196167 -4.427499771118164,-2.00600004196167 C-4.427499771118164,-2.00600004196167 4.427499771118164,-2.00600004196167 4.427499771118164,-2.00600004196167z">
                                                                </path>
                                                                <path strokeLinecap="butt"
                                                                    strokeLinejoin="miter" fillOpacity="0"
                                                                    strokeMiterlimit="4"
                                                                    stroke="rgb(255,255,255)"
                                                                    strokeOpacity="1" strokeWidth="0"
                                                                    d=" M4.427499771118164,-2.00600004196167 C4.427499771118164,-2.00600004196167 4.427499771118164,2.00600004196167 4.427499771118164,2.00600004196167 C4.427499771118164,2.00600004196167 -4.427499771118164,2.00600004196167 -4.427499771118164,2.00600004196167 C-4.427499771118164,2.00600004196167 -4.427499771118164,-2.00600004196167 -4.427499771118164,-2.00600004196167 C-4.427499771118164,-2.00600004196167 4.427499771118164,-2.00600004196167 4.427499771118164,-2.00600004196167z">
                                                                </path>
                                                            </g>
                                                        </g>
                                                        <g id="2164"
                                                            transform="matrix(1,0,0,1,160.9199981689453,269.35400390625)"
                                                            opacity="1" style={{ display: 'block' }}>
                                                            <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                                                                <path fill="rgb(255,255,255)"
                                                                    fillOpacity="1"
                                                                    d=" M-131.02499389648438,-11.777000427246094 C-131.02499389648438,-11.777000427246094 129.40899658203125,-11.777000427246094 129.40899658203125,-11.777000427246094">
                                                                </path>
                                                                <path strokeLinecap="butt"
                                                                    strokeLinejoin="miter" fillOpacity="0"
                                                                    strokeMiterlimit="4"
                                                                    stroke="rgb(228,233,241)"
                                                                    strokeOpacity="1" strokeWidth="1"
                                                                    d=" M-131.02499389648438,-11.777000427246094 C-131.02499389648438,-11.777000427246094 129.40899658203125,-11.777000427246094 129.40899658203125,-11.777000427246094">
                                                                </path>
                                                            </g>
                                                        </g>
                                                        <g id="2165"
                                                            transform="matrix(1,0,0,1,161.59300231933594,228.0780029296875)"
                                                            opacity="1" style={{ display: 'block' }}>
                                                            <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                                                                <path fill="rgb(255,255,255)"
                                                                    fillOpacity="1"
                                                                    d=" M-131.02499389648438,-11.777000427246094 C-131.02499389648438,-11.777000427246094 129.40899658203125,-11.777000427246094 129.40899658203125,-11.777000427246094">
                                                                </path>
                                                                <path strokeLinecap="butt"
                                                                    strokeLinejoin="miter" fillOpacity="0"
                                                                    strokeMiterlimit="4"
                                                                    stroke="rgb(228,233,241)"
                                                                    strokeOpacity="1" strokeWidth="1"
                                                                    d=" M-131.02499389648438,-11.777000427246094 C-131.02499389648438,-11.777000427246094 129.40899658203125,-11.777000427246094 129.40899658203125,-11.777000427246094">
                                                                </path>
                                                            </g>
                                                        </g>
                                                    </g>
                                                    <g id="2182" clip-path="url(#__lottie_element_8)"
                                                        style={{ display: 'block' }}
                                                        transform="matrix(0.7991088032722473,0,0,0.7991088032722473,185.85598754882812,-302.4761962890625)"
                                                        opacity="1">
                                                        <g id="2144"
                                                            transform="matrix(1,0,0,1,209.72000122070312,140.64698791503906)"
                                                            opacity="1" style={{ display: 'block' }}>
                                                            <g opacity="1"
                                                                transform="matrix(1,0,0,1,0.052000001072883606,1.2120000123977661)">
                                                                <path fill="rgb(255,255,255)"
                                                                    fillOpacity="1"
                                                                    d=" M202.54750061035156,-121.09599304199219 C202.54750061035156,-121.09599304199219 202.54750061035156,121.09599304199219 202.54750061035156,121.09599304199219 C202.54750061035156,125.51119232177734 198.96270751953125,129.0959930419922 194.54750061035156,129.0959930419922 C194.54750061035156,129.0959930419922 -194.54750061035156,129.0959930419922 -194.54750061035156,129.0959930419922 C-198.96270751953125,129.0959930419922 -202.54750061035156,125.51119232177734 -202.54750061035156,121.09599304199219 C-202.54750061035156,121.09599304199219 -202.54750061035156,-121.09599304199219 -202.54750061035156,-121.09599304199219 C-202.54750061035156,-125.51119232177734 -198.96270751953125,-129.0959930419922 -194.54750061035156,-129.0959930419922 C-194.54750061035156,-129.0959930419922 194.54750061035156,-129.0959930419922 194.54750061035156,-129.0959930419922 C198.96270751953125,-129.0959930419922 202.54750061035156,-125.51119232177734 202.54750061035156,-121.09599304199219z">
                                                                </path>
                                                                <path stroke="url(#__lottie_element_77)"
                                                                    strokeLinecap="butt"
                                                                    strokeLinejoin="miter" fillOpacity="0"
                                                                    strokeMiterlimit="4" strokeOpacity="1"
                                                                    strokeWidth="0"
                                                                    d=" M202.54750061035156,-121.09599304199219 C202.54750061035156,-121.09599304199219 202.54750061035156,121.09599304199219 202.54750061035156,121.09599304199219 C202.54750061035156,125.51119232177734 198.96270751953125,129.0959930419922 194.54750061035156,129.0959930419922 C194.54750061035156,129.0959930419922 -194.54750061035156,129.0959930419922 -194.54750061035156,129.0959930419922 C-198.96270751953125,129.0959930419922 -202.54750061035156,125.51119232177734 -202.54750061035156,121.09599304199219 C-202.54750061035156,121.09599304199219 -202.54750061035156,-121.09599304199219 -202.54750061035156,-121.09599304199219 C-202.54750061035156,-125.51119232177734 -198.96270751953125,-129.0959930419922 -194.54750061035156,-129.0959930419922 C-194.54750061035156,-129.0959930419922 194.54750061035156,-129.0959930419922 194.54750061035156,-129.0959930419922 C198.96270751953125,-129.0959930419922 202.54750061035156,-125.51119232177734 202.54750061035156,-121.09599304199219z">
                                                                </path>
                                                            </g>
                                                        </g>
                                                        <g id="2147"
                                                            transform="matrix(1.0299999713897705,0,0,1.0299999713897705,202.3765869140625,143.74864196777344)"
                                                            opacity="1" style={{ display: 'block' }}>
                                                            <g opacity="1"
                                                                transform="matrix(1,0,0,1,114.18000030517578,-89.48799896240234)">
                                                                <path fill="rgb(255,255,255)"
                                                                    fillOpacity="1"
                                                                    d=" M69.26399993896484,0 C69.26399993896484,0 69.26399993896484,0 69.26399993896484,0 C69.26399993896484,9.716198921203613 61.37519836425781,17.604999542236328 51.659000396728516,17.604999542236328 C51.659000396728516,17.604999542236328 -51.659000396728516,17.604999542236328 -51.659000396728516,17.604999542236328 C-61.37519836425781,17.604999542236328 -69.26399993896484,9.716198921203613 -69.26399993896484,0 C-69.26399993896484,0 -69.26399993896484,0 -69.26399993896484,0 C-69.26399993896484,-9.716198921203613 -61.37519836425781,-17.604999542236328 -51.659000396728516,-17.604999542236328 C-51.659000396728516,-17.604999542236328 51.659000396728516,-17.604999542236328 51.659000396728516,-17.604999542236328 C61.37519836425781,-17.604999542236328 69.26399993896484,-9.716198921203613 69.26399993896484,0z">
                                                                </path>
                                                                <path strokeLinecap="butt"
                                                                    strokeLinejoin="miter" fillOpacity="0"
                                                                    strokeMiterlimit="4"
                                                                    stroke="rgb(223,228,233)"
                                                                    strokeOpacity="1" strokeWidth="1"
                                                                    d=" M69.26399993896484,0 C69.26399993896484,0 69.26399993896484,0 69.26399993896484,0 C69.26399993896484,9.716198921203613 61.37519836425781,17.604999542236328 51.659000396728516,17.604999542236328 C51.659000396728516,17.604999542236328 -51.659000396728516,17.604999542236328 -51.659000396728516,17.604999542236328 C-61.37519836425781,17.604999542236328 -69.26399993896484,9.716198921203613 -69.26399993896484,0 C-69.26399993896484,0 -69.26399993896484,0 -69.26399993896484,0 C-69.26399993896484,-9.716198921203613 -61.37519836425781,-17.604999542236328 -51.659000396728516,-17.604999542236328 C-51.659000396728516,-17.604999542236328 51.659000396728516,-17.604999542236328 51.659000396728516,-17.604999542236328 C61.37519836425781,-17.604999542236328 69.26399993896484,-9.716198921203613 69.26399993896484,0z">
                                                                </path>
                                                            </g>
                                                        </g>
                                                        <g id="2151"
                                                            transform="matrix(1,0,0,1,213.7010040283203,225.95901489257812)"
                                                            opacity="1" style={{ display: 'block' }}>
                                                            <g opacity="1"
                                                                transform="matrix(1,0,0,1,-94.22000122070312,-11.166999816894531)">
                                                                <path fill="rgb(255,255,255)"
                                                                    fillOpacity="1"
                                                                    d=" M86.00050354003906,-27.49449920654297 C86.00050354003906,-27.49449920654297 86.00050354003906,27.49449920654297 86.00050354003906,27.49449920654297 C86.00050354003906,31.357799530029297 82.86380004882812,34.49449920654297 79.00050354003906,34.49449920654297 C79.00050354003906,34.49449920654297 -79.00050354003906,34.49449920654297 -79.00050354003906,34.49449920654297 C-82.86380004882812,34.49449920654297 -86.00050354003906,31.357799530029297 -86.00050354003906,27.49449920654297 C-86.00050354003906,27.49449920654297 -86.00050354003906,-27.49449920654297 -86.00050354003906,-27.49449920654297 C-86.00050354003906,-31.357799530029297 -82.86380004882812,-34.49449920654297 -79.00050354003906,-34.49449920654297 C-79.00050354003906,-34.49449920654297 79.00050354003906,-34.49449920654297 79.00050354003906,-34.49449920654297 C82.86380004882812,-34.49449920654297 86.00050354003906,-31.357799530029297 86.00050354003906,-27.49449920654297z">
                                                                </path>
                                                                <path strokeLinecap="butt"
                                                                    strokeLinejoin="miter" fillOpacity="0"
                                                                    strokeMiterlimit="4"
                                                                    stroke="rgb(228,233,241)"
                                                                    strokeOpacity="1" strokeWidth="2"
                                                                    d=" M86.00050354003906,-27.49449920654297 C86.00050354003906,-27.49449920654297 86.00050354003906,27.49449920654297 86.00050354003906,27.49449920654297 C86.00050354003906,31.357799530029297 82.86380004882812,34.49449920654297 79.00050354003906,34.49449920654297 C79.00050354003906,34.49449920654297 -79.00050354003906,34.49449920654297 -79.00050354003906,34.49449920654297 C-82.86380004882812,34.49449920654297 -86.00050354003906,31.357799530029297 -86.00050354003906,27.49449920654297 C-86.00050354003906,27.49449920654297 -86.00050354003906,-27.49449920654297 -86.00050354003906,-27.49449920654297 C-86.00050354003906,-31.357799530029297 -82.86380004882812,-34.49449920654297 -79.00050354003906,-34.49449920654297 C-79.00050354003906,-34.49449920654297 79.00050354003906,-34.49449920654297 79.00050354003906,-34.49449920654297 C82.86380004882812,-34.49449920654297 86.00050354003906,-31.357799530029297 86.00050354003906,-27.49449920654297z">
                                                                </path>
                                                            </g>
                                                            <g opacity="1"
                                                                transform="matrix(1,0,0,1,-143.74600219726562,-9.753000259399414)">
                                                                <path fill="rgb(228,233,241)"
                                                                    fillOpacity="1"
                                                                    d=" M20.945999145507812,-19.614999771118164 C20.945999145507812,-19.614999771118164 20.945999145507812,19.614999771118164 20.945999145507812,19.614999771118164 C20.945999145507812,20.718799591064453 20.0497989654541,21.614999771118164 18.945999145507812,21.614999771118164 C18.945999145507812,21.614999771118164 -18.945999145507812,21.614999771118164 -18.945999145507812,21.614999771118164 C-20.0497989654541,21.614999771118164 -20.945999145507812,20.718799591064453 -20.945999145507812,19.614999771118164 C-20.945999145507812,19.614999771118164 -20.945999145507812,-19.614999771118164 -20.945999145507812,-19.614999771118164 C-20.945999145507812,-20.718799591064453 -20.0497989654541,-21.614999771118164 -18.945999145507812,-21.614999771118164 C-18.945999145507812,-21.614999771118164 18.945999145507812,-21.614999771118164 18.945999145507812,-21.614999771118164 C20.0497989654541,-21.614999771118164 20.945999145507812,-20.718799591064453 20.945999145507812,-19.614999771118164z">
                                                                </path>
                                                                <path strokeLinecap="butt"
                                                                    strokeLinejoin="miter" fillOpacity="0"
                                                                    strokeMiterlimit="4"
                                                                    stroke="rgb(228,233,241)"
                                                                    strokeOpacity="1" strokeWidth="2"
                                                                    d=" M20.945999145507812,-19.614999771118164 C20.945999145507812,-19.614999771118164 20.945999145507812,19.614999771118164 20.945999145507812,19.614999771118164 C20.945999145507812,20.718799591064453 20.0497989654541,21.614999771118164 18.945999145507812,21.614999771118164 C18.945999145507812,21.614999771118164 -18.945999145507812,21.614999771118164 -18.945999145507812,21.614999771118164 C-20.0497989654541,21.614999771118164 -20.945999145507812,20.718799591064453 -20.945999145507812,19.614999771118164 C-20.945999145507812,19.614999771118164 -20.945999145507812,-19.614999771118164 -20.945999145507812,-19.614999771118164 C-20.945999145507812,-20.718799591064453 -20.0497989654541,-21.614999771118164 -18.945999145507812,-21.614999771118164 C-18.945999145507812,-21.614999771118164 18.945999145507812,-21.614999771118164 18.945999145507812,-21.614999771118164 C20.0497989654541,-21.614999771118164 20.945999145507812,-20.718799591064453 20.945999145507812,-19.614999771118164z">
                                                                </path>
                                                            </g>
                                                        </g>
                                                        <g id="2152"
                                                            transform="matrix(1,0,0,1,402.2330017089844,142.5)"
                                                            opacity="1" style={{ display: 'block' }}>
                                                            <g opacity="1"
                                                                transform="matrix(1,0,0,1,-94.22000122070312,-11.166999816894531)">
                                                                <path fill="rgb(255,255,255)"
                                                                    fillOpacity="1"
                                                                    d=" M86.00050354003906,-27.49449920654297 C86.00050354003906,-27.49449920654297 86.00050354003906,27.49449920654297 86.00050354003906,27.49449920654297 C86.00050354003906,31.357799530029297 82.86380004882812,34.49449920654297 79.00050354003906,34.49449920654297 C79.00050354003906,34.49449920654297 -79.00050354003906,34.49449920654297 -79.00050354003906,34.49449920654297 C-82.86380004882812,34.49449920654297 -86.00050354003906,31.357799530029297 -86.00050354003906,27.49449920654297 C-86.00050354003906,27.49449920654297 -86.00050354003906,-27.49449920654297 -86.00050354003906,-27.49449920654297 C-86.00050354003906,-31.357799530029297 -82.86380004882812,-34.49449920654297 -79.00050354003906,-34.49449920654297 C-79.00050354003906,-34.49449920654297 79.00050354003906,-34.49449920654297 79.00050354003906,-34.49449920654297 C82.86380004882812,-34.49449920654297 86.00050354003906,-31.357799530029297 86.00050354003906,-27.49449920654297z">
                                                                </path>
                                                                <path strokeLinecap="butt"
                                                                    strokeLinejoin="miter" fillOpacity="0"
                                                                    strokeMiterlimit="4"
                                                                    stroke="rgb(228,233,241)"
                                                                    strokeOpacity="1" strokeWidth="2"
                                                                    d=" M86.00050354003906,-27.49449920654297 C86.00050354003906,-27.49449920654297 86.00050354003906,27.49449920654297 86.00050354003906,27.49449920654297 C86.00050354003906,31.357799530029297 82.86380004882812,34.49449920654297 79.00050354003906,34.49449920654297 C79.00050354003906,34.49449920654297 -79.00050354003906,34.49449920654297 -79.00050354003906,34.49449920654297 C-82.86380004882812,34.49449920654297 -86.00050354003906,31.357799530029297 -86.00050354003906,27.49449920654297 C-86.00050354003906,27.49449920654297 -86.00050354003906,-27.49449920654297 -86.00050354003906,-27.49449920654297 C-86.00050354003906,-31.357799530029297 -82.86380004882812,-34.49449920654297 -79.00050354003906,-34.49449920654297 C-79.00050354003906,-34.49449920654297 79.00050354003906,-34.49449920654297 79.00050354003906,-34.49449920654297 C82.86380004882812,-34.49449920654297 86.00050354003906,-31.357799530029297 86.00050354003906,-27.49449920654297z">
                                                                </path>
                                                            </g>
                                                            <g opacity="1"
                                                                transform="matrix(1,0,0,1,-143.74600219726562,-9.753000259399414)">
                                                                <path fill="rgb(228,233,241)"
                                                                    fillOpacity="1"
                                                                    d=" M20.945999145507812,-19.614999771118164 C20.945999145507812,-19.614999771118164 20.945999145507812,19.614999771118164 20.945999145507812,19.614999771118164 C20.945999145507812,20.718799591064453 20.0497989654541,21.614999771118164 18.945999145507812,21.614999771118164 C18.945999145507812,21.614999771118164 -18.945999145507812,21.614999771118164 -18.945999145507812,21.614999771118164 C-20.0497989654541,21.614999771118164 -20.945999145507812,20.718799591064453 -20.945999145507812,19.614999771118164 C-20.945999145507812,19.614999771118164 -20.945999145507812,-19.614999771118164 -20.945999145507812,-19.614999771118164 C-20.945999145507812,-20.718799591064453 -20.0497989654541,-21.614999771118164 -18.945999145507812,-21.614999771118164 C-18.945999145507812,-21.614999771118164 18.945999145507812,-21.614999771118164 18.945999145507812,-21.614999771118164 C20.0497989654541,-21.614999771118164 20.945999145507812,-20.718799591064453 20.945999145507812,-19.614999771118164z">
                                                                </path>
                                                                <path strokeLinecap="butt"
                                                                    strokeLinejoin="miter" fillOpacity="0"
                                                                    strokeMiterlimit="4"
                                                                    stroke="rgb(228,233,241)"
                                                                    strokeOpacity="1" strokeWidth="2"
                                                                    d=" M20.945999145507812,-19.614999771118164 C20.945999145507812,-19.614999771118164 20.945999145507812,19.614999771118164 20.945999145507812,19.614999771118164 C20.945999145507812,20.718799591064453 20.0497989654541,21.614999771118164 18.945999145507812,21.614999771118164 C18.945999145507812,21.614999771118164 -18.945999145507812,21.614999771118164 -18.945999145507812,21.614999771118164 C-20.0497989654541,21.614999771118164 -20.945999145507812,20.718799591064453 -20.945999145507812,19.614999771118164 C-20.945999145507812,19.614999771118164 -20.945999145507812,-19.614999771118164 -20.945999145507812,-19.614999771118164 C-20.945999145507812,-20.718799591064453 -20.0497989654541,-21.614999771118164 -18.945999145507812,-21.614999771118164 C-18.945999145507812,-21.614999771118164 18.945999145507812,-21.614999771118164 18.945999145507812,-21.614999771118164 C20.0497989654541,-21.614999771118164 20.945999145507812,-20.718799591064453 20.945999145507812,-19.614999771118164z">
                                                                </path>
                                                            </g>
                                                        </g>
                                                        <g id="2153"
                                                            transform="matrix(1,0,0,1,402.2330017089844,225.95901489257812)"
                                                            opacity="1" style={{ display: 'block' }}>
                                                            <g opacity="1"
                                                                transform="matrix(1,0,0,1,-94.22000122070312,-11.166999816894531)">
                                                                <path fill="rgb(255,255,255)"
                                                                    fillOpacity="1"
                                                                    d=" M86.00050354003906,-27.49449920654297 C86.00050354003906,-27.49449920654297 86.00050354003906,27.49449920654297 86.00050354003906,27.49449920654297 C86.00050354003906,31.357799530029297 82.86380004882812,34.49449920654297 79.00050354003906,34.49449920654297 C79.00050354003906,34.49449920654297 -79.00050354003906,34.49449920654297 -79.00050354003906,34.49449920654297 C-82.86380004882812,34.49449920654297 -86.00050354003906,31.357799530029297 -86.00050354003906,27.49449920654297 C-86.00050354003906,27.49449920654297 -86.00050354003906,-27.49449920654297 -86.00050354003906,-27.49449920654297 C-86.00050354003906,-31.357799530029297 -82.86380004882812,-34.49449920654297 -79.00050354003906,-34.49449920654297 C-79.00050354003906,-34.49449920654297 79.00050354003906,-34.49449920654297 79.00050354003906,-34.49449920654297 C82.86380004882812,-34.49449920654297 86.00050354003906,-31.357799530029297 86.00050354003906,-27.49449920654297z">
                                                                </path>
                                                                <path strokeLinecap="butt"
                                                                    strokeLinejoin="miter" fillOpacity="0"
                                                                    strokeMiterlimit="4"
                                                                    stroke="rgb(228,233,241)"
                                                                    strokeOpacity="1" strokeWidth="2"
                                                                    d=" M86.00050354003906,-27.49449920654297 C86.00050354003906,-27.49449920654297 86.00050354003906,27.49449920654297 86.00050354003906,27.49449920654297 C86.00050354003906,31.357799530029297 82.86380004882812,34.49449920654297 79.00050354003906,34.49449920654297 C79.00050354003906,34.49449920654297 -79.00050354003906,34.49449920654297 -79.00050354003906,34.49449920654297 C-82.86380004882812,34.49449920654297 -86.00050354003906,31.357799530029297 -86.00050354003906,27.49449920654297 C-86.00050354003906,27.49449920654297 -86.00050354003906,-27.49449920654297 -86.00050354003906,-27.49449920654297 C-86.00050354003906,-31.357799530029297 -82.86380004882812,-34.49449920654297 -79.00050354003906,-34.49449920654297 C-79.00050354003906,-34.49449920654297 79.00050354003906,-34.49449920654297 79.00050354003906,-34.49449920654297 C82.86380004882812,-34.49449920654297 86.00050354003906,-31.357799530029297 86.00050354003906,-27.49449920654297z">
                                                                </path>
                                                            </g>
                                                            <g opacity="1"
                                                                transform="matrix(1,0,0,1,-143.74600219726562,-9.753000259399414)">
                                                                <path fill="rgb(228,233,241)"
                                                                    fillOpacity="1"
                                                                    d=" M20.945999145507812,-19.614999771118164 C20.945999145507812,-19.614999771118164 20.945999145507812,19.614999771118164 20.945999145507812,19.614999771118164 C20.945999145507812,20.718799591064453 20.0497989654541,21.614999771118164 18.945999145507812,21.614999771118164 C18.945999145507812,21.614999771118164 -18.945999145507812,21.614999771118164 -18.945999145507812,21.614999771118164 C-20.0497989654541,21.614999771118164 -20.945999145507812,20.718799591064453 -20.945999145507812,19.614999771118164 C-20.945999145507812,19.614999771118164 -20.945999145507812,-19.614999771118164 -20.945999145507812,-19.614999771118164 C-20.945999145507812,-20.718799591064453 -20.0497989654541,-21.614999771118164 -18.945999145507812,-21.614999771118164 C-18.945999145507812,-21.614999771118164 18.945999145507812,-21.614999771118164 18.945999145507812,-21.614999771118164 C20.0497989654541,-21.614999771118164 20.945999145507812,-20.718799591064453 20.945999145507812,-19.614999771118164z">
                                                                </path>
                                                                <path strokeLinecap="butt"
                                                                    strokeLinejoin="miter" fillOpacity="0"
                                                                    strokeMiterlimit="4"
                                                                    stroke="rgb(228,233,241)"
                                                                    strokeOpacity="1" strokeWidth="2"
                                                                    d=" M20.945999145507812,-19.614999771118164 C20.945999145507812,-19.614999771118164 20.945999145507812,19.614999771118164 20.945999145507812,19.614999771118164 C20.945999145507812,20.718799591064453 20.0497989654541,21.614999771118164 18.945999145507812,21.614999771118164 C18.945999145507812,21.614999771118164 -18.945999145507812,21.614999771118164 -18.945999145507812,21.614999771118164 C-20.0497989654541,21.614999771118164 -20.945999145507812,20.718799591064453 -20.945999145507812,19.614999771118164 C-20.945999145507812,19.614999771118164 -20.945999145507812,-19.614999771118164 -20.945999145507812,-19.614999771118164 C-20.945999145507812,-20.718799591064453 -20.0497989654541,-21.614999771118164 -18.945999145507812,-21.614999771118164 C-18.945999145507812,-21.614999771118164 18.945999145507812,-21.614999771118164 18.945999145507812,-21.614999771118164 C20.0497989654541,-21.614999771118164 20.945999145507812,-20.718799591064453 20.945999145507812,-19.614999771118164z">
                                                                </path>
                                                            </g>
                                                        </g>
                                                        <g id="2023"
                                                            transform="matrix(1,0,0,1,322.30499267578125,224.8629913330078)"
                                                            opacity="1" style={{ display: 'block' }}>
                                                            <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                                                                <path fill="rgb(208,217,225)"
                                                                    fillOpacity="1"
                                                                    d=" M35.14550018310547,0 C35.14550018310547,0 35.14550018310547,0 35.14550018310547,0 C35.14550018310547,2.4449169635772705 33.16041564941406,4.429999828338623 30.715499877929688,4.429999828338623 C30.715499877929688,4.429999828338623 -30.715499877929688,4.429999828338623 -30.715499877929688,4.429999828338623 C-33.16041564941406,4.429999828338623 -35.14550018310547,2.4449169635772705 -35.14550018310547,0 C-35.14550018310547,0 -35.14550018310547,0 -35.14550018310547,0 C-35.14550018310547,-2.4449169635772705 -33.16041564941406,-4.429999828338623 -30.715499877929688,-4.429999828338623 C-30.715499877929688,-4.429999828338623 30.715499877929688,-4.429999828338623 30.715499877929688,-4.429999828338623 C33.16041564941406,-4.429999828338623 35.14550018310547,-2.4449169635772705 35.14550018310547,0z">
                                                                </path>
                                                            </g>
                                                        </g>
                                                        <g id="2024"
                                                            transform="matrix(1,0,0,1,327.32501220703125,207.73699951171875)"
                                                            opacity="1" style={{ display: 'block' }}>
                                                            <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                                                                <path fill="rgb(208,217,225)"
                                                                    fillOpacity="1"
                                                                    d=" M40.16600036621094,0 C40.16600036621094,0 40.16600036621094,0 40.16600036621094,0 C40.16600036621094,2.4449169635772705 38.18091583251953,4.429999828338623 35.736000061035156,4.429999828338623 C35.736000061035156,4.429999828338623 -35.736000061035156,4.429999828338623 -35.736000061035156,4.429999828338623 C-38.18091583251953,4.429999828338623 -40.16600036621094,2.4449169635772705 -40.16600036621094,0 C-40.16600036621094,0 -40.16600036621094,0 -40.16600036621094,0 C-40.16600036621094,-2.4449169635772705 -38.18091583251953,-4.429999828338623 -35.736000061035156,-4.429999828338623 C-35.736000061035156,-4.429999828338623 35.736000061035156,-4.429999828338623 35.736000061035156,-4.429999828338623 C38.18091583251953,-4.429999828338623 40.16600036621094,-2.4449169635772705 40.16600036621094,0z">
                                                                </path>
                                                            </g>
                                                        </g>
                                                        <g id="2026"
                                                            transform="matrix(1,0,0,1,140.37698364257812,224.8629913330078)"
                                                            opacity="1" style={{ display: 'block' }}>
                                                            <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                                                                <path fill="rgb(208,217,225)"
                                                                    fillOpacity="1"
                                                                    d=" M42.23350143432617,0 C42.23350143432617,0 42.23350143432617,0 42.23350143432617,0 C42.23350143432617,2.4449169635772705 40.248416900634766,4.429999828338623 37.80350112915039,4.429999828338623 C37.80350112915039,4.429999828338623 -37.80350112915039,4.429999828338623 -37.80350112915039,4.429999828338623 C-40.248416900634766,4.429999828338623 -42.23350143432617,2.4449169635772705 -42.23350143432617,0 C-42.23350143432617,0 -42.23350143432617,0 -42.23350143432617,0 C-42.23350143432617,-2.4449169635772705 -40.248416900634766,-4.429999828338623 -37.80350112915039,-4.429999828338623 C-37.80350112915039,-4.429999828338623 37.80350112915039,-4.429999828338623 37.80350112915039,-4.429999828338623 C40.248416900634766,-4.429999828338623 42.23350143432617,-2.4449169635772705 42.23350143432617,0z">
                                                                </path>
                                                            </g>
                                                        </g>
                                                        <g id="2027"
                                                            transform="matrix(1,0,0,1,136.24200439453125,207.73699951171875)"
                                                            opacity="1" style={{ display: 'block' }}>
                                                            <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                                                                <path fill="rgb(208,217,225)"
                                                                    fillOpacity="1"
                                                                    d=" M38.0984992980957,0 C38.0984992980957,0 38.0984992980957,0 38.0984992980957,0 C38.0984992980957,2.4449169635772705 36.1134147644043,4.429999828338623 33.66849899291992,4.429999828338623 C33.66849899291992,4.429999828338623 -33.66849899291992,4.429999828338623 -33.66849899291992,4.429999828338623 C-36.1134147644043,4.429999828338623 -38.0984992980957,2.4449169635772705 -38.0984992980957,0 C-38.0984992980957,0 -38.0984992980957,0 -38.0984992980957,0 C-38.0984992980957,-2.4449169635772705 -36.1134147644043,-4.429999828338623 -33.66849899291992,-4.429999828338623 C-33.66849899291992,-4.429999828338623 33.66849899291992,-4.429999828338623 33.66849899291992,-4.429999828338623 C36.1134147644043,-4.429999828338623 38.0984992980957,-2.4449169635772705 38.0984992980957,0z">
                                                                </path>
                                                            </g>
                                                        </g>
                                                        <g id="2029"
                                                            transform="matrix(1,0,0,1,327.32501220703125,140.989990234375)"
                                                            opacity="1" style={{ display: 'block' }}>
                                                            <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                                                                <path fill="rgb(208,217,225)"
                                                                    fillOpacity="1"
                                                                    d=" M40.16600036621094,0 C40.16600036621094,0 40.16600036621094,0 40.16600036621094,0 C40.16600036621094,2.4449169635772705 38.18091583251953,4.429999828338623 35.736000061035156,4.429999828338623 C35.736000061035156,4.429999828338623 -35.736000061035156,4.429999828338623 -35.736000061035156,4.429999828338623 C-38.18091583251953,4.429999828338623 -40.16600036621094,2.4449169635772705 -40.16600036621094,0 C-40.16600036621094,0 -40.16600036621094,0 -40.16600036621094,0 C-40.16600036621094,-2.4449169635772705 -38.18091583251953,-4.429999828338623 -35.736000061035156,-4.429999828338623 C-35.736000061035156,-4.429999828338623 35.736000061035156,-4.429999828338623 35.736000061035156,-4.429999828338623 C38.18091583251953,-4.429999828338623 40.16600036621094,-2.4449169635772705 40.16600036621094,0z">
                                                                </path>
                                                            </g>
                                                        </g>
                                                        <g id="2030"
                                                            transform="matrix(1,0,0,1,318.7610168457031,123.85599517822266)"
                                                            opacity="1" style={{ display: 'block' }}>
                                                            <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                                                                <path fill="rgb(208,217,225)"
                                                                    fillOpacity="1"
                                                                    d=" M31.60099983215332,0 C31.60099983215332,0 31.60099983215332,0 31.60099983215332,0 C31.60099983215332,2.4449169635772705 29.615917205810547,4.429999828338623 27.17099952697754,4.429999828338623 C27.17099952697754,4.429999828338623 -27.17099952697754,4.429999828338623 -27.17099952697754,4.429999828338623 C-29.615917205810547,4.429999828338623 -31.60099983215332,2.4449169635772705 -31.60099983215332,0 C-31.60099983215332,0 -31.60099983215332,0 -31.60099983215332,0 C-31.60099983215332,-2.4449169635772705 -29.615917205810547,-4.429999828338623 -27.17099952697754,-4.429999828338623 C-27.17099952697754,-4.429999828338623 27.17099952697754,-4.429999828338623 27.17099952697754,-4.429999828338623 C29.615917205810547,-4.429999828338623 31.60099983215332,-2.4449169635772705 31.60099983215332,0z">
                                                                </path>
                                                            </g>
                                                        </g>
                                                        <g id="2149" transform="matrix(1,0,0,1,212.5,142.5)"
                                                            opacity="1" style={{ display: 'block' }}>
                                                            <g opacity="1"
                                                                transform="matrix(1,0,0,1,-94.22000122070312,-11.166999816894531)">
                                                                <path fill="rgb(255,255,255)"
                                                                    fillOpacity="1"
                                                                    d=" M86.00050354003906,-27.49449920654297 C86.00050354003906,-27.49449920654297 86.00050354003906,27.49449920654297 86.00050354003906,27.49449920654297 C86.00050354003906,31.357799530029297 82.86380004882812,34.49449920654297 79.00050354003906,34.49449920654297 C79.00050354003906,34.49449920654297 -79.00050354003906,34.49449920654297 -79.00050354003906,34.49449920654297 C-82.86380004882812,34.49449920654297 -86.00050354003906,31.357799530029297 -86.00050354003906,27.49449920654297 C-86.00050354003906,27.49449920654297 -86.00050354003906,-27.49449920654297 -86.00050354003906,-27.49449920654297 C-86.00050354003906,-31.357799530029297 -82.86380004882812,-34.49449920654297 -79.00050354003906,-34.49449920654297 C-79.00050354003906,-34.49449920654297 79.00050354003906,-34.49449920654297 79.00050354003906,-34.49449920654297 C82.86380004882812,-34.49449920654297 86.00050354003906,-31.357799530029297 86.00050354003906,-27.49449920654297z">
                                                                </path>
                                                                <path strokeLinecap="butt"
                                                                    strokeLinejoin="miter" fillOpacity="0"
                                                                    strokeMiterlimit="4"
                                                                    stroke="rgb(228,233,241)"
                                                                    strokeOpacity="1" strokeWidth="2"
                                                                    d=" M86.00050354003906,-27.49449920654297 C86.00050354003906,-27.49449920654297 86.00050354003906,27.49449920654297 86.00050354003906,27.49449920654297 C86.00050354003906,31.357799530029297 82.86380004882812,34.49449920654297 79.00050354003906,34.49449920654297 C79.00050354003906,34.49449920654297 -79.00050354003906,34.49449920654297 -79.00050354003906,34.49449920654297 C-82.86380004882812,34.49449920654297 -86.00050354003906,31.357799530029297 -86.00050354003906,27.49449920654297 C-86.00050354003906,27.49449920654297 -86.00050354003906,-27.49449920654297 -86.00050354003906,-27.49449920654297 C-86.00050354003906,-31.357799530029297 -82.86380004882812,-34.49449920654297 -79.00050354003906,-34.49449920654297 C-79.00050354003906,-34.49449920654297 79.00050354003906,-34.49449920654297 79.00050354003906,-34.49449920654297 C82.86380004882812,-34.49449920654297 86.00050354003906,-31.357799530029297 86.00050354003906,-27.49449920654297z">
                                                                </path>
                                                            </g>
                                                            <g opacity="1"
                                                                transform="matrix(1,0,0,1,-143.74600219726562,-9.753000259399414)">
                                                                <path fill="rgb(228,233,241)"
                                                                    fillOpacity="1"
                                                                    d=" M20.945999145507812,-19.614999771118164 C20.945999145507812,-19.614999771118164 20.945999145507812,19.614999771118164 20.945999145507812,19.614999771118164 C20.945999145507812,20.718799591064453 20.0497989654541,21.614999771118164 18.945999145507812,21.614999771118164 C18.945999145507812,21.614999771118164 -18.945999145507812,21.614999771118164 -18.945999145507812,21.614999771118164 C-20.0497989654541,21.614999771118164 -20.945999145507812,20.718799591064453 -20.945999145507812,19.614999771118164 C-20.945999145507812,19.614999771118164 -20.945999145507812,-19.614999771118164 -20.945999145507812,-19.614999771118164 C-20.945999145507812,-20.718799591064453 -20.0497989654541,-21.614999771118164 -18.945999145507812,-21.614999771118164 C-18.945999145507812,-21.614999771118164 18.945999145507812,-21.614999771118164 18.945999145507812,-21.614999771118164 C20.0497989654541,-21.614999771118164 20.945999145507812,-20.718799591064453 20.945999145507812,-19.614999771118164z">
                                                                </path>
                                                                <path strokeLinecap="butt"
                                                                    strokeLinejoin="miter" fillOpacity="0"
                                                                    strokeMiterlimit="4"
                                                                    stroke="rgb(228,233,241)"
                                                                    strokeOpacity="1" strokeWidth="1"
                                                                    d=" M20.945999145507812,-19.614999771118164 C20.945999145507812,-19.614999771118164 20.945999145507812,19.614999771118164 20.945999145507812,19.614999771118164 C20.945999145507812,20.718799591064453 20.0497989654541,21.614999771118164 18.945999145507812,21.614999771118164 C18.945999145507812,21.614999771118164 -18.945999145507812,21.614999771118164 -18.945999145507812,21.614999771118164 C-20.0497989654541,21.614999771118164 -20.945999145507812,20.718799591064453 -20.945999145507812,19.614999771118164 C-20.945999145507812,19.614999771118164 -20.945999145507812,-19.614999771118164 -20.945999145507812,-19.614999771118164 C-20.945999145507812,-20.718799591064453 -20.0497989654541,-21.614999771118164 -18.945999145507812,-21.614999771118164 C-18.945999145507812,-21.614999771118164 18.945999145507812,-21.614999771118164 18.945999145507812,-21.614999771118164 C20.0497989654541,-21.614999771118164 20.945999145507812,-20.718799591064453 20.945999145507812,-19.614999771118164z">
                                                                </path>
                                                            </g>
                                                        </g>
                                                        <g id="2032"
                                                            transform="matrix(1,0,0,1,125.906005859375,140.989990234375)"
                                                            opacity="1" style={{ display: 'block' }}>
                                                            <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                                                                <path fill="rgb(208,217,225)"
                                                                    fillOpacity="1"
                                                                    d=" M27.761999130249023,0 C27.761999130249023,0 27.761999130249023,0 27.761999130249023,0 C27.761999130249023,2.4449169635772705 25.77691650390625,4.429999828338623 23.331998825073242,4.429999828338623 C23.331998825073242,4.429999828338623 -23.331998825073242,4.429999828338623 -23.331998825073242,4.429999828338623 C-25.77691650390625,4.429999828338623 -27.761999130249023,2.4449169635772705 -27.761999130249023,0 C-27.761999130249023,0 -27.761999130249023,0 -27.761999130249023,0 C-27.761999130249023,-2.4449169635772705 -25.77691650390625,-4.429999828338623 -23.331998825073242,-4.429999828338623 C-23.331998825073242,-4.429999828338623 23.331998825073242,-4.429999828338623 23.331998825073242,-4.429999828338623 C25.77691650390625,-4.429999828338623 27.761999130249023,-2.4449169635772705 27.761999130249023,0z">
                                                                </path>
                                                            </g>
                                                        </g>
                                                        <g id="2033"
                                                            transform="matrix(1,0,0,1,136.24200439453125,123.85599517822266)"
                                                            opacity="1" style={{ display: 'block' }}>
                                                            <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                                                                <path fill="rgb(208,217,225)"
                                                                    fillOpacity="1"
                                                                    d=" M38.0984992980957,0 C38.0984992980957,0 38.0984992980957,0 38.0984992980957,0 C38.0984992980957,2.4449169635772705 36.1134147644043,4.429999828338623 33.66849899291992,4.429999828338623 C33.66849899291992,4.429999828338623 -33.66849899291992,4.429999828338623 -33.66849899291992,4.429999828338623 C-36.1134147644043,4.429999828338623 -38.0984992980957,2.4449169635772705 -38.0984992980957,0 C-38.0984992980957,0 -38.0984992980957,0 -38.0984992980957,0 C-38.0984992980957,-2.4449169635772705 -36.1134147644043,-4.429999828338623 -33.66849899291992,-4.429999828338623 C-33.66849899291992,-4.429999828338623 33.66849899291992,-4.429999828338623 33.66849899291992,-4.429999828338623 C36.1134147644043,-4.429999828338623 38.0984992980957,-2.4449169635772705 38.0984992980957,0z">
                                                                </path>
                                                            </g>
                                                        </g>
                                                        <g id="2034"
                                                            transform="matrix(1,0,0,1,94.41300201416016,56.347999572753906)"
                                                            opacity="1" fill="rgb(27,49,57)" font-size="24"
                                                            font-family="DM Sans" font-style={{}}
                                                            font-weight="500" aria-data-label="Build agent"
                                                            style={{ display: 'block' }}>
                                                            <g strokeLinecap="butt" strokeLinejoin="round"
                                                                strokeMiterlimit="4"
                                                                transform="matrix(1,0,0,1,-62.892822265625,4.167590141296387)"
                                                                opacity="1" style={{ display: 'inherit' }}>
                                                                <g>
                                                                    <g transform="matrix(1,0,0,1,0,0)"
                                                                        opacity="1" style={{ display: 'block' }}>
                                                                        <path
                                                                            d=" M4.25,-7.63 C4.25,-7.63 4.25,-2.09 4.25,-2.09 C4.25,-2.09 7.9,-2.09 7.9,-2.09 C8.92,-2.09 9.72,-2.33 10.28,-2.81 C10.85,-3.29 11.14,-3.96 11.14,-4.82 C11.14,-5.69 10.84,-6.37 10.25,-6.88 C9.66,-7.38 8.86,-7.63 7.85,-7.63 M4.25,-14.74 C4.25,-14.74 4.25,-9.6 4.25,-9.6 C4.25,-9.6 7.73,-9.6 7.73,-9.6 C8.7,-9.6 9.45,-9.83 9.96,-10.28 C10.47,-10.74 10.73,-11.37 10.73,-12.17 C10.73,-12.95 10.48,-13.58 9.97,-14.04 C9.47,-14.5 8.7,-14.74 7.68,-14.74 C7.68,-14.74 4.25,-14.74 4.25,-14.74 M8.23,0 C8.23,0 1.7,0 1.7,0 C1.7,0 1.7,-16.8 1.7,-16.8 C1.7,-16.8 8.04,-16.8 8.04,-16.8 C9.78,-16.8 11.1,-16.39 12,-15.58 C12.9,-14.76 13.34,-13.74 13.34,-12.5 C13.34,-11.43 13.06,-10.58 12.48,-9.95 C11.9,-9.32 11.21,-8.89 10.39,-8.66 C11.03,-8.54 11.6,-8.28 12.11,-7.9 C12.61,-7.51 13.01,-7.03 13.3,-6.46 C13.58,-5.88 13.73,-5.26 13.73,-4.58 C13.73,-3.72 13.52,-2.94 13.09,-2.24 C12.67,-1.55 12.05,-1 11.23,-0.6 C10.42,-0.2 9.42,0 8.23,0">
                                                                        </path>
                                                                        <g opacity="1"
                                                                            transform="matrix(0.23999999463558197,0,0,0.23999999463558197,0,0)">
                                                                        </g>
                                                                    </g>
                                                                </g>
                                                            </g>
                                                            <g strokeLinecap="butt" strokeLinejoin="round"
                                                                strokeMiterlimit="4"
                                                                transform="matrix(1,0,0,1,-49.28481674194336,4.167590141296387)"
                                                                opacity="1" style={{ display: 'inherit' }}>
                                                                <g>
                                                                    <g transform="matrix(1,0,0,1,0,0)"
                                                                        opacity="1" style={{ display: 'block' }}>
                                                                        <path
                                                                            d=" M6,0.29 C4.56,0.29 3.43,-0.16 2.6,-1.06 C1.78,-1.95 1.37,-3.29 1.37,-5.06 C1.37,-5.06 1.37,-11.9 1.37,-11.9 C1.37,-11.9 3.91,-11.9 3.91,-11.9 C3.91,-11.9 3.91,-5.33 3.91,-5.33 C3.91,-3.02 4.86,-1.87 6.74,-1.87 C7.69,-1.87 8.46,-2.21 9.07,-2.88 C9.68,-3.55 9.98,-4.51 9.98,-5.76 C9.98,-5.76 9.98,-11.9 9.98,-11.9 C9.98,-11.9 12.53,-11.9 12.53,-11.9 C12.53,-11.9 12.53,0 12.53,0 C12.53,0 10.27,0 10.27,0 C10.27,0 10.08,-2.09 10.08,-2.09 C9.71,-1.35 9.17,-0.77 8.46,-0.35 C7.75,0.08 6.93,0.29 6,0.29">
                                                                        </path>
                                                                        <g opacity="1"
                                                                            transform="matrix(0.23999999463558197,0,0,0.23999999463558197,0,0)">
                                                                        </g>
                                                                    </g>
                                                                </g>
                                                            </g>
                                                            <g strokeLinecap="butt" strokeLinejoin="round"
                                                                strokeMiterlimit="4"
                                                                transform="matrix(1,0,0,1,-36.32482147216797,4.167590141296387)"
                                                                opacity="1" style={{ display: 'inherit' }}>
                                                                <g>
                                                                    <g transform="matrix(1,0,0,1,0,0)"
                                                                        opacity="1" style={{ display: 'block' }}>
                                                                        <path
                                                                            d=" M4.32,0 C4.32,0 1.78,0 1.78,0 C1.78,0 1.78,-11.9 1.78,-11.9 C1.78,-11.9 4.32,-11.9 4.32,-11.9 M3.05,-14.16 C2.57,-14.16 2.17,-14.31 1.86,-14.6 C1.55,-14.9 1.39,-15.27 1.39,-15.72 C1.39,-16.17 1.55,-16.54 1.86,-16.84 C2.17,-17.13 2.57,-17.28 3.05,-17.28 C3.53,-17.28 3.92,-17.13 4.24,-16.84 C4.55,-16.54 4.7,-16.17 4.7,-15.72 C4.7,-15.27 4.55,-14.9 4.24,-14.6 C3.92,-14.31 3.53,-14.16 3.05,-14.16">
                                                                        </path>
                                                                        <g opacity="1"
                                                                            transform="matrix(0.23999999463558197,0,0,0.23999999463558197,0,0)">
                                                                        </g>
                                                                    </g>
                                                                </g>
                                                            </g>
                                                            <g strokeLinecap="butt" strokeLinejoin="round"
                                                                strokeMiterlimit="4"
                                                                transform="matrix(1,0,0,1,-31.452821731567383,4.167590141296387)"
                                                                opacity="1" style={{ display: 'inherit' }}>
                                                                <g>
                                                                    <g transform="matrix(1,0,0,1,0,0)"
                                                                        opacity="1" style={{ display: 'block' }}>
                                                                        <path
                                                                            d=" M4.15,0 C4.15,0 1.61,0 1.61,0 C1.61,0 1.61,-17.28 1.61,-17.28 C1.61,-17.28 4.15,-17.28 4.15,-17.28">
                                                                        </path>
                                                                        <g opacity="1"
                                                                            transform="matrix(0.23999999463558197,0,0,0.23999999463558197,0,0)">
                                                                        </g>
                                                                    </g>
                                                                </g>
                                                            </g>
                                                            <g strokeLinecap="butt" strokeLinejoin="round"
                                                                strokeMiterlimit="4"
                                                                transform="matrix(1,0,0,1,-26.892818450927734,4.167590141296387)"
                                                                opacity="1" style={{ display: 'inherit' }}>
                                                                <g>
                                                                    <g transform="matrix(1,0,0,1,0,0)"
                                                                        opacity="1" style={{ display: 'block' }}>
                                                                        <path
                                                                            d=" M7.49,-1.92 C8.58,-1.92 9.47,-2.3 10.16,-3.05 C10.86,-3.8 11.21,-4.77 11.21,-5.95 C11.21,-7.15 10.86,-8.12 10.16,-8.87 C9.47,-9.61 8.58,-9.98 7.49,-9.98 C6.4,-9.98 5.5,-9.61 4.8,-8.87 C4.1,-8.12 3.74,-7.15 3.74,-5.95 C3.74,-5.17 3.9,-4.47 4.22,-3.86 C4.54,-3.26 4.99,-2.78 5.56,-2.44 C6.12,-2.09 6.77,-1.92 7.49,-1.92 M7.03,0.29 C5.88,0.29 4.86,0.02 3.98,-0.53 C3.1,-1.07 2.42,-1.82 1.92,-2.76 C1.42,-3.7 1.18,-4.78 1.18,-5.98 C1.18,-7.18 1.42,-8.24 1.92,-9.18 C2.42,-10.12 3.11,-10.85 4,-11.39 C4.88,-11.92 5.9,-12.19 7.06,-12.19 C8,-12.19 8.83,-12.01 9.54,-11.64 C10.25,-11.27 10.81,-10.75 11.21,-10.08 C11.21,-10.08 11.21,-17.28 11.21,-17.28 C11.21,-17.28 13.75,-17.28 13.75,-17.28 C13.75,-17.28 13.75,0 13.75,0 C13.75,0 11.47,0 11.47,0 C11.47,0 11.21,-1.85 11.21,-1.85 C10.82,-1.29 10.3,-0.79 9.62,-0.36 C8.95,0.07 8.09,0.29 7.03,0.29">
                                                                        </path>
                                                                        <g opacity="1"
                                                                            transform="matrix(0.23999999463558197,0,0,0.23999999463558197,0,0)">
                                                                        </g>
                                                                    </g>
                                                                </g>
                                                            </g>
                                                            <g strokeLinecap="butt" strokeLinejoin="round"
                                                                strokeMiterlimit="4"
                                                                transform="matrix(1,0,0,1,-12.732818603515625,4.167590141296387)"
                                                                opacity="1" style={{ display: 'inherit' }}>
                                                                <g>
                                                                    <g transform="matrix(1,0,0,1,0,0)"
                                                                        opacity="1" style={{ display: 'block' }}>
                                                                        <path d="M0 0"></path>
                                                                        <g opacity="1"
                                                                            transform="matrix(0.23999999463558197,0,0,0.23999999463558197,0,0)">
                                                                        </g>
                                                                    </g>
                                                                </g>
                                                            </g>
                                                            <g strokeLinecap="butt" strokeLinejoin="round"
                                                                strokeMiterlimit="4"
                                                                transform="matrix(1,0,0,1,-7.884820938110352,4.167590141296387)"
                                                                opacity="1" style={{ display: 'inherit' }}>
                                                                <g>
                                                                    <g transform="matrix(1,0,0,1,0,0)"
                                                                        opacity="1" style={{ display: 'block' }}>
                                                                        <path
                                                                            d=" M6.14,-1.78 C6.83,-1.78 7.41,-1.94 7.88,-2.27 C8.36,-2.6 8.72,-3.03 8.99,-3.58 C9.25,-4.12 9.42,-4.72 9.48,-5.38 C9.48,-5.38 6.65,-5.38 6.65,-5.38 C5.64,-5.38 4.92,-5.2 4.5,-4.85 C4.08,-4.5 3.86,-4.06 3.86,-3.53 C3.86,-2.98 4.07,-2.56 4.48,-2.24 C4.88,-1.93 5.44,-1.78 6.14,-1.78 M5.64,0.29 C4.63,0.29 3.8,0.12 3.14,-0.22 C2.49,-0.55 2,-1 1.68,-1.55 C1.36,-2.1 1.2,-2.7 1.2,-3.36 C1.2,-4.51 1.65,-5.42 2.54,-6.1 C3.44,-6.77 4.72,-7.1 6.38,-7.1 C6.38,-7.1 9.5,-7.1 9.5,-7.1 C9.5,-7.1 9.5,-7.32 9.5,-7.32 C9.5,-8.25 9.25,-8.94 8.75,-9.41 C8.24,-9.87 7.59,-10.1 6.79,-10.1 C6.09,-10.1 5.48,-9.93 4.96,-9.59 C4.44,-9.24 4.12,-8.74 4.01,-8.06 C4.01,-8.06 1.46,-8.06 1.46,-8.06 C1.54,-8.93 1.84,-9.67 2.34,-10.28 C2.84,-10.9 3.48,-11.37 4.26,-11.7 C5.04,-12.03 5.89,-12.19 6.82,-12.19 C8.48,-12.19 9.77,-11.76 10.68,-10.88 C11.59,-10.01 12.05,-8.82 12.05,-7.32 C12.05,-7.32 12.05,0 12.05,0 C12.05,0 9.84,0 9.84,0 C9.84,0 9.62,-2.04 9.62,-2.04 C9.29,-1.38 8.8,-0.83 8.16,-0.38 C7.52,0.06 6.68,0.29 5.64,0.29">
                                                                        </path>
                                                                        <g opacity="1"
                                                                            transform="matrix(0.23999999463558197,0,0,0.23999999463558197,0,0)">
                                                                        </g>
                                                                    </g>
                                                                </g>
                                                            </g>
                                                            <g strokeLinecap="butt" strokeLinejoin="round"
                                                                strokeMiterlimit="4"
                                                                transform="matrix(1,0,0,1,4.331180572509766,4.167590141296387)"
                                                                opacity="1" style={{ display: 'inherit' }}>
                                                                <g>
                                                                    <g transform="matrix(1,0,0,1,0,0)"
                                                                        opacity="1" style={{ display: 'block' }}>
                                                                        <path
                                                                            d=" M3.29,1.51 C3.29,2.2 3.59,2.72 4.2,3.06 C4.81,3.4 5.57,3.58 6.48,3.58 C7.36,3.58 8.07,3.39 8.62,3.01 C9.16,2.64 9.43,2.14 9.43,1.51 C9.43,1.05 9.25,0.65 8.88,0.32 C8.51,0 7.82,-0.21 6.79,-0.29 C6.02,-0.34 5.34,-0.41 4.75,-0.5 C4.19,-0.2 3.81,0.13 3.6,0.48 C3.39,0.83 3.29,1.18 3.29,1.51 M6.48,-5.64 C7.22,-5.64 7.81,-5.84 8.27,-6.23 C8.72,-6.62 8.95,-7.18 8.95,-7.9 C8.95,-8.63 8.72,-9.19 8.27,-9.58 C7.81,-9.96 7.22,-10.15 6.48,-10.15 C5.73,-10.15 5.12,-9.96 4.67,-9.58 C4.21,-9.19 3.98,-8.63 3.98,-7.9 C3.98,-7.18 4.21,-6.62 4.67,-6.23 C5.12,-5.84 5.73,-5.64 6.48,-5.64 M6.48,-3.65 C5.86,-3.65 5.28,-3.72 4.75,-3.86 C4.75,-3.86 3.72,-2.86 3.72,-2.86 C3.9,-2.74 4.11,-2.65 4.37,-2.57 C4.62,-2.49 4.98,-2.42 5.45,-2.35 C5.91,-2.29 6.54,-2.22 7.34,-2.16 C8.93,-2.02 10.07,-1.64 10.78,-1.02 C11.48,-0.4 11.83,0.42 11.83,1.44 C11.83,2.14 11.64,2.81 11.27,3.44 C10.89,4.08 10.31,4.59 9.52,4.98 C8.72,5.37 7.71,5.57 6.48,5.57 C4.82,5.57 3.47,5.25 2.44,4.62 C1.4,3.99 0.89,3.03 0.89,1.75 C0.89,1.26 1.02,0.76 1.28,0.28 C1.55,-0.21 1.97,-0.67 2.54,-1.1 C2.21,-1.25 1.92,-1.4 1.67,-1.57 C1.42,-1.74 1.2,-1.91 1.01,-2.09 C1.01,-2.09 1.01,-2.66 1.01,-2.66 C1.01,-2.66 3.07,-4.78 3.07,-4.78 C2.14,-5.58 1.68,-6.62 1.68,-7.92 C1.68,-8.7 1.87,-9.42 2.24,-10.07 C2.62,-10.72 3.17,-11.23 3.89,-11.62 C4.61,-12 5.47,-12.19 6.48,-12.19 C7.15,-12.19 7.78,-12.1 8.35,-11.9 C8.35,-11.9 12.79,-11.9 12.79,-11.9 C12.79,-11.9 12.79,-10.22 12.79,-10.22 C12.79,-10.22 10.68,-10.1 10.68,-10.1 C11.06,-9.45 11.26,-8.72 11.26,-7.92 C11.26,-7.12 11.07,-6.4 10.69,-5.76 C10.32,-5.12 9.77,-4.61 9.06,-4.22 C8.35,-3.84 7.49,-3.65 6.48,-3.65">
                                                                        </path>
                                                                        <g opacity="1"
                                                                            transform="matrix(0.23999999463558197,0,0,0.23999999463558197,0,0)">
                                                                        </g>
                                                                    </g>
                                                                </g>
                                                            </g>
                                                            <g strokeLinecap="butt" strokeLinejoin="round"
                                                                strokeMiterlimit="4"
                                                                transform="matrix(1,0,0,1,16.595182418823242,4.167590141296387)"
                                                                opacity="1" style={{ display: 'inherit' }}>
                                                                <g>
                                                                    <g transform="matrix(1,0,0,1,0,0)"
                                                                        opacity="1" style={{ display: 'block' }}>
                                                                        <path
                                                                            d=" M7.18,-10.1 C6.33,-10.1 5.58,-9.85 4.92,-9.35 C4.26,-8.84 3.86,-8.09 3.72,-7.08 C3.72,-7.08 10.44,-7.08 10.44,-7.08 C10.39,-8.01 10.06,-8.74 9.46,-9.29 C8.85,-9.83 8.09,-10.1 7.18,-10.1 M7.18,0.29 C6.01,0.29 4.97,0.03 4.07,-0.49 C3.16,-1.01 2.46,-1.74 1.94,-2.66 C1.43,-3.59 1.18,-4.67 1.18,-5.9 C1.18,-7.15 1.43,-8.25 1.93,-9.19 C2.44,-10.14 3.14,-10.87 4.04,-11.4 C4.95,-11.93 6,-12.19 7.2,-12.19 C8.37,-12.19 9.38,-11.93 10.25,-11.41 C11.11,-10.89 11.78,-10.2 12.26,-9.34 C12.74,-8.47 12.98,-7.52 12.98,-6.48 C12.98,-6.32 12.98,-6.15 12.97,-5.96 C12.96,-5.78 12.95,-5.58 12.94,-5.35 C12.94,-5.35 3.67,-5.35 3.67,-5.35 C3.75,-4.2 4.13,-3.32 4.81,-2.72 C5.49,-2.12 6.28,-1.82 7.18,-1.82 C7.9,-1.82 8.5,-1.99 8.99,-2.32 C9.48,-2.64 9.84,-3.09 10.08,-3.65 C10.08,-3.65 12.62,-3.65 12.62,-3.65 C12.3,-2.53 11.67,-1.59 10.72,-0.84 C9.76,-0.09 8.58,0.29 7.18,0.29">
                                                                        </path>
                                                                        <g opacity="1"
                                                                            transform="matrix(0.23999999463558197,0,0,0.23999999463558197,0,0)">
                                                                        </g>
                                                                    </g>
                                                                </g>
                                                            </g>
                                                            <g strokeLinecap="butt" strokeLinejoin="round"
                                                                strokeMiterlimit="4"
                                                                transform="matrix(1,0,0,1,29.411178588867188,4.167590141296387)"
                                                                opacity="1" style={{ display: 'inherit' }}>
                                                                <g>
                                                                    <g transform="matrix(1,0,0,1,0,0)"
                                                                        opacity="1" style={{ display: 'block' }}>
                                                                        <path
                                                                            d=" M4.15,0 C4.15,0 1.61,0 1.61,0 C1.61,0 1.61,-11.9 1.61,-11.9 C1.61,-11.9 3.86,-11.9 3.86,-11.9 C3.86,-11.9 4.06,-9.82 4.06,-9.82 C4.42,-10.55 4.96,-11.13 5.68,-11.56 C6.39,-11.98 7.21,-12.19 8.14,-12.19 C9.58,-12.19 10.71,-11.74 11.53,-10.85 C12.36,-9.95 12.77,-8.62 12.77,-6.84 C12.77,-6.84 12.77,0 12.77,0 C12.77,0 10.25,0 10.25,0 C10.25,0 10.25,-6.58 10.25,-6.58 C10.25,-8.88 9.3,-10.03 7.42,-10.03 C6.47,-10.03 5.69,-9.7 5.08,-9.02 C4.46,-8.35 4.15,-7.39 4.15,-6.14">
                                                                        </path>
                                                                        <g opacity="1"
                                                                            transform="matrix(0.23999999463558197,0,0,0.23999999463558197,0,0)">
                                                                        </g>
                                                                    </g>
                                                                </g>
                                                            </g>
                                                            <g strokeLinecap="butt" strokeLinejoin="round"
                                                                strokeMiterlimit="4"
                                                                transform="matrix(1,0,0,1,42.37118148803711,4.167590141296387)"
                                                                opacity="1" style={{ display: 'inherit' }}>
                                                                <g>
                                                                    <g transform="matrix(1,0,0,1,0,0)"
                                                                        opacity="1" style={{ display: 'block' }}>
                                                                        <path
                                                                            d=" M8.57,0 C8.57,0 6.6,0 6.6,0 C5.43,0 4.5,-0.28 3.82,-0.85 C3.13,-1.42 2.78,-2.43 2.78,-3.89 C2.78,-3.89 2.78,-9.77 2.78,-9.77 C2.78,-9.77 0.74,-9.77 0.74,-9.77 C0.74,-9.77 0.74,-11.9 0.74,-11.9 C0.74,-11.9 2.78,-11.9 2.78,-11.9 C2.78,-11.9 3.1,-14.93 3.1,-14.93 C3.1,-14.93 5.33,-14.93 5.33,-14.93 C5.33,-14.93 5.33,-11.9 5.33,-11.9 C5.33,-11.9 8.69,-11.9 8.69,-11.9 C8.69,-11.9 8.69,-9.77 8.69,-9.77 C8.69,-9.77 5.33,-9.77 5.33,-9.77 C5.33,-9.77 5.33,-3.89 5.33,-3.89 C5.33,-3.23 5.47,-2.78 5.75,-2.53 C6.03,-2.28 6.51,-2.16 7.2,-2.16 C7.2,-2.16 8.57,-2.16 8.57,-2.16">
                                                                        </path>
                                                                        <g opacity="1"
                                                                            transform="matrix(0.23999999463558197,0,0,0.23999999463558197,0,0)">
                                                                        </g>
                                                                    </g>
                                                                </g>
                                                            </g>
                                                        </g>
                                                        <g id="2035"
                                                            transform="matrix(1,0,0,1,337.447021484375,53.02199935913086)"
                                                            opacity="1" fill="rgb(27,49,57)"
                                                            font-size="15.13299" font-family="DM Sans"
                                                            font-style={{}} font-weight="500"
                                                            aria-data-label="Agent Bricks"
                                                            style={{ display: 'block' }}>
                                                            <g strokeLinecap="butt" strokeLinejoin="round"
                                                                strokeMiterlimit="4"
                                                                transform="matrix(1,0,0,1,-43.85283279418945,2.6278328895568848)"
                                                                opacity="1" style={{ display: 'inherit' }}>
                                                                <g>
                                                                    <g transform="matrix(1,0,0,1,0,0)"
                                                                        opacity="1" style={{ display: 'block' }}>
                                                                        <path
                                                                            d=" M5.16,-8.69 C5.16,-8.69 3.45,-3.86 3.45,-3.86 C3.45,-3.86 6.87,-3.86 6.87,-3.86 M2.09,0 C2.09,0 0.39,0 0.39,0 C0.39,0 4.3,-10.59 4.3,-10.59 C4.3,-10.59 6.05,-10.59 6.05,-10.59 C6.05,-10.59 9.93,0 9.93,0 C9.93,0 8.23,0 8.23,0 C8.23,0 7.32,-2.59 7.32,-2.59 C7.32,-2.59 3,-2.59 3,-2.59 C3,-2.59 2.09,0 2.09,0">
                                                                        </path>
                                                                        <g opacity="1"
                                                                            transform="matrix(0.151329904794693,0,0,0.151329904794693,0,0)">
                                                                        </g>
                                                                    </g>
                                                                </g>
                                                            </g>
                                                            <g strokeLinecap="butt" strokeLinejoin="round"
                                                                strokeMiterlimit="4"
                                                                transform="matrix(1,0,0,1,-34.27364730834961,2.6278328895568848)"
                                                                opacity="1" style={{ display: 'inherit' }}>
                                                                <g>
                                                                    <g transform="matrix(1,0,0,1,0,0)"
                                                                        opacity="1" style={{ display: 'block' }}>
                                                                        <path
                                                                            d=" M2.07,0.95 C2.07,1.39 2.26,1.71 2.65,1.93 C3.03,2.15 3.51,2.25 4.09,2.25 C4.64,2.25 5.09,2.14 5.43,1.9 C5.78,1.66 5.95,1.35 5.95,0.95 C5.95,0.66 5.83,0.41 5.6,0.2 C5.37,0 4.93,-0.13 4.28,-0.18 C3.8,-0.21 3.37,-0.26 3,-0.32 C2.64,-0.13 2.4,0.08 2.27,0.3 C2.14,0.52 2.07,0.74 2.07,0.95 M4.09,-3.56 C4.55,-3.56 4.93,-3.68 5.21,-3.93 C5.5,-4.17 5.64,-4.52 5.64,-4.98 C5.64,-5.44 5.5,-5.8 5.21,-6.04 C4.93,-6.28 4.55,-6.4 4.09,-6.4 C3.61,-6.4 3.23,-6.28 2.94,-6.04 C2.66,-5.8 2.51,-5.44 2.51,-4.98 C2.51,-4.52 2.66,-4.17 2.94,-3.93 C3.23,-3.68 3.61,-3.56 4.09,-3.56 M4.09,-2.3 C3.69,-2.3 3.33,-2.35 3,-2.44 C3,-2.44 2.35,-1.8 2.35,-1.8 C2.46,-1.73 2.59,-1.67 2.75,-1.62 C2.92,-1.57 3.14,-1.52 3.44,-1.48 C3.73,-1.44 4.13,-1.4 4.63,-1.36 C5.63,-1.27 6.35,-1.03 6.79,-0.64 C7.24,-0.25 7.46,0.26 7.46,0.91 C7.46,1.35 7.34,1.77 7.1,2.17 C6.87,2.57 6.5,2.89 6,3.14 C5.5,3.39 4.86,3.51 4.09,3.51 C3.04,3.51 2.19,3.31 1.54,2.91 C0.89,2.51 0.56,1.91 0.56,1.1 C0.56,0.79 0.64,0.48 0.81,0.17 C0.98,-0.13 1.24,-0.42 1.6,-0.7 C1.39,-0.79 1.21,-0.89 1.05,-0.99 C0.9,-1.1 0.76,-1.21 0.64,-1.32 C0.64,-1.32 0.64,-1.68 0.64,-1.68 C0.64,-1.68 1.94,-3.01 1.94,-3.01 C1.35,-3.52 1.06,-4.18 1.06,-4.99 C1.06,-5.49 1.18,-5.94 1.41,-6.35 C1.65,-6.76 2,-7.08 2.45,-7.32 C2.91,-7.57 3.45,-7.69 4.09,-7.69 C4.51,-7.69 4.9,-7.63 5.27,-7.51 C5.27,-7.51 8.07,-7.51 8.07,-7.51 C8.07,-7.51 8.07,-6.45 8.07,-6.45 C8.07,-6.45 6.73,-6.37 6.73,-6.37 C6.98,-5.96 7.1,-5.5 7.1,-4.99 C7.1,-4.49 6.98,-4.04 6.74,-3.63 C6.5,-3.23 6.16,-2.91 5.71,-2.66 C5.26,-2.42 4.72,-2.3 4.09,-2.3">
                                                                        </path>
                                                                        <g opacity="1"
                                                                            transform="matrix(0.151329904794693,0,0,0.151329904794693,0,0)">
                                                                        </g>
                                                                    </g>
                                                                </g>
                                                            </g>
                                                            <g strokeLinecap="butt" strokeLinejoin="round"
                                                                strokeMiterlimit="4"
                                                                transform="matrix(1,0,0,1,-26.54068946838379,2.6278328895568848)"
                                                                opacity="1" style={{ display: 'inherit' }}>
                                                                <g>
                                                                    <g transform="matrix(1,0,0,1,0,0)"
                                                                        opacity="1" style={{ display: 'block' }}>
                                                                        <path
                                                                            d=" M4.52,-6.37 C3.99,-6.37 3.52,-6.21 3.1,-5.89 C2.69,-5.58 2.44,-5.1 2.35,-4.46 C2.35,-4.46 6.58,-4.46 6.58,-4.46 C6.55,-5.05 6.35,-5.51 5.96,-5.86 C5.58,-6.2 5.1,-6.37 4.52,-6.37 M4.52,0.18 C3.79,0.18 3.14,0.02 2.57,-0.31 C2,-0.64 1.55,-1.09 1.23,-1.68 C0.9,-2.26 0.74,-2.95 0.74,-3.72 C0.74,-4.51 0.9,-5.2 1.22,-5.8 C1.54,-6.39 1.98,-6.86 2.55,-7.19 C3.12,-7.52 3.78,-7.69 4.54,-7.69 C5.28,-7.69 5.92,-7.52 6.46,-7.2 C7.01,-6.87 7.43,-6.43 7.73,-5.89 C8.04,-5.34 8.19,-4.74 8.19,-4.09 C8.19,-3.99 8.18,-3.88 8.18,-3.76 C8.17,-3.64 8.17,-3.52 8.16,-3.37 C8.16,-3.37 2.32,-3.37 2.32,-3.37 C2.37,-2.65 2.61,-2.1 3.03,-1.72 C3.46,-1.34 3.96,-1.15 4.52,-1.15 C4.98,-1.15 5.36,-1.25 5.67,-1.46 C5.98,-1.67 6.2,-1.95 6.36,-2.3 C6.36,-2.3 7.96,-2.3 7.96,-2.3 C7.76,-1.59 7.36,-1 6.76,-0.53 C6.16,-0.06 5.41,0.18 4.52,0.18">
                                                                        </path>
                                                                        <g opacity="1"
                                                                            transform="matrix(0.151329904794693,0,0,0.151329904794693,0,0)">
                                                                        </g>
                                                                    </g>
                                                                </g>
                                                            </g>
                                                            <g strokeLinecap="butt" strokeLinejoin="round"
                                                                strokeMiterlimit="4"
                                                                transform="matrix(1,0,0,1,-18.459674835205078,2.6278328895568848)"
                                                                opacity="1" style={{ display: 'inherit' }}>
                                                                <g>
                                                                    <g transform="matrix(1,0,0,1,0,0)"
                                                                        opacity="1" style={{ display: 'block' }}>
                                                                        <path
                                                                            d=" M2.62,0 C2.62,0 1.01,0 1.01,0 C1.01,0 1.01,-7.51 1.01,-7.51 C1.01,-7.51 2.44,-7.51 2.44,-7.51 C2.44,-7.51 2.56,-6.19 2.56,-6.19 C2.79,-6.65 3.13,-7.02 3.58,-7.29 C4.03,-7.55 4.54,-7.69 5.13,-7.69 C6.04,-7.69 6.75,-7.41 7.27,-6.84 C7.79,-6.28 8.05,-5.43 8.05,-4.31 C8.05,-4.31 8.05,0 8.05,0 C8.05,0 6.46,0 6.46,0 C6.46,0 6.46,-4.15 6.46,-4.15 C6.46,-5.6 5.87,-6.33 4.68,-6.33 C4.08,-6.33 3.59,-6.11 3.2,-5.69 C2.81,-5.27 2.62,-4.66 2.62,-3.87">
                                                                        </path>
                                                                        <g opacity="1"
                                                                            transform="matrix(0.151329904794693,0,0,0.151329904794693,0,0)">
                                                                        </g>
                                                                    </g>
                                                                </g>
                                                            </g>
                                                            <g strokeLinecap="butt" strokeLinejoin="round"
                                                                strokeMiterlimit="4"
                                                                transform="matrix(1,0,0,1,-10.287858009338379,2.6278328895568848)"
                                                                opacity="1" style={{ display: 'inherit' }}>
                                                                <g>
                                                                    <g transform="matrix(1,0,0,1,0,0)"
                                                                        opacity="1" style={{ display: 'block' }}>
                                                                        <path
                                                                            d=" M5.4,0 C5.4,0 4.16,0 4.16,0 C3.43,0 2.84,-0.18 2.41,-0.54 C1.97,-0.9 1.76,-1.53 1.76,-2.45 C1.76,-2.45 1.76,-6.16 1.76,-6.16 C1.76,-6.16 0.47,-6.16 0.47,-6.16 C0.47,-6.16 0.47,-7.51 0.47,-7.51 C0.47,-7.51 1.76,-7.51 1.76,-7.51 C1.76,-7.51 1.95,-9.41 1.95,-9.41 C1.95,-9.41 3.36,-9.41 3.36,-9.41 C3.36,-9.41 3.36,-7.51 3.36,-7.51 C3.36,-7.51 5.48,-7.51 5.48,-7.51 C5.48,-7.51 5.48,-6.16 5.48,-6.16 C5.48,-6.16 3.36,-6.16 3.36,-6.16 C3.36,-6.16 3.36,-2.45 3.36,-2.45 C3.36,-2.04 3.45,-1.75 3.62,-1.6 C3.8,-1.44 4.11,-1.36 4.54,-1.36 C4.54,-1.36 5.4,-1.36 5.4,-1.36">
                                                                        </path>
                                                                        <g opacity="1"
                                                                            transform="matrix(0.151329904794693,0,0,0.151329904794693,0,0)">
                                                                        </g>
                                                                    </g>
                                                                </g>
                                                            </g>
                                                            <g strokeLinecap="butt" strokeLinejoin="round"
                                                                strokeMiterlimit="4"
                                                                transform="matrix(1,0,0,1,-4.930779933929443,2.6278328895568848)"
                                                                opacity="1" style={{ display: 'inherit' }}>
                                                                <g>
                                                                    <g transform="matrix(1,0,0,1,0,0)"
                                                                        opacity="1" style={{ display: 'block' }}>
                                                                        <path d="M0 0"></path>
                                                                        <g opacity="1"
                                                                            transform="matrix(0.151329904794693,0,0,0.151329904794693,0,0)">
                                                                        </g>
                                                                    </g>
                                                                </g>
                                                            </g>
                                                            <g strokeLinecap="butt" strokeLinejoin="round"
                                                                strokeMiterlimit="4"
                                                                transform="matrix(1,0,0,1,-1.8739159107208252,2.6278328895568848)"
                                                                opacity="1" style={{ display: 'inherit' }}>
                                                                <g>
                                                                    <g transform="matrix(1,0,0,1,0,0)"
                                                                        opacity="1" style={{ display: 'block' }}>
                                                                        <path
                                                                            d=" M2.68,-4.81 C2.68,-4.81 2.68,-1.32 2.68,-1.32 C2.68,-1.32 4.98,-1.32 4.98,-1.32 C5.62,-1.32 6.13,-1.47 6.48,-1.77 C6.84,-2.07 7.02,-2.5 7.02,-3.04 C7.02,-3.59 6.84,-4.02 6.46,-4.34 C6.09,-4.65 5.58,-4.81 4.95,-4.81 M2.68,-9.29 C2.68,-9.29 2.68,-6.05 2.68,-6.05 C2.68,-6.05 4.87,-6.05 4.87,-6.05 C5.49,-6.05 5.96,-6.2 6.28,-6.48 C6.6,-6.77 6.76,-7.17 6.76,-7.67 C6.76,-8.17 6.61,-8.56 6.29,-8.85 C5.97,-9.15 5.49,-9.29 4.84,-9.29 C4.84,-9.29 2.68,-9.29 2.68,-9.29 M5.19,0 C5.19,0 1.07,0 1.07,0 C1.07,0 1.07,-10.59 1.07,-10.59 C1.07,-10.59 5.07,-10.59 5.07,-10.59 C6.17,-10.59 7,-10.34 7.57,-9.82 C8.13,-9.31 8.41,-8.66 8.41,-7.88 C8.41,-7.21 8.23,-6.67 7.87,-6.27 C7.51,-5.87 7.07,-5.6 6.55,-5.46 C6.96,-5.38 7.32,-5.22 7.63,-4.98 C7.95,-4.74 8.2,-4.43 8.38,-4.07 C8.57,-3.71 8.66,-3.31 8.66,-2.89 C8.66,-2.35 8.52,-1.85 8.26,-1.41 C7.99,-0.98 7.6,-0.63 7.08,-0.38 C6.57,-0.13 5.94,0 5.19,0">
                                                                        </path>
                                                                        <g opacity="1"
                                                                            transform="matrix(0.151329904794693,0,0,0.151329904794693,0,0)">
                                                                        </g>
                                                                    </g>
                                                                </g>
                                                            </g>
                                                            <g strokeLinecap="butt" strokeLinejoin="round"
                                                                strokeMiterlimit="4"
                                                                transform="matrix(1,0,0,1,6.706489562988281,2.6278328895568848)"
                                                                opacity="1" style={{ display: 'inherit' }}>
                                                                <g>
                                                                    <g transform="matrix(1,0,0,1,0,0)"
                                                                        opacity="1" style={{ display: 'block' }}>
                                                                        <path
                                                                            d=" M2.62,0 C2.62,0 1.01,0 1.01,0 C1.01,0 1.01,-7.51 1.01,-7.51 C1.01,-7.51 2.45,-7.51 2.45,-7.51 C2.45,-7.51 2.59,-6.08 2.59,-6.08 C2.85,-6.58 3.22,-6.97 3.68,-7.26 C4.15,-7.54 4.72,-7.69 5.39,-7.69 C5.39,-7.69 5.39,-6.01 5.39,-6.01 C5.39,-6.01 4.95,-6.01 4.95,-6.01 C4.5,-6.01 4.11,-5.93 3.76,-5.79 C3.41,-5.64 3.14,-5.39 2.93,-5.05 C2.72,-4.7 2.62,-4.22 2.62,-3.6">
                                                                        </path>
                                                                        <g opacity="1"
                                                                            transform="matrix(0.151329904794693,0,0,0.151329904794693,0,0)">
                                                                        </g>
                                                                    </g>
                                                                </g>
                                                            </g>
                                                            <g strokeLinecap="butt" strokeLinejoin="round"
                                                                strokeMiterlimit="4"
                                                                transform="matrix(1,0,0,1,11.700374603271484,2.6278328895568848)"
                                                                opacity="1" style={{ display: 'inherit' }}>
                                                                <g>
                                                                    <g transform="matrix(1,0,0,1,0,0)"
                                                                        opacity="1" style={{ display: 'block' }}>
                                                                        <path
                                                                            d=" M2.72,0 C2.72,0 1.12,0 1.12,0 C1.12,0 1.12,-7.51 1.12,-7.51 C1.12,-7.51 2.72,-7.51 2.72,-7.51 M1.92,-8.93 C1.62,-8.93 1.37,-9.02 1.17,-9.21 C0.98,-9.4 0.88,-9.63 0.88,-9.91 C0.88,-10.19 0.98,-10.43 1.17,-10.62 C1.37,-10.8 1.62,-10.9 1.92,-10.9 C2.22,-10.9 2.47,-10.8 2.67,-10.62 C2.87,-10.43 2.97,-10.19 2.97,-9.91 C2.97,-9.63 2.87,-9.4 2.67,-9.21 C2.47,-9.02 2.22,-8.93 1.92,-8.93">
                                                                        </path>
                                                                        <g opacity="1"
                                                                            transform="matrix(0.151329904794693,0,0,0.151329904794693,0,0)">
                                                                        </g>
                                                                    </g>
                                                                </g>
                                                            </g>
                                                            <g strokeLinecap="butt" strokeLinejoin="round"
                                                                strokeMiterlimit="4"
                                                                transform="matrix(1,0,0,1,14.772372245788574,2.6278328895568848)"
                                                                opacity="1" style={{ display: 'inherit' }}>
                                                                <g>
                                                                    <g transform="matrix(1,0,0,1,0,0)"
                                                                        opacity="1" style={{ display: 'block' }}>
                                                                        <path
                                                                            d=" M4.57,0.18 C3.83,0.18 3.18,0.02 2.6,-0.32 C2.02,-0.65 1.56,-1.11 1.23,-1.7 C0.91,-2.29 0.74,-2.98 0.74,-3.75 C0.74,-4.53 0.91,-5.21 1.23,-5.8 C1.56,-6.39 2.02,-6.86 2.6,-7.19 C3.18,-7.52 3.83,-7.69 4.57,-7.69 C5.5,-7.69 6.28,-7.45 6.91,-6.96 C7.54,-6.48 7.94,-5.82 8.13,-4.99 C8.13,-4.99 6.45,-4.99 6.45,-4.99 C6.35,-5.41 6.12,-5.73 5.78,-5.96 C5.44,-6.19 5.03,-6.31 4.57,-6.31 C4.18,-6.31 3.81,-6.21 3.48,-6.02 C3.15,-5.82 2.88,-5.53 2.68,-5.15 C2.48,-4.77 2.38,-4.31 2.38,-3.75 C2.38,-3.2 2.48,-2.73 2.68,-2.35 C2.88,-1.97 3.15,-1.68 3.48,-1.48 C3.81,-1.28 4.18,-1.18 4.57,-1.18 C5.03,-1.18 5.44,-1.3 5.78,-1.53 C6.12,-1.76 6.35,-2.09 6.45,-2.51 C6.45,-2.51 8.13,-2.51 8.13,-2.51 C7.95,-1.7 7.55,-1.05 6.92,-0.56 C6.28,-0.07 5.5,0.18 4.57,0.18">
                                                                        </path>
                                                                        <g opacity="1"
                                                                            transform="matrix(0.151329904794693,0,0,0.151329904794693,0,0)">
                                                                        </g>
                                                                    </g>
                                                                </g>
                                                            </g>
                                                            <g strokeLinecap="butt" strokeLinejoin="round"
                                                                strokeMiterlimit="4"
                                                                transform="matrix(1,0,0,1,22.868520736694336,2.6278328895568848)"
                                                                opacity="1" style={{ display: 'inherit' }}>
                                                                <g>
                                                                    <g transform="matrix(1,0,0,1,0,0)"
                                                                        opacity="1" style={{ display: 'block' }}>
                                                                        <path
                                                                            d=" M2.62,0 C2.62,0 1.01,0 1.01,0 C1.01,0 1.01,-10.9 1.01,-10.9 C1.01,-10.9 2.62,-10.9 2.62,-10.9 C2.62,-10.9 2.62,-4.4 2.62,-4.4 C2.62,-4.4 5.49,-7.51 5.49,-7.51 C5.49,-7.51 7.42,-7.51 7.42,-7.51 C7.42,-7.51 4.22,-4.1 4.22,-4.1 C4.22,-4.1 7.88,0 7.88,0 C7.88,0 5.86,0 5.86,0 C5.86,0 2.62,-3.84 2.62,-3.84">
                                                                        </path>
                                                                        <g opacity="1"
                                                                            transform="matrix(0.151329904794693,0,0,0.151329904794693,0,0)">
                                                                        </g>
                                                                    </g>
                                                                </g>
                                                            </g>
                                                            <g strokeLinecap="butt" strokeLinejoin="round"
                                                                strokeMiterlimit="4"
                                                                transform="matrix(1,0,0,1,30.22315788269043,2.6278328895568848)"
                                                                opacity="1" style={{ display: 'inherit' }}>
                                                                <g>
                                                                    <g transform="matrix(1,0,0,1,0,0)"
                                                                        opacity="1" style={{ display: 'block' }}>
                                                                        <path
                                                                            d=" M4.01,0.18 C3.06,0.18 2.28,-0.05 1.66,-0.51 C1.05,-0.98 0.7,-1.59 0.61,-2.36 C0.61,-2.36 2.22,-2.36 2.22,-2.36 C2.31,-2.02 2.5,-1.72 2.8,-1.48 C3.1,-1.23 3.5,-1.1 4,-1.1 C4.48,-1.1 4.83,-1.21 5.05,-1.41 C5.28,-1.61 5.39,-1.84 5.39,-2.1 C5.39,-2.49 5.23,-2.75 4.93,-2.88 C4.62,-3.02 4.19,-3.14 3.65,-3.25 C3.22,-3.34 2.8,-3.47 2.38,-3.62 C1.96,-3.77 1.62,-3.98 1.34,-4.26 C1.06,-4.54 0.92,-4.91 0.92,-5.39 C0.92,-6.04 1.18,-6.59 1.68,-7.03 C2.18,-7.47 2.89,-7.69 3.8,-7.69 C4.64,-7.69 5.31,-7.49 5.83,-7.08 C6.35,-6.68 6.66,-6.11 6.75,-5.37 C6.75,-5.37 5.21,-5.37 5.21,-5.37 C5.16,-5.7 5.01,-5.95 4.76,-6.13 C4.51,-6.31 4.18,-6.4 3.77,-6.4 C3.36,-6.4 3.05,-6.32 2.83,-6.15 C2.61,-5.99 2.5,-5.77 2.5,-5.51 C2.5,-5.25 2.65,-5.04 2.96,-4.89 C3.27,-4.74 3.67,-4.6 4.18,-4.48 C4.68,-4.37 5.15,-4.24 5.58,-4.09 C6.01,-3.95 6.35,-3.73 6.61,-3.45 C6.88,-3.17 7.01,-2.75 7.01,-2.21 C7.02,-1.52 6.75,-0.95 6.21,-0.5 C5.67,-0.05 4.94,0.18 4.01,0.18">
                                                                        </path>
                                                                        <g opacity="1"
                                                                            transform="matrix(0.151329904794693,0,0,0.151329904794693,0,0)">
                                                                        </g>
                                                                    </g>
                                                                </g>
                                                            </g>
                                                        </g>
                                                        <g id="2140" transform="matrix(1,0,0,1,212.5,142.5)"
                                                            opacity="1" style={{ display: 'block' }}>
                                                            <g opacity="1"
                                                                transform="matrix(1,0,0,1.0246399641036987,66.86799621582031,-97.39299774169922)">
                                                                <path fill="rgb(250,190,185)"
                                                                    fillOpacity="1"
                                                                    d=" M4.427499771118164,-2.00600004196167 C4.427499771118164,-2.00600004196167 4.427499771118164,2.00600004196167 4.427499771118164,2.00600004196167 C4.427499771118164,2.00600004196167 -4.427499771118164,2.00600004196167 -4.427499771118164,2.00600004196167 C-4.427499771118164,2.00600004196167 -4.427499771118164,-2.00600004196167 -4.427499771118164,-2.00600004196167 C-4.427499771118164,-2.00600004196167 4.427499771118164,-2.00600004196167 4.427499771118164,-2.00600004196167z">
                                                                </path>
                                                                <path strokeLinecap="butt"
                                                                    strokeLinejoin="miter" fillOpacity="0"
                                                                    strokeMiterlimit="4"
                                                                    stroke="rgb(255,255,255)"
                                                                    strokeOpacity="1" strokeWidth="0"
                                                                    d=" M4.427499771118164,-2.00600004196167 C4.427499771118164,-2.00600004196167 4.427499771118164,2.00600004196167 4.427499771118164,2.00600004196167 C4.427499771118164,2.00600004196167 -4.427499771118164,2.00600004196167 -4.427499771118164,2.00600004196167 C-4.427499771118164,2.00600004196167 -4.427499771118164,-2.00600004196167 -4.427499771118164,-2.00600004196167 C-4.427499771118164,-2.00600004196167 4.427499771118164,-2.00600004196167 4.427499771118164,-2.00600004196167z">
                                                                </path>
                                                            </g>
                                                            <g opacity="1"
                                                                transform="matrix(1,0,0,1.0613700151443481,66.86799621582031,-88.61000061035156)">
                                                                <path fill="rgb(250,190,185)"
                                                                    fillOpacity="1"
                                                                    d=" M4.427499771118164,-2.00600004196167 C4.427499771118164,-2.00600004196167 4.427499771118164,2.00600004196167 4.427499771118164,2.00600004196167 C4.427499771118164,2.00600004196167 -4.427499771118164,2.00600004196167 -4.427499771118164,2.00600004196167 C-4.427499771118164,2.00600004196167 -4.427499771118164,-2.00600004196167 -4.427499771118164,-2.00600004196167 C-4.427499771118164,-2.00600004196167 4.427499771118164,-2.00600004196167 4.427499771118164,-2.00600004196167z">
                                                                </path>
                                                                <path strokeLinecap="butt"
                                                                    strokeLinejoin="miter" fillOpacity="0"
                                                                    strokeMiterlimit="4"
                                                                    stroke="rgb(255,255,255)"
                                                                    strokeOpacity="1" strokeWidth="0"
                                                                    d=" M4.427499771118164,-2.00600004196167 C4.427499771118164,-2.00600004196167 4.427499771118164,2.00600004196167 4.427499771118164,2.00600004196167 C4.427499771118164,2.00600004196167 -4.427499771118164,2.00600004196167 -4.427499771118164,2.00600004196167 C-4.427499771118164,2.00600004196167 -4.427499771118164,-2.00600004196167 -4.427499771118164,-2.00600004196167 C-4.427499771118164,-2.00600004196167 4.427499771118164,-2.00600004196167 4.427499771118164,-2.00600004196167z">
                                                                </path>
                                                            </g>
                                                            <g opacity="1"
                                                                transform="matrix(1,0,0,1.0950100421905518,58.053001403808594,-93.00800323486328)">
                                                                <path fill="rgb(255,94,69)" fillOpacity="1"
                                                                    d=" M4.427499771118164,-2.00600004196167 C4.427499771118164,-2.00600004196167 4.427499771118164,2.00600004196167 4.427499771118164,2.00600004196167 C4.427499771118164,2.00600004196167 -4.427499771118164,2.00600004196167 -4.427499771118164,2.00600004196167 C-4.427499771118164,2.00600004196167 -4.427499771118164,-2.00600004196167 -4.427499771118164,-2.00600004196167 C-4.427499771118164,-2.00600004196167 4.427499771118164,-2.00600004196167 4.427499771118164,-2.00600004196167z">
                                                                </path>
                                                                <path strokeLinecap="butt"
                                                                    strokeLinejoin="miter" fillOpacity="0"
                                                                    strokeMiterlimit="4"
                                                                    stroke="rgb(255,255,255)"
                                                                    strokeOpacity="1" strokeWidth="0"
                                                                    d=" M4.427499771118164,-2.00600004196167 C4.427499771118164,-2.00600004196167 4.427499771118164,2.00600004196167 4.427499771118164,2.00600004196167 C4.427499771118164,2.00600004196167 -4.427499771118164,2.00600004196167 -4.427499771118164,2.00600004196167 C-4.427499771118164,2.00600004196167 -4.427499771118164,-2.00600004196167 -4.427499771118164,-2.00600004196167 C-4.427499771118164,-2.00600004196167 4.427499771118164,-2.00600004196167 4.427499771118164,-2.00600004196167z">
                                                                </path>
                                                            </g>
                                                            <g opacity="1"
                                                                transform="matrix(1,0,0,0.9637899994850159,58.05099868774414,-84.51799774169922)">
                                                                <path fill="rgb(255,94,69)" fillOpacity="1"
                                                                    d=" M4.427499771118164,-2.00600004196167 C4.427499771118164,-2.00600004196167 4.427499771118164,2.00600004196167 4.427499771118164,2.00600004196167 C4.427499771118164,2.00600004196167 -4.427499771118164,2.00600004196167 -4.427499771118164,2.00600004196167 C-4.427499771118164,2.00600004196167 -4.427499771118164,-2.00600004196167 -4.427499771118164,-2.00600004196167 C-4.427499771118164,-2.00600004196167 4.427499771118164,-2.00600004196167 4.427499771118164,-2.00600004196167z">
                                                                </path>
                                                                <path strokeLinecap="butt"
                                                                    strokeLinejoin="miter" fillOpacity="0"
                                                                    strokeMiterlimit="4"
                                                                    stroke="rgb(255,255,255)"
                                                                    strokeOpacity="1" strokeWidth="0"
                                                                    d=" M4.427499771118164,-2.00600004196167 C4.427499771118164,-2.00600004196167 4.427499771118164,2.00600004196167 4.427499771118164,2.00600004196167 C4.427499771118164,2.00600004196167 -4.427499771118164,2.00600004196167 -4.427499771118164,2.00600004196167 C-4.427499771118164,2.00600004196167 -4.427499771118164,-2.00600004196167 -4.427499771118164,-2.00600004196167 C-4.427499771118164,-2.00600004196167 4.427499771118164,-2.00600004196167 4.427499771118164,-2.00600004196167z">
                                                                </path>
                                                            </g>
                                                        </g>
                                                    </g>
                                                </g>
                                            </svg></div>
                                        </div><button type="button" className="absolute bottom-1.5 right-1.5"
                                            aria-data-label="Pause decorative banner animation" role="img"><svg
                                                width="22" height="22" viewBox="0 0 22 22" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="11" cy="11" r="11" fill="white" fillOpacity="0.6">
                                                </circle>
                                                <path fillRule="evenodd" clipRule="evenodd"
                                                    d="M8 15V7H10V15H8ZM12 15V7H14V15H12Z" fill="currentColor">
                                                </path>
                                                <circle cx="11" cy="11" r="8.5" stroke="currentColor"></circle>
                                            </svg></button>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="specific-wrapper-top pt-4 md:pt-4 lg:pt-4 specific-wrapper-bottom lg:pb-8 bg-white">
                                {/*$*/}{/*/$*/}
                                <div className="fullwidth-component relative pb-4 min-h-[120px]">
                                    <div className="animated-logo-slider relative"
                                        style={{ opacity: '1', transition: 'opacity 1s' }}>
                                        <div className="relative flex w-full items-center overflow-hidden">
                                            <div className="swiper swiper-initialized swiper-horizontal swiper-backface-hidden"
                                                style={{ height: '100%', paddingTop: '32px', paddingBottom: '32px' }}>
                                                <div className="swiper-wrapper"
                                                    style={{ transitionDuration: '0ms', transform: 'translate3d(-4723.56px, 0px, 0px)', transitionDelay: '0ms' }}>
                                                    <div className="swiper-slide swiper-slide-next"
                                                        data-swiper-slide-index="2"
                                                        style={{ width: 'auto', minWidth: 'min(100vw, 1800px)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                        <div className="mr-6 md:mr-8 lg:mr-12"
                                                            style={{ height: '24px' }}>
                                                            <figure color="light">
                                                                <div className="h-full "><img
                                                                    src="https://www.databricks.com/sites/default/files/2023-11/logo-homepage-att.svg?v=1724845089"
                                                                    alt="Att" loading="lazy"
                                                                    data-ot-ignore="1"
                                                                    className="w-auto my-0 mx-auto grayscale brightness-0 optanon-category-C0001"
                                                                    style={{ height: '24px' }} /></div>
                                                            </figure>
                                                        </div>
                                                        <div className="mr-6 md:mr-8 lg:mr-12"
                                                            style={{ height: '24px' }}>
                                                            <figure color="light">
                                                                <div className="h-full "><img
                                                                    src="https://www.databricks.com/sites/default/files/2023-11/logo-homepage-block.svg?v=1724845134"
                                                                    alt="Block" loading="lazy"
                                                                    data-ot-ignore="1"
                                                                    className="w-auto my-0 mx-auto grayscale brightness-0 optanon-category-C0001"
                                                                    style={{ height: '24px' }} /></div>
                                                            </figure>
                                                        </div>
                                                        <div className="mr-6 md:mr-8 lg:mr-12"
                                                            style={{ height: '24px' }}>
                                                            <figure color="light">
                                                                <div className="h-full "><img
                                                                    src="https://www.databricks.com/sites/default/files/2025-09/logo-white-open-ai.svg?v=1758684322"
                                                                    alt="OpenAI logo" loading="lazy"
                                                                    data-ot-ignore="1"
                                                                    className="w-auto my-0 mx-auto grayscale brightness-0 optanon-category-C0001"
                                                                    style={{ height: '24px' }} /></div>
                                                            </figure>
                                                        </div>
                                                        <div className="mr-6 md:mr-8 lg:mr-12"
                                                            style={{ height: '24px' }}>
                                                            <figure color="light">
                                                                <div className="h-full "><img
                                                                    src="https://www.databricks.com/sites/default/files/2023-11/logo-homepage-burberry.svg?v=1724845179"
                                                                    alt="Burberry" loading="lazy"
                                                                    data-ot-ignore="1"
                                                                    className="w-auto my-0 mx-auto grayscale brightness-0 optanon-category-C0001"
                                                                    style={{ height: '24px' }} /></div>
                                                            </figure>
                                                        </div>
                                                        <div className="mr-6 md:mr-8 lg:mr-12"
                                                            style={{ height: '24px' }}>
                                                            <figure color="light">
                                                                <div className="h-full "><img
                                                                    src="https://www.databricks.com/sites/default/files/2023-11/logo-homepage-fda.svg?v=1724845229"
                                                                    alt="FDA" loading="lazy"
                                                                    data-ot-ignore="1"
                                                                    className="w-auto my-0 mx-auto grayscale brightness-0 optanon-category-C0001"
                                                                    style={{ height: '24px' }} /></div>
                                                            </figure>
                                                        </div>
                                                        <div className="mr-6 md:mr-8 lg:mr-12"
                                                            style={{ height: '24px' }}>
                                                            <figure color="light">
                                                                <div className="h-full "><img
                                                                    src="https://www.databricks.com/sites/default/files/2023-11/logo-homepage-heineken.svg?v=1724845251"
                                                                    alt="Heineken" loading="lazy"
                                                                    data-ot-ignore="1"
                                                                    className="w-auto my-0 mx-auto grayscale brightness-0 optanon-category-C0001"
                                                                    style={{ height: '24px' }} /></div>
                                                            </figure>
                                                        </div>
                                                        <div className="mr-6 md:mr-8 lg:mr-12"
                                                            style={{ height: '24px' }}>
                                                            <figure color="light">
                                                                <div className="h-full "><img
                                                                    src="https://www.databricks.com/sites/default/files/2023-11/logo-homepage-michelin.svg?v=1724845276"
                                                                    alt="Michelin" loading="lazy"
                                                                    data-ot-ignore="1"
                                                                    className="w-auto my-0 mx-auto grayscale brightness-0 optanon-category-C0001"
                                                                    style={{ height: '24px' }} /></div>
                                                            </figure>
                                                        </div>
                                                        <div className="mr-6 md:mr-8 lg:mr-12"
                                                            style={{ height: '24px' }}>
                                                            <figure color="light">
                                                                <div className="h-full "><img
                                                                    src="https://www.databricks.com/sites/default/files/2023-11/logo-homepage-mercedes.svg?v=1724845302"
                                                                    alt="Mercedes" loading="lazy"
                                                                    data-ot-ignore="1"
                                                                    className="w-auto my-0 mx-auto grayscale brightness-0 optanon-category-C0001"
                                                                    style={{ height: '24px' }} /></div>
                                                            </figure>
                                                        </div>
                                                        <div className="mr-6 md:mr-8 lg:mr-12"
                                                            style={{ height: '24px' }}>
                                                            <figure color="light">
                                                                <div className="h-full "><img
                                                                    src="https://www.databricks.com/sites/default/files/2023-11/logo-homepage-nba.svg?v=1724845323"
                                                                    alt="Nba" loading="lazy"
                                                                    data-ot-ignore="1"
                                                                    className="w-auto my-0 mx-auto grayscale brightness-0 optanon-category-C0001"
                                                                    style={{ height: '24px' }} /></div>
                                                            </figure>
                                                        </div>
                                                        <div className="mr-6 md:mr-8 lg:mr-12"
                                                            style={{ height: '24px' }}>
                                                            <figure color="light">
                                                                <div className="h-full "><img
                                                                    src="https://www.databricks.com/sites/default/files/2023-11/logo-homepage-santander.svg?v=1724845348"
                                                                    alt="Santander" loading="lazy"
                                                                    data-ot-ignore="1"
                                                                    className="w-auto my-0 mx-auto grayscale brightness-0 optanon-category-C0001"
                                                                    style={{ height: '24px' }} /></div>
                                                            </figure>
                                                        </div>
                                                        <div className="mr-6 md:mr-8 lg:mr-12"
                                                            style={{ height: '24px' }}>
                                                            <figure color="light">
                                                                <div className="h-full "><img
                                                                    src="https://www.databricks.com/sites/default/files/2023-11/logo-homepage-shell.svg?v=1724845370"
                                                                    alt="Shell" loading="lazy"
                                                                    data-ot-ignore="1"
                                                                    className="w-auto my-0 mx-auto grayscale brightness-0 optanon-category-C0001"
                                                                    style={{ height: '24px' }} /></div>
                                                            </figure>
                                                        </div>
                                                        <div className="mr-6 md:mr-8 lg:mr-12"
                                                            style={{ height: '24px' }}>
                                                            <figure color="light">
                                                                <div className="h-full "><img
                                                                    src="https://www.databricks.com/sites/default/files/2023-11/logo-homepage-siemens.svg?v=1724845393"
                                                                    alt="Siemens" loading="lazy"
                                                                    data-ot-ignore="1"
                                                                    className="w-auto my-0 mx-auto grayscale brightness-0 optanon-category-C0001"
                                                                    style={{ height: '24px' }} /></div>
                                                            </figure>
                                                        </div>
                                                        <div className="mr-6 md:mr-8 lg:mr-12"
                                                            style={{ height: '24px' }}>
                                                            <figure color="light">
                                                                <div className="h-full "><img
                                                                    src="https://www.databricks.com/sites/default/files/2023-11/logo-homepage-toyota.svg?v=1724845415"
                                                                    alt="Toyota" loading="lazy"
                                                                    data-ot-ignore="1"
                                                                    className="w-auto my-0 mx-auto grayscale brightness-0 optanon-category-C0001"
                                                                    style={{ height: '24px' }} /></div>
                                                            </figure>
                                                        </div>
                                                        <div className="mr-6 md:mr-8 lg:mr-12"
                                                            style={{ height: '24px' }}>
                                                            <figure color="light">
                                                                <div className="h-full "><img
                                                                    src="https://www.databricks.com/sites/default/files/2023-11/logo-homepage-walgreens.svg?v=1724845441"
                                                                    alt="Walgreens" loading="lazy"
                                                                    data-ot-ignore="1"
                                                                    className="w-auto my-0 mx-auto grayscale brightness-0 optanon-category-C0001"
                                                                    style={{ height: '24px' }} /></div>
                                                            </figure>
                                                        </div>
                                                        <div className="mr-6 md:mr-8 lg:mr-12"
                                                            style={{ height: '24px' }}>
                                                            <figure color="light">
                                                                <div className="h-full "><img
                                                                    src="https://www.databricks.com/sites/default/files/2023-11/logo-homepage-warner-bros-discovery.svg?v=1724845507"
                                                                    alt="Warner Bros Discovery"
                                                                    loading="lazy" data-ot-ignore="1"
                                                                    className="w-auto my-0 mx-auto grayscale brightness-0 optanon-category-C0001"
                                                                    style={{ height: '24px' }} /></div>
                                                            </figure>
                                                        </div>
                                                    </div>
                                                    <div className="swiper-slide swiper-slide-prev"
                                                        data-swiper-slide-index="0"
                                                        style={{ width: 'auto', minWidth: 'min(100vw, 1800px)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                        <div className="mr-6 md:mr-8 lg:mr-12"
                                                            style={{ height: '24px' }}>
                                                            <figure color="light">
                                                                <div className="h-full "><img
                                                                    src="https://www.databricks.com/sites/default/files/2023-11/logo-homepage-att.svg?v=1724845089"
                                                                    alt="Att" loading="lazy"
                                                                    data-ot-ignore="1"
                                                                    className="w-auto my-0 mx-auto grayscale brightness-0 optanon-category-C0001"
                                                                    style={{ height: '24px' }} /></div>
                                                            </figure>
                                                        </div>
                                                        <div className="mr-6 md:mr-8 lg:mr-12"
                                                            style={{ height: '24px' }}>
                                                            <figure color="light">
                                                                <div className="h-full "><img
                                                                    src="https://www.databricks.com/sites/default/files/2023-11/logo-homepage-block.svg?v=1724845134"
                                                                    alt="Block" loading="lazy"
                                                                    data-ot-ignore="1"
                                                                    className="w-auto my-0 mx-auto grayscale brightness-0 optanon-category-C0001"
                                                                    style={{ height: '24px' }} /></div>
                                                            </figure>
                                                        </div>
                                                        <div className="mr-6 md:mr-8 lg:mr-12"
                                                            style={{ height: '24px' }}>
                                                            <figure color="light">
                                                                <div className="h-full "><img
                                                                    src="https://www.databricks.com/sites/default/files/2025-09/logo-white-open-ai.svg?v=1758684322"
                                                                    alt="OpenAI logo" loading="lazy"
                                                                    data-ot-ignore="1"
                                                                    className="w-auto my-0 mx-auto grayscale brightness-0 optanon-category-C0001"
                                                                    style={{ height: '24px' }} /></div>
                                                            </figure>
                                                        </div>
                                                        <div className="mr-6 md:mr-8 lg:mr-12"
                                                            style={{ height: '24px' }}>
                                                            <figure color="light">
                                                                <div className="h-full "><img
                                                                    src="https://www.databricks.com/sites/default/files/2023-11/logo-homepage-burberry.svg?v=1724845179"
                                                                    alt="Burberry" loading="lazy"
                                                                    data-ot-ignore="1"
                                                                    className="w-auto my-0 mx-auto grayscale brightness-0 optanon-category-C0001"
                                                                    style={{ height: '24px' }} /></div>
                                                            </figure>
                                                        </div>
                                                        <div className="mr-6 md:mr-8 lg:mr-12"
                                                            style={{ height: '24px' }}>
                                                            <figure color="light">
                                                                <div className="h-full "><img
                                                                    src="https://www.databricks.com/sites/default/files/2023-11/logo-homepage-fda.svg?v=1724845229"
                                                                    alt="FDA" loading="lazy"
                                                                    data-ot-ignore="1"
                                                                    className="w-auto my-0 mx-auto grayscale brightness-0 optanon-category-C0001"
                                                                    style={{ height: '24px' }} /></div>
                                                            </figure>
                                                        </div>
                                                        <div className="mr-6 md:mr-8 lg:mr-12"
                                                            style={{ height: '24px' }}>
                                                            <figure color="light">
                                                                <div className="h-full "><img
                                                                    src="https://www.databricks.com/sites/default/files/2023-11/logo-homepage-heineken.svg?v=1724845251"
                                                                    alt="Heineken" loading="lazy"
                                                                    data-ot-ignore="1"
                                                                    className="w-auto my-0 mx-auto grayscale brightness-0 optanon-category-C0001"
                                                                    style={{ height: '24px' }} /></div>
                                                            </figure>
                                                        </div>
                                                        <div className="mr-6 md:mr-8 lg:mr-12"
                                                            style={{ height: '24px' }}>
                                                            <figure color="light">
                                                                <div className="h-full "><img
                                                                    src="https://www.databricks.com/sites/default/files/2023-11/logo-homepage-michelin.svg?v=1724845276"
                                                                    alt="Michelin" loading="lazy"
                                                                    data-ot-ignore="1"
                                                                    className="w-auto my-0 mx-auto grayscale brightness-0 optanon-category-C0001"
                                                                    style={{ height: '24px' }} /></div>
                                                            </figure>
                                                        </div>
                                                        <div className="mr-6 md:mr-8 lg:mr-12"
                                                            style={{ height: '24px' }}>
                                                            <figure color="light">
                                                                <div className="h-full "><img
                                                                    src="https://www.databricks.com/sites/default/files/2023-11/logo-homepage-mercedes.svg?v=1724845302"
                                                                    alt="Mercedes" loading="lazy"
                                                                    data-ot-ignore="1"
                                                                    className="w-auto my-0 mx-auto grayscale brightness-0 optanon-category-C0001"
                                                                    style={{ height: '24px' }} /></div>
                                                            </figure>
                                                        </div>
                                                        <div className="mr-6 md:mr-8 lg:mr-12"
                                                            style={{ height: '24px' }}>
                                                            <figure color="light">
                                                                <div className="h-full "><img
                                                                    src="https://www.databricks.com/sites/default/files/2023-11/logo-homepage-nba.svg?v=1724845323"
                                                                    alt="Nba" loading="lazy"
                                                                    data-ot-ignore="1"
                                                                    className="w-auto my-0 mx-auto grayscale brightness-0 optanon-category-C0001"
                                                                    style={{ height: '24px' }} /></div>
                                                            </figure>
                                                        </div>
                                                        <div className="mr-6 md:mr-8 lg:mr-12"
                                                            style={{ height: '24px' }}>
                                                            <figure color="light">
                                                                <div className="h-full "><img
                                                                    src="https://www.databricks.com/sites/default/files/2023-11/logo-homepage-santander.svg?v=1724845348"
                                                                    alt="Santander" loading="lazy"
                                                                    data-ot-ignore="1"
                                                                    className="w-auto my-0 mx-auto grayscale brightness-0 optanon-category-C0001"
                                                                    style={{ height: '24px' }} /></div>
                                                            </figure>
                                                        </div>
                                                        <div className="mr-6 md:mr-8 lg:mr-12"
                                                            style={{ height: '24px' }}>
                                                            <figure color="light">
                                                                <div className="h-full "><img
                                                                    src="https://www.databricks.com/sites/default/files/2023-11/logo-homepage-shell.svg?v=1724845370"
                                                                    alt="Shell" loading="lazy"
                                                                    data-ot-ignore="1"
                                                                    className="w-auto my-0 mx-auto grayscale brightness-0 optanon-category-C0001"
                                                                    style={{ height: '24px' }} /></div>
                                                            </figure>
                                                        </div>
                                                        <div className="mr-6 md:mr-8 lg:mr-12"
                                                            style={{ height: '24px' }}>
                                                            <figure color="light">
                                                                <div className="h-full "><img
                                                                    src="https://www.databricks.com/sites/default/files/2023-11/logo-homepage-siemens.svg?v=1724845393"
                                                                    alt="Siemens" loading="lazy"
                                                                    data-ot-ignore="1"
                                                                    className="w-auto my-0 mx-auto grayscale brightness-0 optanon-category-C0001"
                                                                    style={{ height: '24px' }} /></div>
                                                            </figure>
                                                        </div>
                                                        <div className="mr-6 md:mr-8 lg:mr-12"
                                                            style={{ height: '24px' }}>
                                                            <figure color="light">
                                                                <div className="h-full "><img
                                                                    src="https://www.databricks.com/sites/default/files/2023-11/logo-homepage-toyota.svg?v=1724845415"
                                                                    alt="Toyota" loading="lazy"
                                                                    data-ot-ignore="1"
                                                                    className="w-auto my-0 mx-auto grayscale brightness-0 optanon-category-C0001"
                                                                    style={{ height: '24px' }} /></div>
                                                            </figure>
                                                        </div>
                                                        <div className="mr-6 md:mr-8 lg:mr-12"
                                                            style={{ height: '24px' }}>
                                                            <figure color="light">
                                                                <div className="h-full "><img
                                                                    src="https://www.databricks.com/sites/default/files/2023-11/logo-homepage-walgreens.svg?v=1724845441"
                                                                    alt="Walgreens" loading="lazy"
                                                                    data-ot-ignore="1"
                                                                    className="w-auto my-0 mx-auto grayscale brightness-0 optanon-category-C0001"
                                                                    style={{ height: '24px' }} /></div>
                                                            </figure>
                                                        </div>
                                                        <div className="mr-6 md:mr-8 lg:mr-12"
                                                            style={{ height: '24px' }}>
                                                            <figure color="light">
                                                                <div className="h-full "><img
                                                                    src="https://www.databricks.com/sites/default/files/2023-11/logo-homepage-warner-bros-discovery.svg?v=1724845507"
                                                                    alt="Warner Bros Discovery"
                                                                    loading="lazy" data-ot-ignore="1"
                                                                    className="w-auto my-0 mx-auto grayscale brightness-0 optanon-category-C0001"
                                                                    style={{ height: '24px' }} /></div>
                                                            </figure>
                                                        </div>
                                                    </div>
                                                    <div className="swiper-slide swiper-slide-active"
                                                        data-swiper-slide-index="1"
                                                        style={{ width: 'auto', minWidth: 'min(100vw, 1800px)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                        <div className="mr-6 md:mr-8 lg:mr-12"
                                                            style={{ height: '24px' }}>
                                                            <figure color="light">
                                                                <div className="h-full "><img
                                                                    src="https://www.databricks.com/sites/default/files/2023-11/logo-homepage-att.svg?v=1724845089"
                                                                    alt="Att" loading="lazy"
                                                                    data-ot-ignore="1"
                                                                    className="w-auto my-0 mx-auto grayscale brightness-0 optanon-category-C0001"
                                                                    style={{ height: '24px' }} /></div>
                                                            </figure>
                                                        </div>
                                                        <div className="mr-6 md:mr-8 lg:mr-12"
                                                            style={{ height: '24px' }}>
                                                            <figure color="light">
                                                                <div className="h-full "><img
                                                                    src="https://www.databricks.com/sites/default/files/2023-11/logo-homepage-block.svg?v=1724845134"
                                                                    alt="Block" loading="lazy"
                                                                    data-ot-ignore="1"
                                                                    className="w-auto my-0 mx-auto grayscale brightness-0 optanon-category-C0001"
                                                                    style={{ height: '24px' }} /></div>
                                                            </figure>
                                                        </div>
                                                        <div className="mr-6 md:mr-8 lg:mr-12"
                                                            style={{ height: '24px' }}>
                                                            <figure color="light">
                                                                <div className="h-full "><img
                                                                    src="https://www.databricks.com/sites/default/files/2025-09/logo-white-open-ai.svg?v=1758684322"
                                                                    alt="OpenAI logo" loading="lazy"
                                                                    data-ot-ignore="1"
                                                                    className="w-auto my-0 mx-auto grayscale brightness-0 optanon-category-C0001"
                                                                    style={{ height: '24px' }} /></div>
                                                            </figure>
                                                        </div>
                                                        <div className="mr-6 md:mr-8 lg:mr-12"
                                                            style={{ height: '24px' }}>
                                                            <figure color="light">
                                                                <div className="h-full "><img
                                                                    src="https://www.databricks.com/sites/default/files/2023-11/logo-homepage-burberry.svg?v=1724845179"
                                                                    alt="Burberry" loading="lazy"
                                                                    data-ot-ignore="1"
                                                                    className="w-auto my-0 mx-auto grayscale brightness-0 optanon-category-C0001"
                                                                    style={{ height: '24px' }} /></div>
                                                            </figure>
                                                        </div>
                                                        <div className="mr-6 md:mr-8 lg:mr-12"
                                                            style={{ height: '24px' }}>
                                                            <figure color="light">
                                                                <div className="h-full "><img
                                                                    src="https://www.databricks.com/sites/default/files/2023-11/logo-homepage-fda.svg?v=1724845229"
                                                                    alt="FDA" loading="lazy"
                                                                    data-ot-ignore="1"
                                                                    className="w-auto my-0 mx-auto grayscale brightness-0 optanon-category-C0001"
                                                                    style={{ height: '24px' }} /></div>
                                                            </figure>
                                                        </div>
                                                        <div className="mr-6 md:mr-8 lg:mr-12"
                                                            style={{ height: '24px' }}>
                                                            <figure color="light">
                                                                <div className="h-full "><img
                                                                    src="https://www.databricks.com/sites/default/files/2023-11/logo-homepage-heineken.svg?v=1724845251"
                                                                    alt="Heineken" loading="lazy"
                                                                    data-ot-ignore="1"
                                                                    className="w-auto my-0 mx-auto grayscale brightness-0 optanon-category-C0001"
                                                                    style={{ height: '24px' }} /></div>
                                                            </figure>
                                                        </div>
                                                        <div className="mr-6 md:mr-8 lg:mr-12"
                                                            style={{ height: '24px' }}>
                                                            <figure color="light">
                                                                <div className="h-full "><img
                                                                    src="https://www.databricks.com/sites/default/files/2023-11/logo-homepage-michelin.svg?v=1724845276"
                                                                    alt="Michelin" loading="lazy"
                                                                    data-ot-ignore="1"
                                                                    className="w-auto my-0 mx-auto grayscale brightness-0 optanon-category-C0001"
                                                                    style={{ height: '24px' }} /></div>
                                                            </figure>
                                                        </div>
                                                        <div className="mr-6 md:mr-8 lg:mr-12"
                                                            style={{ height: '24px' }}>
                                                            <figure color="light">
                                                                <div className="h-full "><img
                                                                    src="https://www.databricks.com/sites/default/files/2023-11/logo-homepage-mercedes.svg?v=1724845302"
                                                                    alt="Mercedes" loading="lazy"
                                                                    data-ot-ignore="1"
                                                                    className="w-auto my-0 mx-auto grayscale brightness-0 optanon-category-C0001"
                                                                    style={{ height: '24px' }} /></div>
                                                            </figure>
                                                        </div>
                                                        <div className="mr-6 md:mr-8 lg:mr-12"
                                                            style={{ height: '24px' }}>
                                                            <figure color="light">
                                                                <div className="h-full "><img
                                                                    src="https://www.databricks.com/sites/default/files/2023-11/logo-homepage-nba.svg?v=1724845323"
                                                                    alt="Nba" loading="lazy"
                                                                    data-ot-ignore="1"
                                                                    className="w-auto my-0 mx-auto grayscale brightness-0 optanon-category-C0001"
                                                                    style={{ height: '24px' }} /></div>
                                                            </figure>
                                                        </div>
                                                        <div className="mr-6 md:mr-8 lg:mr-12"
                                                            style={{ height: '24px' }}>
                                                            <figure color="light">
                                                                <div className="h-full "><img
                                                                    src="https://www.databricks.com/sites/default/files/2023-11/logo-homepage-santander.svg?v=1724845348"
                                                                    alt="Santander" loading="lazy"
                                                                    data-ot-ignore="1"
                                                                    className="w-auto my-0 mx-auto grayscale brightness-0 optanon-category-C0001"
                                                                    style={{ height: '24px' }} /></div>
                                                            </figure>
                                                        </div>
                                                        <div className="mr-6 md:mr-8 lg:mr-12"
                                                            style={{ height: '24px' }}>
                                                            <figure color="light">
                                                                <div className="h-full "><img
                                                                    src="https://www.databricks.com/sites/default/files/2023-11/logo-homepage-shell.svg?v=1724845370"
                                                                    alt="Shell" loading="lazy"
                                                                    data-ot-ignore="1"
                                                                    className="w-auto my-0 mx-auto grayscale brightness-0 optanon-category-C0001"
                                                                    style={{ height: '24px' }} /></div>
                                                            </figure>
                                                        </div>
                                                        <div className="mr-6 md:mr-8 lg:mr-12"
                                                            style={{ height: '24px' }}>
                                                            <figure color="light">
                                                                <div className="h-full "><img
                                                                    src="https://www.databricks.com/sites/default/files/2023-11/logo-homepage-siemens.svg?v=1724845393"
                                                                    alt="Siemens" loading="lazy"
                                                                    data-ot-ignore="1"
                                                                    className="w-auto my-0 mx-auto grayscale brightness-0 optanon-category-C0001"
                                                                    style={{ height: '24px' }} /></div>
                                                            </figure>
                                                        </div>
                                                        <div className="mr-6 md:mr-8 lg:mr-12"
                                                            style={{ height: '24px' }}>
                                                            <figure color="light">
                                                                <div className="h-full "><img
                                                                    src="https://www.databricks.com/sites/default/files/2023-11/logo-homepage-toyota.svg?v=1724845415"
                                                                    alt="Toyota" loading="lazy"
                                                                    data-ot-ignore="1"
                                                                    className="w-auto my-0 mx-auto grayscale brightness-0 optanon-category-C0001"
                                                                    style={{ height: '24px' }} /></div>
                                                            </figure>
                                                        </div>
                                                        <div className="mr-6 md:mr-8 lg:mr-12"
                                                            style={{ height: '24px' }}>
                                                            <figure color="light">
                                                                <div className="h-full "><img
                                                                    src="https://www.databricks.com/sites/default/files/2023-11/logo-homepage-walgreens.svg?v=1724845441"
                                                                    alt="Walgreens" loading="lazy"
                                                                    data-ot-ignore="1"
                                                                    className="w-auto my-0 mx-auto grayscale brightness-0 optanon-category-C0001"
                                                                    style={{ height: '24px' }} /></div>
                                                            </figure>
                                                        </div>
                                                        <div className="mr-6 md:mr-8 lg:mr-12"
                                                            style={{ height: '24px' }}>
                                                            <figure color="light">
                                                                <div className="h-full "><img
                                                                    src="https://www.databricks.com/sites/default/files/2023-11/logo-homepage-warner-bros-discovery.svg?v=1724845507"
                                                                    alt="Warner Bros Discovery"
                                                                    loading="lazy" data-ot-ignore="1"
                                                                    className="w-auto my-0 mx-auto grayscale brightness-0 optanon-category-C0001"
                                                                    style={{ height: '24px' }} /></div>
                                                            </figure>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="absolute right-0 top-0 z-10 h-full pl-10 pr-2 md:block">
                                            <div className="absolute left-0 top-0 z-0 h-full w-full"
                                                style={{ background: 'linear-gradient(270deg, rgb(255, 255, 255) 34.09%, rgba(255, 255, 255, 0) 100%)' }}>
                                            </div><button type="button"
                                                aria-data-label="Pause customer stories animation"
                                                className="absolute right-[16px] top-1/2 z-10 -translate-y-1/2 transform"><svg
                                                    width="22" height="22" viewBox="0 0 22 22" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="11" cy="11" r="11" fill="white"
                                                        fillOpacity="0.6"></circle>
                                                    <path fillRule="evenodd" clipRule="evenodd"
                                                        d="M8 15V7H10V15H8ZM12 15V7H14V15H12Z"
                                                        fill="currentColor"></path>
                                                    <circle cx="11" cy="11" r="8.5" stroke="currentColor">
                                                    </circle>
                                                </svg></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div data-key="b30ec18c-c3fb-4744-a012-a55af847e13b" className=" hidden">
                                <div
                                    className="specific-wrapper-top pt-0 md:pt-0 lg:pt-0 specific-wrapper-bottom pb-0 md:pb-0 lg:pb-0 ">
                                    <div data-cy="Wrapper"
                                        className="content-wrapper fullwidth-component relative z-10"
                                        title="PROMO SECTION">
                                        <div aria-hidden="true" className="absolute inset-0 w-full h-full"
                                            style={{ zIndex: '-1', backgroundColor: '#F9F7F4', opacity: '1' }}></div>
                                        <div className="inner-wrapper">
                                            <div data-cy="Grid" className="grid grid-cols-12 gap-0 ">
                                                <div style={{ gridColumn: '1 / span 12' }}>
                                                    <div data-key="cf281e63-09c5-44c3-a78e-602130118dc2"
                                                        id="home-asset-promo-486-15188-A" className=" hidden">
                                                        <div data-cy="Wrapper" className="outer-wrapper "
                                                            id="Drupal_ParagraphAssetPromoCard-cf281e63-09c5-44c3-a78e-602130118dc2">
                                                            <div className="inner-wrapper"><a
                                                                data-external-link="true"
                                                                href="/resources/guide/boost-genai-roi-ai-agents"
                                                                className="variant-assetPromo group-arrow-icon-tertiary hover:no-underline hover:border-b-orange-02 hover:shadow-legacy-card-hover group py-4 px-3 md:py-2 md:pr-4 lg:py-3 lg:pl-3 md:pl-2 gap-3 lg:gap-3 shadow-card-normal group flex flex-col items-center border-b-2 border-b-white bg-white transition-all delay-75  duration-75 ease-linear md:flex-row md:gap-2.5 lg:pr-6"
                                                                data-variant="C" data-cy="Card"
                                                                aria-data-label="Read more about A Compact Guide to AI Agent Systems">
                                                                <div
                                                                    className="flex aspect-square md:h-[104px] h-[140px] flex-col justify-center">
                                                                    <figure className="w-full m-auto">
                                                                        <div className="h-full ">
                                                                            <div data-gatsby-image-wrapper=""
                                                                                className="gatsby-image-wrapper optanon-category-C0001">
                                                                                <div aria-hidden="true"
                                                                                    style={{ paddingTop: '52.22222222222223%' }}>
                                                                                </div>
                                                                                <div aria-hidden="true"
                                                                                    data-placeholder-image=""
                                                                                    style={{ opacity: '1', transition: 'opacity 500ms linear', backgroundColor: 'transparent', position: 'absolute', top: '0', left: '0', bottom: '0', right: '0' }}>
                                                                                </div><img
                                                                                    data-gatsby-image-ssr=""
                                                                                    data-ot-ignore="1"
                                                                                    data-main-image=""
                                                                                    style={{ opacity: '0' }}
                                                                                    sizes="100vw"
                                                                                    decoding="async"
                                                                                    loading="lazy" alt=""
                                                                                    src="https://www.databricks.com/sites/default/files/2025-02/2025-02-eb-compact-guide-to-ai-agent-systems-cover-ty-tn-360x188-2x.png?v=1739485890" /><noscript><img
                                                                                        data-gatsby-image-ssr=""
                                                                                        data-ot-ignore="1"
                                                                                        data-main-image=""
                                                                                        style={{ opacity: '0' }}
                                                                                        sizes="100vw"
                                                                                        decoding="async"
                                                                                        loading="lazy"
                                                                                        src="https://www.databricks.com/sites/default/files/2025-02/2025-02-eb-compact-guide-to-ai-agent-systems-cover-ty-tn-360x188-2x.png?v=1739485890"
                                                                                        alt="" /></noscript>
                                                                                <script type="module"
                                                                                    data-ot-ignore="1"
                                                                                    className="optanon-category-C0001" dangerouslySetInnerHTML={{ __html: `const t = "undefined" != typeof HTMLImageElement && "loading" in HTMLImageElement.prototype; if (t) { const t = document.querySelectorAll("img[data-main-image]"); for (let e of t) { e.dataset.src && (e.setAttribute("src", e.dataset.src), e.removeAttribute("data-src")), e.dataset.srcset && (e.setAttribute("srcset", e.dataset.srcset), e.removeAttribute("data-srcset")); const t = e.parentNode.querySelectorAll("source[data-srcset]"); for (let e of t) e.setAttribute("srcset", e.dataset.srcset), e.removeAttribute("data-srcset"); e.complete && (e.style.opacity = 1, e.parentNode.parentNode.querySelector("[data-placeholder-image]").style.opacity = 0) } }` }} />
                                                                            </div>
                                                                        </div>
                                                                    </figure>
                                                                </div>
                                                                <div
                                                                    className="h4 bold gap-3 lg:gap-3 flex w-full flex-col items-center justify-center text-center md:text-start md:flex-row md:justify-between md:gap-2.5">
                                                                    <div className="flex-1">
                                                                        <div className="text-navy-800 h5">
                                                                            <p className="h4 font-bold mb-1">
                                                                                Boost GenAI ROI with AI
                                                                                agents</p>
                                                                            <span className="b4">
                                                                                <p>Real-world examples of AI
                                                                                    agents in action</p>
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="swiper-no-swiping">
                                                                        <div className=""><span tabIndex={0}
                                                                            role="button"
                                                                            className="shrink-0 !px-3 group-hover:!bg-orange-700 b4 btn-primary inline-block px-2.5 py-1 transition duration-200 ease-in-out hover:no-underline">Get
                                                                            the eBook</span></div>
                                                                    </div>
                                                                </div>
                                                            </a></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="specific-wrapper-top pt-0 md:pt-0 lg:pt-0 specific-wrapper-bottom pb-0 md:pb-0 lg:pb-0 ">
                                <div data-cy="Wrapper" className="content-wrapper fullwidth-component relative z-10"
                                    title="PLATFORM">
                                    <div aria-hidden="true" className="absolute inset-0 w-full h-full"
                                        style={{ zIndex: '-1', backgroundColor: '#F9F7F4', opacity: '1' }}></div>
                                    <div className="inner-wrapper">
                                        <div data-cy="Grid" className="grid grid-cols-12 gap-0 ">
                                            <div style={{ gridColumn: '1 / span 12' }}>
                                                <div
                                                    className="specific-wrapper-top pt-10 md:pt-12 lg:pt-16 specific-wrapper-bottom pb-8 md:pb-8 lg:pb-12 ">
                                                    <div data-cy="Wrapper" className="outer-wrapper ">
                                                        <div className="inner-wrapper">
                                                            <section
                                                                className="section-header mx-auto text-center w-full md:w-8/12 xl:w-6/12">
                                                                <span
                                                                    className="text-2 block font-mono uppercase mb-4 leading-none text-orange-700">PLATFORM</span>
                                                                <div className="flex flex-col gap-2 ">
                                                                    <h2
                                                                        className="text-navy-800 text-4 md:text-5 lg:tracking-t-1 lg:text-6 font-medium">
                                                                        The Databricks<br />Data Intelligence
                                                                        Platform</h2><span
                                                                            className="b2 block text-navy-800 text-blue-cta">Databricks
                                                                        brings AI to your data to help you bring
                                                                        AI to the world.</span>
                                                                </div>
                                                                <div
                                                                    className="flex w-full flex-wrap items-center gap-2 lg:gap-4 justify-center">
                                                                </div>
                                                            </section>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    className="specific-wrapper-top pt-0 md:pt-0 lg:pt-0 specific-wrapper-bottom pb-0 md:pb-0 lg:pb-0 ">
                                                    <div data-cy="Wrapper" className="outer-wrapper ">
                                                        <div className="inner-wrapper">
                                                            <div>
                                                                <div
                                                                    className="card-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-6 lg:gap-4">
                                                                    <div
                                                                        className="text-navy-800  flat-icon-card text-3.5 md:pr-3">
                                                                        <div className="">
                                                                            <div
                                                                                className="flex mb-4 justify-start">
                                                                                <figure className="w-6 h-6">
                                                                                    <div className="h-full ">
                                                                                        <div data-gatsby-image-wrapper=""
                                                                                            className="gatsby-image-wrapper h-full w-full object-contain object-left optanon-category-C0001">
                                                                                            <div aria-hidden="true"
                                                                                                style={{ paddingTop: '100%' }}>
                                                                                            </div>
                                                                                            <div aria-hidden="true"
                                                                                                data-placeholder-image=""
                                                                                                style={{ opacity: '0', transition: 'opacity 500ms linear', backgroundColor: 'transparent', position: 'absolute', inset: '0px', objectFit: 'contain' }}>
                                                                                            </div><img
                                                                                                data-ot-ignore="1"
                                                                                                data-main-image=""
                                                                                                style={{ objectFit: 'contain', opacity: '1' }}
                                                                                                sizes="100vw"
                                                                                                decoding="async"
                                                                                                loading="lazy"
                                                                                                alt=""
                                                                                                src="https://www.databricks.com/sites/default/files/2023-11/icon-succeed-with-ai.svg?v=1699893514" /><noscript><img
                                                                                                    data-gatsby-image-ssr=""
                                                                                                    data-ot-ignore="1"
                                                                                                    data-main-image=""
                                                                                                    style={{ objectFit: 'contain', opacity: '0' }}
                                                                                                    sizes="100vw"
                                                                                                    decoding="async"
                                                                                                    loading="lazy"
                                                                                                    src="https://www.databricks.com/sites/default/files/2023-11/icon-succeed-with-ai.svg?v=1699893514"
                                                                                                    alt="" /></noscript>
                                                                                            <script
                                                                                                type="module"
                                                                                                data-ot-ignore="1"
                                                                                                className="optanon-category-C0001" dangerouslySetInnerHTML={{ __html: `const t = "undefined" != typeof HTMLImageElement && "loading" in HTMLImageElement.prototype; if (t) { const t = document.querySelectorAll("img[data-main-image]"); for (let e of t) { e.dataset.src && (e.setAttribute("src", e.dataset.src), e.removeAttribute("data-src")), e.dataset.srcset && (e.setAttribute("srcset", e.dataset.srcset), e.removeAttribute("data-srcset")); const t = e.parentNode.querySelectorAll("source[data-srcset]"); for (let e of t) e.setAttribute("srcset", e.dataset.srcset), e.removeAttribute("data-srcset"); e.complete && (e.style.opacity = 1, e.parentNode.parentNode.querySelector("[data-placeholder-image]").style.opacity = 0) } }` }} />
                                                                                        </div>
                                                                                    </div>
                                                                                </figure>
                                                                            </div>
                                                                            <div
                                                                                className="flex flex-1 flex-col gap-2">
                                                                                <div
                                                                                    className="text-3.5 font-semibold">
                                                                                    <h3
                                                                                        className="text-3.5 font-semibold">
                                                                                        Succeed with AI</h3>
                                                                                </div>
                                                                                <div
                                                                                    className="text-navy-800 text-2">
                                                                                    <p className="text-2.5">Develop
                                                                                        generative AI
                                                                                        applications on your
                                                                                        data without sacrificing
                                                                                        data privacy or control.
                                                                                    </p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div
                                                                        className="text-navy-800  flat-icon-card text-3.5 md:pr-3">
                                                                        <div className="">
                                                                            <div
                                                                                className="flex mb-4 justify-start">
                                                                                <figure className="w-6 h-6">
                                                                                    <div className="h-full ">
                                                                                        <div data-gatsby-image-wrapper=""
                                                                                            className="gatsby-image-wrapper h-full w-full object-contain object-left optanon-category-C0001">
                                                                                            <div aria-hidden="true"
                                                                                                style={{ paddingTop: '100%' }}>
                                                                                            </div>
                                                                                            <div aria-hidden="true"
                                                                                                data-placeholder-image=""
                                                                                                style={{ opacity: '0', transition: 'opacity 500ms linear', backgroundColor: 'transparent', position: 'absolute', inset: '0px', objectFit: 'contain' }}>
                                                                                            </div><img
                                                                                                data-ot-ignore="1"
                                                                                                data-main-image=""
                                                                                                style={{ objectFit: 'contain', opacity: '1' }}
                                                                                                sizes="100vw"
                                                                                                decoding="async"
                                                                                                loading="lazy"
                                                                                                alt=""
                                                                                                src="https://www.databricks.com/sites/default/files/2023-11/icon-democratize-insights.svg?v=1699570017" /><noscript><img
                                                                                                    data-gatsby-image-ssr=""
                                                                                                    data-ot-ignore="1"
                                                                                                    data-main-image=""
                                                                                                    style={{ objectFit: 'contain', opacity: '0' }}
                                                                                                    sizes="100vw"
                                                                                                    decoding="async"
                                                                                                    loading="lazy"
                                                                                                    src="https://www.databricks.com/sites/default/files/2023-11/icon-democratize-insights.svg?v=1699570017"
                                                                                                    alt="" /></noscript>
                                                                                            <script
                                                                                                type="module"
                                                                                                data-ot-ignore="1"
                                                                                                className="optanon-category-C0001" dangerouslySetInnerHTML={{ __html: `const t = "undefined" != typeof HTMLImageElement && "loading" in HTMLImageElement.prototype; if (t) { const t = document.querySelectorAll("img[data-main-image]"); for (let e of t) { e.dataset.src && (e.setAttribute("src", e.dataset.src), e.removeAttribute("data-src")), e.dataset.srcset && (e.setAttribute("srcset", e.dataset.srcset), e.removeAttribute("data-srcset")); const t = e.parentNode.querySelectorAll("source[data-srcset]"); for (let e of t) e.setAttribute("srcset", e.dataset.srcset), e.removeAttribute("data-srcset"); e.complete && (e.style.opacity = 1, e.parentNode.parentNode.querySelector("[data-placeholder-image]").style.opacity = 0) } }` }} />
                                                                                        </div>
                                                                                    </div>
                                                                                </figure>
                                                                            </div>
                                                                            <div
                                                                                className="flex flex-1 flex-col gap-2">
                                                                                <div
                                                                                    className="text-3.5 font-semibold">
                                                                                    <h3
                                                                                        className="text-3.5 font-semibold">
                                                                                        Democratize insights
                                                                                    </h3>
                                                                                </div>
                                                                                <div
                                                                                    className="text-navy-800 text-2">
                                                                                    <p className="text-2.5">Empower
                                                                                        everyone in your
                                                                                        organization to discover
                                                                                        insights from your data
                                                                                        using natural language.
                                                                                    </p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div
                                                                        className="text-navy-800  flat-icon-card text-3.5 md:pr-3">
                                                                        <div className="">
                                                                            <div
                                                                                className="flex mb-4 justify-start">
                                                                                <figure className="w-6 h-6">
                                                                                    <div className="h-full ">
                                                                                        <div data-gatsby-image-wrapper=""
                                                                                            className="gatsby-image-wrapper h-full w-full object-contain object-left optanon-category-C0001">
                                                                                            <div aria-hidden="true"
                                                                                                style={{ paddingTop: '100%' }}>
                                                                                            </div>
                                                                                            <div aria-hidden="true"
                                                                                                data-placeholder-image=""
                                                                                                style={{ opacity: '0', transition: 'opacity 500ms linear', backgroundColor: 'transparent', position: 'absolute', inset: '0px', objectFit: 'contain' }}>
                                                                                            </div><img
                                                                                                data-ot-ignore="1"
                                                                                                data-main-image=""
                                                                                                style={{ objectFit: 'contain', opacity: '1' }}
                                                                                                sizes="100vw"
                                                                                                decoding="async"
                                                                                                loading="lazy"
                                                                                                alt=""
                                                                                                src="https://www.databricks.com/sites/default/files/2023-11/icon-drive-down-costs.svg?v=1699570671" /><noscript><img
                                                                                                    data-gatsby-image-ssr=""
                                                                                                    data-ot-ignore="1"
                                                                                                    data-main-image=""
                                                                                                    style={{ objectFit: 'contain', opacity: '0' }}
                                                                                                    sizes="100vw"
                                                                                                    decoding="async"
                                                                                                    loading="lazy"
                                                                                                    src="https://www.databricks.com/sites/default/files/2023-11/icon-drive-down-costs.svg?v=1699570671"
                                                                                                    alt="" /></noscript>
                                                                                            <script
                                                                                                type="module"
                                                                                                data-ot-ignore="1"
                                                                                                className="optanon-category-C0001" dangerouslySetInnerHTML={{ __html: `const t = "undefined" != typeof HTMLImageElement && "loading" in HTMLImageElement.prototype; if (t) { const t = document.querySelectorAll("img[data-main-image]"); for (let e of t) { e.dataset.src && (e.setAttribute("src", e.dataset.src), e.removeAttribute("data-src")), e.dataset.srcset && (e.setAttribute("srcset", e.dataset.srcset), e.removeAttribute("data-srcset")); const t = e.parentNode.querySelectorAll("source[data-srcset]"); for (let e of t) e.setAttribute("srcset", e.dataset.srcset), e.removeAttribute("data-srcset"); e.complete && (e.style.opacity = 1, e.parentNode.parentNode.querySelector("[data-placeholder-image]").style.opacity = 0) } }` }} />
                                                                                        </div>
                                                                                    </div>
                                                                                </figure>
                                                                            </div>
                                                                            <div
                                                                                className="flex flex-1 flex-col gap-2">
                                                                                <div
                                                                                    className="text-3.5 font-semibold">
                                                                                    <h3
                                                                                        className="text-3.5 font-semibold">
                                                                                        Drive down costs</h3>
                                                                                </div>
                                                                                <div
                                                                                    className="text-navy-800 text-2">
                                                                                    <p className="text-2.5">Gain
                                                                                        efficiency and simplify
                                                                                        complexity by unifying
                                                                                        your approach to data,
                                                                                        AI and governance.</p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    className="specific-wrapper-top pt-6 md:pt-6 lg:pt-8 specific-wrapper-bottom pb-12 md:pb-12 lg:pb-8 ">
                                                    <div data-cy="Wrapper" className="outer-wrapper ">
                                                        <div className="inner-wrapper">
                                                            <div>
                                                                <div data-cy="CtaRow"
                                                                    className="justify-center items-center flex">
                                                                    <div
                                                                        className="flex flex-col gap-2 md:flex-row md:gap-3">
                                                                        <a data-external-link="true"
                                                                            href="/product/data-intelligence-platform"
                                                                            data-cy="Button"
                                                                            className="b4 inline-block px-3 py-1 transition duration-200 ease-in-out hover:no-underline btn-secondary text-center testId-secondary"
                                                                            aria-data-label="Explore the platform">Explore
                                                                            the platform</a><a
                                                                                data-external-link="true"
                                                                                href="https://www.databricks.com/lp/data-intelligence-days?itm_data=home-dataintelligenceplatform-dataintelligencedays"
                                                                                aria-data-label="Find an event"
                                                                                className="cursor-pointer testId-variant-a arrow-icon-tertiary tertiary-underline self-center">Find
                                                                            an event</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="specific-wrapper-top pt-0 md:pt-0 lg:pt-0 specific-wrapper-bottom pb-0 md:pb-0 lg:pb-0 ">
                                <div data-cy="Wrapper" className="content-wrapper fullwidth-component relative z-10"
                                    title="PROMO TEST">
                                    <div aria-hidden="true" className="absolute inset-0 w-full h-full"
                                        style={{ zIndex: '-1', backgroundColor: '#F9F7F4', opacity: '1' }}></div>
                                    <div className="inner-wrapper">
                                        <div data-cy="Grid" className="grid grid-cols-12 gap-0 ">
                                            <div style={{ gridColumn: '1 / span 12' }}>
                                                <div data-key="91d22184-9548-4113-84fc-27b216b3efda"
                                                    id="home-promo-card-496-15188-A" className=" hidden">
                                                    <div
                                                        className="specific-wrapper-top pt-0 md:pt-0 lg:pt-0 specific-wrapper-bottom pb-8 md:pb-12 lg:pb-16 ">
                                                        <div data-cy="Wrapper" className="outer-wrapper "
                                                            id="Drupal_ParagraphAssetPromoCard-91d22184-9548-4113-84fc-27b216b3efda">
                                                            <div className="inner-wrapper"><a
                                                                data-external-link="true"
                                                                href="/resources/guide/boost-genai-roi-ai-agents"
                                                                className="variant-assetPromo group-arrow-icon-tertiary hover:no-underline hover:border-b-orange-02 hover:shadow-legacy-card-hover group py-4 px-3 md:py-2 md:pr-4 lg:py-3 lg:pl-3 md:pl-2 gap-3 lg:gap-3 shadow-card-normal group flex flex-col items-center border-b-2 border-b-white bg-white transition-all delay-75  duration-75 ease-linear md:flex-row md:gap-2.5 lg:pr-6"
                                                                data-variant="C" data-cy="Card"
                                                                aria-data-label="Read more about A Compact Guide to AI Agent Systems">
                                                                <div
                                                                    className="flex aspect-square md:h-[104px] h-[140px] flex-col justify-center">
                                                                    <figure className="w-full m-auto">
                                                                        <div className="h-full ">
                                                                            <div data-gatsby-image-wrapper=""
                                                                                className="gatsby-image-wrapper optanon-category-C0001">
                                                                                <div aria-hidden="true"
                                                                                    style={{ paddingTop: '52.22222222222223%' }}>
                                                                                </div>
                                                                                <div aria-hidden="true"
                                                                                    data-placeholder-image=""
                                                                                    style={{ opacity: '1', transition: 'opacity 500ms linear', backgroundColor: 'transparent', position: 'absolute', top: '0', left: '0', bottom: '0', right: '0' }}>
                                                                                </div><img
                                                                                    data-gatsby-image-ssr=""
                                                                                    data-ot-ignore="1"
                                                                                    data-main-image=""
                                                                                    style={{ opacity: '0' }}
                                                                                    sizes="100vw"
                                                                                    decoding="async"
                                                                                    loading="lazy" alt=""
                                                                                    src="https://www.databricks.com/sites/default/files/2025-02/2025-02-eb-compact-guide-to-ai-agent-systems-cover-ty-tn-360x188-2x.png?v=1739485890" /><noscript><img
                                                                                        data-gatsby-image-ssr=""
                                                                                        data-ot-ignore="1"
                                                                                        data-main-image=""
                                                                                        style={{ opacity: '0' }}
                                                                                        sizes="100vw"
                                                                                        decoding="async"
                                                                                        loading="lazy"
                                                                                        src="https://www.databricks.com/sites/default/files/2025-02/2025-02-eb-compact-guide-to-ai-agent-systems-cover-ty-tn-360x188-2x.png?v=1739485890"
                                                                                        alt="" /></noscript>
                                                                                <script type="module"
                                                                                    data-ot-ignore="1"
                                                                                    className="optanon-category-C0001" dangerouslySetInnerHTML={{ __html: `const t = "undefined" != typeof HTMLImageElement && "loading" in HTMLImageElement.prototype; if (t) { const t = document.querySelectorAll("img[data-main-image]"); for (let e of t) { e.dataset.src && (e.setAttribute("src", e.dataset.src), e.removeAttribute("data-src")), e.dataset.srcset && (e.setAttribute("srcset", e.dataset.srcset), e.removeAttribute("data-srcset")); const t = e.parentNode.querySelectorAll("source[data-srcset]"); for (let e of t) e.setAttribute("srcset", e.dataset.srcset), e.removeAttribute("data-srcset"); e.complete && (e.style.opacity = 1, e.parentNode.parentNode.querySelector("[data-placeholder-image]").style.opacity = 0) } }` }} />
                                                                            </div>
                                                                        </div>
                                                                    </figure>
                                                                </div>
                                                                <div
                                                                    className="h4 bold gap-3 lg:gap-3 flex w-full flex-col items-center justify-center text-center md:text-start md:flex-row md:justify-between md:gap-2.5">
                                                                    <div className="flex-1">
                                                                        <div className="text-navy-800 h5">
                                                                            <p className="h4 font-bold mb-1">
                                                                                Boost GenAI ROI with AI
                                                                                agents</p>
                                                                            <span className="b4">
                                                                                <p>Real-world examples of AI
                                                                                    agents in action</p>
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="swiper-no-swiping">
                                                                        <div className=""><span tabIndex={0}
                                                                            role="button"
                                                                            className="shrink-0 !px-3 group-hover:!bg-orange-700 b4 btn-primary inline-block px-2.5 py-1 transition duration-200 ease-in-out hover:no-underline">Get
                                                                            the eBook</span></div>
                                                                    </div>
                                                                </div>
                                                            </a></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div data-key="8e27a6fc-7c8e-483b-a518-d465cdf092e5"
                                                    id="home-asset-promo-499-15189-A" className=" hidden">
                                                    <div data-cy="Wrapper" className="outer-wrapper "
                                                        id="Drupal_ParagraphAssetPromoCard-8e27a6fc-7c8e-483b-a518-d465cdf092e5">
                                                        <div className="inner-wrapper"><a data-external-link="true"
                                                            href="/resources/ebook/maximize-your-organizations-potential-data-and-ai"
                                                            className="variant-assetPromo group-arrow-icon-tertiary hover:no-underline hover:border-b-orange-02 hover:shadow-legacy-card-hover group py-4 px-3 md:py-2 md:pr-4 lg:py-3 lg:pl-3 md:pl-2 gap-3 lg:gap-3 shadow-card-normal group flex flex-col items-center border-b-2 border-b-white bg-white transition-all delay-75  duration-75 ease-linear md:flex-row md:gap-2.5 lg:pr-6"
                                                            data-variant="C" data-cy="Card"
                                                            aria-data-label="Read more about The Data Intelligence Platform for Dummies">
                                                            <div
                                                                className="flex aspect-square md:h-[104px] h-[140px] flex-col justify-center">
                                                                <figure className="w-full m-auto">
                                                                    <div className="h-full ">
                                                                        <div data-gatsby-image-wrapper=""
                                                                            className="gatsby-image-wrapper optanon-category-C0001">
                                                                            <div aria-hidden="true"
                                                                                style={{ paddingTop: '100%' }}>
                                                                            </div>
                                                                            <div aria-hidden="true"
                                                                                data-placeholder-image=""
                                                                                style={{ opacity: '1', transition: 'opacity 500ms linear', backgroundColor: 'transparent', position: 'absolute', top: '0', left: '0', bottom: '0', right: '0' }}>
                                                                            </div><img
                                                                                data-gatsby-image-ssr=""
                                                                                data-ot-ignore="1"
                                                                                data-main-image=""
                                                                                style={{ opacity: '0' }}
                                                                                sizes="100vw"
                                                                                decoding="async"
                                                                                loading="lazy" alt=""
                                                                                src="https://www.databricks.com/sites/default/files/2025-05/2024-05-eb-di-platform-dummies-pc-107x107-2x.png?v=1746574623" /><noscript><img
                                                                                    data-gatsby-image-ssr=""
                                                                                    data-ot-ignore="1"
                                                                                    data-main-image=""
                                                                                    style={{ opacity: '0' }}
                                                                                    sizes="100vw"
                                                                                    decoding="async"
                                                                                    loading="lazy"
                                                                                    src="https://www.databricks.com/sites/default/files/2025-05/2024-05-eb-di-platform-dummies-pc-107x107-2x.png?v=1746574623"
                                                                                    alt="" /></noscript>
                                                                            <script type="module"
                                                                                data-ot-ignore="1"
                                                                                className="optanon-category-C0001" dangerouslySetInnerHTML={{ __html: `const t = "undefined" != typeof HTMLImageElement && "loading" in HTMLImageElement.prototype; if (t) { const t = document.querySelectorAll("img[data-main-image]"); for (let e of t) { e.dataset.src && (e.setAttribute("src", e.dataset.src), e.removeAttribute("data-src")), e.dataset.srcset && (e.setAttribute("srcset", e.dataset.srcset), e.removeAttribute("data-srcset")); const t = e.parentNode.querySelectorAll("source[data-srcset]"); for (let e of t) e.setAttribute("srcset", e.dataset.srcset), e.removeAttribute("data-srcset"); e.complete && (e.style.opacity = 1, e.parentNode.parentNode.querySelector("[data-placeholder-image]").style.opacity = 0) } }` }} />
                                                                        </div>
                                                                    </div>
                                                                </figure>
                                                            </div>
                                                            <div
                                                                className="h4 bold gap-3 lg:gap-3 flex w-full flex-col items-center justify-center text-center md:text-start md:flex-row md:justify-between md:gap-2.5">
                                                                <div className="flex-1">
                                                                    <div className="text-navy-800 h5">
                                                                        <p className="h4 font-bold mb-1">The
                                                                            Data Intelligence Platform for
                                                                            Dummies</p>
                                                                        <span className="b4">
                                                                            <p>Accelerate ETL, data
                                                                                warehousing, BI and AI</p>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                <div className="swiper-no-swiping">
                                                                    <div className=""><span tabIndex={0}
                                                                        role="button"
                                                                        className="shrink-0 !px-3 group-hover:!bg-orange-700 b4 btn-primary inline-block px-2.5 py-1 transition duration-200 ease-in-out hover:no-underline">Get
                                                                        the eBook</span></div>
                                                                </div>
                                                            </div>
                                                        </a></div>
                                                    </div>
                                                </div>
                                                <div data-key="906366b3-0d0b-4340-bcab-f1120011bac4"
                                                    id="ht-web-poc-994201229" className=" hidden">
                                                    <div data-cy="Wrapper" className="outer-wrapper "
                                                        id="Drupal_ParagraphAssetPromoCard-906366b3-0d0b-4340-bcab-f1120011bac4">
                                                        <div className="inner-wrapper"><a data-external-link="true"
                                                            href="/resources/learn/training/generative-ai-fundamentals?itm_data=web-nurture-journey-994201229"
                                                            className="variant-assetPromo group-arrow-icon-tertiary hover:no-underline hover:border-b-orange-02 hover:shadow-legacy-card-hover group py-4 px-3 md:py-2 md:pr-4 lg:py-3 lg:pl-3 md:pl-2 gap-3 lg:gap-3 shadow-card-normal group flex flex-col items-center border-b-2 border-b-white bg-white transition-all delay-75  duration-75 ease-linear md:flex-row md:gap-2.5 lg:pr-6"
                                                            data-variant="C" data-cy="Card"
                                                            aria-data-label="Read more about Play button on GenAI presentation slide">
                                                            <div
                                                                className="flex aspect-square md:h-[104px] h-[140px] flex-col justify-center">
                                                                <figure className="w-full m-auto">
                                                                    <div className="h-full ">
                                                                        <div data-gatsby-image-wrapper=""
                                                                            className="gatsby-image-wrapper optanon-category-C0001">
                                                                            <div aria-hidden="true"
                                                                                style={{ paddingTop: '100%' }}>
                                                                            </div>
                                                                            <div aria-hidden="true"
                                                                                data-placeholder-image=""
                                                                                style={{ opacity: '1', transition: 'opacity 500ms linear', backgroundColor: 'transparent', position: 'absolute', top: '0', left: '0', bottom: '0', right: '0' }}>
                                                                            </div><img
                                                                                data-gatsby-image-ssr=""
                                                                                data-ot-ignore="1"
                                                                                data-main-image=""
                                                                                style={{ opacity: '0' }}
                                                                                sizes="100vw"
                                                                                decoding="async"
                                                                                loading="lazy" alt=""
                                                                                src="https://www.databricks.com/sites/default/files/2025-07/2025-07-wb-introducing-generative-ai-pc-107x107-2x.png?v=1753111476" /><noscript><img
                                                                                    data-gatsby-image-ssr=""
                                                                                    data-ot-ignore="1"
                                                                                    data-main-image=""
                                                                                    style={{ opacity: '0' }}
                                                                                    sizes="100vw"
                                                                                    decoding="async"
                                                                                    loading="lazy"
                                                                                    src="https://www.databricks.com/sites/default/files/2025-07/2025-07-wb-introducing-generative-ai-pc-107x107-2x.png?v=1753111476"
                                                                                    alt="" /></noscript>
                                                                            <script type="module"
                                                                                data-ot-ignore="1"
                                                                                className="optanon-category-C0001" dangerouslySetInnerHTML={{ __html: `const t = "undefined" != typeof HTMLImageElement && "loading" in HTMLImageElement.prototype; if (t) { const t = document.querySelectorAll("img[data-main-image]"); for (let e of t) { e.dataset.src && (e.setAttribute("src", e.dataset.src), e.removeAttribute("data-src")), e.dataset.srcset && (e.setAttribute("srcset", e.dataset.srcset), e.removeAttribute("data-srcset")); const t = e.parentNode.querySelectorAll("source[data-srcset]"); for (let e of t) e.setAttribute("srcset", e.dataset.srcset), e.removeAttribute("data-srcset"); e.complete && (e.style.opacity = 1, e.parentNode.parentNode.querySelector("[data-placeholder-image]").style.opacity = 0) } }` }} />
                                                                        </div>
                                                                    </div>
                                                                </figure>
                                                            </div>
                                                            <div
                                                                className="h4 bold gap-3 lg:gap-3 flex w-full flex-col items-center justify-center text-center md:text-start md:flex-row md:justify-between md:gap-2.5">
                                                                <div className="flex-1">
                                                                    <div className="text-navy-800 h5">
                                                                        <p className="h4 font-bold mb-1">
                                                                            Generative AI Fundamentals</p>
                                                                        <span className="b4">
                                                                            <p>Learn how to use LLMs and
                                                                                more in your organization
                                                                                with 4 short videos</p>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                <div className="swiper-no-swiping">
                                                                    <div className=""><span tabIndex={0}
                                                                        role="button"
                                                                        className="shrink-0 !px-3 group-hover:!bg-orange-700 b4 btn-primary inline-block px-2.5 py-1 transition duration-200 ease-in-out hover:no-underline">Start
                                                                        free training</span></div>
                                                                </div>
                                                            </div>
                                                        </a></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="specific-wrapper-top pt-0 md:pt-0 lg:pt-0 specific-wrapper-bottom pb-0 md:pb-0 lg:pb-0 ">
                                <div data-cy="Wrapper"
                                    className="content-wrapper fullwidth-component relative z-10 wrapper-overflow"
                                    title="USE CASES">
                                    <div aria-hidden="true" className="absolute inset-0 w-full h-full"
                                        style={{ zIndex: '-1', backgroundColor: '#F9F7F4', opacity: '1' }}></div>
                                    <div className="inner-wrapper">
                                        <div data-cy="Grid" className="grid grid-cols-12 gap-0 ">
                                            <div style={{ gridColumn: '1 / span 12' }}>
                                                <div
                                                    className="specific-wrapper-top pt-0 md:pt-0 lg:pt-0 specific-wrapper-bottom pb-0 md:pb-0 lg:pb-0 ">
                                                    <div data-cy="Wrapper" className="outer-wrapper ">
                                                        <div className="inner-wrapper">
                                                            <section
                                                                className="section-header mx-auto text-center w-full md:w-8/12 xl:w-6/12">
                                                                <span
                                                                    className="text-2 block font-mono uppercase mb-4 leading-none text-orange-700">USE
                                                                    CASES</span>
                                                                <div className="flex flex-col gap-2 ">
                                                                    <h2
                                                                        className="text-navy-800 text-4 md:text-5 lg:tracking-t-1 lg:text-6 font-medium">
                                                                        Unify all your data + AI</h2>
                                                                </div>
                                                                <div
                                                                    className="flex w-full flex-wrap items-center gap-2 lg:gap-4 justify-center">
                                                                </div>
                                                            </section>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    className="specific-wrapper-top pt-8 md:pt-8 lg:pt-8 specific-wrapper-bottom pb-12 md:pb-12 lg:pb-20 ">
                                                    <div className="bg-oat-light tabbed-content flex flex-col">
                                                        <div data-cy="Wrapper" className="outer-wrapper !my-0">
                                                            <div className="inner-wrapper">
                                                                <div className="justify-center flex-wrap md:w-8/12 lg:w-10/12 mx-auto scroll-bar-transparent flex flex-row gap-2 overflow-x-scroll"
                                                                    role="tablist"><button type="button"
                                                                        role="tab" aria-selected="true"
                                                                        id="tab-4ffcb659-38b5-4a9b-a1d1-9ed06be2a21b"
                                                                        tabIndex={0}
                                                                        aria-controls="panel-4ffcb659-38b5-4a9b-a1d1-9ed06be2a21b"
                                                                        className="text-2 flex h-5 min-w-max items-center rounded-[20px] px-1.5 py-1 outline-offset-[-1px] transition-colors lg:h-5 lg:px-2 lg:py-1.5 bg-orange-500 hover:bg-orange-500 font-bold"><span>AI</span></button><button
                                                                            type="button" role="tab"
                                                                            aria-selected="false"
                                                                            id="tab-194a75fc-84cf-425d-bd4d-adfd41ebb5bc"
                                                                            tabIndex={-1}
                                                                            className="text-2 flex h-5 min-w-max items-center rounded-[20px] px-1.5 py-1 outline-offset-[-1px] transition-colors lg:h-5 lg:px-2 lg:py-1.5 bg-oat-medium text-navy-800 hover:bg-orange-400 font-medium font-medium"><span>Governance</span></button><button
                                                                                type="button" role="tab"
                                                                                aria-selected="false"
                                                                                id="tab-9fb8e9e6-1794-4730-99d6-1b04837b07ff"
                                                                                tabIndex={-1}
                                                                                className="text-2 flex h-5 min-w-max items-center rounded-[20px] px-1.5 py-1 outline-offset-[-1px] transition-colors lg:h-5 lg:px-2 lg:py-1.5 bg-oat-medium text-navy-800 hover:bg-orange-400 font-medium font-medium"><span>Warehousing</span></button><button
                                                                                    type="button" role="tab"
                                                                                    aria-selected="false"
                                                                                    id="tab-799848e8-1420-4f72-837c-c7d6927c2c70"
                                                                                    tabIndex={-1}
                                                                                    className="text-2 flex h-5 min-w-max items-center rounded-[20px] px-1.5 py-1 outline-offset-[-1px] transition-colors lg:h-5 lg:px-2 lg:py-1.5 bg-oat-medium text-navy-800 hover:bg-orange-400 font-medium font-medium"><span>ETL</span></button><button
                                                                                        type="button" role="tab"
                                                                                        aria-selected="false"
                                                                                        id="tab-7c51aff3-91ac-4b5d-b0bf-44de645ee8c7"
                                                                                        tabIndex={-1}
                                                                                        className="text-2 flex h-5 min-w-max items-center rounded-[20px] px-1.5 py-1 outline-offset-[-1px] transition-colors lg:h-5 lg:px-2 lg:py-1.5 bg-oat-medium text-navy-800 hover:bg-orange-400 font-medium font-medium"><span>Data
                                                                                            sharing</span></button><button
                                                                                                type="button" role="tab"
                                                                                                aria-selected="false"
                                                                                                id="tab-f2433c63-ebb4-42ec-8a57-395eccdf6232"
                                                                                                tabIndex={-1}
                                                                                                className="text-2 flex h-5 min-w-max items-center rounded-[20px] px-1.5 py-1 outline-offset-[-1px] transition-colors lg:h-5 lg:px-2 lg:py-1.5 bg-oat-medium text-navy-800 hover:bg-orange-400 font-medium font-medium"><span>Orchestration</span></button>
                                                                </div>
                                                                <div className="relative">
                                                                    <div role="tabpanel"
                                                                        aria-labelledby="tab-4ffcb659-38b5-4a9b-a1d1-9ed06be2a21b"
                                                                        id="panel-4ffcb659-38b5-4a9b-a1d1-9ed06be2a21b"
                                                                        aria-hidden="true" data-el-g2="AI"
                                                                        className="gap-3 duration-300 w-full pt-8 opacity-full relative delay-200 h-auto animate-tab-to-left-active">
                                                                        <div
                                                                            className="row-item-inner-inherit text-navy-800">
                                                                            <div data-cy="Wrapper"
                                                                                className="outer-wrapper "
                                                                                id="Drupal_ParagraphCtaImageBlock-850d7ef9-1a15-4b0f-9992-924abe919261">
                                                                                <div className="inner-wrapper">
                                                                                    <div data-cy="CtaImageBlock"
                                                                                        className="CtaImageBlock cta-image-row flex justify-between cta-image-position-right flex-col items-center md:gap-4 md:flex-row-reverse">
                                                                                        <div
                                                                                            className="image-position-right mt-4 w-full md:order-none md:my-0 md:w-5/12 md:w-5/12 lg:w-6/12">
                                                                                            <figure>
                                                                                                <div
                                                                                                    className="h-full ">
                                                                                                    <div data-gatsby-image-wrapper=""
                                                                                                        className="gatsby-image-wrapper optanon-category-C0001">
                                                                                                        <div aria-hidden="true"
                                                                                                            style={{ paddingTop: '66.08579088471849%' }}>
                                                                                                        </div>
                                                                                                        <div aria-hidden="true"
                                                                                                            data-placeholder-image=""
                                                                                                            style={{ opacity: '0', transition: 'opacity 500ms linear', backgroundColor: 'transparent', position: 'absolute', inset: '0px' }}>
                                                                                                        </div>
                                                                                                        <img data-ot-ignore="1"
                                                                                                            data-main-image=""
                                                                                                            style={{ opacity: '1' }}
                                                                                                            sizes="100vw"
                                                                                                            decoding="async"
                                                                                                            loading="lazy"
                                                                                                            alt="serving endpoints"
                                                                                                            src="https://www.databricks.com/sites/default/files/2025-09/HP-Chat-GPT-5.0.png?v=1758739563" /><noscript><img
                                                                                                                data-gatsby-image-ssr=""
                                                                                                                data-ot-ignore="1"
                                                                                                                data-main-image=""
                                                                                                                style={{ opacity: '0' }}
                                                                                                                sizes="100vw"
                                                                                                                decoding="async"
                                                                                                                loading="lazy"
                                                                                                                src="https://www.databricks.com/sites/default/files/2025-09/HP-Chat-GPT-5.0.png?v=1758739563"
                                                                                                                alt="serving endpoints" /></noscript>
                                                                                                        <script
                                                                                                            type="module"
                                                                                                            data-ot-ignore="1"
                                                                                                            className="optanon-category-C0001" dangerouslySetInnerHTML={{ __html: `const t = "undefined" != typeof HTMLImageElement && "loading" in HTMLImageElement.prototype; if (t) { const t = document.querySelectorAll("img[data-main-image]"); for (let e of t) { e.dataset.src && (e.setAttribute("src", e.dataset.src), e.removeAttribute("data-src")), e.dataset.srcset && (e.setAttribute("srcset", e.dataset.srcset), e.removeAttribute("data-srcset")); const t = e.parentNode.querySelectorAll("source[data-srcset]"); for (let e of t) e.setAttribute("srcset", e.dataset.srcset), e.removeAttribute("data-srcset"); e.complete && (e.style.opacity = 1, e.parentNode.parentNode.querySelector("[data-placeholder-image]").style.opacity = 0) } }` }} />
                                                                                                    </div>
                                                                                                </div>
                                                                                            </figure>
                                                                                        </div>
                                                                                        <div aria-hidden="true"
                                                                                            className="lg:w-1/12">
                                                                                        </div>
                                                                                        <div
                                                                                            className="mt-4 md:mt-0 md:w-6/12 lg:flex-1 w-full">
                                                                                            <h3
                                                                                                className="mb-2 h3 text-navy-800 font-normal">
                                                                                                Build better AI
                                                                                                with a
                                                                                                data-centric
                                                                                                approach</h3>
                                                                                            <div
                                                                                                className="rich-text-body">
                                                                                                <p>Great models
                                                                                                    are built
                                                                                                    with great
                                                                                                    data. With
                                                                                                    Databricks,
                                                                                                    lineage,
                                                                                                    quality,
                                                                                                    control and
                                                                                                    data privacy
                                                                                                    are
                                                                                                    maintained
                                                                                                    across the
                                                                                                    entire AI
                                                                                                    workflow,
                                                                                                    powering a
                                                                                                    complete set
                                                                                                    of tools to
                                                                                                    deliver any
                                                                                                    AI use case.
                                                                                                </p>
                                                                                                <ul
                                                                                                    className="check large light">
                                                                                                    <li>Create,
                                                                                                        tune and
                                                                                                        deploy
                                                                                                        your own
                                                                                                        generative
                                                                                                        AI
                                                                                                        models
                                                                                                    </li>
                                                                                                    <li>Automate
                                                                                                        experiment
                                                                                                        tracking
                                                                                                        and
                                                                                                        governance
                                                                                                    </li>
                                                                                                    <li>Deploy
                                                                                                        and
                                                                                                        monitor
                                                                                                        models
                                                                                                        at scale
                                                                                                    </li>
                                                                                                </ul>
                                                                                            </div>
                                                                                            <div
                                                                                                className="mt-3 flex flex-wrap items-center gap-x-3 w-full gap-y-1">
                                                                                                <div
                                                                                                    className="md:flex-shrink-0">
                                                                                                    <a data-external-link="true"
                                                                                                        href="/product/machine-learning?itm_data=databricks-web-home-use-cases"
                                                                                                        role="button"
                                                                                                        className="bg-navy-800 text-white border-navy-800 hover:border-navy-500 p-2 text-2 hover:btn-tertiary text-center inline-block border font-medium leading-none transition-colors duration-200 hover:no-underline"
                                                                                                        aria-data-label="See how Build better AI with a data-centric approach">See
                                                                                                        how</a>
                                                                                                </div>
                                                                                                <div
                                                                                                    className="min-w-[150px]">
                                                                                                    <a data-external-link="true"
                                                                                                        href="/company/contact?itm_data=databricks-web-home-use-cases"
                                                                                                        role="link"
                                                                                                        className="hover:no-underline"
                                                                                                        aria-data-label="Schedule demo Build better AI with a data-centric approach"><span
                                                                                                            className="arrow-icon-tertiary tertiary-underline link-b-700">Schedule
                                                                                                            demo</span></a>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div inert role="tabpanel"
                                                                        aria-labelledby="tab-194a75fc-84cf-425d-bd4d-adfd41ebb5bc"
                                                                        id="panel-194a75fc-84cf-425d-bd4d-adfd41ebb5bc"
                                                                        aria-hidden="false"
                                                                        data-el-g2="Governance"
                                                                        className="gap-3 duration-300 w-full pt-8 absolute top-0 h-0 opacity-0 pointer-events-none animate-tab-to-left">
                                                                        <div
                                                                            className="row-item-inner-inherit text-navy-800">
                                                                            <div data-cy="Wrapper"
                                                                                className="outer-wrapper "
                                                                                id="Drupal_ParagraphCtaImageBlock-584c0bd0-7cec-4cac-a22d-397d31953c72">
                                                                                <div className="inner-wrapper">
                                                                                    <div data-cy="CtaImageBlock"
                                                                                        className="CtaImageBlock cta-image-row flex justify-between cta-image-position-right flex-col items-center md:gap-4 md:flex-row-reverse">
                                                                                        <div
                                                                                            className="image-position-right mt-4 w-full md:order-none md:my-0 md:w-5/12 md:w-5/12 lg:w-6/12">
                                                                                            <figure>
                                                                                                <div
                                                                                                    className="h-full ">
                                                                                                    <div data-gatsby-image-wrapper=""
                                                                                                        className="gatsby-image-wrapper optanon-category-C0001">
                                                                                                        <div aria-hidden="true"
                                                                                                            style={{ paddingTop: '66.75603217158177%' }}>
                                                                                                        </div>
                                                                                                        <div aria-hidden="true"
                                                                                                            data-placeholder-image=""
                                                                                                            style={{ opacity: '0', transition: 'opacity 500ms linear', backgroundColor: 'transparent', position: 'absolute', inset: '0px' }}>
                                                                                                        </div>
                                                                                                        <img data-ot-ignore="1"
                                                                                                            data-main-image=""
                                                                                                            style={{ opacity: '1' }}
                                                                                                            sizes="100vw"
                                                                                                            decoding="async"
                                                                                                            loading="lazy"
                                                                                                            alt="Unify governance for data, analytics and AI"
                                                                                                            src="https://www.databricks.com/sites/default/files/2023-11/productscreen-static-governance.png?v=1699893741" /><noscript><img
                                                                                                                data-gatsby-image-ssr=""
                                                                                                                data-ot-ignore="1"
                                                                                                                data-main-image=""
                                                                                                                style={{ opacity: '0' }}
                                                                                                                sizes="100vw"
                                                                                                                decoding="async"
                                                                                                                loading="lazy"
                                                                                                                src="https://www.databricks.com/sites/default/files/2023-11/productscreen-static-governance.png?v=1699893741"
                                                                                                                alt="Unify governance for data, analytics and AI" /></noscript>
                                                                                                        <script
                                                                                                            type="module"
                                                                                                            data-ot-ignore="1"
                                                                                                            className="optanon-category-C0001" dangerouslySetInnerHTML={{ __html: `const t = "undefined" != typeof HTMLImageElement && "loading" in HTMLImageElement.prototype; if (t) { const t = document.querySelectorAll("img[data-main-image]"); for (let e of t) { e.dataset.src && (e.setAttribute("src", e.dataset.src), e.removeAttribute("data-src")), e.dataset.srcset && (e.setAttribute("srcset", e.dataset.srcset), e.removeAttribute("data-srcset")); const t = e.parentNode.querySelectorAll("source[data-srcset]"); for (let e of t) e.setAttribute("srcset", e.dataset.srcset), e.removeAttribute("data-srcset"); e.complete && (e.style.opacity = 1, e.parentNode.parentNode.querySelector("[data-placeholder-image]").style.opacity = 0) } }` }} />
                                                                                                    </div>
                                                                                                </div>
                                                                                            </figure>
                                                                                        </div>
                                                                                        <div aria-hidden="true"
                                                                                            className="lg:w-1/12">
                                                                                        </div>
                                                                                        <div
                                                                                            className="mt-4 md:mt-0 md:w-6/12 lg:flex-1 w-full">
                                                                                            <h3
                                                                                                className="mb-2 h3 text-navy-800 font-normal">
                                                                                                Unify governance
                                                                                                for data,
                                                                                                analytics and AI
                                                                                            </h3>
                                                                                            <div
                                                                                                className="rich-text-body">
                                                                                                <p>Maintain a
                                                                                                    compliant,
                                                                                                    end-to-end
                                                                                                    view of your
                                                                                                    data estate
                                                                                                    with a
                                                                                                    single model
                                                                                                    of data
                                                                                                    governance
                                                                                                    for all your
                                                                                                    structured
                                                                                                    and
                                                                                                    unstructured
                                                                                                    data.
                                                                                                    Discover
                                                                                                    insights
                                                                                                    rooted in
                                                                                                    the
                                                                                                    characteristics,
                                                                                                    people and
                                                                                                    priorities
                                                                                                    of your
                                                                                                    business.
                                                                                                </p>
                                                                                                <ul
                                                                                                    className="check large light">
                                                                                                    <li>Context-aware
                                                                                                        natural
                                                                                                        language
                                                                                                        search
                                                                                                        and
                                                                                                        discovery
                                                                                                    </li>
                                                                                                    <li>AI-powered
                                                                                                        monitoring
                                                                                                        and
                                                                                                        observability
                                                                                                    </li>
                                                                                                    <li>Single
                                                                                                        permission
                                                                                                        model
                                                                                                        for data
                                                                                                        + AI
                                                                                                    </li>
                                                                                                </ul>
                                                                                            </div>
                                                                                            <div
                                                                                                className="mt-3 flex flex-wrap items-center gap-x-3 w-full gap-y-1">
                                                                                                <div
                                                                                                    className="md:flex-shrink-0">
                                                                                                    <a data-external-link="true"
                                                                                                        href="/product/unity-catalog?itm_data=databricks-web-home-use-cases"
                                                                                                        role="button"
                                                                                                        className="bg-navy-800 text-white border-navy-800 hover:border-navy-500 p-2 text-2 hover:btn-tertiary text-center inline-block border font-medium leading-none transition-colors duration-200 hover:no-underline"
                                                                                                        aria-data-label="See how Unify governance for data, analytics and AI">See
                                                                                                        how</a>
                                                                                                </div>
                                                                                                <div
                                                                                                    className="min-w-[150px]">
                                                                                                    <a data-external-link="true"
                                                                                                        href="/discover/demos/unitycatalog?itm_data=databricks-web-home-use-cases#account"
                                                                                                        role="link"
                                                                                                        className="hover:no-underline"
                                                                                                        aria-data-label="Watch demo Unify governance for data, analytics and AI"><span
                                                                                                            className="arrow-icon-tertiary tertiary-underline link-b-700">Watch
                                                                                                            demo</span></a>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div inert role="tabpanel"
                                                                        aria-labelledby="tab-9fb8e9e6-1794-4730-99d6-1b04837b07ff"
                                                                        id="panel-9fb8e9e6-1794-4730-99d6-1b04837b07ff"
                                                                        aria-hidden="false"
                                                                        data-el-g2="Warehousing"
                                                                        className="gap-3 duration-300 w-full pt-8 absolute top-0 h-0 opacity-0 pointer-events-none animate-tab-to-left">
                                                                        <div
                                                                            className="row-item-inner-inherit text-navy-800">
                                                                            <div data-cy="Wrapper"
                                                                                className="outer-wrapper "
                                                                                id="Drupal_ParagraphCtaImageBlock-0e0a4e1d-df28-42cc-ae5d-64dd5947f25f">
                                                                                <div className="inner-wrapper">
                                                                                    <div data-cy="CtaImageBlock"
                                                                                        className="CtaImageBlock cta-image-row flex justify-between cta-image-position-right flex-col items-center md:gap-4 md:flex-row-reverse">
                                                                                        <div
                                                                                            className="image-position-right mt-4 w-full md:order-none md:my-0 md:w-5/12 md:w-5/12 lg:w-6/12">
                                                                                            <figure>
                                                                                                <div
                                                                                                    className="h-full ">
                                                                                                    <div data-gatsby-image-wrapper=""
                                                                                                        className="gatsby-image-wrapper optanon-category-C0001">
                                                                                                        <div aria-hidden="true"
                                                                                                            style={{ paddingTop: '66.75603217158177%' }}>
                                                                                                        </div>
                                                                                                        <div aria-hidden="true"
                                                                                                            data-placeholder-image=""
                                                                                                            style={{ opacity: '0', transition: 'opacity 500ms linear', backgroundColor: 'transparent', position: 'absolute', inset: '0px' }}>
                                                                                                        </div>
                                                                                                        <img data-ot-ignore="1"
                                                                                                            data-main-image=""
                                                                                                            style={{ opacity: '1' }}
                                                                                                            sizes="100vw"
                                                                                                            decoding="async"
                                                                                                            loading="lazy"
                                                                                                            alt="The best data warehouse is a lakehouse"
                                                                                                            src="https://www.databricks.com/sites/default/files/2023-11/productscreen-static-warehousing.png?v=1699893824" /><noscript><img
                                                                                                                data-gatsby-image-ssr=""
                                                                                                                data-ot-ignore="1"
                                                                                                                data-main-image=""
                                                                                                                style={{ opacity: '0' }}
                                                                                                                sizes="100vw"
                                                                                                                decoding="async"
                                                                                                                loading="lazy"
                                                                                                                src="https://www.databricks.com/sites/default/files/2023-11/productscreen-static-warehousing.png?v=1699893824"
                                                                                                                alt="The best data warehouse is a lakehouse" /></noscript>
                                                                                                        <script
                                                                                                            type="module"
                                                                                                            data-ot-ignore="1"
                                                                                                            className="optanon-category-C0001" dangerouslySetInnerHTML={{ __html: `const t = "undefined" != typeof HTMLImageElement && "loading" in HTMLImageElement.prototype; if (t) { const t = document.querySelectorAll("img[data-main-image]"); for (let e of t) { e.dataset.src && (e.setAttribute("src", e.dataset.src), e.removeAttribute("data-src")), e.dataset.srcset && (e.setAttribute("srcset", e.dataset.srcset), e.removeAttribute("data-srcset")); const t = e.parentNode.querySelectorAll("source[data-srcset]"); for (let e of t) e.setAttribute("srcset", e.dataset.srcset), e.removeAttribute("data-srcset"); e.complete && (e.style.opacity = 1, e.parentNode.parentNode.querySelector("[data-placeholder-image]").style.opacity = 0) } }` }} />
                                                                                                    </div>
                                                                                                </div>
                                                                                            </figure>
                                                                                        </div>
                                                                                        <div aria-hidden="true"
                                                                                            className="lg:w-1/12">
                                                                                        </div>
                                                                                        <div
                                                                                            className="mt-4 md:mt-0 md:w-6/12 lg:flex-1 w-full">
                                                                                            <h3
                                                                                                className="mb-2 h3 text-navy-800 font-normal">
                                                                                                The best data
                                                                                                warehouse is a
                                                                                                lakehouse</h3>
                                                                                            <div
                                                                                                className="rich-text-body">
                                                                                                <p>Achieve 12x
                                                                                                    better
                                                                                                    price/performance
                                                                                                    for SQL and
                                                                                                    BI workloads
                                                                                                    by moving
                                                                                                    from legacy
                                                                                                    cloud data
                                                                                                    warehouses
                                                                                                    to a
                                                                                                    lakehouse.
                                                                                                </p>
                                                                                                <ul
                                                                                                    className="check large light">
                                                                                                    <li>Serverless
                                                                                                        for
                                                                                                        simplified
                                                                                                        management
                                                                                                    </li>
                                                                                                    <li>AI-optimized
                                                                                                        query
                                                                                                        execution
                                                                                                    </li>
                                                                                                    <li>Open
                                                                                                        formats
                                                                                                        and APIs
                                                                                                        to avoid
                                                                                                        lock-in
                                                                                                    </li>
                                                                                                </ul>
                                                                                                <p>&nbsp;</p>
                                                                                            </div>
                                                                                            <div
                                                                                                className="mt-3 flex flex-wrap items-center gap-x-3 w-full gap-y-1">
                                                                                                <div
                                                                                                    className="md:flex-shrink-0">
                                                                                                    <a data-external-link="true"
                                                                                                        href="/product/databricks-sql?itm_data=databricks-web-home-use-cases"
                                                                                                        role="button"
                                                                                                        className="bg-navy-800 text-white border-navy-800 hover:border-navy-500 p-2 text-2 hover:btn-tertiary text-center inline-block border font-medium leading-none transition-colors duration-200 hover:no-underline"
                                                                                                        aria-data-label="See how The best data warehouse is a lakehouse">See
                                                                                                        how</a>
                                                                                                </div>
                                                                                                <div
                                                                                                    className="min-w-[150px]">
                                                                                                    <a data-external-link="true"
                                                                                                        href="/discover/demos/databricks-sql?itm_data=databricks-web-home-use-cases#account"
                                                                                                        role="link"
                                                                                                        className="hover:no-underline"
                                                                                                        aria-data-label="Watch demo The best data warehouse is a lakehouse"><span
                                                                                                            className="arrow-icon-tertiary tertiary-underline link-b-700">Watch
                                                                                                            demo</span></a>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div inert role="tabpanel"
                                                                        aria-labelledby="tab-799848e8-1420-4f72-837c-c7d6927c2c70"
                                                                        id="panel-799848e8-1420-4f72-837c-c7d6927c2c70"
                                                                        aria-hidden="false" data-el-g2="ETL"
                                                                        className="gap-3 duration-300 w-full pt-8 absolute top-0 h-0 opacity-0 pointer-events-none animate-tab-to-left">
                                                                        <div
                                                                            className="row-item-inner-inherit text-navy-800">
                                                                            <div data-cy="Wrapper"
                                                                                className="outer-wrapper "
                                                                                id="Drupal_ParagraphCtaImageBlock-88873895-7b6d-4cb1-9af2-90baed0a956c">
                                                                                <div className="inner-wrapper">
                                                                                    <div data-cy="CtaImageBlock"
                                                                                        className="CtaImageBlock cta-image-row flex justify-between cta-image-position-right flex-col items-center md:gap-4 md:flex-row-reverse">
                                                                                        <div
                                                                                            className="image-position-right mt-4 w-full md:order-none md:my-0 md:w-5/12 md:w-5/12 lg:w-6/12">
                                                                                            <figure>
                                                                                                <div
                                                                                                    className="h-full ">
                                                                                                    <div data-gatsby-image-wrapper=""
                                                                                                        className="gatsby-image-wrapper optanon-category-C0001">
                                                                                                        <div aria-hidden="true"
                                                                                                            style={{ paddingTop: '77.37397420867526%' }}>
                                                                                                        </div>
                                                                                                        <div aria-hidden="true"
                                                                                                            data-placeholder-image=""
                                                                                                            style={{ opacity: '0', transition: 'opacity 500ms linear', backgroundColor: 'transparent', position: 'absolute', inset: '0px' }}>
                                                                                                        </div>
                                                                                                        <img data-ot-ignore="1"
                                                                                                            data-main-image=""
                                                                                                            style={{ opacity: '1' }}
                                                                                                            sizes="100vw"
                                                                                                            decoding="async"
                                                                                                            loading="lazy"
                                                                                                            alt="Intelligent data processing for batch and real time"
                                                                                                            src="https://www.databricks.com/sites/default/files/2023-11/productscreen-static-etl_1.png?v=1699935941" /><noscript><img
                                                                                                                data-gatsby-image-ssr=""
                                                                                                                data-ot-ignore="1"
                                                                                                                data-main-image=""
                                                                                                                style={{ opacity: '0' }}
                                                                                                                sizes="100vw"
                                                                                                                decoding="async"
                                                                                                                loading="lazy"
                                                                                                                src="https://www.databricks.com/sites/default/files/2023-11/productscreen-static-etl_1.png?v=1699935941"
                                                                                                                alt="Intelligent data processing for batch and real time" /></noscript>
                                                                                                        <script
                                                                                                            type="module"
                                                                                                            data-ot-ignore="1"
                                                                                                            className="optanon-category-C0001" dangerouslySetInnerHTML={{ __html: `const t = "undefined" != typeof HTMLImageElement && "loading" in HTMLImageElement.prototype; if (t) { const t = document.querySelectorAll("img[data-main-image]"); for (let e of t) { e.dataset.src && (e.setAttribute("src", e.dataset.src), e.removeAttribute("data-src")), e.dataset.srcset && (e.setAttribute("srcset", e.dataset.srcset), e.removeAttribute("data-srcset")); const t = e.parentNode.querySelectorAll("source[data-srcset]"); for (let e of t) e.setAttribute("srcset", e.dataset.srcset), e.removeAttribute("data-srcset"); e.complete && (e.style.opacity = 1, e.parentNode.parentNode.querySelector("[data-placeholder-image]").style.opacity = 0) } }` }} />
                                                                                                    </div>
                                                                                                </div>
                                                                                            </figure>
                                                                                        </div>
                                                                                        <div aria-hidden="true"
                                                                                            className="lg:w-1/12">
                                                                                        </div>
                                                                                        <div
                                                                                            className="mt-4 md:mt-0 md:w-6/12 lg:flex-1 w-full">
                                                                                            <h3
                                                                                                className="mb-2 h3 text-navy-800 font-normal">
                                                                                                Intelligent data
                                                                                                processing for
                                                                                                batch and real
                                                                                                time</h3>
                                                                                            <div
                                                                                                className="rich-text-body">
                                                                                                <p>Implement a
                                                                                                    single
                                                                                                    solution for
                                                                                                    all of your
                                                                                                    ETL use
                                                                                                    cases that
                                                                                                    automatically
                                                                                                    adapts to
                                                                                                    help ensure
                                                                                                    data
                                                                                                    quality.</p>
                                                                                                <ul
                                                                                                    className="check large light">
                                                                                                    <li><span
                                                                                                        style={{ color: '#000000' }}><span
                                                                                                            style={{ fontFamily: '\'DM Sans\',sans-serif', fontSize: '11pt', fontStyle: 'normal', fontVariant: 'normal', fontWeight: '400', textDecoration: 'none', whiteSpace: 'pre-wrap' }}>Simple
                                                                                                            workflow
                                                                                                            authoring
                                                                                                            for
                                                                                                            batch
                                                                                                            and
                                                                                                            streaming</span></span>
                                                                                                    </li>
                                                                                                    <li>End-to-end
                                                                                                        pipeline
                                                                                                        monitoring
                                                                                                    </li>
                                                                                                    <li>Hands-off
                                                                                                        reliability&nbsp;and&nbsp;optimization
                                                                                                        at scale
                                                                                                    </li>
                                                                                                </ul>
                                                                                                <p>&nbsp;</p>
                                                                                            </div>
                                                                                            <div
                                                                                                className="mt-3 flex flex-wrap items-center gap-x-3 w-full gap-y-1">
                                                                                                <div
                                                                                                    className="md:flex-shrink-0">
                                                                                                    <a data-external-link="true"
                                                                                                        href="/solutions/data-engineering?itm_data=databricks-web-home-use-cases"
                                                                                                        role="button"
                                                                                                        className="bg-navy-800 text-white border-navy-800 hover:border-navy-500 p-2 text-2 hover:btn-tertiary text-center inline-block border font-medium leading-none transition-colors duration-200 hover:no-underline"
                                                                                                        aria-data-label="See how Intelligent data processing for batch and real time">See
                                                                                                        how</a>
                                                                                                </div>
                                                                                                <div
                                                                                                    className="min-w-[150px]">
                                                                                                    <a data-external-link="true"
                                                                                                        href="/discover/demos/delta-live-tables-demo?itm_data=databricks-web-home-use-cases#account"
                                                                                                        role="link"
                                                                                                        className="hover:no-underline"
                                                                                                        aria-data-label="Watch demo Intelligent data processing for batch and real time"><span
                                                                                                            className="arrow-icon-tertiary tertiary-underline link-b-700">Watch
                                                                                                            demo</span></a>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div inert role="tabpanel"
                                                                        aria-labelledby="tab-7c51aff3-91ac-4b5d-b0bf-44de645ee8c7"
                                                                        id="panel-7c51aff3-91ac-4b5d-b0bf-44de645ee8c7"
                                                                        aria-hidden="false"
                                                                        data-el-g2="Data sharing"
                                                                        className="gap-3 duration-300 w-full pt-8 absolute top-0 h-0 opacity-0 pointer-events-none animate-tab-to-left">
                                                                        <div
                                                                            className="row-item-inner-inherit text-navy-800">
                                                                            <div data-cy="Wrapper"
                                                                                className="outer-wrapper "
                                                                                id="Drupal_ParagraphCtaImageBlock-e480cad2-2d85-4873-9a5d-6dcd0d2583b0">
                                                                                <div className="inner-wrapper">
                                                                                    <div data-cy="CtaImageBlock"
                                                                                        className="CtaImageBlock cta-image-row flex justify-between cta-image-position-right flex-col items-center md:gap-4 md:flex-row-reverse">
                                                                                        <div
                                                                                            className="image-position-right mt-4 w-full md:order-none md:my-0 md:w-5/12 md:w-5/12 lg:w-6/12">
                                                                                            <figure>
                                                                                                <div
                                                                                                    className="h-full ">
                                                                                                    <div data-gatsby-image-wrapper=""
                                                                                                        className="gatsby-image-wrapper optanon-category-C0001">
                                                                                                        <div aria-hidden="true"
                                                                                                            style={{ paddingTop: '66.75603217158177%' }}>
                                                                                                        </div>
                                                                                                        <div aria-hidden="true"
                                                                                                            data-placeholder-image=""
                                                                                                            style={{ opacity: '0', transition: 'opacity 500ms linear', backgroundColor: 'transparent', position: 'absolute', inset: '0px' }}>
                                                                                                        </div>
                                                                                                        <img data-ot-ignore="1"
                                                                                                            data-main-image=""
                                                                                                            style={{ opacity: '1' }}
                                                                                                            sizes="100vw"
                                                                                                            decoding="async"
                                                                                                            loading="lazy"
                                                                                                            alt="Open data sharing"
                                                                                                            src="https://www.databricks.com/sites/default/files/2023-11/productscreen-static-sharing.png?v=1699893963" /><noscript><img
                                                                                                                data-gatsby-image-ssr=""
                                                                                                                data-ot-ignore="1"
                                                                                                                data-main-image=""
                                                                                                                style={{ opacity: '0' }}
                                                                                                                sizes="100vw"
                                                                                                                decoding="async"
                                                                                                                loading="lazy"
                                                                                                                src="https://www.databricks.com/sites/default/files/2023-11/productscreen-static-sharing.png?v=1699893963"
                                                                                                                alt="Open data sharing" /></noscript>
                                                                                                        <script
                                                                                                            type="module"
                                                                                                            data-ot-ignore="1"
                                                                                                            className="optanon-category-C0001" dangerouslySetInnerHTML={{ __html: `const t = "undefined" != typeof HTMLImageElement && "loading" in HTMLImageElement.prototype; if (t) { const t = document.querySelectorAll("img[data-main-image]"); for (let e of t) { e.dataset.src && (e.setAttribute("src", e.dataset.src), e.removeAttribute("data-src")), e.dataset.srcset && (e.setAttribute("srcset", e.dataset.srcset), e.removeAttribute("data-srcset")); const t = e.parentNode.querySelectorAll("source[data-srcset]"); for (let e of t) e.setAttribute("srcset", e.dataset.srcset), e.removeAttribute("data-srcset"); e.complete && (e.style.opacity = 1, e.parentNode.parentNode.querySelector("[data-placeholder-image]").style.opacity = 0) } }` }} />
                                                                                                    </div>
                                                                                                </div>
                                                                                            </figure>
                                                                                        </div>
                                                                                        <div aria-hidden="true"
                                                                                            className="lg:w-1/12">
                                                                                        </div>
                                                                                        <div
                                                                                            className="mt-4 md:mt-0 md:w-6/12 lg:flex-1 w-full">
                                                                                            <h3
                                                                                                className="mb-2 h3 text-navy-800 font-normal">
                                                                                                Open data
                                                                                                sharing</h3>
                                                                                            <div
                                                                                                className="rich-text-body">
                                                                                                <p>The first
                                                                                                    open
                                                                                                    approach to
                                                                                                    secure data
                                                                                                    sharing
                                                                                                    means you
                                                                                                    can easily
                                                                                                    share live
                                                                                                    data sets,
                                                                                                    models,
                                                                                                    dashboards
                                                                                                    and
                                                                                                    notebooks to
                                                                                                    collaborate
                                                                                                    with anyone
                                                                                                    on any
                                                                                                    platform.&nbsp;
                                                                                                </p>
                                                                                                <ul
                                                                                                    className="check large light">
                                                                                                    <li>No
                                                                                                        proprietary
                                                                                                        formats
                                                                                                        or
                                                                                                        expensive
                                                                                                        replication
                                                                                                    </li>
                                                                                                    <li>No
                                                                                                        complicated
                                                                                                        ETL</li>
                                                                                                    <li>Monetize
                                                                                                        sharing
                                                                                                        with the
                                                                                                        Databricks
                                                                                                        Marketplace
                                                                                                    </li>
                                                                                                </ul>
                                                                                                <p>&nbsp;</p>
                                                                                            </div>
                                                                                            <div
                                                                                                className="mt-3 flex flex-wrap items-center gap-x-3 w-full gap-y-1">
                                                                                                <div
                                                                                                    className="md:flex-shrink-0">
                                                                                                    <a data-external-link="true"
                                                                                                        href="/product/delta-sharing?itm_data=databricks-web-home-use-cases"
                                                                                                        role="button"
                                                                                                        className="bg-navy-800 text-white border-navy-800 hover:border-navy-500 p-2 text-2 hover:btn-tertiary text-center inline-block border font-medium leading-none transition-colors duration-200 hover:no-underline"
                                                                                                        aria-data-label="See how Open data sharing">See
                                                                                                        how</a>
                                                                                                </div>
                                                                                                <div
                                                                                                    className="min-w-[150px]">
                                                                                                    <a data-external-link="true"
                                                                                                        href="/discover/demos/deltasharing?itm_data=databricks-web-home-use-cases"
                                                                                                        role="link"
                                                                                                        className="hover:no-underline"
                                                                                                        aria-data-label="Watch demo Open data sharing"><span
                                                                                                            className="arrow-icon-tertiary tertiary-underline link-b-700">Watch
                                                                                                            demo</span></a>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div inert role="tabpanel"
                                                                        aria-labelledby="tab-f2433c63-ebb4-42ec-8a57-395eccdf6232"
                                                                        id="panel-f2433c63-ebb4-42ec-8a57-395eccdf6232"
                                                                        aria-hidden="false"
                                                                        data-el-g2="Orchestration"
                                                                        className="gap-3 duration-300 w-full pt-8 absolute top-0 h-0 opacity-0 pointer-events-none animate-tab-to-left">
                                                                        <div
                                                                            className="row-item-inner-inherit text-navy-800">
                                                                            <div data-cy="Wrapper"
                                                                                className="outer-wrapper "
                                                                                id="Drupal_ParagraphCtaImageBlock-9b746bbb-d02a-4535-816f-a9e74594a1a7">
                                                                                <div className="inner-wrapper">
                                                                                    <div data-cy="CtaImageBlock"
                                                                                        className="CtaImageBlock cta-image-row flex justify-between cta-image-position-right flex-col items-center md:gap-4 md:flex-row-reverse">
                                                                                        <div
                                                                                            className="image-position-right mt-4 w-full md:order-none md:my-0 md:w-5/12 md:w-5/12 lg:w-6/12">
                                                                                            <figure>
                                                                                                <div
                                                                                                    className="h-full ">
                                                                                                    <div data-gatsby-image-wrapper=""
                                                                                                        className="gatsby-image-wrapper optanon-category-C0001">
                                                                                                        <div aria-hidden="true"
                                                                                                            style={{ paddingTop: '60.58981233243968%' }}>
                                                                                                        </div>
                                                                                                        <div aria-hidden="true"
                                                                                                            data-placeholder-image=""
                                                                                                            style={{ opacity: '0', transition: 'opacity 500ms linear', backgroundColor: 'transparent', position: 'absolute', inset: '0px' }}>
                                                                                                        </div>
                                                                                                        <img data-ot-ignore="1"
                                                                                                            data-main-image=""
                                                                                                            style={{ opacity: '1' }}
                                                                                                            sizes="100vw"
                                                                                                            decoding="async"
                                                                                                            loading="lazy"
                                                                                                            alt="Manage pipelines to business requirements"
                                                                                                            src="https://www.databricks.com/sites/default/files/2023-11/productscreen-static-real-time-analytics.png?v=1699894036" /><noscript><img
                                                                                                                data-gatsby-image-ssr=""
                                                                                                                data-ot-ignore="1"
                                                                                                                data-main-image=""
                                                                                                                style={{ opacity: '0' }}
                                                                                                                sizes="100vw"
                                                                                                                decoding="async"
                                                                                                                loading="lazy"
                                                                                                                src="https://www.databricks.com/sites/default/files/2023-11/productscreen-static-real-time-analytics.png?v=1699894036"
                                                                                                                alt="Manage pipelines to business requirements" /></noscript>
                                                                                                        <script
                                                                                                            type="module"
                                                                                                            data-ot-ignore="1"
                                                                                                            className="optanon-category-C0001" dangerouslySetInnerHTML={{ __html: `const t = "undefined" != typeof HTMLImageElement && "loading" in HTMLImageElement.prototype; if (t) { const t = document.querySelectorAll("img[data-main-image]"); for (let e of t) { e.dataset.src && (e.setAttribute("src", e.dataset.src), e.removeAttribute("data-src")), e.dataset.srcset && (e.setAttribute("srcset", e.dataset.srcset), e.removeAttribute("data-srcset")); const t = e.parentNode.querySelectorAll("source[data-srcset]"); for (let e of t) e.setAttribute("srcset", e.dataset.srcset), e.removeAttribute("data-srcset"); e.complete && (e.style.opacity = 1, e.parentNode.parentNode.querySelector("[data-placeholder-image]").style.opacity = 0) } }` }} />
                                                                                                    </div>
                                                                                                </div>
                                                                                            </figure>
                                                                                        </div>
                                                                                        <div aria-hidden="true"
                                                                                            className="lg:w-1/12">
                                                                                        </div>
                                                                                        <div
                                                                                            className="mt-4 md:mt-0 md:w-6/12 lg:flex-1 w-full">
                                                                                            <h3
                                                                                                className="mb-2 h3 text-navy-800 font-normal">
                                                                                                Manage pipelines
                                                                                                to business
                                                                                                requirements
                                                                                            </h3>
                                                                                            <div
                                                                                                className="rich-text-body">
                                                                                                <p>Optimize data
                                                                                                    pipeline
                                                                                                    execution to
                                                                                                    deadlines
                                                                                                    and budget
                                                                                                    requirements.
                                                                                                </p>
                                                                                                <ul
                                                                                                    className="check large light">
                                                                                                    <li>Intelligent
                                                                                                        selection
                                                                                                        of
                                                                                                        compute
                                                                                                        type
                                                                                                    </li>
                                                                                                    <li>Workload-specific
                                                                                                        autoscaling
                                                                                                    </li>
                                                                                                    <li>Automatic
                                                                                                        remediation
                                                                                                        of
                                                                                                        errors
                                                                                                    </li>
                                                                                                </ul>
                                                                                                <p>&nbsp;</p>
                                                                                            </div>
                                                                                            <div
                                                                                                className="mt-3 flex flex-wrap items-center gap-x-3 w-full gap-y-1">
                                                                                                <div
                                                                                                    className="md:flex-shrink-0">
                                                                                                    <a data-external-link="true"
                                                                                                        href="/product/data-science?itm_data=databricks-web-home-use-cases"
                                                                                                        role="button"
                                                                                                        className="bg-navy-800 text-white border-navy-800 hover:border-navy-500 p-2 text-2 hover:btn-tertiary text-center inline-block border font-medium leading-none transition-colors duration-200 hover:no-underline"
                                                                                                        aria-data-label="See how Manage pipelines to business requirements">See
                                                                                                        how</a>
                                                                                                </div>
                                                                                                <div
                                                                                                    className="min-w-[150px]">
                                                                                                    <a data-external-link="true"
                                                                                                        href="/company/contact?itm_data=databricks-web-home-use-cases"
                                                                                                        role="link"
                                                                                                        className="hover:no-underline"
                                                                                                        aria-data-label="Schedule demo Manage pipelines to business requirements"><span
                                                                                                            className="arrow-icon-tertiary tertiary-underline link-b-700">Schedule
                                                                                                            demo</span></a>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="specific-wrapper-top pt-0 md:pt-0 lg:pt-0 specific-wrapper-bottom pb-0 md:pb-0 lg:pb-0 ">
                                <div data-cy="Wrapper"
                                    className="content-wrapper fullwidth-component relative z-10 wrapper-overflow"
                                    title="CUSTOMER STORIES">
                                    <div aria-hidden="true" className="absolute inset-0 w-full h-full"
                                        style={{ zIndex: '-1', backgroundColor: '#1B3139', opacity: '1' }}></div>
                                    <div className="inner-wrapper">
                                        <div data-cy="Grid" className="grid grid-cols-12 gap-0 ">
                                            <div style={{ gridColumn: '1 / span 12' }}>
                                                <div
                                                    className="specific-wrapper-top pt-12 md:pt-12 lg:pt-16 specific-wrapper-bottom pb-6 md:pb-6 lg:pb-6 ">
                                                    <div data-cy="Wrapper" className="outer-wrapper ">
                                                        <div className="inner-wrapper">
                                                            <section
                                                                className="section-header mx-auto text-center w-full md:w-8/12 xl:w-6/12">
                                                                <span
                                                                    className="text-2 block font-mono uppercase mb-4 leading-none text-orange-400">CUSTOMER
                                                                    STORIES</span>
                                                                <div className="flex flex-col gap-2 ">
                                                                    <h2
                                                                        className="text-white text-4 md:text-5 lg:tracking-t-1 lg:text-6 font-medium">
                                                                        Industry leaders are data + AI companies
                                                                    </h2>
                                                                </div>
                                                                <div
                                                                    className="flex w-full flex-wrap items-center gap-2 lg:gap-4 justify-center">
                                                                </div>
                                                            </section>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    className="specific-wrapper-top pt-0 md:pt-0 lg:pt-0 specific-wrapper-bottom pb-0 md:pb-0 lg:pb-0 ">
                                                    <div data-cy="Wrapper"
                                                        className="outer-wrapper large-step-overflow">
                                                        <div className="inner-wrapper">{/*$*/}{/*/$*/}
                                                            <div data-cy="LargeStepSlider" role="region"
                                                                aria-data-label="Carousel" className="large-step-slider">
                                                                <section
                                                                    className="section-header mx-auto text-center w-full md:w-8/12 xl:w-6/12">
                                                                    <div className="flex flex-col gap-2 "></div>
                                                                    <div
                                                                        className="flex w-full flex-wrap items-center gap-2 lg:gap-4 justify-center">
                                                                    </div>
                                                                </section>
                                                                <div
                                                                    className="flex items-end justify-between gap-2.5 pb-4 xl:pb-6">
                                                                    <div
                                                                        className="xxl:w-5/12 text-navy-300 w-full md:w-7/12 xl:w-6/12">
                                                                        <p>Our customers achieve breakthroughs,
                                                                            innovate faster and drive down
                                                                            costs. See how you can too.</p>
                                                                    </div>
                                                                    <div
                                                                        className="flex w-full flex-shrink-0 justify-center md:w-auto lg:justify-between">
                                                                        <button data-cy="ArrowButton"
                                                                            disabled type="button"
                                                                            aria-data-label="Scroll customer stories left"
                                                                            className="inline-flex h-[64px] w-[64px] arrow-left disabled:border-navy-300 disabled:bg-[transparent] items-center justify-center rounded-full border-orange-500 bg-orange-500 hover:bg-orange-400 disabled:border mr-1"
                                                                            tabIndex={-1}
                                                                            aria-hidden="true"><svg width="22"
                                                                                height="18" viewBox="0 0 22 18"
                                                                                fill="none"
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                aria-hidden="true"
                                                                                className="text-navy-300 rotate-180 w-[28px] h-3">
                                                                                <path
                                                                                    d="M12.3359 18L11.1507 16.8248L18.1417 9.84375H0.664062V8.15625H18.1417L11.1507 1.17522L12.3359 0L21.3359 9L12.3359 18Z"
                                                                                    fill="currentColor"></path>
                                                                            </svg></button><button
                                                                                data-cy="ArrowButton" type="button"
                                                                                aria-data-label="Scroll customer stories right"
                                                                                className="inline-flex h-[64px] w-[64px] arrow-right disabled:border-navy-300 disabled:bg-[transparent] items-center justify-center rounded-full border-orange-500 bg-orange-500 hover:bg-orange-400 disabled:border"
                                                                                aria-hidden="false"><svg width="22"
                                                                                    height="18" viewBox="0 0 22 18"
                                                                                    fill="none"
                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                    aria-hidden="true"
                                                                                    className="text-navy-800  w-[28px] h-3">
                                                                                <path
                                                                                    d="M12.3359 18L11.1507 16.8248L18.1417 9.84375H0.664062V8.15625H18.1417L11.1507 1.17522L12.3359 0L21.3359 9L12.3359 18Z"
                                                                                    fill="currentColor"></path>
                                                                            </svg></button>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    className="swiper swiper-initialized swiper-horizontal swiper-backface-hidden">
                                                                    <div className="swiper-wrapper"
                                                                        style={{ transform: 'translate3d(0px, 0px, 0px)' }}>
                                                                        <div className="swiper-slide swiper-slide-active h-full lg:max-w-none"
                                                                            id="carousel_item-step-1_heading"
                                                                            aria-hidden="false"
                                                                            style={{ width: '655px', marginRight: '16px' }}>
                                                                            <div aria-live="polite" role="group"
                                                                                aria-roledescription="slide"
                                                                                aria-hidden="false"
                                                                                aria-labelledby="carousel_item-step-1_heading"
                                                                                aria-atomic="true"><a
                                                                                    href="/customers/mastercard"
                                                                                    aria-data-label="See the full story, Mastercard tackles AI governance"
                                                                                    data-cy="LargeCustomerCard"
                                                                                    className="group-arrow-exclude-hover relative text-navy-800 hover:text-navy-800 group flex flex-col justify-between hover:no-underline lg:flex-row false bg-oat-light cursor-pointer"
                                                                                    tabIndex={0}>
                                                                                    <div className="text-navy-800 hover:text-navy-800 flex h-full flex-col p-4 no-underline hover:no-underline lg:w-6/12 xxl:min-h-[650px] 
    ">
                                                                                        <figure
                                                                                            className="h-full max-w-[200px] max-h-[72px]">
                                                                                            <div
                                                                                                className="h-full ">
                                                                                                <div data-gatsby-image-wrapper=""
                                                                                                    className="gatsby-image-wrapper max-h-[72px] w-auto optanon-category-C0001">
                                                                                                    <div aria-hidden="true"
                                                                                                        style={{ paddingTop: '61.53846153846154%' }}>
                                                                                                    </div>
                                                                                                    <div aria-hidden="true"
                                                                                                        data-placeholder-image=""
                                                                                                        style={{ opacity: '0', transition: 'opacity 500ms linear', backgroundColor: 'transparent', position: 'absolute', inset: '0px', objectFit: 'contain', objectPosition: 'left center' }}>
                                                                                                    </div><img
                                                                                                        data-ot-ignore="1"
                                                                                                        width="1"
                                                                                                        height="0.6153846153846154"
                                                                                                        data-main-image=""
                                                                                                        style={{ objectFit: 'contain', objectPosition: 'left center', opacity: '1' }}
                                                                                                        sizes="100vw"
                                                                                                        decoding="async"
                                                                                                        loading="lazy"
                                                                                                        src="https://www.databricks.com/sites/default/files/2025-07/logo-mastercard.svg?v=1753896643"
                                                                                                        alt="" /><noscript><img
                                                                                                            data-ot-ignore="1"
                                                                                                            width="1"
                                                                                                            height="0.6153846153846154"
                                                                                                            data-main-image=""
                                                                                                            style={{ objectFit: 'contain', objectPosition: 'left', opacity: '0' }}
                                                                                                            sizes="100vw"
                                                                                                            decoding="async"
                                                                                                            loading="lazy"
                                                                                                            src="https://www.databricks.com/sites/default/files/2025-07/logo-mastercard.svg?v=1753896643"
                                                                                                            alt="" /></noscript>
                                                                                                </div>
                                                                                            </div>
                                                                                        </figure>
                                                                                        <div
                                                                                            className="flex h-full grow flex-col justify-end">
                                                                                            <div role="group"
                                                                                                className="row-col border-gray-lines flex flex-col gap-1 border-b pb-2 pt-4 md:flex-none md:flex-row md:items-end md:gap-2 md:pb-2 lg:gap-3 lg:pb-3 lg:pt-6 xl:flex-row xl:justify-start">
                                                                                                <span
                                                                                                    className="text-6 font-mono leading-none lg:pb-0 xl:text-[88px]">159B</span><span
                                                                                                        className="xl:text-2.5 text-2 max-w-[200px] font-medium leading-tight md:pb-1 lg:max-w-[240px] xl:leading-tight">transactions</span>
                                                                                            </div>
                                                                                            <div
                                                                                                className="lg:max-w-[560px]">
                                                                                                <div className="text-3 pt-2 lg:pt-3 xl:text-4 font-medium leading-tight md:leading-7 xl:leading-tight"
                                                                                                    id="carousel_item-1_heading">
                                                                                                    <p>Mastercard
                                                                                                        tackles
                                                                                                        AI
                                                                                                        governance
                                                                                                    </p>
                                                                                                </div>
                                                                                                <div
                                                                                                    className="rich-text-body text-2 text-gray-text hidden lg:block pt-3 leading-normal">
                                                                                                    <p>Mastercard
                                                                                                        processes
                                                                                                        over 159
                                                                                                        billion
                                                                                                        transactions
                                                                                                        a year
                                                                                                        across
                                                                                                        210+
                                                                                                        countries,
                                                                                                        empowering
                                                                                                        people
                                                                                                        and
                                                                                                        powering
                                                                                                        economies
                                                                                                        — all
                                                                                                        while
                                                                                                        putting
                                                                                                        data, AI
                                                                                                        and
                                                                                                        governance
                                                                                                        at the
                                                                                                        heart of
                                                                                                        its
                                                                                                        operations.
                                                                                                    </p>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div><span
                                                                                            className="arrow-icon-tertiary text-blue-cta hover:text-blue-cta block mt-3 lg:mt-6">See
                                                                                            the full
                                                                                            story</span>
                                                                                    </div>
                                                                                    <div className="customer-card-img-container relative h-[240px] min-h-[180px] overflow-hidden md:min-h-[240px] md:w-full lg:h-full lg:w-5/12 xl:w-6/12  "
                                                                                        aria-hidden="false"><img
                                                                                            src="https://www.databricks.com/sites/default/files/2025-09/mastercard-2x.png?v=1758842712"
                                                                                            alt=""
                                                                                            aria-hidden="true"
                                                                                            className="md:h-30 absolute top-0 h-[180px] w-full object-cover object-center transition-transform md:min-h-[240px] lg:h-full" />
                                                                                        <figure
                                                                                            aria-data-label="mastercard"
                                                                                            className="duration-250 ease-curve-ease md:h-30 h-[180px] w-full transition-transform md:min-h-[240px] lg:absolute lg:h-full group-[:hover:not(:has(.exclude-hover:hover))]:scale-105">
                                                                                            <div
                                                                                                className="h-full ">
                                                                                                <div data-gatsby-image-wrapper=""
                                                                                                    className="gatsby-image-wrapper h-full object-cover object-center optanon-category-C0001">
                                                                                                    <div aria-hidden="true"
                                                                                                        style={{ paddingTop: '70.32967032967034%' }}>
                                                                                                    </div>
                                                                                                    <div aria-hidden="true"
                                                                                                        data-placeholder-image=""
                                                                                                        style={{ opacity: '0', transition: 'opacity 500ms linear', backgroundColor: 'transparent', position: 'absolute', inset: '0px', objectFit: 'cover' }}>
                                                                                                    </div><img
                                                                                                        data-ot-ignore="1"
                                                                                                        width="1"
                                                                                                        height="0.7032967032967034"
                                                                                                        data-main-image=""
                                                                                                        style={{ objectFit: 'cover', opacity: '1' }}
                                                                                                        sizes="100vw"
                                                                                                        decoding="async"
                                                                                                        loading="lazy"
                                                                                                        src="https://www.databricks.com/sites/default/files/2025-09/mastercard-2x.png?v=1758842712"
                                                                                                        alt="" /><noscript><img
                                                                                                            data-ot-ignore="1"
                                                                                                            width="1"
                                                                                                            height="0.7032967032967034"
                                                                                                            data-main-image=""
                                                                                                            style={{ objectFit: 'cover', opacity: '0' }}
                                                                                                            sizes="100vw"
                                                                                                            decoding="async"
                                                                                                            loading="lazy"
                                                                                                            src="https://www.databricks.com/sites/default/files/2025-09/mastercard-2x.png?v=1758842712"
                                                                                                            alt="" /></noscript>
                                                                                                </div>
                                                                                            </div>
                                                                                        </figure>
                                                                                    </div>
                                                                                </a></div>
                                                                        </div>
                                                                        <div className="swiper-slide swiper-slide-next h-full lg:max-w-none"
                                                                            id="carousel_item-step-2_heading"
                                                                            aria-hidden="true"
                                                                            style={{ width: '655px', marginRight: '16px' }}>
                                                                            <div aria-live="off" role="group"
                                                                                aria-roledescription="slide"
                                                                                aria-hidden="true"
                                                                                aria-labelledby="carousel_item-step-2_heading"
                                                                                aria-atomic="true"><a
                                                                                    href="/customers/unilever/lakeflow-declarative-pipelines"
                                                                                    aria-data-label="See the full story, Unilever streamlines data workflows"
                                                                                    data-cy="LargeCustomerCard"
                                                                                    className="group-arrow-exclude-hover relative text-navy-800 hover:text-navy-800 group flex flex-col justify-between hover:no-underline lg:flex-row false bg-oat-light cursor-pointer"
                                                                                    tabIndex={-1}>
                                                                                    <div className="text-navy-800 hover:text-navy-800 flex h-full flex-col p-4 no-underline hover:no-underline lg:w-6/12 xxl:min-h-[650px] 
    ">
                                                                                        <figure
                                                                                            className="h-full max-w-[200px] max-h-[72px]">
                                                                                            <div
                                                                                                className="h-full ">
                                                                                                <div data-gatsby-image-wrapper=""
                                                                                                    className="gatsby-image-wrapper max-h-[72px] w-auto optanon-category-C0001">
                                                                                                    <div aria-hidden="true"
                                                                                                        style={{ paddingTop: '111.59420289855073%' }}>
                                                                                                    </div>
                                                                                                    <div aria-hidden="true"
                                                                                                        data-placeholder-image=""
                                                                                                        style={{ opacity: '0', transition: 'opacity 500ms linear', backgroundColor: 'transparent', position: 'absolute', inset: '0px', objectFit: 'contain', objectPosition: 'left center' }}>
                                                                                                    </div><img
                                                                                                        data-ot-ignore="1"
                                                                                                        width="1"
                                                                                                        height="1.1159420289855073"
                                                                                                        data-main-image=""
                                                                                                        style={{ objectFit: 'contain', objectPosition: 'left center', opacity: '1' }}
                                                                                                        sizes="100vw"
                                                                                                        decoding="async"
                                                                                                        loading="lazy"
                                                                                                        src="https://www.databricks.com/sites/default/files/2025-08/logo-color-unilever.svg?v=1755139569"
                                                                                                        alt="" /><noscript><img
                                                                                                            data-ot-ignore="1"
                                                                                                            width="1"
                                                                                                            height="1.1159420289855073"
                                                                                                            data-main-image=""
                                                                                                            style={{ objectFit: 'contain', objectPosition: 'left', opacity: '0' }}
                                                                                                            sizes="100vw"
                                                                                                            decoding="async"
                                                                                                            loading="lazy"
                                                                                                            src="https://www.databricks.com/sites/default/files/2025-08/logo-color-unilever.svg?v=1755139569"
                                                                                                            alt="" /></noscript>
                                                                                                </div>
                                                                                            </div>
                                                                                        </figure>
                                                                                        <div
                                                                                            className="flex h-full grow flex-col justify-end">
                                                                                            <div role="group"
                                                                                                className="row-col border-gray-lines flex flex-col gap-1 border-b pb-2 pt-4 md:flex-none md:flex-row md:items-end md:gap-2 md:pb-2 lg:gap-3 lg:pb-3 lg:pt-6 xl:flex-row xl:justify-start">
                                                                                                <span
                                                                                                    className="text-6 font-mono leading-none lg:pb-0 xl:text-[88px]">25%</span><span
                                                                                                        className="xl:text-2.5 text-2 max-w-[200px] font-medium leading-tight md:pb-1 lg:max-w-[240px] xl:leading-tight">reduction
                                                                                                    in overall
                                                                                                    infrastructure
                                                                                                    costs</span>
                                                                                            </div>
                                                                                            <div
                                                                                                className="lg:max-w-[560px]">
                                                                                                <div className="text-3 pt-2 lg:pt-3 xl:text-4 font-medium leading-tight md:leading-7 xl:leading-tight"
                                                                                                    id="carousel_item-2_heading">
                                                                                                    <p>Unilever
                                                                                                        streamlines
                                                                                                        data
                                                                                                        workflows
                                                                                                    </p>
                                                                                                </div>
                                                                                                <div
                                                                                                    className="rich-text-body text-2 text-gray-text hidden lg:block pt-3 leading-normal">
                                                                                                    <p>With
                                                                                                        global
                                                                                                        scale
                                                                                                        came
                                                                                                        massive
                                                                                                        volumes
                                                                                                        of
                                                                                                        complex
                                                                                                        data
                                                                                                        from
                                                                                                        diverse
                                                                                                        sources.
                                                                                                        By
                                                                                                        adopting
                                                                                                        Databricks,
                                                                                                        Unilever
                                                                                                        simplified
                                                                                                        its
                                                                                                        architecture,
                                                                                                        improving
                                                                                                        data
                                                                                                        quality
                                                                                                        and
                                                                                                        unifying
                                                                                                        it into
                                                                                                        a
                                                                                                        single,
                                                                                                        scalable
                                                                                                        framework.
                                                                                                    </p>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div><span
                                                                                            className="arrow-icon-tertiary text-blue-cta hover:text-blue-cta block mt-3 lg:mt-6">See
                                                                                            the full
                                                                                            story</span>
                                                                                    </div>
                                                                                    <div className="customer-card-img-container relative h-[240px] min-h-[180px] overflow-hidden md:min-h-[240px] md:w-full lg:h-full lg:w-5/12 xl:w-6/12  "
                                                                                        aria-hidden="false"><img
                                                                                            src="https://www.databricks.com/sites/default/files/2025-09/unilever-2x.png?v=1758842682"
                                                                                            alt=""
                                                                                            aria-hidden="true"
                                                                                            className="md:h-30 absolute top-0 h-[180px] w-full object-cover object-center transition-transform md:min-h-[240px] lg:h-full" />
                                                                                        <figure
                                                                                            aria-data-label="unilever"
                                                                                            className="duration-250 ease-curve-ease md:h-30 h-[180px] w-full transition-transform md:min-h-[240px] lg:absolute lg:h-full group-[:hover:not(:has(.exclude-hover:hover))]:scale-105">
                                                                                            <div
                                                                                                className="h-full ">
                                                                                                <div data-gatsby-image-wrapper=""
                                                                                                    className="gatsby-image-wrapper h-full object-cover object-center optanon-category-C0001">
                                                                                                    <div aria-hidden="true"
                                                                                                        style={{ paddingTop: '70.32967032967034%' }}>
                                                                                                    </div>
                                                                                                    <div aria-hidden="true"
                                                                                                        data-placeholder-image=""
                                                                                                        style={{ opacity: '0', transition: 'opacity 500ms linear', backgroundColor: 'transparent', position: 'absolute', inset: '0px', objectFit: 'cover' }}>
                                                                                                    </div><img
                                                                                                        data-ot-ignore="1"
                                                                                                        width="1"
                                                                                                        height="0.7032967032967034"
                                                                                                        data-main-image=""
                                                                                                        style={{ objectFit: 'cover', opacity: '1' }}
                                                                                                        sizes="100vw"
                                                                                                        decoding="async"
                                                                                                        loading="lazy"
                                                                                                        src="https://www.databricks.com/sites/default/files/2025-09/unilever-2x.png?v=1758842682"
                                                                                                        alt="" /><noscript><img
                                                                                                            data-ot-ignore="1"
                                                                                                            width="1"
                                                                                                            height="0.7032967032967034"
                                                                                                            data-main-image=""
                                                                                                            style={{ objectFit: 'cover', opacity: '0' }}
                                                                                                            sizes="100vw"
                                                                                                            decoding="async"
                                                                                                            loading="lazy"
                                                                                                            src="https://www.databricks.com/sites/default/files/2025-09/unilever-2x.png?v=1758842682"
                                                                                                            alt="" /></noscript>
                                                                                                </div>
                                                                                            </div>
                                                                                        </figure>
                                                                                    </div>
                                                                                </a></div>
                                                                        </div>
                                                                        <div className="swiper-slide h-full lg:max-w-none"
                                                                            id="carousel_item-step-3_heading"
                                                                            aria-hidden="true"
                                                                            style={{ width: '655px', marginRight: '16px' }}>
                                                                            <div aria-live="off" role="group"
                                                                                aria-roledescription="slide"
                                                                                aria-hidden="true"
                                                                                aria-labelledby="carousel_item-step-3_heading"
                                                                                aria-atomic="true"><a
                                                                                    href="/customers/adidas"
                                                                                    aria-data-label="See the full story, adidas turns customer reviews into insight at scale with GenAI"
                                                                                    data-cy="LargeCustomerCard"
                                                                                    className="group-arrow-exclude-hover relative text-navy-800 hover:text-navy-800 group flex flex-col justify-between hover:no-underline lg:flex-row false bg-oat-light cursor-pointer"
                                                                                    tabIndex={-1}>
                                                                                    <div className="text-navy-800 hover:text-navy-800 flex h-full flex-col p-4 no-underline hover:no-underline lg:w-6/12 xxl:min-h-[650px] 
    ">
                                                                                        <figure
                                                                                            className="h-full max-w-[200px] max-h-[72px]">
                                                                                            <div
                                                                                                className="h-full ">
                                                                                                <div data-gatsby-image-wrapper=""
                                                                                                    className="gatsby-image-wrapper max-h-[72px] w-auto optanon-category-C0001">
                                                                                                    <div aria-hidden="true"
                                                                                                        style={{ paddingTop: '68.96551724137932%' }}>
                                                                                                    </div>
                                                                                                    <div aria-hidden="true"
                                                                                                        data-placeholder-image=""
                                                                                                        style={{ opacity: '0', transition: 'opacity 500ms linear', backgroundColor: 'transparent', position: 'absolute', inset: '0px', objectFit: 'contain', objectPosition: 'left center' }}>
                                                                                                    </div><img
                                                                                                        data-ot-ignore="1"
                                                                                                        width="1"
                                                                                                        height="0.6896551724137931"
                                                                                                        data-main-image=""
                                                                                                        style={{ objectFit: 'contain', objectPosition: 'left center', opacity: '1' }}
                                                                                                        sizes="100vw"
                                                                                                        decoding="async"
                                                                                                        loading="lazy"
                                                                                                        src="https://www.databricks.com/sites/default/files/2025-07/Adidas_Logo.svg?v=1753207531"
                                                                                                        alt="" /><noscript><img
                                                                                                            data-ot-ignore="1"
                                                                                                            width="1"
                                                                                                            height="0.6896551724137931"
                                                                                                            data-main-image=""
                                                                                                            style={{ objectFit: 'contain', objectPosition: 'left', opacity: '0' }}
                                                                                                            sizes="100vw"
                                                                                                            decoding="async"
                                                                                                            loading="lazy"
                                                                                                            src="https://www.databricks.com/sites/default/files/2025-07/Adidas_Logo.svg?v=1753207531"
                                                                                                            alt="" /></noscript>
                                                                                                </div>
                                                                                            </div>
                                                                                        </figure>
                                                                                        <div
                                                                                            className="flex h-full grow flex-col justify-end">
                                                                                            <div role="group"
                                                                                                className="row-col border-gray-lines flex flex-col gap-1 border-b pb-2 pt-4 md:flex-none md:flex-row md:items-end md:gap-2 md:pb-2 lg:gap-3 lg:pb-3 lg:pt-6 xl:flex-row xl:justify-start">
                                                                                                <span
                                                                                                    className="text-6 font-mono leading-none lg:pb-0 xl:text-[88px]">60%</span><span
                                                                                                        className="xl:text-2.5 text-2 max-w-[200px] font-medium leading-tight md:pb-1 lg:max-w-[240px] xl:leading-tight">latency
                                                                                                    reduction</span>
                                                                                            </div>
                                                                                            <div
                                                                                                className="lg:max-w-[560px]">
                                                                                                <div className="text-3 pt-2 lg:pt-3 xl:text-4 font-medium leading-tight md:leading-7 xl:leading-tight"
                                                                                                    id="carousel_item-3_heading">
                                                                                                    <p>adidas
                                                                                                        turns
                                                                                                        customer
                                                                                                        reviews
                                                                                                        into
                                                                                                        insight
                                                                                                        at scale
                                                                                                        with
                                                                                                        GenAI
                                                                                                    </p>
                                                                                                </div>
                                                                                                <div
                                                                                                    className="rich-text-body text-2 text-gray-text hidden lg:block pt-3 leading-normal">
                                                                                                    <p>Operating
                                                                                                        in 150+
                                                                                                        countries,
                                                                                                        adidas
                                                                                                        needed a
                                                                                                        smarter
                                                                                                        way to
                                                                                                        analyze
                                                                                                        product
                                                                                                        reviews
                                                                                                        and
                                                                                                        uncover
                                                                                                        sentiment.
                                                                                                        With
                                                                                                        Databricks,
                                                                                                        adidas
                                                                                                        saw
                                                                                                        30–40%
                                                                                                        efficiency
                                                                                                        gains by
                                                                                                        transforming
                                                                                                        2M+
                                                                                                        reviews
                                                                                                        into
                                                                                                        actionable
                                                                                                        insights.
                                                                                                    </p>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div><span
                                                                                            className="arrow-icon-tertiary text-blue-cta hover:text-blue-cta block mt-3 lg:mt-6">See
                                                                                            the full
                                                                                            story</span>
                                                                                    </div>
                                                                                    <div className="customer-card-img-container relative h-[240px] min-h-[180px] overflow-hidden md:min-h-[240px] md:w-full lg:h-full lg:w-5/12 xl:w-6/12  "
                                                                                        aria-hidden="false"><img
                                                                                            src="https://www.databricks.com/sites/default/files/2025-09/adidas-2x.png?v=1758842650"
                                                                                            alt=""
                                                                                            aria-hidden="true"
                                                                                            className="md:h-30 absolute top-0 h-[180px] w-full object-cover object-center transition-transform md:min-h-[240px] lg:h-full" />
                                                                                        <figure
                                                                                            aria-data-label="adidas"
                                                                                            className="duration-250 ease-curve-ease md:h-30 h-[180px] w-full transition-transform md:min-h-[240px] lg:absolute lg:h-full group-[:hover:not(:has(.exclude-hover:hover))]:scale-105">
                                                                                            <div
                                                                                                className="h-full ">
                                                                                                <div data-gatsby-image-wrapper=""
                                                                                                    className="gatsby-image-wrapper h-full object-cover object-center optanon-category-C0001">
                                                                                                    <div aria-hidden="true"
                                                                                                        style={{ paddingTop: '70.32967032967034%' }}>
                                                                                                    </div>
                                                                                                    <div aria-hidden="true"
                                                                                                        data-placeholder-image=""
                                                                                                        style={{ opacity: '0', transition: 'opacity 500ms linear', backgroundColor: 'transparent', position: 'absolute', inset: '0px', objectFit: 'cover' }}>
                                                                                                    </div><img
                                                                                                        data-ot-ignore="1"
                                                                                                        width="1"
                                                                                                        height="0.7032967032967034"
                                                                                                        data-main-image=""
                                                                                                        style={{ objectFit: 'cover', opacity: '1' }}
                                                                                                        sizes="100vw"
                                                                                                        decoding="async"
                                                                                                        loading="lazy"
                                                                                                        src="https://www.databricks.com/sites/default/files/2025-09/adidas-2x.png?v=1758842650"
                                                                                                        alt="" /><noscript><img
                                                                                                            data-ot-ignore="1"
                                                                                                            width="1"
                                                                                                            height="0.7032967032967034"
                                                                                                            data-main-image=""
                                                                                                            style={{ objectFit: 'cover', opacity: '0' }}
                                                                                                            sizes="100vw"
                                                                                                            decoding="async"
                                                                                                            loading="lazy"
                                                                                                            src="https://www.databricks.com/sites/default/files/2025-09/adidas-2x.png?v=1758842650"
                                                                                                            alt="" /></noscript>
                                                                                                </div>
                                                                                            </div>
                                                                                        </figure>
                                                                                    </div>
                                                                                </a></div>
                                                                        </div>
                                                                        <div className="swiper-slide h-full lg:max-w-none"
                                                                            id="carousel_item-step-4_heading"
                                                                            aria-hidden="true"
                                                                            style={{ width: '655px', marginRight: '16px' }}>
                                                                            <div aria-live="off" role="group"
                                                                                aria-roledescription="slide"
                                                                                aria-hidden="true"
                                                                                aria-labelledby="carousel_item-step-4_heading"
                                                                                aria-atomic="true"><a
                                                                                    href="/customers/fox-sports"
                                                                                    aria-data-label="See the full story, FOX Sports reimagines the fan experience"
                                                                                    data-cy="LargeCustomerCard"
                                                                                    className="group-arrow-exclude-hover relative text-navy-800 hover:text-navy-800 group flex flex-col justify-between hover:no-underline lg:flex-row false bg-oat-light cursor-pointer"
                                                                                    tabIndex={-1}>
                                                                                    <div className="text-navy-800 hover:text-navy-800 flex h-full flex-col p-4 no-underline hover:no-underline lg:w-6/12 xxl:min-h-[650px] 
    ">
                                                                                        <figure
                                                                                            className="h-full max-w-[200px] max-h-[72px]">
                                                                                            <div
                                                                                                className="h-full ">
                                                                                                <div data-gatsby-image-wrapper=""
                                                                                                    className="gatsby-image-wrapper max-h-[72px] w-auto optanon-category-C0001">
                                                                                                    <div aria-hidden="true"
                                                                                                        style={{ paddingTop: '61.25000000000001%' }}>
                                                                                                    </div>
                                                                                                    <div aria-hidden="true"
                                                                                                        data-placeholder-image=""
                                                                                                        style={{ opacity: '1', transition: 'opacity 500ms linear', backgroundColor: 'transparent', position: 'absolute', top: '0', left: '0', bottom: '0', right: '0', objectFit: 'contain', objectPosition: 'left' }}>
                                                                                                    </div><img
                                                                                                        data-ot-ignore="1"
                                                                                                        width="1"
                                                                                                        height="0.6125"
                                                                                                        data-main-image=""
                                                                                                        style={{ objectFit: 'contain', objectPosition: 'left', opacity: '0' }}
                                                                                                        sizes="100vw"
                                                                                                        decoding="async"
                                                                                                        loading="lazy"
                                                                                                        src="https://www.databricks.com/sites/default/files/2025-04/logo-color-fox-sports.svg?v=1745256434"
                                                                                                        alt="" /><noscript><img
                                                                                                            data-ot-ignore="1"
                                                                                                            width="1"
                                                                                                            height="0.6125"
                                                                                                            data-main-image=""
                                                                                                            style={{ objectFit: 'contain', objectPosition: 'left', opacity: '0' }}
                                                                                                            sizes="100vw"
                                                                                                            decoding="async"
                                                                                                            loading="lazy"
                                                                                                            src="https://www.databricks.com/sites/default/files/2025-04/logo-color-fox-sports.svg?v=1745256434"
                                                                                                            alt="" /></noscript>
                                                                                                </div>
                                                                                            </div>
                                                                                        </figure>
                                                                                        <div
                                                                                            className="flex h-full grow flex-col justify-end">
                                                                                            <div role="group"
                                                                                                className="row-col border-gray-lines flex flex-col gap-1 border-b pb-2 pt-4 md:flex-none md:flex-row md:items-end md:gap-2 md:pb-2 lg:gap-3 lg:pb-3 lg:pt-6 xl:flex-row xl:justify-start">
                                                                                                <span
                                                                                                    className="text-6 font-mono leading-none lg:pb-0 xl:text-[88px]">100s</span><span
                                                                                                        className="xl:text-2.5 text-2 max-w-[200px] font-medium leading-tight md:pb-1 lg:max-w-[240px] xl:leading-tight">of
                                                                                                    thousands of
                                                                                                    requests per
                                                                                                    day</span>
                                                                                            </div>
                                                                                            <div
                                                                                                className="lg:max-w-[560px]">
                                                                                                <div className="text-3 pt-2 lg:pt-3 xl:text-4 font-medium leading-tight md:leading-7 xl:leading-tight"
                                                                                                    id="carousel_item-4_heading">
                                                                                                    <p>FOX
                                                                                                        Sports
                                                                                                        reimagines
                                                                                                        the fan
                                                                                                        experience
                                                                                                    </p>
                                                                                                </div>
                                                                                                <div
                                                                                                    className="rich-text-body text-2 text-gray-text hidden lg:block pt-3 leading-normal">
                                                                                                    <p>With
                                                                                                        real-time
                                                                                                        data
                                                                                                        processing
                                                                                                        and an
                                                                                                        in-app
                                                                                                        chatbot
                                                                                                        powered
                                                                                                        by
                                                                                                        Databricks,
                                                                                                        fans can
                                                                                                        simply
                                                                                                        ask
                                                                                                        questions
                                                                                                        and
                                                                                                        receive
                                                                                                        instant,
                                                                                                        tailored
                                                                                                        insights.
                                                                                                        This
                                                                                                        AI-driven
                                                                                                        approach
                                                                                                        delivers
                                                                                                        personalized,
                                                                                                        immersive
                                                                                                        content
                                                                                                        that
                                                                                                        evolves
                                                                                                        with
                                                                                                        every
                                                                                                        moment
                                                                                                        of the
                                                                                                        game.
                                                                                                    </p>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div><span
                                                                                            className="arrow-icon-tertiary text-blue-cta hover:text-blue-cta block mt-3 lg:mt-6">See
                                                                                            the full
                                                                                            story</span>
                                                                                    </div>
                                                                                    <div className="customer-card-img-container relative h-[240px] min-h-[180px] overflow-hidden md:min-h-[240px] md:w-full lg:h-full lg:w-5/12 xl:w-6/12  "
                                                                                        aria-hidden="false"><img
                                                                                            src="https://www.databricks.com/sites/default/files/2025-09/fox-sports-2x-min.png?v=1758842871"
                                                                                            alt=""
                                                                                            aria-hidden="true"
                                                                                            className="md:h-30 absolute top-0 h-[180px] w-full object-cover object-center transition-transform md:min-h-[240px] lg:h-full" />
                                                                                        <figure
                                                                                            aria-data-label="fox sport"
                                                                                            className="duration-250 ease-curve-ease md:h-30 h-[180px] w-full transition-transform md:min-h-[240px] lg:absolute lg:h-full group-[:hover:not(:has(.exclude-hover:hover))]:scale-105">
                                                                                            <div
                                                                                                className="h-full ">
                                                                                                <div data-gatsby-image-wrapper=""
                                                                                                    className="gatsby-image-wrapper h-full object-cover object-center optanon-category-C0001">
                                                                                                    <div aria-hidden="true"
                                                                                                        style={{ paddingTop: '70.32967032967034%' }}>
                                                                                                    </div>
                                                                                                    <div aria-hidden="true"
                                                                                                        data-placeholder-image=""
                                                                                                        style={{ opacity: '0', transition: 'opacity 500ms linear', backgroundColor: 'transparent', position: 'absolute', inset: '0px', objectFit: 'cover' }}>
                                                                                                    </div><img
                                                                                                        data-ot-ignore="1"
                                                                                                        width="1"
                                                                                                        height="0.7032967032967034"
                                                                                                        data-main-image=""
                                                                                                        style={{ objectFit: 'cover', opacity: '1' }}
                                                                                                        sizes="100vw"
                                                                                                        decoding="async"
                                                                                                        loading="lazy"
                                                                                                        src="https://www.databricks.com/sites/default/files/2025-09/fox-sports-2x-min.png?v=1758842871"
                                                                                                        alt="" /><noscript><img
                                                                                                            data-ot-ignore="1"
                                                                                                            width="1"
                                                                                                            height="0.7032967032967034"
                                                                                                            data-main-image=""
                                                                                                            style={{ objectFit: 'cover', opacity: '0' }}
                                                                                                            sizes="100vw"
                                                                                                            decoding="async"
                                                                                                            loading="lazy"
                                                                                                            src="https://www.databricks.com/sites/default/files/2025-09/fox-sports-2x-min.png?v=1758842871"
                                                                                                            alt="" /></noscript>
                                                                                                </div>
                                                                                            </div>
                                                                                        </figure>
                                                                                    </div>
                                                                                </a></div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className=" specific-wrapper-bottom pb-5 md:pb-10 ">
                                                    <div className="component-generaltextrow bg-transparent my-5">
                                                        <section className="flex inner-wrapper justify-center">
                                                            <div className="lg:w-6/12 text-center pb-0 md:">
                                                                <div className="gt-container flex flex-col gap-2">
                                                                    <div
                                                                        className="flex flex-col gap-2 gap-y-3 md:flex-row lg:gap-4 justify-center">
                                                                        <div
                                                                            className="flex items-center justify-center">
                                                                            <a data-external-link="true"
                                                                                href="/customers/all"
                                                                                className="cursor-pointer testId-variant-a hover:no-underline link-white"
                                                                                aria-data-label="See more Customer Stories"><span
                                                                                    className="arrow-icon-tertiary tertiary-underline cursor-pointer">See
                                                                                    more Customer
                                                                                    Stories</span></a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </section>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="specific-wrapper-top pt-0 md:pt-0 lg:pt-0 specific-wrapper-bottom pb-0 md:pb-0 lg:pb-0 ">
                                <div data-cy="Wrapper" className="content-wrapper fullwidth-component relative z-10"
                                    title="RESOURCES">
                                    <div aria-hidden="true" className="absolute inset-0 w-full h-full"
                                        style={{ zIndex: '-1', backgroundColor: '#F9F7F4', opacity: '1' }}></div>
                                    <div className="inner-wrapper">
                                        <div data-cy="Grid" className="grid grid-cols-12 gap-0 ">
                                            <div style={{ gridColumn: '1 / span 12' }}>
                                                <div
                                                    className="specific-wrapper-top pt-12 md:pt-12 lg:pt-16 specific-wrapper-bottom pb-6 md:pb-6 lg:pb-6 ">
                                                    <div data-cy="Wrapper" className="outer-wrapper ">
                                                        <div className="inner-wrapper">
                                                            <section
                                                                className="section-header mx-auto text-center w-full md:w-8/12 xl:w-6/12">
                                                                <span
                                                                    className="text-2 block font-mono uppercase mb-4 leading-none text-orange-700">RESOURCES</span>
                                                                <div className="flex flex-col gap-2 ">
                                                                    <h2
                                                                        className="text-navy-800 text-4 md:text-5 lg:tracking-t-1 lg:text-6 font-medium">
                                                                        More than meets the AI</h2>
                                                                </div>
                                                                <div
                                                                    className="flex w-full flex-wrap items-center gap-2 lg:gap-4 justify-center">
                                                                </div>
                                                            </section>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    className="specific-wrapper-top pt-0 md:pt-0 specific-wrapper-bottom pb-0 md:pb-0 ">
                                                    <div data-cy="Wrapper" className="outer-wrapper ">
                                                        <div className="inner-wrapper">
                                                            <section data-cy="SectionResources" className="p-1">
                                                                <div
                                                                    className="grid grid-cols-1 gap-2 lg:gap-4 md:grid-cols-2">
                                                                    <div
                                                                        className="h-full bg-navy-800  flex flex-col gap-6 p-3 lg:p-6  undefined">
                                                                        <div className="flex flex-col gap-4">
                                                                            <div>
                                                                                <h3
                                                                                    className="pb-2 lg:pb-3 text-white  text-3 lg:text-4 font-medium">
                                                                                    Get help</h3>
                                                                                <p className="text-navy-300 ">
                                                                                    Everything you need to
                                                                                    succeed on lakehouse</p>
                                                                            </div>
                                                                        </div>
                                                                        <div><a data-external-link="true"
                                                                            href="/support"
                                                                            className="text-white hover:text-orange-500 transition-ease-in-ease arrow-icon arrow-icon-rotate-45 text-2 relative !block border-b border-orange-500 py-1.5 pr-4 leading-6 transition-all duration-200 ease-linear after:absolute after:right-0 after:top-1.5 after:ml-3 hover:pl-1 hover:no-underline"><span
                                                                                className="line-clamp-2">Support</span></a><a
                                                                                    data-external-link="true"
                                                                                    href="/learn/training/home"
                                                                                    className="text-white hover:text-orange-500 transition-ease-in-ease arrow-icon arrow-icon-rotate-45 text-2 relative !block border-b border-orange-500 py-1.5 pr-4 leading-6 transition-all duration-200 ease-linear after:absolute after:right-0 after:top-1.5 after:ml-3 hover:pl-1 hover:no-underline"><span
                                                                                        className="line-clamp-2">Training</span></a><a
                                                                                            data-external-link="true"
                                                                                            href="https://community.databricks.com/s/"
                                                                                            className="text-white hover:text-orange-500 transition-ease-in-ease arrow-icon arrow-icon-rotate-45 text-2 relative !block border-b border-orange-500 py-1.5 pr-4 leading-6 transition-all duration-200 ease-linear after:absolute after:right-0 after:top-1.5 after:ml-3 hover:pl-1 hover:no-underline"
                                                                                            target="_blank"
                                                                                            rel="noopener noreferrer"><span
                                                                                                className="line-clamp-2">Community</span></a>
                                                                        </div>
                                                                    </div>
                                                                    <div
                                                                        className="h-full bg-navy-800  flex flex-col gap-6 p-3 lg:p-6  undefined">
                                                                        <div className="flex flex-col gap-4">
                                                                            <div>
                                                                                <h3
                                                                                    className="pb-2 lg:pb-3 text-white  text-3 lg:text-4 font-medium">
                                                                                    See what’s new</h3>
                                                                                <p className="text-navy-300 ">Our
                                                                                    latest announcements, expert
                                                                                    analyses and events</p>
                                                                            </div>
                                                                        </div>
                                                                        <div><a data-external-link="true"
                                                                            href="/blog"
                                                                            className="text-white hover:text-orange-500 transition-ease-in-ease arrow-icon arrow-icon-rotate-45 text-2 relative !block border-b border-orange-500 py-1.5 pr-4 leading-6 transition-all duration-200 ease-linear after:absolute after:right-0 after:top-1.5 after:ml-3 hover:pl-1 hover:no-underline"><span
                                                                                className="line-clamp-2">Blog</span></a><a
                                                                                    data-external-link="true"
                                                                                    href="/company/newsroom"
                                                                                    className="text-white hover:text-orange-500 transition-ease-in-ease arrow-icon arrow-icon-rotate-45 text-2 relative !block border-b border-orange-500 py-1.5 pr-4 leading-6 transition-all duration-200 ease-linear after:absolute after:right-0 after:top-1.5 after:ml-3 hover:pl-1 hover:no-underline"><span
                                                                                        className="line-clamp-2">News</span></a><a
                                                                                            data-external-link="true"
                                                                                            href="/events"
                                                                                            className="text-white hover:text-orange-500 transition-ease-in-ease arrow-icon arrow-icon-rotate-45 text-2 relative !block border-b border-orange-500 py-1.5 pr-4 leading-6 transition-all duration-200 ease-linear after:absolute after:right-0 after:top-1.5 after:ml-3 hover:pl-1 hover:no-underline"><span
                                                                                                className="line-clamp-2">Events</span></a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </section>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    className="specific-wrapper-top pt-12 md:pt-12 lg:pt-12 specific-wrapper-bottom pb-12 md:pb-12 lg:pb-16 ">
                                                    <div data-cy="Wrapper" className="outer-wrapper ">
                                                        <div className="inner-wrapper">
                                                            <section>
                                                                <h2
                                                                    className="text-3 md:text-4 pb-6 text-center font-medium">
                                                                    In the spotlight{/* */} </h2>
                                                                <div
                                                                    className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 pb-8">
                                                                    <a data-external-link="true"
                                                                        href="/resources/whitepaper/mit-technology-review-insights-report?itm_data=homepage-spotlight-tile1-mit-refresh"
                                                                        className="variant-spotlight group-arrow-icon-tertiary hover:no-underline hover:md:shadow-shadow-2 group flex flex-col transition-shadow delay-75 duration-75 ease-linear"
                                                                        data-variant="C" data-cy="Card"
                                                                        aria-data-label="Read more about Report cover: Building a high-performance data and AI organization">
                                                                        <div
                                                                            className="min-w-[108px] flex items-center relative pb-[52.25%] flex-shrink-0">
                                                                            <figure
                                                                                className="w-full absolute top-0 h-full">
                                                                                <div className="h-full "><img
                                                                                    src="https://www.databricks.com/sites/default/files/2025-10/2025-09-eb-mittr-building-a-high-performance-data-cover-ty-tn-360x188-2x.png"
                                                                                    alt="" loading="lazy"
                                                                                    data-ot-ignore="1"
                                                                                    className="h-full object-cover optanon-category-C0001" />
                                                                                </div>
                                                                            </figure>
                                                                        </div>
                                                                        <div
                                                                            className="w-full p-2 transition-all delay-75 ease-linear h-full md:flex flex-col justify-between">
                                                                            <div className="flex-1"><span
                                                                                className="text-1.5 text-gray-text pb-1 font-mono uppercase leading-[15px]">REPORT</span>
                                                                                <div
                                                                                    className="text-navy-800 font-medium rich-text-body">
                                                                                    Build a high-performance
                                                                                    data and AI team</div>
                                                                            </div>
                                                                            <div className="swiper-no-swiping"><span
                                                                                tabIndex={0} role="button"
                                                                                aria-data-label="Read now"
                                                                                className="mt-4 arrow-icon-tertiary text-blue-cta block !mt-2">Read
                                                                                now</span></div>
                                                                        </div>
                                                                    </a><a data-external-link="true"
                                                                        href="/resources/analyst-paper/databricks-named-leader-by-gartner?itm_data=homepage-spotlight-tile2-gartnermqdbms"
                                                                        className="variant-spotlight group-arrow-icon-tertiary hover:no-underline hover:md:shadow-shadow-2 group flex flex-col transition-shadow delay-75 duration-75 ease-linear"
                                                                        data-variant="C" data-cy="Card"
                                                                        aria-data-label="Read more about Gartner 2025 MQ">
                                                                        <div
                                                                            className="min-w-[108px] flex items-center relative pb-[52.25%] flex-shrink-0">
                                                                            <figure
                                                                                className="w-full absolute top-0 h-full">
                                                                                <div className="h-full "><img
                                                                                    src="https://www.databricks.com/sites/default/files/2025-11/2025-11-gartner-mq-dbms-ty-tn-360x188-2x.png"
                                                                                    alt="" loading="lazy"
                                                                                    data-ot-ignore="1"
                                                                                    className="h-full object-cover optanon-category-C0001" />
                                                                                </div>
                                                                            </figure>
                                                                        </div>
                                                                        <div
                                                                            className="w-full p-2 transition-all delay-75 ease-linear h-full md:flex flex-col justify-between">
                                                                            <div className="flex-1"><span
                                                                                className="text-1.5 text-gray-text pb-1 font-mono uppercase leading-[15px]">Report</span>
                                                                                <div
                                                                                    className="text-navy-800 font-medium rich-text-body">
                                                                                    Databricks is a Leader in
                                                                                    the 2025 MQ for Database
                                                                                    Management Systems.</div>
                                                                            </div>
                                                                            <div className="swiper-no-swiping"><span
                                                                                tabIndex={0} role="button"
                                                                                aria-data-label="Read now"
                                                                                className="mt-4 arrow-icon-tertiary text-blue-cta block !mt-2">Read
                                                                                now</span></div>
                                                                        </div>
                                                                    </a><a data-external-link="true"
                                                                        href="/dataaisummit/worldtour?itm_data=db-homepage-spotlight-daiwt25"
                                                                        className="variant-spotlight group-arrow-icon-tertiary hover:no-underline hover:md:shadow-shadow-2 group flex flex-col transition-shadow delay-75 duration-75 ease-linear"
                                                                        data-variant="C" data-cy="Card"
                                                                        aria-data-label="Read more about DAIWT"
                                                                        target="_blank"
                                                                        rel="noopener noreferrer">
                                                                        <div
                                                                            className="min-w-[108px] flex items-center relative pb-[52.25%] flex-shrink-0">
                                                                            <figure
                                                                                className="w-full absolute top-0 h-full">
                                                                                <div className="h-full "><img
                                                                                    src="https://www.databricks.com/sites/default/files/2025-08/ty-tn-daiwt-360x188.png"
                                                                                    alt="" loading="lazy"
                                                                                    data-ot-ignore="1"
                                                                                    className="h-full object-cover optanon-category-C0001" />
                                                                                </div>
                                                                            </figure>
                                                                        </div>
                                                                        <div
                                                                            className="w-full p-2 transition-all delay-75 ease-linear h-full md:flex flex-col justify-between">
                                                                            <div className="flex-1"><span
                                                                                className="text-1.5 text-gray-text pb-1 font-mono uppercase leading-[15px]">Level
                                                                                up your AI skills</span>
                                                                                <div
                                                                                    className="text-navy-800 font-medium rich-text-body">
                                                                                    We’re coming to a city near
                                                                                    you — Learn from members of
                                                                                    your local data and AI
                                                                                    community, and connect with
                                                                                    experts to share strategies
                                                                                    and success tactics.</div>
                                                                            </div>
                                                                            <div className="swiper-no-swiping"><span
                                                                                tabIndex={0} role="button"
                                                                                aria-data-label="Register now"
                                                                                className="mt-4 arrow-icon-tertiary text-blue-cta block !mt-2">Register
                                                                                now</span></div>
                                                                        </div>
                                                                    </a><a data-external-link="true"
                                                                        href="/resources/ebook/big-book-of-data-engineering?itm_data=homepage-spotlight-tile4-big-book-of-data-engineering-nov25"
                                                                        className="variant-spotlight group-arrow-icon-tertiary hover:no-underline hover:md:shadow-shadow-2 group flex flex-col transition-shadow delay-75 duration-75 ease-linear"
                                                                        data-variant="C" data-cy="Card"
                                                                        aria-data-label="Read more about Big Book of Data Engineering book cover and feature highlights.">
                                                                        <div
                                                                            className="min-w-[108px] flex items-center relative pb-[52.25%] flex-shrink-0">
                                                                            <figure
                                                                                className="w-full absolute top-0 h-full">
                                                                                <div className="h-full "><img
                                                                                    src="https://www.databricks.com/sites/default/files/2025-11/2025-10-eb-big-book-of-data-engineering-4th-ed-ty-tn-360x188-2x.png"
                                                                                    alt="" loading="lazy"
                                                                                    data-ot-ignore="1"
                                                                                    className="h-full object-cover optanon-category-C0001" />
                                                                                </div>
                                                                            </figure>
                                                                        </div>
                                                                        <div
                                                                            className="w-full p-2 transition-all delay-75 ease-linear h-full md:flex flex-col justify-between">
                                                                            <div className="flex-1"><span
                                                                                className="text-1.5 text-gray-text pb-1 font-mono uppercase leading-[15px]">eBook</span>
                                                                                <div
                                                                                    className="text-navy-800 font-medium rich-text-body">
                                                                                    Learn data engineering best
                                                                                    practices</div>
                                                                            </div>
                                                                            <div className="swiper-no-swiping"><span
                                                                                tabIndex={0} role="button"
                                                                                aria-data-label="Read now"
                                                                                className="mt-4 arrow-icon-tertiary text-blue-cta block !mt-2">Read
                                                                                now</span></div>
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                                <div className="flex justify-center"><a
                                                                    data-external-link="true"
                                                                    href="/resources" data-cy="Button"
                                                                    className="b4 inline-block px-3 py-1 transition duration-200 ease-in-out hover:no-underline btn-secondary  testId-secondary"
                                                                    aria-data-label="See more resources">See more
                                                                    resources</a></div>
                                                            </section>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="specific-wrapper-top pt-16 md:pt-16 lg:pt-16 specific-wrapper-bottom pb-0 md:pb-0 lg:pb-0 bg-navy-800">
                                <section className="bg-navy-800 fullwidth-component px-2 text-center text-white"
                                    data-cy="ChooseDemo">
                                    <div className="xl:6/12 mx-auto w-full md:w-10/12 lg:w-8/12">
                                        <div className="choose-demo text-oat-light mx-auto max-w-4xl md:px-0">
                                            <h2>Ready to become a data + AI company?</h2>
                                        </div>
                                        <p className="text-3 mx-auto max-w-2xl pt-3">Take the first steps in your
                                            transformation</p>
                                        <div className="flex flex-wrap justify-center gap-2 pt-6 lg:gap-4"><a
                                            data-external-link="true" href="/resources/demos" tabIndex={0}
                                            className="leading-none text-2 font-medium p-2 duration-200 ease-in-out transition hover:no-underline hover:border-navy-500 border border-white text-navy-800 bg-white hover:btn-secondary"
                                            aria-data-label="Browse demos Ready to become a data + AI company?">Browse
                                            demos</a><a data-external-link="true"
                                                href="https://www.databricks.com/signup?dbx_source=www&amp;itm_data=dbx-web&amp;l=en-EN"
                                                tabIndex={0}
                                                className="leading-none text-2 font-medium p-2 duration-200 ease-in-out transition hover:no-underline hover:border-navy-500 border border-white btn-secondary"
                                                aria-data-label="Try it free Ready to become a data + AI company?">Try
                                                it free</a></div>
                                    </div>
                                </section>
                            </div>
                        </section>
                    </div>
                    <div></div>
                </main>
            </div>
            <CarouselScript />
        </>
    );
}

function CarouselScript() {
    useEffect(() => {
        // Initialize swipers for native scrolling
        const swipers = document.querySelectorAll('.swiper');
        swipers.forEach(swiper => {
            (swiper as HTMLElement).style.overflowX = 'auto';
            (swiper as HTMLElement).style.scrollBehavior = 'smooth';
            // Reset transform on wrapper to allow native scroll
            const wrapper = swiper.querySelector('.swiper-wrapper');
            if (wrapper) {
                (wrapper as HTMLElement).style.transform = 'none';
            }
        });

        const handleScroll = (e: any) => {
            const btn = e.target.closest('button');
            if (!btn) return;
            const label = btn.getAttribute('aria-data-label') || '';
            if (!label.includes('Scroll') && !label.includes('slider')) return;

            const direction = label.includes('left') ? -1 : 1;

            // Find swiper relative to button
            // Heuristic: Go up to common container and find .swiper
            let container = btn.closest('.flex')?.parentElement?.nextElementSibling;

            if (!container || !container.classList.contains('swiper')) {
                // Fallback: try finding any swiper in the same section/container
                container = btn.closest('section')?.querySelector('.swiper');
            }

            if (!container) {
                // Fallback global
                container = document.querySelector('.swiper');
            }

            if (container) {
                container.scrollBy({ left: 400 * direction, behavior: 'smooth' });
            }
        };

        document.addEventListener('click', handleScroll);
        return () => document.removeEventListener('click', handleScroll);
    }, []);
    return null;
}
