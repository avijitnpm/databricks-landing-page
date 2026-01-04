'use client';
import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
    return (
        <>
            <div className="h-0">
                <div className="pointer-events-none absolute left-0 top-0 w-full">
                    <nav data-cy="MainNavigationHorizontal" data-el-g1="navigation" role="navigation"
                        aria-data-label="Main Navigation"
                        className="bg-white pointer-events-auto lg:border-oat-medium fixed top-0 z-[60] w-full transition-opacity duration-300 lg:border-b lg:px-2.5">
                        <div className="lg:max-w-grid-xxl relative px-2 lg:mx-auto lg:px-0"></div>
                        <div
                            className="border-oat-medium top-0 z-[60] flex h-6 w-full bg-white p-2 md:h-[56px] md:border-b lg:hidden lg:h-6 lg:items-center  ">
                            <a data-external-link="true" href="/" className="flex w-10 shrink-0 items-center md:w-20"
                                aria-data-label="Header databricks logo">
                                <figure className="h-full w-full">
                                    <div className="h-full "><img
                                        src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTMyIiBoZWlnaHQ9IjIyIiB2aWV3Qm94PSIwIDAgMTMyIDIyIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Im0xOC4zMTggOS4yNzUtOC42MzEgNC44NTlMLjQ0NSA4Ljk0MiAwIDkuMTgydjMuNzdsOS42ODcgNS40MzEgOC42My00Ljg0djEuOTk1bC04LjYzIDQuODYtOS4yNDItNS4xOTItLjQ0NS4yNHYuNjQ2bDkuNjg3IDUuNDMyIDkuNjY4LTUuNDMydi0zLjc2OWwtLjQ0NS0uMjQtOS4yMjMgNS4xNzMtOC42NS00Ljg0VjEwLjQybDguNjUgNC44NCA5LjY2OC01LjQzVjYuMTE0bC0uNDgyLS4yNzctOS4xODYgNS4xNTVMMS40ODIgNi40MWw4LjIwNS00LjYgNi43NDEgMy43ODcuNTkzLS4zMzJ2LS40NjJMOS42ODcuNjg0IDAgNi4xMTV2LjU5Mmw5LjY4NyA1LjQzMiA4LjYzLTQuODZ6IiBmaWxsPSIjRUUzRDJDIi8+PHBhdGggZD0iTTM3LjQ0OSAxOC40NDNWMS44NTJoLTIuNTU2djYuMjA3YzAgLjA5My0uMDU2LjE2Ny0uMTQ4LjIwNGEuMjMuMjMgMCAwIDEtLjI0LS4wNTZjLS44NzEtMS4wMTYtMi4yMjMtMS41ODktMy43MDUtMS41ODktMy4xNjcgMC01LjY1IDIuNjYtNS42NSA2LjA2IDAgMS42NjMuNTc1IDMuMTk3IDEuNjMgNC4zMjRhNS40NCA1LjQ0IDAgMCAwIDQuMDIgMS43MzZjMS40NjMgMCAyLjgxNS0uNjEgMy43MDQtMS42NjIuMDU2LS4wNzQuMTY3LS4wOTMuMjQtLjA3NC4wOTMuMDM3LjE1LjExLjE1LjIwM3YxLjIzOHptLTYuMDkzLTIuMDE0Yy0yLjAzOCAwLTMuNjMtMS42NDQtMy42My0zLjc1IDAtMi4xMDcgMS41OTItMy43NTEgMy42My0zLjc1MXMzLjYzIDEuNjQ0IDMuNjMgMy43NS0xLjU5MyAzLjc1LTMuNjMgMy43NW0xOS43NjIgMi4wMTZWNi44OTZoLTIuNTM3VjguMDZjMCAuMDkzLS4wNTYuMTY2LS4xNDkuMjAzYS4yLjIgMCAwIDEtLjI0LS4wNzNjLS44NTItMS4wMTctMi4xODYtMS41OS0zLjcwNS0xLjU5LTMuMTY3IDAtNS42NDkgMi42NjEtNS42NDkgNi4wNiAwIDMuNCAyLjQ4MiA2LjA2IDUuNjUgNi4wNiAxLjQ2MyAwIDIuODE1LS42MSAzLjcwNC0xLjY4LjA1NS0uMDc1LjE2Ni0uMDkzLjI0LS4wNzUuMDkzLjAzNy4xNDkuMTExLjE0OS4yMDR2MS4yNTZoMi41Mzd6bS02LjA1Ni0yLjAxNGMtMi4wMzggMC0zLjYzLTEuNjQ1LTMuNjMtMy43NSAwLTIuMTA3IDEuNTkyLTMuNzUxIDMuNjMtMy43NTFzMy42MyAxLjY0NCAzLjYzIDMuNzUtMS41OTMgMy43NS0zLjYzIDMuNzVtMjcuNzgxIDIuMDE1VjYuODk2aC0yLjUzOFY4LjA2YzAgLjA5My0uMDU1LjE2Ni0uMTQ4LjIwM3MtLjE4NSAwLS4yNC0uMDczYy0uODUzLTEuMDE3LTIuMTg2LTEuNTktMy43MDUtMS41OS0zLjE4NiAwLTUuNjQ5IDIuNjYxLTUuNjQ5IDYuMDggMCAzLjQxNyAyLjQ4MiA2LjA2IDUuNjQ5IDYuMDYgMS40NjMgMCAyLjgxNS0uNjEgMy43MDQtMS42ODIuMDU2LS4wNzQuMTY3LS4wOTMuMjQxLS4wNzQuMDkzLjAzNy4xNDguMTEuMTQ4LjIwM3YxLjI1NnptLTYuMDU3LTIuMDE0Yy0yLjAzNyAwLTMuNjMtMS42NDUtMy42My0zLjc1IDAtMi4xMDcgMS41OTMtMy43NTEgMy42My0zLjc1MXMzLjYzIDEuNjQ0IDMuNjMgMy43NS0xLjU5MyAzLjc1LTMuNjMgMy43NW0xMC43MDYuNjQ3Yy4wMTkgMCAuMDU2LS4wMTkuMDc0LS4wMTkuMDU2IDAgLjEzLjAzNy4xNjcuMDc0Ljg3IDEuMDE2IDIuMjIyIDEuNTg5IDMuNzA0IDEuNTg5IDMuMTY3IDAgNS42NS0yLjY2IDUuNjUtNi4wNiAwLTEuNjYzLS41NzUtMy4xOTYtMS42My00LjMyM2E1LjQ0IDUuNDQgMCAwIDAtNC4wMi0xLjczN2MtMS40NjMgMC0yLjgxNS42MS0zLjcwNCAxLjY2My0uMDU2LjA3NC0uMTQ4LjA5Mi0uMjQuMDc0LS4wOTMtLjAzNy0uMTQ5LS4xMTEtLjE0OS0uMjA0VjEuODUyaC0yLjU1NnYxNi41OWgyLjU1NlYxNy4yOGMwLS4wOTMuMDU2LS4xNjYuMTQ4LS4yMDNtLS4yNi00LjM5OGMwLTIuMTA2IDEuNTk0LTMuNzUgMy42MzEtMy43NXMzLjYzIDEuNjQ0IDMuNjMgMy43NS0xLjU5MyAzLjc1LTMuNjMgMy43NS0zLjYzLTEuNjYyLTMuNjMtMy43NW0xNy4yNDQtMy40MTZjLjI0IDAgLjQ2My4wMTkuNjEuMDU2VjYuNjk1YTIuNCAyLjQgMCAwIDAtLjQyNS0uMDM3Yy0xLjMzNCAwLTIuNTU2LjY4NC0zLjIwNCAxLjc3NC0uMDU2LjA5Mi0uMTQ5LjEzLS4yNDEuMDkyYS4yMi4yMiAwIDAgMS0uMTY3LS4yMDNWNi44OThoLTIuNTM3djExLjU2NmgyLjU1NnYtNS4xYzAtMi41MyAxLjI5Ni00LjEgMy40MDgtNC4xbTQuODE1LTIuMzY3aC0yLjU5M3YxMS41NjZoMi41OTN6TTk3Ljk1OCAxLjg3YTEuNTcxIDEuNTcxIDAgMSAwIDAgMy4xNDEgMS41NzEgMS41NzEgMCAxIDAgMC0zLjE0bTguOTI4IDQuNzI5Yy0zLjU1NiAwLTYuMTMxIDIuNTUtNi4xMzEgNi4wOCAwIDEuNzE3LjYxMiAzLjI1IDEuNzA0IDQuMzYgMS4xMTIgMS4xMDggMi42NjcgMS43MTggNC40MDggMS43MTggMS40NDUgMCAyLjU1Ni0uMjc3IDQuNjY4LTEuODNsLTEuNDYzLTEuNTMzYy0xLjAzOC42ODQtMi4wMDEgMS4wMTYtMi45NDUgMS4wMTYtMi4xNDkgMC0zLjc2LTEuNjA3LTMuNzYtMy43MzJzMS42MTEtMy43MzIgMy43Ni0zLjczMmMxLjAxOCAwIDEuOTYzLjMzMyAyLjkwOCAxLjAxNmwxLjYyOS0xLjUzM2MtMS45MDctMS42MjYtMy42My0xLjgzLTQuNzc4LTEuODNtOS4xNDkgNi43NjJhLjIuMiAwIDAgMSAuMTQ5LS4wNTVoLjAxOGMuMDU2IDAgLjExMS4wMzcuMTY3LjA3M2w0LjA5MyA1LjA2M2gzLjE0OWwtNS4yOTctNi4zOTNjLS4wNzUtLjA5Mi0uMDc1LS4yMjIuMDE4LS4yOTVsNC44NzEtNC44NmgtMy4xM2wtNC4yMDQgNC4yMTNjLS4wNTYuMDU1LS4xNDguMDc0LS4yNDEuMDU1YS4yMy4yMyAwIDAgMS0uMTMtLjIwM1YxLjg3aC0yLjU3NHYxNi41OTFoMi41NTZ2LTQuNTA4YzAtLjA1NS4wMTgtLjEzLjA3NC0uMTY2eiIgZmlsbD0iIzAwMCIvPjxwYXRoIGQ9Ik0xMjcuNzc2IDE4LjczOWMyLjA5MyAwIDQuMjIzLTEuMjc1IDQuMjIzLTMuNjk1IDAtMS41ODktMS0yLjY4LTMuMDM3LTMuMzQ0bC0xLjM5LS40NjJjLS45NDQtLjMxNC0xLjM4OS0uNzU4LTEuMzg5LTEuMzY3IDAtLjcwMi42My0xLjE4MyAxLjUxOS0xLjE4My44NTIgMCAxLjYxMS41NTUgMi4wOTMgMS41MTVsMi4wNTYtMS4xMDhjLS43NTktMS41NTItMi4zMzQtMi41MTMtNC4xNDktMi41MTMtMi4yOTcgMC0zLjk2MyAxLjQ3OC0zLjk2MyAzLjQ5MiAwIDEuNjA3Ljk2MyAyLjY3OSAyLjk0NCAzLjMwN2wxLjQyNy40NjJjMSAuMzE0IDEuNDI2LjcyIDEuNDI2IDEuMzY3IDAgLjk4LS45MDggMS4zMy0xLjY4NiAxLjMzLTEuMDM3IDAtMS45NjMtLjY2NS0yLjQwNy0xLjc1NWwtMi4wOTMgMS4xMDljLjY4NSAxLjc1NSAyLjM3IDIuODQ1IDQuNDI2IDIuODQ1bS02OS41NDYtLjExMWMuODE1IDAgMS41MzgtLjA3NCAxLjk0NS0uMTN2LTIuMjE2YTE0IDE0IDAgMCAxLTEuMjc4LjA3M2MtMS4wMzcgMC0xLjgzMy0uMTg0LTEuODMzLTIuNDJWOS4xODdjMC0uMTMuMDkyLS4yMjIuMjIyLS4yMjJoMi41VjYuODc3aC0yLjVhLjIxNC4yMTQgMCAwIDEtLjIyMi0uMjIxVjMuMzNoLTIuNTU2djMuMzQ0YzAgLjEzLS4wOTMuMjIyLS4yMjMuMjIyaC0xLjc3OHYyLjA4OGgxLjc3OGMuMTMgMCAuMjIzLjA5Mi4yMjMuMjIxdjUuMzc3YzAgNC4wNDYgMi43MDQgNC4wNDYgMy43MjIgNC4wNDYiIGZpbGw9IiMwMDAiLz48L3N2Zz4="
                                        alt="" loading="lazy" data-ot-ignore="1"
                                        className="max-h-full h-full object-contain object-center optanon-category-C0001" />
                                    </div>
                                </figure>
                            </a>
                            <div className="ml-auto flex items-center lg:hidden">
                                <div className="flex flex-row items-center gap-3 align-middle">
                                    <div className="relative flex flex-col items-center " style={{ zIndex: 'auto' }}><button
                                        className="p-[2px] text-navy-600 unsticky-link-hover active:text-orange-600"
                                        type="button" aria-expanded="false"
                                        aria-data-label="Switch language. Current Language - English"><svg width="20"
                                            height="20" viewBox="0 0 20 20" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="10" cy="10" r="7.5" stroke="currentColor"></circle>
                                            <path
                                                d="M13.5 10C13.5 12.1483 13.0635 14.0686 12.3812 15.4332C11.6839 16.8278 10.8132 17.5 10 17.5C9.18684 17.5 8.31607 16.8278 7.61879 15.4332C6.93646 14.0686 6.5 12.1483 6.5 10C6.5 7.85165 6.93646 5.93141 7.61879 4.56675C8.31607 3.17219 9.18684 2.5 10 2.5C10.8132 2.5 11.6839 3.17219 12.3812 4.56675C13.0635 5.93141 13.5 7.85165 13.5 10Z"
                                                stroke="currentColor"></path>
                                            <path d="M17 10H3" stroke="currentColor"></path>
                                            <path d="M16.5 6H3.5" stroke="currentColor"></path>
                                            <path d="M16.5 14H3.5" stroke="currentColor"></path>
                                        </svg></button></div>
                                    <div role="button" className="flex items-center p-[2px]" aria-data-label="Site search"
                                        tabIndex={0}><svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="text-navy-600 hover:text-orange-600">
                                            <circle cx="9" cy="9" r="6.5" stroke="currentColor"></circle>
                                            <path d="M18 18L13.5 13.5" stroke="currentColor"></path>
                                        </svg></div>
                                </div><a data-external-link="true"
                                    href="https://login.databricks.com/?dbx_source=www&amp;itm=main-cta-login&amp;l=en-EN"
                                    className="text-1.5 link-n-800 pl-3 pr-1.5 leading-4 md:pr-2.5" target="_blank"
                                    rel="noopener noreferrer">Login</a>
                                <div className="relative ml-4 h-auto w-2.5"><button aria-data-label="Open menu"
                                    aria-expanded="false" type="button" className="btn-burger "></button></div>
                            </div>
                        </div>
                        <div className="lg:max-w-grid-xxl lg:mx-auto hidden md:block md:translate-x-full lg:w-full lg:transform-none md:shadow-shadow-2 lg:shadow-shadow-0 lg:border-oat-medium pb-13 fixed right-0 top-6 z-[59] h-full transform items-center bg-white transition-transform duration-0 md:top-[56px] md:w-[50vw] lg:static lg:flex lg:h-[63px] lg:w-full lg:transform-none lg:overflow-visible lg:pb-0"
                            style={{ top: '56px' }}><a data-external-link="true" href="/"
                                className="mr-4 hidden h-full w-20 lg:flex lg:shrink-0 lg:items-center"
                                aria-data-label="Header databricks logo">
                                <figure className="h-full w-full md:max-h-[24px]">
                                    <div className="h-full "><img
                                        src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTMyIiBoZWlnaHQ9IjIyIiB2aWV3Qm94PSIwIDAgMTMyIDIyIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Im0xOC4zMTggOS4yNzUtOC42MzEgNC44NTlMLjQ0NSA4Ljk0MiAwIDkuMTgydjMuNzdsOS42ODcgNS40MzEgOC42My00Ljg0djEuOTk1bC04LjYzIDQuODYtOS4yNDItNS4xOTItLjQ0NS4yNHYuNjQ2bDkuNjg3IDUuNDMyIDkuNjY4LTUuNDMydi0zLjc2OWwtLjQ0NS0uMjQtOS4yMjMgNS4xNzMtOC42NS00Ljg0VjEwLjQybDguNjUgNC44NCA5LjY2OC01LjQzVjYuMTE0bC0uNDgyLS4yNzctOS4xODYgNS4xNTVMMS40ODIgNi40MWw4LjIwNS00LjYgNi43NDEgMy43ODcuNTkzLS4zMzJ2LS40NjJMOS42ODcuNjg0IDAgNi4xMTV2LjU5Mmw5LjY4NyA1LjQzMiA4LjYzLTQuODZ6IiBmaWxsPSIjRUUzRDJDIi8+PHBhdGggZD0iTTM3LjQ0OSAxOC40NDNWMS44NTJoLTIuNTU2djYuMjA3YzAgLjA5My0uMDU2LjE2Ny0uMTQ4LjIwNGEuMjMuMjMgMCAwIDEtLjI0LS4wNTZjLS44NzEtMS4wMTYtMi4yMjMtMS41ODktMy43MDUtMS41ODktMy4xNjcgMC01LjY1IDIuNjYtNS42NSA2LjA2IDAgMS42NjMuNTc1IDMuMTk3IDEuNjMgNC4zMjRhNS40NCA1LjQ0IDAgMCAwIDQuMDIgMS43MzZjMS40NjMgMCAyLjgxNS0uNjEgMy43MDQtMS42NjIuMDU2LS4wNzQuMTY3LS4wOTMuMjQtLjA3NC4wOTMuMDM3LjE1LjExLjE1LjIwM3YxLjIzOHptLTYuMDkzLTIuMDE0Yy0yLjAzOCAwLTMuNjMtMS42NDQtMy42My0zLjc1IDAtMi4xMDcgMS41OTItMy43NTEgMy42My0zLjc1MXMzLjYzIDEuNjQ0IDMuNjMgMy43NS0xLjU5MyAzLjc1LTMuNjMgMy43NW0xOS43NjIgMi4wMTZWNi44OTZoLTIuNTM3VjguMDZjMCAuMDkzLS4wNTYuMTY2LS4xNDkuMjAzYS4yLjIgMCAwIDEtLjI0LS4wNzNjLS44NTItMS4wMTctMi4xODYtMS41OS0zLjcwNS0xLjU5LTMuMTY3IDAtNS42NDkgMi42NjEtNS42NDkgNi4wNiAwIDMuNCAyLjQ4MiA2LjA2IDUuNjUgNi4wNiAxLjQ2MyAwIDIuODE1LS42MSAzLjcwNC0xLjY4LjA1NS0uMDc1LjE2Ni0uMDkzLjI0LS4wNzUuMDkzLjAzNy4xNDkuMTExLjE0OS4yMDR2MS4yNTZoMi41Mzd6bS02LjA1Ni0yLjAxNGMtMi4wMzggMC0zLjYzLTEuNjQ1LTMuNjMtMy43NSAwLTIuMTA3IDEuNTkyLTMuNzUxIDMuNjMtMy43NTFzMy42MyAxLjY0NCAzLjYzIDMuNzUtMS41OTMgMy43NS0zLjYzIDMuNzVtMjcuNzgxIDIuMDE1VjYuODk2aC0yLjUzOFY4LjA2YzAgLjA5My0uMDU1LjE2Ni0uMTQ4LjIwM3MtLjE4NSAwLS4yNC0uMDczYy0uODUzLTEuMDE3LTIuMTg2LTEuNTktMy43MDUtMS41OS0zLjE4NiAwLTUuNjQ5IDIuNjYxLTUuNjQ5IDYuMDggMCAzLjQxNyAyLjQ4MiA2LjA2IDUuNjQ5IDYuMDYgMS40NjMgMCAyLjgxNS0uNjEgMy43MDQtMS42ODIuMDU2LS4wNzQuMTY3LS4wOTMuMjQxLS4wNzQuMDkzLjAzNy4xNDguMTEuMTQ4LjIwM3YxLjI1NnptLTYuMDU3LTIuMDE0Yy0yLjAzNyAwLTMuNjMtMS42NDUtMy42My0zLjc1IDAtMi4xMDcgMS41OTMtMy43NTEgMy42My0zLjc1MXMzLjYzIDEuNjQ0IDMuNjMgMy43NS0xLjU5MyAzLjc1LTMuNjMgMy43NW0xMC43MDYuNjQ3Yy4wMTkgMCAuMDU2LS4wMTkuMDc0LS4wMTkuMDU2IDAgLjEzLjAzNy4xNjcuMDc0Ljg3IDEuMDE2IDIuMjIyIDEuNTg5IDMuNzA0IDEuNTg5IDMuMTY3IDAgNS42NS0yLjY2IDUuNjUtNi4wNiAwLTEuNjYzLS41NzUtMy4xOTYtMS42My00LjMyM2E1LjQ0IDUuNDQgMCAwIDAtNC4wMi0xLjczN2MtMS40NjMgMC0yLjgxNS42MS0zLjcwNCAxLjY2My0uMDU2LjA3NC0uMTQ4LjA5Mi0uMjQuMDc0LS4wOTMtLjAzNy0uMTQ5LS4xMTEtLjE0OS0uMjA0VjEuODUyaC0yLjU1NnYxNi41OWgyLjU1NlYxNy4yOGMwLS4wOTMuMDU2LS4xNjYuMTQ4LS4yMDNtLS4yNi00LjM5OGMwLTIuMTA2IDEuNTk0LTMuNzUgMy42MzEtMy43NXMzLjYzIDEuNjQ0IDMuNjMgMy43NS0xLjU5MyAzLjc1LTMuNjMgMy43NS0zLjYzLTEuNjYyLTMuNjMtMy43NW0xNy4yNDQtMy40MTZjLjI0IDAgLjQ2My4wMTkuNjEuMDU2VjYuNjk1YTIuNCAyLjQgMCAwIDAtLjQyNS0uMDM3Yy0xLjMzNCAwLTIuNTU2LjY4NC0zLjIwNCAxLjc3NC0uMDU2LjA5Mi0uMTQ5LjEzLS4yNDEuMDkyYS4yMi4yMiAwIDAgMS0uMTY3LS4yMDNWNi44OThoLTIuNTM3djExLjU2NmgyLjU1NnYtNS4xYzAtMi41MyAxLjI5Ni00LjEgMy40MDgtNC4xbTQuODE1LTIuMzY3aC0yLjU5M3YxMS41NjZoMi41OTN6TTk3Ljk1OCAxLjg3YTEuNTcxIDEuNTcxIDAgMSAwIDAgMy4xNDEgMS41NzEgMS41NzEgMCAxIDAgMC0zLjE0bTguOTI4IDQuNzI5Yy0zLjU1NiAwLTYuMTMxIDIuNTUtNi4xMzEgNi4wOCAwIDEuNzE3LjYxMiAzLjI1IDEuNzA0IDQuMzYgMS4xMTIgMS4xMDggMi42NjcgMS43MTggNC40MDggMS43MTggMS40NDUgMCAyLjU1Ni0uMjc3IDQuNjY4LTEuODNsLTEuNDYzLTEuNTMzYy0xLjAzOC42ODQtMi4wMDEgMS4wMTYtMi45NDUgMS4wMTYtMi4xNDkgMC0zLjc2LTEuNjA3LTMuNzYtMy43MzJzMS42MTEtMy43MzIgMy43Ni0zLjczMmMxLjAxOCAwIDEuOTYzLjMzMyAyLjkwOCAxLjAxNmwxLjYyOS0xLjUzM2MtMS45MDctMS42MjYtMy42My0xLjgzLTQuNzc4LTEuODNtOS4xNDkgNi43NjJhLjIuMiAwIDAgMSAuMTQ5LS4wNTVoLjAxOGMuMDU2IDAgLjExMS4wMzcuMTY3LjA3M2w0LjA5MyA1LjA2M2gzLjE0OWwtNS4yOTctNi4zOTNjLS4wNzUtLjA5Mi0uMDc1LS4yMjIuMDE4LS4yOTVsNC44NzEtNC44NmgtMy4xM2wtNC4yMDQgNC4yMTNjLS4wNTYuMDU1LS4xNDguMDc0LS4yNDEuMDU1YS4yMy4yMyAwIDAgMS0uMTMtLjIwM1YxLjg3aC0yLjU3NHYxNi41OTFoMi41NTZ2LTQuNTA4YzAtLjA1NS4wMTgtLjEzLjA3NC0uMTY2eiIgZmlsbD0iIzAwMCIvPjxwYXRoIGQ9Ik0xMjcuNzc2IDE4LjczOWMyLjA5MyAwIDQuMjIzLTEuMjc1IDQuMjIzLTMuNjk1IDAtMS41ODktMS0yLjY4LTMuMDM3LTMuMzQ0bC0xLjM5LS40NjJjLS45NDQtLjMxNC0xLjM4OS0uNzU4LTEuMzg5LTEuMzY3IDAtLjcwMi42My0xLjE4MyAxLjUxOS0xLjE4My44NTIgMCAxLjYxMS41NTUgMi4wOTMgMS41MTVsMi4wNTYtMS4xMDhjLS43NTktMS41NTItMi4zMzQtMi41MTMtNC4xNDktMi41MTMtMi4yOTcgMC0zLjk2MyAxLjQ3OC0zLjk2MyAzLjQ5MiAwIDEuNjA3Ljk2MyAyLjY3OSAyLjk0NCAzLjMwN2wxLjQyNy40NjJjMSAuMzE0IDEuNDI2LjcyIDEuNDI2IDEuMzY3IDAgLjk4LS45MDggMS4zMy0xLjY4NiAxLjMzLTEuMDM3IDAtMS45NjMtLjY2NS0yLjQwNy0xLjc1NWwtMi4wOTMgMS4xMDljLjY4NSAxLjc1NSAyLjM3IDIuODQ1IDQuNDI2IDIuODQ1bS02OS41NDYtLjExMWMuODE1IDAgMS41MzgtLjA3NCAxLjk0NS0uMTN2LTIuMjE2YTE0IDE0IDAgMCAxLTEuMjc4LjA3M2MtMS4wMzcgMC0xLjgzMy0uMTg0LTEuODMzLTIuNDJWOS4xODdjMC0uMTMuMDkyLS4yMjIuMjIyLS4yMjJoMi41VjYuODc3aC0yLjVhLjIxNC4yMTQgMCAwIDEtLjIyMi0uMjIxVjMuMzNoLTIuNTU2djMuMzQ0YzAgLjEzLS4wOTMuMjIyLS4yMjMuMjIyaC0xLjc3OHYyLjA4OGgxLjc3OGMuMTMgMCAuMjIzLjA5Mi4yMjMuMjIxdjUuMzc3YzAgNC4wNDYgMi43MDQgNC4wNDYgMy43MjIgNC4wNDYiIGZpbGw9IiMwMDAiLz48L3N2Zz4="
                                        alt="" loading="lazy" data-ot-ignore="1"
                                        className="max-h-full h-full object-contain object-center optanon-category-C0001" />
                                    </div>
                                </figure>
                            </a>
                            <div className="pb-15 h-full w-full overflow-auto lg:h-auto lg:overflow-visible lg:pb-0">
                                <ul
                                    className="lg:w-full block lg:py-0 lg:h-auto order-2 scroll-bar-transparent overflow-y-scroll lg:overflow-visible lg:flex">
                                    <li className="lg:w-auto group transition-all lg:text-2 flex flex-wrap lg:py-0 lg:px-0 justify-between  "
                                        data-el-g2="whydatabricks-0">
                                        <div style={{ height: '60px', width: '100%' }}><button type="button"
                                            className="lg:leading-none lg:h-[64.5px] lg:z-10 lg:mx-0 border-oat-medium lg:border-b-4 lg:margin-0 p-2.5  lg:pt-3 lg:px-1.5 lg:text-2 flex items-center justify-between leading-none lg:font-normal text-2.5 flex-1 w-full z-10  lg:border-[transparent] lg:hover:border-navy-800 "
                                            id="mega-menu-whydatabricks-0" aria-expanded="false">Why
                                            Databricks{/* */} <svg viewBox="0 0 330 512" version="1.1"
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlnsXlink="http://www.w3.org/1999/xlink" width="1em"
                                                height="1em" className="ml-2 lg:hidden ">
                                                <path
                                                    d="M305.913 197.085c0 2.266-1.133 4.815-2.833 6.514L171.087 335.593c-1.7 1.7-4.249 2.832-6.515 2.832s-4.815-1.133-6.515-2.832L26.064 203.599c-1.7-1.7-2.832-4.248-2.832-6.514s1.132-4.816 2.832-6.515l14.162-14.163c1.7-1.699 3.966-2.832 6.515-2.832 2.266 0 4.815 1.133 6.515 2.832l111.316 111.317 111.316-111.317c1.7-1.699 4.249-2.832 6.515-2.832s4.815 1.133 6.515 2.832l14.162 14.163c1.7 1.7 2.833 4.249 2.833 6.515"
                                                    fill="currentColor"></path>
                                            </svg></button></div>
                                        <div className="border-[transparent] left-0 w-full bg-white lg:absolute lg:max-h-[calc(100vh-64px)] overflow-auto lg:overflow-x-hidden lg:shadow-shadow-2"
                                            style={{ top: 'auto' }}>
                                            <ul className="hidden w-full lg:w-[100vw] bg-white lg:hidden ">
                                                <li className="w-[90%] mx-auto lg:w-full lg:inner-wrapper">
                                                    <ul
                                                        className="lg:grid grid-cols-4 gap-x-4 relative grid-flow-dense">
                                                        <li className="lg:mr-2 header-mobile-accordion text-navy-100"
                                                            style={{ gridColumn: '1 / span 1', gridRow: 'span 13' }}>
                                                            <div className="w-full lg:border-b lg:border-oat-medium w-full lg:rounded-sm text-left pb-1 lg:pb-2 text-navy-800 block hover:text-navy-800 hover:no-underline"
                                                                id="why-databricks-discover-2" data-variant="B"
                                                                data-menulinktype="AccordionButton"
                                                                aria-data-label="Discover" aria-expanded="false"><span
                                                                    className="text-1.75 mt-3 flex justify-between text-left leading-none xl:mt-4 xl:block"><span
                                                                        role="heading" aria-level={2}
                                                                        className="text-orange-04-a11y w-full pr-1 font-mono uppercase">Discover</span></span>
                                                            </div>
                                                            <div className="">
                                                                <ul className="lg:pt-0.5"
                                                                    style={{ columns: '1', columnGap: '32px' }}>
                                                                    <li className="lg:mt-2 mt-1.5 "><a
                                                                        data-external-link="true"
                                                                        href="/why-databricks/executives"
                                                                        className="text-navy-800 hover:text-navy-800 hover:no-underline block lg:text-2 text-2 lg:leading-4 py-1 break-inside-avoid lg:-mx-1.5 lg:px-1.5 lg:hover:bg-oat-light rounded"
                                                                        id="discover-forexecutives-3"
                                                                        data-variant="B" aria-data-label="For Executives"
                                                                        aria-expanded="false"><span
                                                                            className="w-full">For
                                                                            Executives</span></a>
                                                                        <ul
                                                                            className="hidden lg:absolute top-0 left-full lg:border-oat-medium lg:pt-3 lg:px-2 lg:pb-2 lg:border-l min-h-[100%]">
                                                                        </ul>
                                                                    </li>
                                                                    <li className="lg:mt-2 mt-1.5 "><a
                                                                        data-external-link="true"
                                                                        href="/product/startups"
                                                                        className="text-navy-800 hover:text-navy-800 hover:no-underline block lg:text-2 text-2 lg:leading-4 py-1 break-inside-avoid lg:-mx-1.5 lg:px-1.5 lg:hover:bg-oat-light rounded"
                                                                        id="discover-forstartups-3" data-variant="B"
                                                                        aria-data-label="For Startups "
                                                                        aria-expanded="false"><span
                                                                            className="w-full">For Startups
                                                                        </span></a>
                                                                        <ul
                                                                            className="hidden lg:absolute top-0 left-full lg:border-oat-medium lg:pt-3 lg:px-2 lg:pb-2 lg:border-l min-h-[100%]">
                                                                        </ul>
                                                                    </li>
                                                                    <li className="lg:mt-2 mt-1.5 "><a
                                                                        data-external-link="true"
                                                                        href="/product/data-lakehouse"
                                                                        className="text-navy-800 hover:text-navy-800 hover:no-underline block lg:text-2 text-2 lg:leading-4 py-1 break-inside-avoid lg:-mx-1.5 lg:px-1.5 lg:hover:bg-oat-light rounded"
                                                                        id="discover-lakehousearchitecture-3"
                                                                        data-variant="B"
                                                                        aria-data-label="Lakehouse Architecture "
                                                                        aria-expanded="false"><span
                                                                            className="w-full">Lakehouse
                                                                            Architecture </span></a>
                                                                        <ul
                                                                            className="hidden lg:absolute top-0 left-full lg:border-oat-medium lg:pt-3 lg:px-2 lg:pb-2 lg:border-l min-h-[100%]">
                                                                        </ul>
                                                                    </li>
                                                                    <li
                                                                        className="lg:mt-2 mt-1.5 lg:break-after-column">
                                                                        <a data-external-link="true"
                                                                            href="/research/mosaic"
                                                                            className="text-navy-800 hover:text-navy-800 hover:no-underline block lg:text-2 text-2 lg:leading-4 py-1 break-inside-avoid lg:-mx-1.5 lg:px-1.5 lg:hover:bg-oat-light rounded"
                                                                            id="discover-mosaicresearch-3"
                                                                            data-variant="B" aria-data-label="Mosaic Research"
                                                                            aria-expanded="false"><span
                                                                                className="w-full">Mosaic
                                                                                Research</span></a>
                                                                        <ul
                                                                            className="hidden lg:absolute top-0 left-full lg:border-oat-medium lg:pt-3 lg:px-2 lg:pb-2 lg:border-l min-h-[100%]">
                                                                        </ul>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </li>
                                                        <li className="lg:mr-2 header-mobile-accordion text-navy-100"
                                                            style={{ gridColumn: '2 / span 1', gridRow: 'span 4' }}>
                                                            <div className="w-full lg:border-b lg:border-oat-medium w-full lg:rounded-sm text-left pb-1 lg:pb-2 text-navy-800 block hover:text-navy-800 hover:no-underline"
                                                                id="why-databricks-customers-2" data-variant="B"
                                                                data-menulinktype="AccordionButton"
                                                                aria-data-label="Customers" aria-expanded="false"><span
                                                                    className="text-1.75 mt-3 flex justify-between text-left leading-none xl:mt-4 xl:block"><span
                                                                        role="heading" aria-level={2}
                                                                        className="text-orange-04-a11y w-full pr-1 font-mono uppercase">Customers</span></span>
                                                            </div>
                                                            <div className="">
                                                                <ul className="lg:pt-0.5"
                                                                    style={{ columns: '1', columnGap: '32px' }}>
                                                                    <li
                                                                        className="lg:mt-2 mt-1.5 lg:break-after-column">
                                                                        <a data-external-link="true"
                                                                            href="/customers"
                                                                            className="text-navy-800 hover:text-navy-800 hover:no-underline block lg:text-2 text-2 lg:leading-4 py-1 break-inside-avoid lg:-mx-1.5 lg:px-1.5 lg:hover:bg-oat-light rounded"
                                                                            id="customers-customerstories-3"
                                                                            data-variant="B"
                                                                            aria-data-label="Customer Stories"
                                                                            aria-expanded="false"><span
                                                                                className="w-full">Customer
                                                                                Stories</span></a>
                                                                        <ul
                                                                            className="hidden lg:absolute top-0 left-full lg:border-oat-medium lg:pt-3 lg:px-2 lg:pb-2 lg:border-l min-h-[100%]">
                                                                        </ul>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </li>
                                                        <li className="lg:mr-2 header-mobile-accordion text-navy-100"
                                                            style={{ gridColumn: '3 / span 2', gridRow: 'span 15' }}>
                                                            <div className="w-full lg:border-b lg:border-oat-medium w-full lg:rounded-sm text-left pb-1 lg:pb-2 text-navy-800 block hover:text-navy-800 hover:no-underline"
                                                                id="why-databricks-partners-2" data-variant="B"
                                                                data-menulinktype="AccordionButton"
                                                                aria-data-label="Partners" aria-expanded="false"><span
                                                                    className="text-1.75 mt-3 flex justify-between text-left leading-none xl:mt-4 xl:block"><span
                                                                        role="heading" aria-level={2}
                                                                        className="text-orange-04-a11y w-full pr-1 font-mono uppercase">Partners</span></span>
                                                            </div>
                                                            <div className="">
                                                                <ul className="lg:pt-0.5"
                                                                    style={{ columns: '1', columnGap: '32px' }}>
                                                                    <li className="lg:mt-2 mt-1.5 "><a
                                                                        data-external-link="true"
                                                                        href="/company/partners/cloud-partners"
                                                                        className="text-navy-800 hover:text-navy-800 hover:no-underline block lg:text-2 text-2 lg:leading-4 py-1 break-inside-avoid lg:-mx-1.5 lg:px-1.5 lg:hover:bg-oat-light rounded"
                                                                        id="partners-cloudproviders-3"
                                                                        data-variant="B" aria-data-label="Cloud Providers"
                                                                        aria-expanded="false"><span
                                                                            className="w-full">Cloud
                                                                            Providers</span>
                                                                        <div
                                                                            className="text-gray-text text-1.5 mt-0.5 text-left leading-tight">
                                                                            Databricks on AWS, Azure, GCP, and
                                                                            SAP</div>
                                                                    </a>
                                                                        <ul
                                                                            className="hidden lg:absolute top-0 left-full lg:border-oat-medium lg:pt-3 lg:px-2 lg:pb-2 lg:border-l min-h-[100%]">
                                                                        </ul>
                                                                    </li>
                                                                    <li className="lg:mt-2 mt-1.5 "><a
                                                                        href="/company/partners/consulting-and-si"
                                                                        className="text-navy-800 hover:text-navy-800 hover:no-underline block lg:text-2 text-2 lg:leading-4 py-1 break-inside-avoid lg:-mx-1.5 lg:px-1.5 lg:hover:bg-oat-light rounded"
                                                                        id="partners-consulting&amp;systemintegrators-3"
                                                                        data-variant="B"
                                                                        aria-data-label="Consulting &amp; System Integrators"
                                                                        aria-expanded="false"><span
                                                                            className="w-full">Consulting &amp;
                                                                            System Integrators</span>
                                                                        <div
                                                                            className="text-gray-text text-1.5 mt-0.5 text-left leading-tight">
                                                                            Experts to build, deploy and migrate
                                                                            to Databricks</div>
                                                                    </a>
                                                                        <ul
                                                                            className="hidden lg:absolute top-0 left-full lg:border-oat-medium lg:pt-3 lg:px-2 lg:pb-2 lg:border-l min-h-[100%]">
                                                                        </ul>
                                                                    </li>
                                                                    <li className="lg:mt-2 mt-1.5 "><a
                                                                        href="/company/partners/technology-partner-program"
                                                                        className="text-navy-800 hover:text-navy-800 hover:no-underline block lg:text-2 text-2 lg:leading-4 py-1 break-inside-avoid lg:-mx-1.5 lg:px-1.5 lg:hover:bg-oat-light rounded"
                                                                        id="partners-technologypartners-3"
                                                                        data-variant="B"
                                                                        aria-data-label="Technology Partners"
                                                                        aria-expanded="false"><span
                                                                            className="w-full">Technology
                                                                            Partners</span>
                                                                        <div
                                                                            className="text-gray-text text-1.5 mt-0.5 text-left leading-tight">
                                                                            Connect your existing tools to your
                                                                            Lakehouse</div>
                                                                    </a>
                                                                        <ul
                                                                            className="hidden lg:absolute top-0 left-full lg:border-oat-medium lg:pt-3 lg:px-2 lg:pb-2 lg:border-l min-h-[100%]">
                                                                        </ul>
                                                                    </li>
                                                                    <li
                                                                        className="lg:mt-2 mt-1.5 lg:break-after-column">
                                                                        <a href="/company/partners/consulting-and-si/candsi-partner-program"
                                                                            className="text-navy-800 hover:text-navy-800 hover:no-underline block lg:text-2 text-2 lg:leading-4 py-1 break-inside-avoid lg:-mx-1.5 lg:px-1.5 lg:hover:bg-oat-light rounded"
                                                                            id="partners-c&amp;sipartnerprogram-3"
                                                                            data-variant="B"
                                                                            aria-data-label="C&amp;SI Partner Program"
                                                                            aria-expanded="false"><span
                                                                                className="w-full">C&amp;SI Partner
                                                                                Program</span>
                                                                            <div
                                                                                className="text-gray-text text-1.5 mt-0.5 text-left leading-tight">
                                                                                Build, deploy or migrate to the
                                                                                Lakehouse</div>
                                                                        </a>
                                                                        <ul
                                                                            className="hidden lg:absolute top-0 left-full lg:border-oat-medium lg:pt-3 lg:px-2 lg:pb-2 lg:border-l min-h-[100%]">
                                                                        </ul>
                                                                    </li>
                                                                    <li className="lg:mt-2 mt-1.5 "><a
                                                                        href="/company/partners/data-partner-program"
                                                                        className="text-navy-800 hover:text-navy-800 hover:no-underline block lg:text-2 text-2 lg:leading-4 py-1 break-inside-avoid lg:-mx-1.5 lg:px-1.5 lg:hover:bg-oat-light rounded"
                                                                        id="partners-datapartners-3" data-variant="B"
                                                                        aria-data-label="Data Partners"
                                                                        aria-expanded="false"><span
                                                                            className="w-full">Data Partners</span>
                                                                        <div
                                                                            className="text-gray-text text-1.5 mt-0.5 text-left leading-tight">
                                                                            Access the ecosystem of data
                                                                            consumers</div>
                                                                    </a>
                                                                        <ul
                                                                            className="hidden lg:absolute top-0 left-full lg:border-oat-medium lg:pt-3 lg:px-2 lg:pb-2 lg:border-l min-h-[100%]">
                                                                        </ul>
                                                                    </li>
                                                                    <li className="lg:mt-2 mt-1.5 "><a
                                                                        href="/company/partners/consulting-and-si/partner-solutions"
                                                                        className="text-navy-800 hover:text-navy-800 hover:no-underline block lg:text-2 text-2 lg:leading-4 py-1 break-inside-avoid lg:-mx-1.5 lg:px-1.5 lg:hover:bg-oat-light rounded"
                                                                        id="partners-partnersolutions-3"
                                                                        data-variant="B"
                                                                        aria-data-label="Partner Solutions"
                                                                        aria-expanded="false"><span
                                                                            className="w-full">Partner
                                                                            Solutions</span>
                                                                        <div
                                                                            className="text-gray-text text-1.5 mt-0.5 text-left leading-tight">
                                                                            Find custom industry and migration
                                                                            solutions</div>
                                                                    </a>
                                                                        <ul
                                                                            className="hidden lg:absolute top-0 left-full lg:border-oat-medium lg:pt-3 lg:px-2 lg:pb-2 lg:border-l min-h-[100%]">
                                                                        </ul>
                                                                    </li>
                                                                    <li className="lg:mt-2 mt-1.5 "><a
                                                                        href="/company/partners/built-on-partner-program"
                                                                        className="text-navy-800 hover:text-navy-800 hover:no-underline block lg:text-2 text-2 lg:leading-4 py-1 break-inside-avoid lg:-mx-1.5 lg:px-1.5 lg:hover:bg-oat-light rounded"
                                                                        id="partners-builtondatabricks-3"
                                                                        data-variant="B"
                                                                        aria-data-label="Built on Databricks"
                                                                        aria-expanded="false"><span
                                                                            className="w-full">Built on
                                                                            Databricks</span>
                                                                        <div
                                                                            className="text-gray-text text-1.5 mt-0.5 text-left leading-tight">
                                                                            Build, market and grow your business
                                                                        </div>
                                                                    </a>
                                                                        <ul
                                                                            className="hidden lg:absolute top-0 left-full lg:border-oat-medium lg:pt-3 lg:px-2 lg:pb-2 lg:border-l min-h-[100%]">
                                                                        </ul>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="lg:w-auto group transition-all lg:text-2 flex flex-wrap lg:py-0 lg:px-0 justify-between  "
                                        data-el-g2="product-0">
                                        <div style={{ height: '60px', width: '100%' }}><button type="button"
                                            className="lg:leading-none lg:h-[64.5px] lg:z-10 lg:mx-0 border-oat-medium lg:border-b-4 lg:margin-0 p-2.5  lg:pt-3 lg:px-1.5 lg:text-2 flex items-center justify-between leading-none lg:font-normal text-2.5 flex-1 w-full z-10  lg:border-[transparent] lg:hover:border-navy-800 "
                                            id="mega-menu-product-0" aria-expanded="false">Product{/* */} <svg
                                                viewBox="0 0 330 512" version="1.1"
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlnsXlink="http://www.w3.org/1999/xlink" width="1em"
                                                height="1em" className="ml-2 lg:hidden ">
                                                <path
                                                    d="M305.913 197.085c0 2.266-1.133 4.815-2.833 6.514L171.087 335.593c-1.7 1.7-4.249 2.832-6.515 2.832s-4.815-1.133-6.515-2.832L26.064 203.599c-1.7-1.7-2.832-4.248-2.832-6.514s1.132-4.816 2.832-6.515l14.162-14.163c1.7-1.699 3.966-2.832 6.515-2.832 2.266 0 4.815 1.133 6.515 2.832l111.316 111.317 111.316-111.317c1.7-1.699 4.249-2.832 6.515-2.832s4.815 1.133 6.515 2.832l14.162 14.163c1.7 1.7 2.833 4.249 2.833 6.515"
                                                    fill="currentColor"></path>
                                            </svg></button></div>
                                        <div className="border-[transparent] left-0 w-full bg-white lg:absolute lg:max-h-[calc(100vh-64px)] overflow-auto lg:overflow-x-hidden lg:shadow-shadow-2"
                                            style={{ top: 'auto' }}>
                                            <ul className="hidden w-full lg:w-[100vw] bg-white lg:hidden ">
                                                <li className="w-[90%] mx-auto lg:w-full lg:inner-wrapper">
                                                    <ul
                                                        className="lg:grid grid-cols-4 gap-x-4 relative grid-flow-dense">
                                                        <li className="lg:mr-2 header-mobile-accordion text-navy-100"
                                                            style={{ gridColumn: '1 / span 2', gridRow: 'span 23' }}>
                                                            <div className="w-full lg:border-b lg:border-oat-medium w-full lg:rounded-sm text-left pb-1 lg:pb-2 text-navy-800 block hover:text-navy-800 hover:no-underline"
                                                                id="product-databricksplatform-2" data-variant="B"
                                                                data-menulinktype="AccordionButton"
                                                                aria-data-label="Databricks Platform"
                                                                aria-expanded="false"><span
                                                                    className="text-1.75 mt-3 flex justify-between text-left leading-none xl:mt-4 xl:block"><span
                                                                        role="heading" aria-level={2}
                                                                        className="text-orange-04-a11y w-full pr-1 font-mono uppercase">Databricks
                                                                        Platform</span></span></div>
                                                            <div className="">
                                                                <ul className="lg:pt-0.5"
                                                                    style={{ columns: '1', columnGap: '32px' }}>
                                                                    <li className="lg:mt-2 mt-1.5 "><a
                                                                        data-external-link="true"
                                                                        href="/product/data-intelligence-platform"
                                                                        className="text-navy-800 hover:text-navy-800 hover:no-underline block lg:text-2 text-2 lg:leading-4 py-1 break-inside-avoid lg:-mx-1.5 lg:px-1.5 lg:hover:bg-oat-light rounded"
                                                                        id="databricks-platform-platformoverview-3"
                                                                        data-variant="B"
                                                                        aria-data-label="Platform Overview"
                                                                        aria-expanded="false"><span
                                                                            className="w-full">Platform
                                                                            Overview</span>
                                                                        <div
                                                                            className="text-gray-text text-1.5 mt-0.5 text-left leading-tight">
                                                                            A unified platform for data,
                                                                            analytics and AI</div>
                                                                    </a>
                                                                        <ul
                                                                            className="hidden lg:absolute top-0 left-full lg:border-oat-medium lg:pt-3 lg:px-2 lg:pb-2 lg:border-l min-h-[100%]">
                                                                        </ul>
                                                                    </li>
                                                                    <li className="lg:mt-2 mt-1.5 "><a
                                                                        href="/product/delta-lake-on-databricks"
                                                                        className="text-navy-800 hover:text-navy-800 hover:no-underline block lg:text-2 text-2 lg:leading-4 py-1 break-inside-avoid lg:-mx-1.5 lg:px-1.5 lg:hover:bg-oat-light rounded"
                                                                        id="databricks-platform-datamanagement-3"
                                                                        data-variant="B" aria-data-label="Data Management"
                                                                        aria-expanded="false"><span
                                                                            className="w-full">Data
                                                                            Management</span>
                                                                        <div
                                                                            className="text-gray-text text-1.5 mt-0.5 text-left leading-tight">
                                                                            Data reliability, security and
                                                                            performance</div>
                                                                    </a>
                                                                        <ul
                                                                            className="hidden lg:absolute top-0 left-full lg:border-oat-medium lg:pt-3 lg:px-2 lg:pb-2 lg:border-l min-h-[100%]">
                                                                        </ul>
                                                                    </li>
                                                                    <li className="lg:mt-2 mt-1.5 "><a
                                                                        href="/product/delta-sharing"
                                                                        className="text-navy-800 hover:text-navy-800 hover:no-underline block lg:text-2 text-2 lg:leading-4 py-1 break-inside-avoid lg:-mx-1.5 lg:px-1.5 lg:hover:bg-oat-light rounded"
                                                                        id="databricks-platform-sharing-3"
                                                                        data-variant="B" aria-data-label="Sharing"
                                                                        aria-expanded="false"><span
                                                                            className="w-full">Sharing</span>
                                                                        <div
                                                                            className="text-gray-text text-1.5 mt-0.5 text-left leading-tight">
                                                                            An open, secure, zero-copy sharing
                                                                            for all data</div>
                                                                    </a>
                                                                        <ul
                                                                            className="hidden lg:absolute top-0 left-full lg:border-oat-medium lg:pt-3 lg:px-2 lg:pb-2 lg:border-l min-h-[100%]">
                                                                        </ul>
                                                                    </li>
                                                                    <li className="lg:mt-2 mt-1.5 "><a
                                                                        href="/product/databricks-sql"
                                                                        className="text-navy-800 hover:text-navy-800 hover:no-underline block lg:text-2 text-2 lg:leading-4 py-1 break-inside-avoid lg:-mx-1.5 lg:px-1.5 lg:hover:bg-oat-light rounded"
                                                                        id="databricks-platform-datawarehousing-3"
                                                                        data-variant="B"
                                                                        aria-data-label="Data Warehousing"
                                                                        aria-expanded="false"><span
                                                                            className="w-full">Data
                                                                            Warehousing</span>
                                                                        <div
                                                                            className="text-gray-text text-1.5 mt-0.5 text-left leading-tight">
                                                                            Serverless data warehouse for SQL
                                                                            analytics</div>
                                                                    </a>
                                                                        <ul
                                                                            className="hidden lg:absolute top-0 left-full lg:border-oat-medium lg:pt-3 lg:px-2 lg:pb-2 lg:border-l min-h-[100%]">
                                                                        </ul>
                                                                    </li>
                                                                    <li className="lg:mt-2 mt-1.5 "><a
                                                                        href="/product/unity-catalog"
                                                                        className="text-navy-800 hover:text-navy-800 hover:no-underline block lg:text-2 text-2 lg:leading-4 py-1 break-inside-avoid lg:-mx-1.5 lg:px-1.5 lg:hover:bg-oat-light rounded"
                                                                        id="databricks-platform-governance-3"
                                                                        data-variant="B" aria-data-label="Governance"
                                                                        aria-expanded="false"><span
                                                                            className="w-full">Governance</span>
                                                                        <div
                                                                            className="text-gray-text text-1.5 mt-0.5 text-left leading-tight">
                                                                            Unified governance for all data,
                                                                            analytics and AI assets</div>
                                                                    </a>
                                                                        <ul
                                                                            className="hidden lg:absolute top-0 left-full lg:border-oat-medium lg:pt-3 lg:px-2 lg:pb-2 lg:border-l min-h-[100%]">
                                                                        </ul>
                                                                    </li>
                                                                    <li
                                                                        className="lg:mt-2 mt-1.5 lg:break-after-column">
                                                                        <a href="/product/data-engineering"
                                                                            className="text-navy-800 hover:text-navy-800 hover:no-underline block lg:text-2 text-2 lg:leading-4 py-1 break-inside-avoid lg:-mx-1.5 lg:px-1.5 lg:hover:bg-oat-light rounded"
                                                                            id="databricks-platform-dataengineering-3"
                                                                            data-variant="B"
                                                                            aria-data-label="Data Engineering"
                                                                            aria-expanded="false"><span
                                                                                className="w-full">Data
                                                                                Engineering</span>
                                                                            <div
                                                                                className="text-gray-text text-1.5 mt-0.5 text-left leading-tight">
                                                                                ETL and orchestration for batch and
                                                                                streaming data</div>
                                                                        </a>
                                                                        <ul
                                                                            className="hidden lg:absolute top-0 left-full lg:border-oat-medium lg:pt-3 lg:px-2 lg:pb-2 lg:border-l min-h-[100%]">
                                                                        </ul>
                                                                    </li>
                                                                    <li className="lg:mt-2 mt-1.5 "><a
                                                                        href="/product/artificial-intelligence"
                                                                        className="text-navy-800 hover:text-navy-800 hover:no-underline block lg:text-2 text-2 lg:leading-4 py-1 break-inside-avoid lg:-mx-1.5 lg:px-1.5 lg:hover:bg-oat-light rounded"
                                                                        id="databricks-platform-artificialintelligence-3"
                                                                        data-variant="B"
                                                                        aria-data-label="Artificial Intelligence"
                                                                        aria-expanded="false"><span
                                                                            className="w-full">Artificial
                                                                            Intelligence</span>
                                                                        <div
                                                                            className="text-gray-text text-1.5 mt-0.5 text-left leading-tight">
                                                                            Build and deploy ML and GenAI
                                                                            applications</div>
                                                                    </a>
                                                                        <ul
                                                                            className="hidden lg:absolute top-0 left-full lg:border-oat-medium lg:pt-3 lg:px-2 lg:pb-2 lg:border-l min-h-[100%]">
                                                                        </ul>
                                                                    </li>
                                                                    <li className="lg:mt-2 mt-1.5 "><a
                                                                        href="/product/data-science"
                                                                        className="text-navy-800 hover:text-navy-800 hover:no-underline block lg:text-2 text-2 lg:leading-4 py-1 break-inside-avoid lg:-mx-1.5 lg:px-1.5 lg:hover:bg-oat-light rounded"
                                                                        id="databricks-platform-datascience-3"
                                                                        data-variant="B" aria-data-label="Data Science"
                                                                        aria-expanded="false"><span
                                                                            className="w-full">Data Science</span>
                                                                        <div
                                                                            className="text-gray-text text-1.5 mt-0.5 text-left leading-tight">
                                                                            Collaborative data science at scale
                                                                        </div>
                                                                    </a>
                                                                        <ul
                                                                            className="hidden lg:absolute top-0 left-full lg:border-oat-medium lg:pt-3 lg:px-2 lg:pb-2 lg:border-l min-h-[100%]">
                                                                        </ul>
                                                                    </li>
                                                                    <li className="lg:mt-2 mt-1.5 "><a
                                                                        data-external-link="true"
                                                                        href="https://www.databricks.com/product/business-intelligence"
                                                                        className="text-navy-800 hover:text-navy-800 hover:no-underline block lg:text-2 text-2 lg:leading-4 py-1 break-inside-avoid lg:-mx-1.5 lg:px-1.5 lg:hover:bg-oat-light rounded"
                                                                        id="databricks-platform-businessintelligence-3"
                                                                        data-variant="B"
                                                                        aria-data-label="Business Intelligence"
                                                                        aria-expanded="false"><span
                                                                            className="w-full">Business
                                                                            Intelligence</span>
                                                                        <div
                                                                            className="text-gray-text text-1.5 mt-0.5 text-left leading-tight">
                                                                            Intelligent analytics for real-world
                                                                            data</div>
                                                                    </a>
                                                                        <ul
                                                                            className="hidden lg:absolute top-0 left-full lg:border-oat-medium lg:pt-3 lg:px-2 lg:pb-2 lg:border-l min-h-[100%]">
                                                                        </ul>
                                                                    </li>
                                                                    <li className="lg:mt-2 mt-1.5 "><a
                                                                        href="/product/databricks-apps"
                                                                        className="text-navy-800 hover:text-navy-800 hover:no-underline block lg:text-2 text-2 lg:leading-4 py-1 break-inside-avoid lg:-mx-1.5 lg:px-1.5 lg:hover:bg-oat-light rounded"
                                                                        id="databricks-platform-applicationdevelopment-3"
                                                                        data-variant="B"
                                                                        aria-data-label="Application Development"
                                                                        aria-expanded="false"><span
                                                                            className="w-full">Application
                                                                            Development</span>
                                                                        <div
                                                                            className="text-gray-text text-1.5 mt-0.5 text-left leading-tight">
                                                                            Quickly build secure data and AI
                                                                            apps</div>
                                                                    </a>
                                                                        <ul
                                                                            className="hidden lg:absolute top-0 left-full lg:border-oat-medium lg:pt-3 lg:px-2 lg:pb-2 lg:border-l min-h-[100%]">
                                                                        </ul>
                                                                    </li>
                                                                    <li className="lg:mt-2 mt-1.5 "><a
                                                                        href="/product/lakebase"
                                                                        className="text-navy-800 hover:text-navy-800 hover:no-underline block lg:text-2 text-2 lg:leading-4 py-1 break-inside-avoid lg:-mx-1.5 lg:px-1.5 lg:hover:bg-oat-light rounded"
                                                                        id="databricks-platform-database-3"
                                                                        data-variant="B" aria-data-label="Database"
                                                                        aria-expanded="false"><span
                                                                            className="w-full">Database</span>
                                                                        <div
                                                                            className="text-gray-text text-1.5 mt-0.5 text-left leading-tight">
                                                                            Postgres for data apps and AI agents
                                                                        </div>
                                                                    </a>
                                                                        <ul
                                                                            className="hidden lg:absolute top-0 left-full lg:border-oat-medium lg:pt-3 lg:px-2 lg:pb-2 lg:border-l min-h-[100%]">
                                                                        </ul>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </li>
                                                        <li className="lg:mr-2 header-mobile-accordion text-navy-100"
                                                            style={{ gridColumn: '3 / span 1', gridRow: 'span 13' }}>
                                                            <div className="w-full lg:border-b lg:border-oat-medium w-full lg:rounded-sm text-left pb-1 lg:pb-2 text-navy-800 block hover:text-navy-800 hover:no-underline"
                                                                id="product-integrationsanddata-2" data-variant="B"
                                                                data-menulinktype="AccordionButton"
                                                                aria-data-label="Integrations and Data"
                                                                aria-expanded="false"><span
                                                                    className="text-1.75 mt-3 flex justify-between text-left leading-none xl:mt-4 xl:block"><span
                                                                        role="heading" aria-level={2}
                                                                        className="text-orange-04-a11y w-full pr-1 font-mono uppercase">Integrations
                                                                        and Data</span></span></div>
                                                            <div className="">
                                                                <ul className="lg:pt-0.5"
                                                                    style={{ columns: '1', columnGap: '32px' }}>
                                                                    <li className="lg:mt-2 mt-1.5 "><a
                                                                        data-external-link="true"
                                                                        href="/product/marketplace"
                                                                        className="text-navy-800 hover:text-navy-800 hover:no-underline block lg:text-2 text-2 lg:leading-4 py-1 break-inside-avoid lg:-mx-1.5 lg:px-1.5 lg:hover:bg-oat-light rounded"
                                                                        id="integrations-and-data-marketplace-3"
                                                                        data-variant="B" aria-data-label="Marketplace"
                                                                        aria-expanded="false"><span
                                                                            className="w-full">Marketplace</span>
                                                                        <div
                                                                            className="text-gray-text text-1.5 mt-0.5 text-left leading-tight">
                                                                            Open marketplace for data, analytics
                                                                            and AI</div>
                                                                    </a>
                                                                        <ul
                                                                            className="hidden lg:absolute top-0 left-full lg:border-oat-medium lg:pt-3 lg:px-2 lg:pb-2 lg:border-l min-h-[100%]">
                                                                        </ul>
                                                                    </li>
                                                                    <li className="lg:mt-2 mt-1.5 "><a
                                                                        data-external-link="true"
                                                                        href="/product/data-science/ide-integrations"
                                                                        className="text-navy-800 hover:text-navy-800 hover:no-underline block lg:text-2 text-2 lg:leading-4 py-1 break-inside-avoid lg:-mx-1.5 lg:px-1.5 lg:hover:bg-oat-light rounded"
                                                                        id="integrations-and-data-ideintegrations-3"
                                                                        data-variant="B"
                                                                        aria-data-label="IDE Integrations"
                                                                        aria-expanded="false"><span
                                                                            className="w-full">IDE
                                                                            Integrations</span>
                                                                        <div
                                                                            className="text-gray-text text-1.5 mt-0.5 text-left leading-tight">
                                                                            Build on the Lakehouse in your
                                                                            favorite IDE</div>
                                                                    </a>
                                                                        <ul
                                                                            className="hidden lg:absolute top-0 left-full lg:border-oat-medium lg:pt-3 lg:px-2 lg:pb-2 lg:border-l min-h-[100%]">
                                                                        </ul>
                                                                    </li>
                                                                    <li
                                                                        className="lg:mt-2 mt-1.5 lg:break-after-column">
                                                                        <a data-external-link="true"
                                                                            href="/partnerconnect"
                                                                            className="text-navy-800 hover:text-navy-800 hover:no-underline block lg:text-2 text-2 lg:leading-4 py-1 break-inside-avoid lg:-mx-1.5 lg:px-1.5 lg:hover:bg-oat-light rounded"
                                                                            id="integrations-and-data-partnerconnect-3"
                                                                            data-variant="B" aria-data-label="Partner Connect"
                                                                            aria-expanded="false"><span
                                                                                className="w-full">Partner
                                                                                Connect</span>
                                                                            <div
                                                                                className="text-gray-text text-1.5 mt-0.5 text-left leading-tight">
                                                                                Discover and integrate with the
                                                                                Databricks ecosystem</div>
                                                                        </a>
                                                                        <ul
                                                                            className="hidden lg:absolute top-0 left-full lg:border-oat-medium lg:pt-3 lg:px-2 lg:pb-2 lg:border-l min-h-[100%]">
                                                                        </ul>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </li>
                                                        <li className="lg:mr-2 header-mobile-accordion text-navy-100"
                                                            style={{ gridColumn: '4 / span 1', gridRow: 'span 9' }}>
                                                            <div className="w-full lg:border-b lg:border-oat-medium w-full lg:rounded-sm text-left pb-1 lg:pb-2 text-navy-800 block hover:text-navy-800 hover:no-underline"
                                                                id="product-pricing-2" data-variant="B"
                                                                data-menulinktype="AccordionButton"
                                                                aria-data-label="Pricing" aria-expanded="false"><span
                                                                    className="text-1.75 mt-3 flex justify-between text-left leading-none xl:mt-4 xl:block"><span
                                                                        role="heading" aria-level={2}
                                                                        className="text-orange-04-a11y w-full pr-1 font-mono uppercase">Pricing</span></span>
                                                            </div>
                                                            <div className="">
                                                                <ul className="lg:pt-0.5"
                                                                    style={{ columns: '1', columnGap: '32px' }}>
                                                                    <li className="lg:mt-2 mt-1.5 "><a
                                                                        data-external-link="true"
                                                                        href="/product/pricing"
                                                                        className="text-navy-800 hover:text-navy-800 hover:no-underline block lg:text-2 text-2 lg:leading-4 py-1 break-inside-avoid lg:-mx-1.5 lg:px-1.5 lg:hover:bg-oat-light rounded"
                                                                        id="pricing-databrickspricing-3"
                                                                        data-variant="B"
                                                                        aria-data-label="Databricks Pricing"
                                                                        aria-expanded="false"><span
                                                                            className="w-full">Databricks
                                                                            Pricing</span>
                                                                        <div
                                                                            className="text-gray-text text-1.5 mt-0.5 text-left leading-tight">
                                                                            Explore product pricing, DBUs and
                                                                            more</div>
                                                                    </a>
                                                                        <ul
                                                                            className="hidden lg:absolute top-0 left-full lg:border-oat-medium lg:pt-3 lg:px-2 lg:pb-2 lg:border-l min-h-[100%]">
                                                                        </ul>
                                                                    </li>
                                                                    <li
                                                                        className="lg:mt-2 mt-1.5 lg:break-after-column">
                                                                        <a data-external-link="true"
                                                                            href="/product/pricing/product-pricing/instance-types"
                                                                            className="text-navy-800 hover:text-navy-800 hover:no-underline block lg:text-2 text-2 lg:leading-4 py-1 break-inside-avoid lg:-mx-1.5 lg:px-1.5 lg:hover:bg-oat-light rounded"
                                                                            id="pricing-costcalculator-3"
                                                                            data-variant="B" aria-data-label="Cost Calculator"
                                                                            aria-expanded="false"><span
                                                                                className="w-full">Cost
                                                                                Calculator</span>
                                                                            <div
                                                                                className="text-gray-text text-1.5 mt-0.5 text-left leading-tight">
                                                                                Estimate your compute costs on any
                                                                                cloud</div>
                                                                        </a>
                                                                        <ul
                                                                            className="hidden lg:absolute top-0 left-full lg:border-oat-medium lg:pt-3 lg:px-2 lg:pb-2 lg:border-l min-h-[100%]">
                                                                        </ul>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </li>
                                                        <li className="lg:mr-2 header-mobile-accordion text-navy-100"
                                                            style={{ gridColumn: '4 / span 1', gridRow: 'span 5' }}>
                                                            <div className="w-full lg:border-b lg:border-oat-medium w-full lg:rounded-sm text-left pb-1 lg:pb-2 text-navy-800 block hover:text-navy-800 hover:no-underline"
                                                                id="product-opensource-2" data-variant="B"
                                                                data-menulinktype="AccordionButton"
                                                                aria-data-label="Open Source" aria-expanded="false"><span
                                                                    className="text-1.75 mt-3 flex justify-between text-left leading-none xl:mt-4 xl:block"><span
                                                                        role="heading" aria-level={2}
                                                                        className="text-orange-04-a11y w-full pr-1 font-mono uppercase">Open
                                                                        Source</span></span></div>
                                                            <div className="">
                                                                <ul className="lg:pt-0.5"
                                                                    style={{ columns: '1', columnGap: '32px' }}>
                                                                    <li
                                                                        className="lg:mt-2 mt-1.5 lg:break-after-column">
                                                                        <a data-external-link="true"
                                                                            href="/product/open-source"
                                                                            className="text-navy-800 hover:text-navy-800 hover:no-underline block lg:text-2 text-2 lg:leading-4 py-1 break-inside-avoid lg:-mx-1.5 lg:px-1.5 lg:hover:bg-oat-light rounded"
                                                                            id="open-source-opensourcetechnologies-3"
                                                                            data-variant="B"
                                                                            aria-data-label="Open Source Technologies"
                                                                            aria-expanded="false"><span
                                                                                className="w-full">Open Source
                                                                                Technologies</span>
                                                                            <div
                                                                                className="text-gray-text text-1.5 mt-0.5 text-left leading-tight">
                                                                                Learn more about the innovations
                                                                                behind the platform</div>
                                                                        </a>
                                                                        <ul
                                                                            className="hidden lg:absolute top-0 left-full lg:border-oat-medium lg:pt-3 lg:px-2 lg:pb-2 lg:border-l min-h-[100%]">
                                                                        </ul>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="lg:w-auto group transition-all lg:text-2 flex flex-wrap lg:py-0 lg:px-0 justify-between  "
                                        data-el-g2="solutions-0">
                                        <div style={{ height: '60px', width: '100%' }}><button type="button"
                                            className="lg:leading-none lg:h-[64.5px] lg:z-10 lg:mx-0 border-oat-medium lg:border-b-4 lg:margin-0 p-2.5  lg:pt-3 lg:px-1.5 lg:text-2 flex items-center justify-between leading-none lg:font-normal text-2.5 flex-1 w-full z-10  lg:border-[transparent] lg:hover:border-navy-800 "
                                            id="mega-menu-solutions-0" aria-expanded="false">Solutions{/* */}
                                            <svg viewBox="0 0 330 512" version="1.1"
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlnsXlink="http://www.w3.org/1999/xlink" width="1em"
                                                height="1em" className="ml-2 lg:hidden ">
                                                <path
                                                    d="M305.913 197.085c0 2.266-1.133 4.815-2.833 6.514L171.087 335.593c-1.7 1.7-4.249 2.832-6.515 2.832s-4.815-1.133-6.515-2.832L26.064 203.599c-1.7-1.7-2.832-4.248-2.832-6.514s1.132-4.816 2.832-6.515l14.162-14.163c1.7-1.699 3.966-2.832 6.515-2.832 2.266 0 4.815 1.133 6.515 2.832l111.316 111.317 111.316-111.317c1.7-1.699 4.249-2.832 6.515-2.832s4.815 1.133 6.515 2.832l14.162 14.163c1.7 1.7 2.833 4.249 2.833 6.515"
                                                    fill="currentColor"></path>
                                            </svg></button></div>
                                        <div className="border-[transparent] left-0 w-full bg-white lg:absolute lg:max-h-[calc(100vh-64px)] overflow-auto lg:overflow-x-hidden lg:shadow-shadow-2"
                                            style={{ top: 'auto' }}>
                                            <ul className="hidden w-full lg:w-[100vw] bg-white lg:hidden ">
                                                <li className="w-[90%] mx-auto lg:w-full lg:inner-wrapper">
                                                    <ul
                                                        className="lg:grid grid-cols-4 gap-x-4 relative grid-flow-dense">
                                                        <li className="lg:mr-2 header-mobile-accordion text-navy-100"
                                                            style={{ gridColumn: '1 / span 2', gridRow: 'span 13' }}>
                                                            <div className="w-full lg:border-b lg:border-oat-medium w-full lg:rounded-sm text-left pb-1 lg:pb-2 text-navy-800 block hover:text-navy-800 hover:no-underline"
                                                                id="solutions-databricksforindustries-2" data-variant="B"
                                                                data-menulinktype="AccordionButton"
                                                                aria-data-label="Databricks for Industries"
                                                                aria-expanded="false"><span
                                                                    className="text-1.75 mt-3 flex justify-between text-left leading-none xl:mt-4 xl:block"><span
                                                                        role="heading" aria-level={2}
                                                                        className="text-orange-04-a11y w-full pr-1 font-mono uppercase">Databricks
                                                                        for Industries</span></span></div>
                                                            <div className="">
                                                                <ul className="lg:pt-0.5"
                                                                    style={{ columns: '1', columnGap: '32px' }}>
                                                                    <li className="lg:mt-2 mt-1.5 "><a
                                                                        data-external-link="true"
                                                                        href="/solutions/industries/communications"
                                                                        className="text-navy-800 hover:text-navy-800 hover:no-underline block lg:text-2 text-2 lg:leading-4 py-1 break-inside-avoid lg:-mx-1.5 lg:px-1.5 lg:hover:bg-oat-light rounded"
                                                                        id="databricks-for-industries-communications-3"
                                                                        data-variant="B" aria-data-label="Communications"
                                                                        aria-expanded="false"><span
                                                                            className="w-full">Communications</span></a>
                                                                        <ul
                                                                            className="hidden lg:absolute top-0 left-full lg:border-oat-medium lg:pt-3 lg:px-2 lg:pb-2 lg:border-l min-h-[100%]">
                                                                        </ul>
                                                                    </li>
                                                                    <li className="lg:mt-2 mt-1.5 "><a
                                                                        href="/solutions/industries/media-and-entertainment"
                                                                        className="text-navy-800 hover:text-navy-800 hover:no-underline block lg:text-2 text-2 lg:leading-4 py-1 break-inside-avoid lg:-mx-1.5 lg:px-1.5 lg:hover:bg-oat-light rounded"
                                                                        id="databricks-for-industries-mediaandentertainment-3"
                                                                        data-variant="B"
                                                                        aria-data-label="Media and Entertainment"
                                                                        aria-expanded="false"><span
                                                                            className="w-full">Media and
                                                                            Entertainment</span></a>
                                                                        <ul
                                                                            className="hidden lg:absolute top-0 left-full lg:border-oat-medium lg:pt-3 lg:px-2 lg:pb-2 lg:border-l min-h-[100%]">
                                                                        </ul>
                                                                    </li>
                                                                    <li className="lg:mt-2 mt-1.5 "><a
                                                                        href="/solutions/industries/financial-services"
                                                                        className="text-navy-800 hover:text-navy-800 hover:no-underline block lg:text-2 text-2 lg:leading-4 py-1 break-inside-avoid lg:-mx-1.5 lg:px-1.5 lg:hover:bg-oat-light rounded"
                                                                        id="databricks-for-industries-financialservices-3"
                                                                        data-variant="B"
                                                                        aria-data-label="Financial Services"
                                                                        aria-expanded="false"><span
                                                                            className="w-full">Financial
                                                                            Services</span></a>
                                                                        <ul
                                                                            className="hidden lg:absolute top-0 left-full lg:border-oat-medium lg:pt-3 lg:px-2 lg:pb-2 lg:border-l min-h-[100%]">
                                                                        </ul>
                                                                    </li>
                                                                    <li
                                                                        className="lg:mt-2 mt-1.5 lg:break-after-column">
                                                                        <a href="/solutions/industries/public-sector"
                                                                            className="text-navy-800 hover:text-navy-800 hover:no-underline block lg:text-2 text-2 lg:leading-4 py-1 break-inside-avoid lg:-mx-1.5 lg:px-1.5 lg:hover:bg-oat-light rounded"
                                                                            id="databricks-for-industries-publicsector-3"
                                                                            data-variant="B" aria-data-label="Public Sector"
                                                                            aria-expanded="false"><span
                                                                                className="w-full">Public
                                                                                Sector</span></a>
                                                                        <ul
                                                                            className="hidden lg:absolute top-0 left-full lg:border-oat-medium lg:pt-3 lg:px-2 lg:pb-2 lg:border-l min-h-[100%]">
                                                                        </ul>
                                                                    </li>
                                                                    <li className="lg:mt-2 mt-1.5 "><a
                                                                        href="/solutions/industries/healthcare-and-life-sciences"
                                                                        className="text-navy-800 hover:text-navy-800 hover:no-underline block lg:text-2 text-2 lg:leading-4 py-1 break-inside-avoid lg:-mx-1.5 lg:px-1.5 lg:hover:bg-oat-light rounded"
                                                                        id="databricks-for-industries-healthcare&amp;lifesciences-3"
                                                                        data-variant="B"
                                                                        aria-data-label="Healthcare &amp; Life Sciences"
                                                                        aria-expanded="false"><span
                                                                            className="w-full">Healthcare &amp; Life
                                                                            Sciences</span></a>
                                                                        <ul
                                                                            className="hidden lg:absolute top-0 left-full lg:border-oat-medium lg:pt-3 lg:px-2 lg:pb-2 lg:border-l min-h-[100%]">
                                                                        </ul>
                                                                    </li>
                                                                    <li className="lg:mt-2 mt-1.5 "><a
                                                                        href="/solutions/industries/retail-industry-solutions"
                                                                        className="text-navy-800 hover:text-navy-800 hover:no-underline block lg:text-2 text-2 lg:leading-4 py-1 break-inside-avoid lg:-mx-1.5 lg:px-1.5 lg:hover:bg-oat-light rounded"
                                                                        id="databricks-for-industries-retail-3"
                                                                        data-variant="B" aria-data-label="Retail"
                                                                        aria-expanded="false"><span
                                                                            className="w-full">Retail</span></a>
                                                                        <ul
                                                                            className="hidden lg:absolute top-0 left-full lg:border-oat-medium lg:pt-3 lg:px-2 lg:pb-2 lg:border-l min-h-[100%]">
                                                                        </ul>
                                                                    </li>
                                                                    <li className="lg:mt-2 mt-1.5 "><a
                                                                        href="/solutions/industries/manufacturing-industry-solutions"
                                                                        className="text-navy-800 hover:text-navy-800 hover:no-underline block lg:text-2 text-2 lg:leading-4 py-1 break-inside-avoid lg:-mx-1.5 lg:px-1.5 lg:hover:bg-oat-light rounded"
                                                                        id="databricks-for-industries-manufacturing-3"
                                                                        data-variant="B" aria-data-label="Manufacturing"
                                                                        aria-expanded="false"><span
                                                                            className="w-full">Manufacturing</span></a>
                                                                        <ul
                                                                            className="hidden lg:absolute top-0 left-full lg:border-oat-medium lg:pt-3 lg:px-2 lg:pb-2 lg:border-l min-h-[100%]">
                                                                        </ul>
                                                                    </li>
                                                                    <li className="lg:mt-2 mt-1.5 "><a
                                                                        data-external-link="true"
                                                                        href="/solutions"
                                                                        className="text-navy-800 hover:text-navy-800 hover:no-underline block lg:text-2 text-2 lg:leading-4 py-1 break-inside-avoid lg:-mx-1.5 lg:px-1.5 lg:hover:bg-oat-light rounded"
                                                                        id="databricks-for-industries-seeallindustries-3"
                                                                        data-variant="B"
                                                                        aria-data-label="See All Industries"
                                                                        aria-expanded="false"><span
                                                                            className="w-full">See All
                                                                            Industries</span></a>
                                                                        <ul
                                                                            className="hidden lg:absolute top-0 left-full lg:border-oat-medium lg:pt-3 lg:px-2 lg:pb-2 lg:border-l min-h-[100%]">
                                                                        </ul>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </li>
                                                        <li className="lg:mr-2 header-mobile-accordion text-navy-100"
                                                            style={{ gridColumn: '3 / span 1', gridRow: 'span 10' }}>
                                                            <div className="w-full lg:border-b lg:border-oat-medium w-full lg:rounded-sm text-left pb-1 lg:pb-2 text-navy-800 block hover:text-navy-800 hover:no-underline"
                                                                id="solutions-crossindustrysolutions-2" data-variant="B"
                                                                data-menulinktype="AccordionButton"
                                                                aria-data-label="Cross Industry Solutions"
                                                                aria-expanded="false"><span
                                                                    className="text-1.75 mt-3 flex justify-between text-left leading-none xl:mt-4 xl:block"><span
                                                                        role="heading" aria-level={2}
                                                                        className="text-orange-04-a11y w-full pr-1 font-mono uppercase">Cross
                                                                        Industry Solutions</span></span></div>
                                                            <div className="">
                                                                <ul className="lg:pt-0.5"
                                                                    style={{ columns: '1', columnGap: '32px' }}>
                                                                    <li className="lg:mt-2 mt-1.5 "><a
                                                                        data-external-link="true"
                                                                        href="/solutions/ai-agents"
                                                                        className="text-navy-800 hover:text-navy-800 hover:no-underline block lg:text-2 text-2 lg:leading-4 py-1 break-inside-avoid lg:-mx-1.5 lg:px-1.5 lg:hover:bg-oat-light rounded"
                                                                        id="cross-industry-solutions-aiagents-3"
                                                                        data-variant="B" aria-data-label="AI Agents"
                                                                        aria-expanded="false"><span
                                                                            className="w-full">AI Agents</span></a>
                                                                        <ul
                                                                            className="hidden lg:absolute top-0 left-full lg:border-oat-medium lg:pt-3 lg:px-2 lg:pb-2 lg:border-l min-h-[100%]">
                                                                        </ul>
                                                                    </li>
                                                                    <li className="lg:mt-2 mt-1.5 "><a
                                                                        data-external-link="true"
                                                                        href="/solutions/industries/cybersecurity"
                                                                        className="text-navy-800 hover:text-navy-800 hover:no-underline block lg:text-2 text-2 lg:leading-4 py-1 break-inside-avoid lg:-mx-1.5 lg:px-1.5 lg:hover:bg-oat-light rounded"
                                                                        id="cross-industry-solutions-cybersecurity-3"
                                                                        data-variant="B" aria-data-label="Cybersecurity"
                                                                        aria-expanded="false"><span
                                                                            className="w-full">Cybersecurity</span></a>
                                                                        <ul
                                                                            className="hidden lg:absolute top-0 left-full lg:border-oat-medium lg:pt-3 lg:px-2 lg:pb-2 lg:border-l min-h-[100%]">
                                                                        </ul>
                                                                    </li>
                                                                    <li
                                                                        className="lg:mt-2 mt-1.5 lg:break-after-column">
                                                                        <a data-external-link="true"
                                                                            href="/solutions/industries/marketing"
                                                                            className="text-navy-800 hover:text-navy-800 hover:no-underline block lg:text-2 text-2 lg:leading-4 py-1 break-inside-avoid lg:-mx-1.5 lg:px-1.5 lg:hover:bg-oat-light rounded"
                                                                            id="cross-industry-solutions-marketing-3"
                                                                            data-variant="B" aria-data-label="Marketing"
                                                                            aria-expanded="false"><span
                                                                                className="w-full">Marketing</span></a>
                                                                        <ul
                                                                            className="hidden lg:absolute top-0 left-full lg:border-oat-medium lg:pt-3 lg:px-2 lg:pb-2 lg:border-l min-h-[100%]">
                                                                        </ul>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </li>
                                                        <li className="lg:mr-2 header-mobile-accordion text-navy-100"
                                                            style={{ gridColumn: '4 / span 1', gridRow: 'span 7' }}>
                                                            <div className="w-full lg:border-b lg:border-oat-medium w-full lg:rounded-sm text-left pb-1 lg:pb-2 text-navy-800 block hover:text-navy-800 hover:no-underline"
                                                                id="solutions-migration&amp;deployment-2"
                                                                data-variant="B" data-menulinktype="AccordionButton"
                                                                aria-data-label="Migration &amp; Deployment"
                                                                aria-expanded="false"><span
                                                                    className="text-1.75 mt-3 flex justify-between text-left leading-none xl:mt-4 xl:block"><span
                                                                        role="heading" aria-level={2}
                                                                        className="text-orange-04-a11y w-full pr-1 font-mono uppercase">Migration
                                                                        &amp; Deployment</span></span></div>
                                                            <div className="">
                                                                <ul className="lg:pt-0.5"
                                                                    style={{ columns: '1', columnGap: '32px' }}>
                                                                    <li className="lg:mt-2 mt-1.5 "><a
                                                                        data-external-link="true"
                                                                        href="/solutions/migration"
                                                                        className="text-navy-800 hover:text-navy-800 hover:no-underline block lg:text-2 text-2 lg:leading-4 py-1 break-inside-avoid lg:-mx-1.5 lg:px-1.5 lg:hover:bg-oat-light rounded"
                                                                        id="migration-&amp;-deployment-datamigration-3"
                                                                        data-variant="B" aria-data-label="Data Migration"
                                                                        aria-expanded="false"><span
                                                                            className="w-full">Data
                                                                            Migration</span></a>
                                                                        <ul
                                                                            className="hidden lg:absolute top-0 left-full lg:border-oat-medium lg:pt-3 lg:px-2 lg:pb-2 lg:border-l min-h-[100%]">
                                                                        </ul>
                                                                    </li>
                                                                    <li
                                                                        className="lg:mt-2 mt-1.5 lg:break-after-column">
                                                                        <a data-external-link="true"
                                                                            href="/professional-services"
                                                                            className="text-navy-800 hover:text-navy-800 hover:no-underline block lg:text-2 text-2 lg:leading-4 py-1 break-inside-avoid lg:-mx-1.5 lg:px-1.5 lg:hover:bg-oat-light rounded"
                                                                            id="migration-&amp;-deployment-professionalservices-3"
                                                                            data-variant="B"
                                                                            aria-data-label="Professional Services"
                                                                            aria-expanded="false"><span
                                                                                className="w-full">Professional
                                                                                Services</span></a>
                                                                        <ul
                                                                            className="hidden lg:absolute top-0 left-full lg:border-oat-medium lg:pt-3 lg:px-2 lg:pb-2 lg:border-l min-h-[100%]">
                                                                        </ul>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </li>
                                                        <li className="lg:mr-2 header-mobile-accordion text-navy-100"
                                                            style={{ gridColumn: '4 / span 1', gridRow: 'span 5' }}>
                                                            <div className="w-full lg:border-b lg:border-oat-medium w-full lg:rounded-sm text-left pb-1 lg:pb-2 text-navy-800 block hover:text-navy-800 hover:no-underline"
                                                                id="solutions-solutionaccelerators-2" data-variant="B"
                                                                data-menulinktype="AccordionButton"
                                                                aria-data-label="Solution Accelerators"
                                                                aria-expanded="false"><span
                                                                    className="text-1.75 mt-3 flex justify-between text-left leading-none xl:mt-4 xl:block"><span
                                                                        role="heading" aria-level={2}
                                                                        className="text-orange-04-a11y w-full pr-1 font-mono uppercase">Solution
                                                                        Accelerators</span></span></div>
                                                            <div className="">
                                                                <ul className="lg:pt-0.5"
                                                                    style={{ columns: '1', columnGap: '32px' }}>
                                                                    <li
                                                                        className="lg:mt-2 mt-1.5 lg:break-after-column">
                                                                        <a data-external-link="true"
                                                                            href="/solutions/accelerators"
                                                                            className="text-navy-800 hover:text-navy-800 hover:no-underline block lg:text-2 text-2 lg:leading-4 py-1 break-inside-avoid lg:-mx-1.5 lg:px-1.5 lg:hover:bg-oat-light rounded"
                                                                            id="solution-accelerators-exploreaccelerators-3"
                                                                            data-variant="B"
                                                                            aria-data-label="Explore Accelerators"
                                                                            aria-expanded="false"><span
                                                                                className="w-full">Explore
                                                                                Accelerators</span>
                                                                            <div
                                                                                className="text-gray-text text-1.5 mt-0.5 text-left leading-tight">
                                                                                Move faster toward outcomes that
                                                                                matter</div>
                                                                        </a>
                                                                        <ul
                                                                            className="hidden lg:absolute top-0 left-full lg:border-oat-medium lg:pt-3 lg:px-2 lg:pb-2 lg:border-l min-h-[100%]">
                                                                        </ul>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="lg:w-auto group transition-all lg:text-2 flex flex-wrap lg:py-0 lg:px-0 justify-between  "
                                        data-el-g2="resources-0">
                                        <div style={{ height: '60px', width: '100%' }}><button type="button"
                                            className="lg:leading-none lg:h-[64.5px] lg:z-10 lg:mx-0 border-oat-medium lg:border-b-4 lg:margin-0 p-2.5  lg:pt-3 lg:px-1.5 lg:text-2 flex items-center justify-between leading-none lg:font-normal text-2.5 flex-1 w-full z-10  lg:border-[transparent] lg:hover:border-navy-800 "
                                            id="mega-menu-resources-0" aria-expanded="false">Resources{/* */}
                                            <svg viewBox="0 0 330 512" version="1.1"
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlnsXlink="http://www.w3.org/1999/xlink" width="1em"
                                                height="1em" className="ml-2 lg:hidden ">
                                                <path
                                                    d="M305.913 197.085c0 2.266-1.133 4.815-2.833 6.514L171.087 335.593c-1.7 1.7-4.249 2.832-6.515 2.832s-4.815-1.133-6.515-2.832L26.064 203.599c-1.7-1.7-2.832-4.248-2.832-6.514s1.132-4.816 2.832-6.515l14.162-14.163c1.7-1.699 3.966-2.832 6.515-2.832 2.266 0 4.815 1.133 6.515 2.832l111.316 111.317 111.316-111.317c1.7-1.699 4.249-2.832 6.515-2.832s4.815 1.133 6.515 2.832l14.162 14.163c1.7 1.7 2.833 4.249 2.833 6.515"
                                                    fill="currentColor"></path>
                                            </svg></button></div>
                                        <div className="border-[transparent] left-0 w-full bg-white lg:absolute lg:max-h-[calc(100vh-64px)] overflow-auto lg:overflow-x-hidden lg:shadow-shadow-2"
                                            style={{ top: 'auto' }}>
                                            <ul className="hidden w-full lg:w-[100vw] bg-white lg:hidden ">
                                                <li className="w-[90%] mx-auto lg:w-full lg:inner-wrapper">
                                                    <ul
                                                        className="lg:grid grid-cols-4 gap-x-4 relative grid-flow-dense">
                                                        <li className="lg:mr-2 header-mobile-accordion text-navy-100"
                                                            style={{ gridColumn: '1 / span 1', gridRow: 'span 21' }}>
                                                            <div className="w-full lg:border-b lg:border-oat-medium w-full lg:rounded-sm text-left pb-1 lg:pb-2 text-navy-800 block hover:text-navy-800 hover:no-underline"
                                                                id="resources-learning-2" data-variant="B"
                                                                data-menulinktype="AccordionButton"
                                                                aria-data-label="Learning" aria-expanded="false"><span
                                                                    className="text-1.75 mt-3 flex justify-between text-left leading-none xl:mt-4 xl:block"><span
                                                                        role="heading" aria-level={2}
                                                                        className="text-orange-04-a11y w-full pr-1 font-mono uppercase">Learning</span></span>
                                                            </div>
                                                            <div className="">
                                                                <ul className="lg:pt-0.5"
                                                                    style={{ columns: '1', columnGap: '32px' }}>
                                                                    <li className="lg:mt-2 mt-1.5 "><a
                                                                        data-external-link="true"
                                                                        href="https://www.databricks.com/learn/training/home"
                                                                        className="text-navy-800 hover:text-navy-800 hover:no-underline block lg:text-2 text-2 lg:leading-4 py-1 break-inside-avoid lg:-mx-1.5 lg:px-1.5 lg:hover:bg-oat-light rounded"
                                                                        id="learning-training-3" data-variant="B"
                                                                        aria-data-label="Training"
                                                                        aria-expanded="false"><span
                                                                            className="w-full">Training</span>
                                                                        <div
                                                                            className="text-gray-text text-1.5 mt-0.5 text-left leading-tight">
                                                                            Discover curriculum tailored to your
                                                                            needs</div>
                                                                    </a>
                                                                        <ul
                                                                            className="hidden lg:absolute top-0 left-full lg:border-oat-medium lg:pt-3 lg:px-2 lg:pb-2 lg:border-l min-h-[100%]">
                                                                        </ul>
                                                                    </li>
                                                                    <li className="lg:mt-2 mt-1.5 "><a
                                                                        data-external-link="true"
                                                                        href="https://www.databricks.com/learn/training/login"
                                                                        className="text-navy-800 hover:text-navy-800 hover:no-underline block lg:text-2 text-2 lg:leading-4 py-1 break-inside-avoid lg:-mx-1.5 lg:px-1.5 lg:hover:bg-oat-light rounded"
                                                                        id="learning-databricksacademy-3"
                                                                        data-variant="B"
                                                                        aria-data-label="Databricks Academy"
                                                                        aria-expanded="false"><span
                                                                            className="w-full">Databricks
                                                                            Academy</span>
                                                                        <div
                                                                            className="text-gray-text text-1.5 mt-0.5 text-left leading-tight">
                                                                            Sign in to the Databricks learning
                                                                            platform</div>
                                                                    </a>
                                                                        <ul
                                                                            className="hidden lg:absolute top-0 left-full lg:border-oat-medium lg:pt-3 lg:px-2 lg:pb-2 lg:border-l min-h-[100%]">
                                                                        </ul>
                                                                    </li>
                                                                    <li className="lg:mt-2 mt-1.5 "><a
                                                                        data-external-link="true"
                                                                        href="https://www.databricks.com/learn/training/certification"
                                                                        className="text-navy-800 hover:text-navy-800 hover:no-underline block lg:text-2 text-2 lg:leading-4 py-1 break-inside-avoid lg:-mx-1.5 lg:px-1.5 lg:hover:bg-oat-light rounded"
                                                                        id="learning-certification-3"
                                                                        data-variant="B" aria-data-label="Certification"
                                                                        aria-expanded="false"><span
                                                                            className="w-full">Certification</span>
                                                                        <div
                                                                            className="text-gray-text text-1.5 mt-0.5 text-left leading-tight">
                                                                            Gain recognition and differentiation
                                                                        </div>
                                                                    </a>
                                                                        <ul
                                                                            className="hidden lg:absolute top-0 left-full lg:border-oat-medium lg:pt-3 lg:px-2 lg:pb-2 lg:border-l min-h-[100%]">
                                                                        </ul>
                                                                    </li>
                                                                    <li className="lg:mt-2 mt-1.5 "><a
                                                                        data-external-link="true"
                                                                        href="/learn/free-edition"
                                                                        className="text-navy-800 hover:text-navy-800 hover:no-underline block lg:text-2 text-2 lg:leading-4 py-1 break-inside-avoid lg:-mx-1.5 lg:px-1.5 lg:hover:bg-oat-light rounded"
                                                                        id="learning-freeedition-3" data-variant="B"
                                                                        aria-data-label="Free Edition"
                                                                        aria-expanded="false"><span
                                                                            className="w-full">Free Edition</span>
                                                                        <div
                                                                            className="text-gray-text text-1.5 mt-0.5 text-left leading-tight">
                                                                            Learn professional Data and AI tools
                                                                            for free</div>
                                                                    </a>
                                                                        <ul
                                                                            className="hidden lg:absolute top-0 left-full lg:border-oat-medium lg:pt-3 lg:px-2 lg:pb-2 lg:border-l min-h-[100%]">
                                                                        </ul>
                                                                    </li>
                                                                    <li
                                                                        className="lg:mt-2 mt-1.5 lg:break-after-column">
                                                                        <a data-external-link="true"
                                                                            href="/university"
                                                                            className="text-navy-800 hover:text-navy-800 hover:no-underline block lg:text-2 text-2 lg:leading-4 py-1 break-inside-avoid lg:-mx-1.5 lg:px-1.5 lg:hover:bg-oat-light rounded"
                                                                            id="learning-universityalliance-3"
                                                                            data-variant="B"
                                                                            aria-data-label="University Alliance"
                                                                            aria-expanded="false"><span
                                                                                className="w-full">University
                                                                                Alliance</span>
                                                                            <div
                                                                                className="text-gray-text text-1.5 mt-0.5 text-left leading-tight">
                                                                                Want to teach Databricks? See how.
                                                                            </div>
                                                                        </a>
                                                                        <ul
                                                                            className="hidden lg:absolute top-0 left-full lg:border-oat-medium lg:pt-3 lg:px-2 lg:pb-2 lg:border-l min-h-[100%]">
                                                                        </ul>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </li>
                                                        <li className="lg:mr-2 header-mobile-accordion text-navy-100"
                                                            style={{ gridColumn: '2 / span 1', gridRow: 'span 13' }}>
                                                            <div className="w-full lg:border-b lg:border-oat-medium w-full lg:rounded-sm text-left pb-1 lg:pb-2 text-navy-800 block hover:text-navy-800 hover:no-underline"
                                                                id="resources-events-2" data-variant="B"
                                                                data-menulinktype="AccordionButton"
                                                                aria-data-label="Events" aria-expanded="false"><span
                                                                    className="text-1.75 mt-3 flex justify-between text-left leading-none xl:mt-4 xl:block"><span
                                                                        role="heading" aria-level={2}
                                                                        className="text-orange-04-a11y w-full pr-1 font-mono uppercase">Events</span></span>
                                                            </div>
                                                            <div className="">
                                                                <ul className="lg:pt-0.5"
                                                                    style={{ columns: '1', columnGap: '32px' }}>
                                                                    <li className="lg:mt-2 mt-1.5 "><a
                                                                        data-external-link="true"
                                                                        href="https://www.databricks.com/dataaisummit"
                                                                        className="text-navy-800 hover:text-navy-800 hover:no-underline block lg:text-2 text-2 lg:leading-4 py-1 break-inside-avoid lg:-mx-1.5 lg:px-1.5 lg:hover:bg-oat-light rounded"
                                                                        id="events-data+aisummit-3" data-variant="B"
                                                                        aria-data-label="Data + AI Summit"
                                                                        aria-expanded="false" target="_blank"
                                                                        rel="noopener noreferrer"><span
                                                                            className="w-full">Data + AI
                                                                            Summit</span></a>
                                                                        <ul
                                                                            className="hidden lg:absolute top-0 left-full lg:border-oat-medium lg:pt-3 lg:px-2 lg:pb-2 lg:border-l min-h-[100%]">
                                                                        </ul>
                                                                    </li>
                                                                    <li className="lg:mt-2 mt-1.5 "><a
                                                                        data-external-link="true"
                                                                        href="/dataaisummit/worldtour"
                                                                        className="text-navy-800 hover:text-navy-800 hover:no-underline block lg:text-2 text-2 lg:leading-4 py-1 break-inside-avoid lg:-mx-1.5 lg:px-1.5 lg:hover:bg-oat-light rounded"
                                                                        id="events-data+aiworldtour-3"
                                                                        data-variant="B"
                                                                        aria-data-label="Data + AI World Tour"
                                                                        aria-expanded="false" target="_blank"
                                                                        rel="noopener noreferrer"><span
                                                                            className="w-full">Data + AI World
                                                                            Tour</span></a>
                                                                        <ul
                                                                            className="hidden lg:absolute top-0 left-full lg:border-oat-medium lg:pt-3 lg:px-2 lg:pb-2 lg:border-l min-h-[100%]">
                                                                        </ul>
                                                                    </li>
                                                                    <li className="lg:mt-2 mt-1.5 "><a
                                                                        data-external-link="true"
                                                                        href="/lp/data-intelligence-days"
                                                                        className="text-navy-800 hover:text-navy-800 hover:no-underline block lg:text-2 text-2 lg:leading-4 py-1 break-inside-avoid lg:-mx-1.5 lg:px-1.5 lg:hover:bg-oat-light rounded"
                                                                        id="events-dataintelligencedays-3"
                                                                        data-variant="B"
                                                                        aria-data-label="Data Intelligence Days"
                                                                        aria-expanded="false"><span
                                                                            className="w-full">Data Intelligence
                                                                            Days</span></a>
                                                                        <ul
                                                                            className="hidden lg:absolute top-0 left-full lg:border-oat-medium lg:pt-3 lg:px-2 lg:pb-2 lg:border-l min-h-[100%]">
                                                                        </ul>
                                                                    </li>
                                                                    <li
                                                                        className="lg:mt-2 mt-1.5 lg:break-after-column">
                                                                        <a data-external-link="true" href="/events"
                                                                            className="text-navy-800 hover:text-navy-800 hover:no-underline block lg:text-2 text-2 lg:leading-4 py-1 break-inside-avoid lg:-mx-1.5 lg:px-1.5 lg:hover:bg-oat-light rounded"
                                                                            id="events-eventcalendar-3" data-variant="B"
                                                                            aria-data-label="Event Calendar"
                                                                            aria-expanded="false"><span
                                                                                className="w-full">Event
                                                                                Calendar</span></a>
                                                                        <ul
                                                                            className="hidden lg:absolute top-0 left-full lg:border-oat-medium lg:pt-3 lg:px-2 lg:pb-2 lg:border-l min-h-[100%]">
                                                                        </ul>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </li>
                                                        <li className="lg:mr-2 header-mobile-accordion text-navy-100"
                                                            style={{ gridColumn: '3 / span 1', gridRow: 'span 17' }}>
                                                            <div className="w-full lg:border-b lg:border-oat-medium w-full lg:rounded-sm text-left pb-1 lg:pb-2 text-navy-800 block hover:text-navy-800 hover:no-underline"
                                                                id="resources-blogandpodcasts-2" data-variant="B"
                                                                data-menulinktype="AccordionButton"
                                                                aria-data-label="Blog and Podcasts"
                                                                aria-expanded="false"><span
                                                                    className="text-1.75 mt-3 flex justify-between text-left leading-none xl:mt-4 xl:block"><span
                                                                        role="heading" aria-level={2}
                                                                        className="text-orange-04-a11y w-full pr-1 font-mono uppercase">Blog
                                                                        and Podcasts</span></span></div>
                                                            <div className="">
                                                                <ul className="lg:pt-0.5"
                                                                    style={{ columns: '1', columnGap: '32px' }}>
                                                                    <li className="lg:mt-2 mt-1.5 "><a
                                                                        data-external-link="true" href="/blog"
                                                                        className="text-navy-800 hover:text-navy-800 hover:no-underline block lg:text-2 text-2 lg:leading-4 py-1 break-inside-avoid lg:-mx-1.5 lg:px-1.5 lg:hover:bg-oat-light rounded"
                                                                        id="blog-and-podcasts-databricksblog-3"
                                                                        data-variant="B" aria-data-label="Databricks Blog"
                                                                        aria-expanded="false"><span
                                                                            className="w-full">Databricks
                                                                            Blog</span>
                                                                        <div
                                                                            className="text-gray-text text-1.5 mt-0.5 text-left leading-tight">
                                                                            Explore news, product announcements,
                                                                            and more</div>
                                                                    </a>
                                                                        <ul
                                                                            className="hidden lg:absolute top-0 left-full lg:border-oat-medium lg:pt-3 lg:px-2 lg:pb-2 lg:border-l min-h-[100%]">
                                                                        </ul>
                                                                    </li>
                                                                    <li className="lg:mt-2 mt-1.5 "><a
                                                                        data-external-link="true"
                                                                        href="/blog/category/generative-ai/mosaic-research"
                                                                        className="text-navy-800 hover:text-navy-800 hover:no-underline block lg:text-2 text-2 lg:leading-4 py-1 break-inside-avoid lg:-mx-1.5 lg:px-1.5 lg:hover:bg-oat-light rounded"
                                                                        id="blog-and-podcasts-databricksmosaicresearchblog-3"
                                                                        data-variant="B"
                                                                        aria-data-label="Databricks Mosaic Research Blog"
                                                                        aria-expanded="false"><span
                                                                            className="w-full">Databricks Mosaic
                                                                            Research Blog</span>
                                                                        <div
                                                                            className="text-gray-text text-1.5 mt-0.5 text-left leading-tight">
                                                                            Discover the latest in our Gen AI
                                                                            research</div>
                                                                    </a>
                                                                        <ul
                                                                            className="hidden lg:absolute top-0 left-full lg:border-oat-medium lg:pt-3 lg:px-2 lg:pb-2 lg:border-l min-h-[100%]">
                                                                        </ul>
                                                                    </li>
                                                                    <li className="lg:mt-2 mt-1.5 "><a
                                                                        data-external-link="true"
                                                                        href="/discover/data-brew"
                                                                        className="text-navy-800 hover:text-navy-800 hover:no-underline block lg:text-2 text-2 lg:leading-4 py-1 break-inside-avoid lg:-mx-1.5 lg:px-1.5 lg:hover:bg-oat-light rounded"
                                                                        id="blog-and-podcasts-databrewpodcast-3"
                                                                        data-variant="B"
                                                                        aria-data-label="Data Brew Podcast"
                                                                        aria-expanded="false"><span
                                                                            className="w-full">Data Brew
                                                                            Podcast</span>
                                                                        <div
                                                                            className="text-gray-text text-1.5 mt-0.5 text-left leading-tight">
                                                                            Let’s talk data!</div>
                                                                    </a>
                                                                        <ul
                                                                            className="hidden lg:absolute top-0 left-full lg:border-oat-medium lg:pt-3 lg:px-2 lg:pb-2 lg:border-l min-h-[100%]">
                                                                        </ul>
                                                                    </li>
                                                                    <li
                                                                        className="lg:mt-2 mt-1.5 lg:break-after-column">
                                                                        <a data-external-link="true"
                                                                            href="/discover/champions-of-data-and-ai"
                                                                            className="text-navy-800 hover:text-navy-800 hover:no-underline block lg:text-2 text-2 lg:leading-4 py-1 break-inside-avoid lg:-mx-1.5 lg:px-1.5 lg:hover:bg-oat-light rounded"
                                                                            id="blog-and-podcasts-championsofdata+aipodcast-3"
                                                                            data-variant="B"
                                                                            aria-data-label="Champions of Data + AI Podcast"
                                                                            aria-expanded="false"><span
                                                                                className="w-full">Champions of Data +
                                                                                AI Podcast</span>
                                                                            <div
                                                                                className="text-gray-text text-1.5 mt-0.5 text-left leading-tight">
                                                                                Insights from data leaders powering
                                                                                innovation</div>
                                                                        </a>
                                                                        <ul
                                                                            className="hidden lg:absolute top-0 left-full lg:border-oat-medium lg:pt-3 lg:px-2 lg:pb-2 lg:border-l min-h-[100%]">
                                                                        </ul>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </li>
                                                        <li className="lg:mr-2 header-mobile-accordion text-navy-100"
                                                            style={{ gridColumn: '4 / span 1', gridRow: 'span 10' }}>
                                                            <div className="w-full lg:border-b lg:border-oat-medium w-full lg:rounded-sm text-left pb-1 lg:pb-2 text-navy-800 block hover:text-navy-800 hover:no-underline"
                                                                id="resources-gethelp-2" data-variant="B"
                                                                data-menulinktype="AccordionButton"
                                                                aria-data-label="Get Help" aria-expanded="false"><span
                                                                    className="text-1.75 mt-3 flex justify-between text-left leading-none xl:mt-4 xl:block"><span
                                                                        role="heading" aria-level={2}
                                                                        className="text-orange-04-a11y w-full pr-1 font-mono uppercase">Get
                                                                        Help</span></span></div>
                                                            <div className="">
                                                                <ul className="lg:pt-0.5"
                                                                    style={{ columns: '1', columnGap: '32px' }}>
                                                                    <li className="lg:mt-2 mt-1.5 "><a
                                                                        data-external-link="true"
                                                                        href="https://www.databricks.com/support"
                                                                        className="text-navy-800 hover:text-navy-800 hover:no-underline block lg:text-2 text-2 lg:leading-4 py-1 break-inside-avoid lg:-mx-1.5 lg:px-1.5 lg:hover:bg-oat-light rounded"
                                                                        id="get-help-customersupport-3"
                                                                        data-variant="B"
                                                                        aria-data-label="Customer Support"
                                                                        aria-expanded="false"><span
                                                                            className="w-full">Customer
                                                                            Support</span></a>
                                                                        <ul
                                                                            className="hidden lg:absolute top-0 left-full lg:border-oat-medium lg:pt-3 lg:px-2 lg:pb-2 lg:border-l min-h-[100%]">
                                                                        </ul>
                                                                    </li>
                                                                    <li className="lg:mt-2 mt-1.5 "><a
                                                                        data-external-link="true"
                                                                        href="https://www.databricks.com/databricks-documentation"
                                                                        className="text-navy-800 hover:text-navy-800 hover:no-underline block lg:text-2 text-2 lg:leading-4 py-1 break-inside-avoid lg:-mx-1.5 lg:px-1.5 lg:hover:bg-oat-light rounded"
                                                                        id="get-help-documentation-3"
                                                                        data-variant="B" aria-data-label="Documentation"
                                                                        aria-expanded="false"><span
                                                                            className="w-full">Documentation</span></a>
                                                                        <ul
                                                                            className="hidden lg:absolute top-0 left-full lg:border-oat-medium lg:pt-3 lg:px-2 lg:pb-2 lg:border-l min-h-[100%]">
                                                                        </ul>
                                                                    </li>
                                                                    <li
                                                                        className="lg:mt-2 mt-1.5 lg:break-after-column">
                                                                        <a data-external-link="true"
                                                                            href="https://community.databricks.com/s/"
                                                                            className="text-navy-800 hover:text-navy-800 hover:no-underline block lg:text-2 text-2 lg:leading-4 py-1 break-inside-avoid lg:-mx-1.5 lg:px-1.5 lg:hover:bg-oat-light rounded"
                                                                            id="get-help-community-3" data-variant="B"
                                                                            aria-data-label="Community"
                                                                            aria-expanded="false" target="_blank"
                                                                            rel="noopener noreferrer"><span
                                                                                className="w-full">Community</span></a>
                                                                        <ul
                                                                            className="hidden lg:absolute top-0 left-full lg:border-oat-medium lg:pt-3 lg:px-2 lg:pb-2 lg:border-l min-h-[100%]">
                                                                        </ul>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </li>
                                                        <li className="lg:mr-2 header-mobile-accordion text-navy-100"
                                                            style={{ gridColumn: '4 / span 1', gridRow: 'span 10' }}>
                                                            <div className="w-full lg:border-b lg:border-oat-medium w-full lg:rounded-sm text-left pb-1 lg:pb-2 text-navy-800 block hover:text-navy-800 hover:no-underline"
                                                                id="resources-divedeep-2" data-variant="B"
                                                                data-menulinktype="AccordionButton"
                                                                aria-data-label="Dive Deep" aria-expanded="false"><span
                                                                    className="text-1.75 mt-3 flex justify-between text-left leading-none xl:mt-4 xl:block"><span
                                                                        role="heading" aria-level={2}
                                                                        className="text-orange-04-a11y w-full pr-1 font-mono uppercase">Dive
                                                                        Deep</span></span></div>
                                                            <div className="">
                                                                <ul className="lg:pt-0.5"
                                                                    style={{ columns: '1', columnGap: '32px' }}>
                                                                    <li className="lg:mt-2 mt-1.5 "><a
                                                                        data-external-link="true"
                                                                        href="/resources"
                                                                        className="text-navy-800 hover:text-navy-800 hover:no-underline block lg:text-2 text-2 lg:leading-4 py-1 break-inside-avoid lg:-mx-1.5 lg:px-1.5 lg:hover:bg-oat-light rounded"
                                                                        id="dive-deep-resourcecenter-3"
                                                                        data-variant="B" aria-data-label="Resource Center"
                                                                        aria-expanded="false"><span
                                                                            className="w-full">Resource
                                                                            Center</span></a>
                                                                        <ul
                                                                            className="hidden lg:absolute top-0 left-full lg:border-oat-medium lg:pt-3 lg:px-2 lg:pb-2 lg:border-l min-h-[100%]">
                                                                        </ul>
                                                                    </li>
                                                                    <li className="lg:mt-2 mt-1.5 "><a
                                                                        data-external-link="true"
                                                                        href="/resources/demos"
                                                                        className="text-navy-800 hover:text-navy-800 hover:no-underline block lg:text-2 text-2 lg:leading-4 py-1 break-inside-avoid lg:-mx-1.5 lg:px-1.5 lg:hover:bg-oat-light rounded"
                                                                        id="dive-deep-democenter-3" data-variant="B"
                                                                        aria-data-label="Demo Center"
                                                                        aria-expanded="false"><span
                                                                            className="w-full">Demo
                                                                            Center</span></a>
                                                                        <ul
                                                                            className="hidden lg:absolute top-0 left-full lg:border-oat-medium lg:pt-3 lg:px-2 lg:pb-2 lg:border-l min-h-[100%]">
                                                                        </ul>
                                                                    </li>
                                                                    <li
                                                                        className="lg:mt-2 mt-1.5 lg:break-after-column">
                                                                        <a data-external-link="true"
                                                                            href="/resources/architectures"
                                                                            className="text-navy-800 hover:text-navy-800 hover:no-underline block lg:text-2 text-2 lg:leading-4 py-1 break-inside-avoid lg:-mx-1.5 lg:px-1.5 lg:hover:bg-oat-light rounded"
                                                                            id="dive-deep-architecturecenter-3"
                                                                            data-variant="B"
                                                                            aria-data-label="Architecture Center"
                                                                            aria-expanded="false"><span
                                                                                className="w-full">Architecture
                                                                                Center</span></a>
                                                                        <ul
                                                                            className="hidden lg:absolute top-0 left-full lg:border-oat-medium lg:pt-3 lg:px-2 lg:pb-2 lg:border-l min-h-[100%]">
                                                                        </ul>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="lg:w-auto group transition-all lg:text-2 flex flex-wrap lg:py-0 lg:px-0 justify-between  "
                                        data-el-g2="about-0">
                                        <div style={{ height: '60px', width: '100%' }}><button type="button"
                                            className="lg:leading-none lg:h-[64.5px] lg:z-10 lg:mx-0 border-oat-medium lg:border-b-4 lg:margin-0 p-2.5  lg:pt-3 lg:px-1.5 lg:text-2 flex items-center justify-between leading-none lg:font-normal text-2.5 flex-1 w-full z-10  lg:border-[transparent] lg:hover:border-navy-800 "
                                            id="mega-menu-about-0" aria-expanded="false">About{/* */} <svg
                                                viewBox="0 0 330 512" version="1.1"
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlnsXlink="http://www.w3.org/1999/xlink" width="1em"
                                                height="1em" className="ml-2 lg:hidden ">
                                                <path
                                                    d="M305.913 197.085c0 2.266-1.133 4.815-2.833 6.514L171.087 335.593c-1.7 1.7-4.249 2.832-6.515 2.832s-4.815-1.133-6.515-2.832L26.064 203.599c-1.7-1.7-2.832-4.248-2.832-6.514s1.132-4.816 2.832-6.515l14.162-14.163c1.7-1.699 3.966-2.832 6.515-2.832 2.266 0 4.815 1.133 6.515 2.832l111.316 111.317 111.316-111.317c1.7-1.699 4.249-2.832 6.515-2.832s4.815 1.133 6.515 2.832l14.162 14.163c1.7 1.7 2.833 4.249 2.833 6.515"
                                                    fill="currentColor"></path>
                                            </svg></button></div>
                                        <div className="border-[transparent] left-0 w-full bg-white lg:absolute lg:max-h-[calc(100vh-64px)] overflow-auto lg:overflow-x-hidden lg:shadow-shadow-2"
                                            style={{ top: 'auto' }}>
                                            <ul className="hidden w-full lg:w-[100vw] bg-white lg:hidden ">
                                                <li className="w-[90%] mx-auto lg:w-full lg:inner-wrapper">
                                                    <ul
                                                        className="lg:grid grid-cols-4 gap-x-4 relative grid-flow-dense">
                                                        <li className="lg:mr-2 header-mobile-accordion text-navy-100"
                                                            style={{ gridColumn: '1 / span 1', gridRow: 'span 13' }}>
                                                            <div className="w-full lg:border-b lg:border-oat-medium w-full lg:rounded-sm text-left pb-1 lg:pb-2 text-navy-800 block hover:text-navy-800 hover:no-underline"
                                                                id="about-company-2" data-variant="B"
                                                                data-menulinktype="AccordionButton"
                                                                aria-data-label="Company" aria-expanded="false"><span
                                                                    className="text-1.75 mt-3 flex justify-between text-left leading-none xl:mt-4 xl:block"><span
                                                                        role="heading" aria-level={2}
                                                                        className="text-orange-04-a11y w-full pr-1 font-mono uppercase">Company</span></span>
                                                            </div>
                                                            <div className="">
                                                                <ul className="lg:pt-0.5"
                                                                    style={{ columns: '1', columnGap: '32px' }}>
                                                                    <li className="lg:mt-2 mt-1.5 "><a
                                                                        data-external-link="true"
                                                                        href="/company/about-us"
                                                                        className="text-navy-800 hover:text-navy-800 hover:no-underline block lg:text-2 text-2 lg:leading-4 py-1 break-inside-avoid lg:-mx-1.5 lg:px-1.5 lg:hover:bg-oat-light rounded"
                                                                        id="company-whoweare-3" data-variant="B"
                                                                        aria-data-label="Who We Are"
                                                                        aria-expanded="false"><span
                                                                            className="w-full">Who We Are</span></a>
                                                                        <ul
                                                                            className="hidden lg:absolute top-0 left-full lg:border-oat-medium lg:pt-3 lg:px-2 lg:pb-2 lg:border-l min-h-[100%]">
                                                                        </ul>
                                                                    </li>
                                                                    <li className="lg:mt-2 mt-1.5 "><a
                                                                        data-external-link="true"
                                                                        href="/company/leadership-team"
                                                                        className="text-navy-800 hover:text-navy-800 hover:no-underline block lg:text-2 text-2 lg:leading-4 py-1 break-inside-avoid lg:-mx-1.5 lg:px-1.5 lg:hover:bg-oat-light rounded"
                                                                        id="company-ourteam-3" data-variant="B"
                                                                        aria-data-label="Our Team"
                                                                        aria-expanded="false"><span
                                                                            className="w-full">Our Team</span></a>
                                                                        <ul
                                                                            className="hidden lg:absolute top-0 left-full lg:border-oat-medium lg:pt-3 lg:px-2 lg:pb-2 lg:border-l min-h-[100%]">
                                                                        </ul>
                                                                    </li>
                                                                    <li className="lg:mt-2 mt-1.5 "><a
                                                                        data-external-link="true"
                                                                        href="/databricks-ventures"
                                                                        className="text-navy-800 hover:text-navy-800 hover:no-underline block lg:text-2 text-2 lg:leading-4 py-1 break-inside-avoid lg:-mx-1.5 lg:px-1.5 lg:hover:bg-oat-light rounded"
                                                                        id="company-databricksventures-3"
                                                                        data-variant="B"
                                                                        aria-data-label="Databricks Ventures"
                                                                        aria-expanded="false"><span
                                                                            className="w-full">Databricks
                                                                            Ventures</span></a>
                                                                        <ul
                                                                            className="hidden lg:absolute top-0 left-full lg:border-oat-medium lg:pt-3 lg:px-2 lg:pb-2 lg:border-l min-h-[100%]">
                                                                        </ul>
                                                                    </li>
                                                                    <li
                                                                        className="lg:mt-2 mt-1.5 lg:break-after-column">
                                                                        <a data-external-link="true"
                                                                            href="/company/contact"
                                                                            className="text-navy-800 hover:text-navy-800 hover:no-underline block lg:text-2 text-2 lg:leading-4 py-1 break-inside-avoid lg:-mx-1.5 lg:px-1.5 lg:hover:bg-oat-light rounded"
                                                                            id="company-contactus-3" data-variant="B"
                                                                            aria-data-label="Contact Us"
                                                                            aria-expanded="false"><span
                                                                                className="w-full">Contact Us</span></a>
                                                                        <ul
                                                                            className="hidden lg:absolute top-0 left-full lg:border-oat-medium lg:pt-3 lg:px-2 lg:pb-2 lg:border-l min-h-[100%]">
                                                                        </ul>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </li>
                                                        <li className="lg:mr-2 header-mobile-accordion text-navy-100"
                                                            style={{ gridColumn: '2 / span 1', gridRow: 'span 7' }}>
                                                            <div className="w-full lg:border-b lg:border-oat-medium w-full lg:rounded-sm text-left pb-1 lg:pb-2 text-navy-800 block hover:text-navy-800 hover:no-underline"
                                                                id="about-careers-2" data-variant="B"
                                                                data-menulinktype="AccordionButton"
                                                                aria-data-label="Careers" aria-expanded="false"><span
                                                                    className="text-1.75 mt-3 flex justify-between text-left leading-none xl:mt-4 xl:block"><span
                                                                        role="heading" aria-level={2}
                                                                        className="text-orange-04-a11y w-full pr-1 font-mono uppercase">Careers</span></span>
                                                            </div>
                                                            <div className="">
                                                                <ul className="lg:pt-0.5"
                                                                    style={{ columns: '1', columnGap: '32px' }}>
                                                                    <li className="lg:mt-2 mt-1.5 "><a
                                                                        data-external-link="true"
                                                                        href="/company/careers"
                                                                        className="text-navy-800 hover:text-navy-800 hover:no-underline block lg:text-2 text-2 lg:leading-4 py-1 break-inside-avoid lg:-mx-1.5 lg:px-1.5 lg:hover:bg-oat-light rounded"
                                                                        id="careers-workingatdatabricks-3"
                                                                        data-variant="B"
                                                                        aria-data-label="Working at Databricks"
                                                                        aria-expanded="false"><span
                                                                            className="w-full">Working at
                                                                            Databricks</span></a>
                                                                        <ul
                                                                            className="hidden lg:absolute top-0 left-full lg:border-oat-medium lg:pt-3 lg:px-2 lg:pb-2 lg:border-l min-h-[100%]">
                                                                        </ul>
                                                                    </li>
                                                                    <li
                                                                        className="lg:mt-2 mt-1.5 lg:break-after-column">
                                                                        <a data-external-link="true"
                                                                            href="/company/careers/open-positions"
                                                                            className="text-navy-800 hover:text-navy-800 hover:no-underline block lg:text-2 text-2 lg:leading-4 py-1 break-inside-avoid lg:-mx-1.5 lg:px-1.5 lg:hover:bg-oat-light rounded"
                                                                            id="careers-openjobs-3" data-variant="B"
                                                                            aria-data-label="Open Jobs"
                                                                            aria-expanded="false"><span
                                                                                className="w-full">Open Jobs</span></a>
                                                                        <ul
                                                                            className="hidden lg:absolute top-0 left-full lg:border-oat-medium lg:pt-3 lg:px-2 lg:pb-2 lg:border-l min-h-[100%]">
                                                                        </ul>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </li>
                                                        <li className="lg:mr-2 header-mobile-accordion text-navy-100"
                                                            style={{ gridColumn: '3 / span 1', gridRow: 'span 7' }}>
                                                            <div className="w-full lg:border-b lg:border-oat-medium w-full lg:rounded-sm text-left pb-1 lg:pb-2 text-navy-800 block hover:text-navy-800 hover:no-underline"
                                                                id="about-press-2" data-variant="B"
                                                                data-menulinktype="AccordionButton"
                                                                aria-data-label="Press" aria-expanded="false"><span
                                                                    className="text-1.75 mt-3 flex justify-between text-left leading-none xl:mt-4 xl:block"><span
                                                                        role="heading" aria-level={2}
                                                                        className="text-orange-04-a11y w-full pr-1 font-mono uppercase">Press</span></span>
                                                            </div>
                                                            <div className="">
                                                                <ul className="lg:pt-0.5"
                                                                    style={{ columns: '1', columnGap: '32px' }}>
                                                                    <li className="lg:mt-2 mt-1.5 "><a
                                                                        data-external-link="true"
                                                                        href="/company/awards-and-recognition"
                                                                        className="text-navy-800 hover:text-navy-800 hover:no-underline block lg:text-2 text-2 lg:leading-4 py-1 break-inside-avoid lg:-mx-1.5 lg:px-1.5 lg:hover:bg-oat-light rounded"
                                                                        id="press-awardsandrecognition-3"
                                                                        data-variant="B"
                                                                        aria-data-label="Awards and Recognition"
                                                                        aria-expanded="false"><span
                                                                            className="w-full">Awards and
                                                                            Recognition</span></a>
                                                                        <ul
                                                                            className="hidden lg:absolute top-0 left-full lg:border-oat-medium lg:pt-3 lg:px-2 lg:pb-2 lg:border-l min-h-[100%]">
                                                                        </ul>
                                                                    </li>
                                                                    <li
                                                                        className="lg:mt-2 mt-1.5 lg:break-after-column">
                                                                        <a data-external-link="true"
                                                                            href="/company/newsroom"
                                                                            className="text-navy-800 hover:text-navy-800 hover:no-underline block lg:text-2 text-2 lg:leading-4 py-1 break-inside-avoid lg:-mx-1.5 lg:px-1.5 lg:hover:bg-oat-light rounded"
                                                                            id="press-newsroom-3" data-variant="B"
                                                                            aria-data-label="Newsroom"
                                                                            aria-expanded="false"><span
                                                                                className="w-full">Newsroom</span></a>
                                                                        <ul
                                                                            className="hidden lg:absolute top-0 left-full lg:border-oat-medium lg:pt-3 lg:px-2 lg:pb-2 lg:border-l min-h-[100%]">
                                                                        </ul>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </li>
                                                        <li className="lg:mr-2 header-mobile-accordion text-navy-100"
                                                            style={{ gridColumn: '4 / span 1', gridRow: 'span 4' }}>
                                                            <div className="w-full lg:border-b lg:border-oat-medium w-full lg:rounded-sm text-left pb-1 lg:pb-2 text-navy-800 block hover:text-navy-800 hover:no-underline"
                                                                id="about-securityandtrust-2" data-variant="B"
                                                                data-menulinktype="AccordionButton"
                                                                aria-data-label="Security and Trust"
                                                                aria-expanded="false"><span
                                                                    className="text-1.75 mt-3 flex justify-between text-left leading-none xl:mt-4 xl:block"><span
                                                                        role="heading" aria-level={2}
                                                                        className="text-orange-04-a11y w-full pr-1 font-mono uppercase">Security
                                                                        and Trust</span></span></div>
                                                            <div className="">
                                                                <ul className="lg:pt-0.5"
                                                                    style={{ columns: '1', columnGap: '32px' }}>
                                                                    <li
                                                                        className="lg:mt-2 mt-1.5 lg:break-after-column">
                                                                        <a data-external-link="true" href="/trust"
                                                                            className="text-navy-800 hover:text-navy-800 hover:no-underline block lg:text-2 text-2 lg:leading-4 py-1 break-inside-avoid lg:-mx-1.5 lg:px-1.5 lg:hover:bg-oat-light rounded"
                                                                            id="security-and-trust-securityandtrust-3"
                                                                            data-variant="B"
                                                                            aria-data-label="Security and Trust"
                                                                            aria-expanded="false"><span
                                                                                className="w-full">Security and
                                                                                Trust</span></a>
                                                                        <ul
                                                                            className="hidden lg:absolute top-0 left-full lg:border-oat-medium lg:pt-3 lg:px-2 lg:pb-2 lg:border-l min-h-[100%]">
                                                                        </ul>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                                <div className="lg:shadow-shadow-2 lg:mx-0 mx-2 lg:border-t lg:border-oat-medium lg:bg-navy-800 block lg:left-0 lg:pb-0 lg:w-full lg:hidden "
                                    style={{ top: '-300px' }}>
                                    <div
                                        className="lg:inner-wrapper border-oat-medium mt-3 border-t py-2 lg:mt-0 lg:border-t-0">
                                        <ul className="flex lg:mt-0 lg:flex" id="megamenu-footer">
                                            <li
                                                className="lg:w-auto group transition-all lg:text-2 flex flex-wrap lg:py-0 lg:px-0 justify-between  ml-2 first:ml-0 lg:ml-0 lg:first:ml-0">
                                                <div id="footer-readytogetstarted?-0"
                                                    className="hover:no-underline lg:pr-3 lg:h-full items-center first:lg:ml-1 leading-none text-2 flex-1 text-navy-800 false"
                                                    aria-expanded="false">Ready to get started?</div>
                                            </li>
                                            <li
                                                className="lg:w-auto group transition-all lg:text-2 flex flex-wrap lg:py-0 lg:px-0 justify-between  ml-2 first:ml-0 lg:ml-0 lg:first:ml-0">
                                                <a href="/resources/demos" id="footer-getademo-0"
                                                    className="hover:no-underline lg:pr-3 lg:h-full items-center first:lg:ml-1 leading-none text-2 flex-1 arrow-icon-tertiary overflow-hidden text-blue-cta hover:text-blue-cta false"
                                                    aria-expanded="false">Get a Demo</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <ul className="md:w-full lg:bg-white sticky bottom-0 lg:w-auto grid grid-cols-2 pb-[64px] lg:pb-0 bg-oat-light border-t border-orange-600 lg:border-none px-2 pt-2 lg:pt-0 lg:px-0 left-0 md:right-0 lg:left-0 lg:static w-full bg-white lg:w-auto order-4 lg:shrink-0 z-10 lg:flex"
                                id="megamenu-ctas">
                                <li
                                    className="lg:w-auto group transition-all lg:text-2 flex flex-wrap lg:py-0 lg:px-0 justify-between first:hidden lg:first:block ">
                                    <a data-external-link="true"
                                        href="https://login.databricks.com/?dbx_source=www&amp;itm=main-cta-login&amp;l=en-EN"
                                        id="main-cta-login-0"
                                        className="w-full bg-white flex justify-center hover:no-underline lg:pl-2 lg:h-full text-navy-800 py-0 lg:text-1.75 lg:leading-none hover:text-orange-600 flex items-center leading-12 text-1.75 flex-1"
                                        aria-expanded="false" target="_blank" rel="noopener noreferrer">Login</a>
                                </li>
                                <li
                                    className="lg:w-auto group transition-all lg:text-2 flex flex-wrap lg:py-0 lg:px-0 justify-between first:hidden lg:first:block ">
                                    <a data-external-link="true" href="/company/contact" id="main-cta-contactus-0"
                                        className="w-full bg-white flex justify-center hover:no-underline lg:pl-2 lg:h-full text-navy-800 py-0 lg:text-1.75 lg:leading-none hover:text-orange-600 flex items-center leading-12 text-1.75 flex-1"
                                        aria-expanded="false">Contact Us</a>
                                </li>
                                <li
                                    className="lg:w-auto group transition-all lg:text-2 flex flex-wrap lg:py-0 lg:px-0 justify-between  ">
                                    <a data-cy="Button"
                                        href="https://www.databricks.com/signup?dbx_source=www&amp;itm_data=dbx-web-nav&amp;l=en-EN"
                                        className="b4 inline-block px-3 py-1 transition duration-200 ease-in-out hover:no-underline btn-primary ml-2 lg:ml-3 header-cta hover:bg-navy-800 md:text-1.75 lg:text-2 flex justify-center items-center w-full btn-primary-accessible testId-primary"
                                        aria-data-label="Try Databricks in Main Navigation" id="main-cta-trydatabricks-0"
                                        aria-expanded="false">Try Databricks</a>
                                </li>
                            </ul>
                            <div className="order-3 hidden lg:flex">
                                <div className="relative flex flex-col items-center mr-1.5" style={{ zIndex: 'auto' }}><button
                                    className="p-[2px] text-navy-600 unsticky-link-hover active:text-orange-600"
                                    type="button" aria-expanded="false"
                                    aria-data-label="Switch language. Current Language - English"><svg width="20"
                                        height="20" viewBox="0 0 20 20" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="10" cy="10" r="7.5" stroke="currentColor"></circle>
                                        <path
                                            d="M13.5 10C13.5 12.1483 13.0635 14.0686 12.3812 15.4332C11.6839 16.8278 10.8132 17.5 10 17.5C9.18684 17.5 8.31607 16.8278 7.61879 15.4332C6.93646 14.0686 6.5 12.1483 6.5 10C6.5 7.85165 6.93646 5.93141 7.61879 4.56675C8.31607 3.17219 9.18684 2.5 10 2.5C10.8132 2.5 11.6839 3.17219 12.3812 4.56675C13.0635 5.93141 13.5 7.85165 13.5 10Z"
                                            stroke="currentColor"></path>
                                        <path d="M17 10H3" stroke="currentColor"></path>
                                        <path d="M16.5 6H3.5" stroke="currentColor"></path>
                                        <path d="M16.5 14H3.5" stroke="currentColor"></path>
                                    </svg></button></div>
                                <div role="button" className="flex items-center p-[2px]" aria-data-label="Site search"
                                    tabIndex={0}><svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="text-navy-600 hover:text-orange-600">
                                        <circle cx="9" cy="9" r="6.5" stroke="currentColor"></circle>
                                        <path d="M18 18L13.5 13.5" stroke="currentColor"></path>
                                    </svg></div>
                            </div>
                        </div>
                    </nav>
                    <div className="hidden lg:hidden bg-navy-800 fixed bottom-0 left-0 top-0 z-50 w-full bg-opacity-10">
                    </div>
                </div>
            </div>
            <ScriptInteraction />
        </>
    );
}

function ScriptInteraction() {
    useEffect(() => {
        const handleToggle = (e: any) => {
            const btn = e.target.closest('[aria-expanded]');
            if (!btn) return;

            // Ensure it's part of navigation to avoid conflicts
            if (!document.querySelector('nav')?.contains(btn)) return;

            // Prevent default navigation for buttons/links acting as toggles
            if (btn.tagName === 'A' || btn.tagName === 'BUTTON') {
                e.preventDefault();
            }

            const isExpanded = btn.getAttribute('aria-expanded') === 'true';
            btn.setAttribute('aria-expanded', String(!isExpanded));

            // Attempt to find the target menu container
            // Pattern 1: Sibling (e.g. mobile accordion div, or sub-menu ul)
            let target = btn.nextElementSibling;

            // Pattern 2: Parent Sibling (e.g. wrapper div -> content div)
            // If next sibling is null or looks like an icon (SVG/SPAN), check parent
            if (!target || target.tagName === 'SVG' || target.tagName === 'SPAN') {
                target = btn.parentElement?.nextElementSibling;
            }

            if (target) {
                target.classList.toggle('hidden');
            }
        };

        document.addEventListener('click', handleToggle);
        return () => document.removeEventListener('click', handleToggle);
    }, []);
    return null;
}
