'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <>
                    <div className="min-h-[385px]">
                        <footer data-cy="Footer" data-el-g1="footer" className="footer-2023 bg-navy-800 text-white">
                            <div className="inner-wrapper py-13">
                                <div className="mb-8 flex flex-col justify-between lg:flex-row-reverse lg:gap-4">
                                    <div className="main-image max-w-[126px] lg:hidden">
                                        <div data-cy="Wrapper" className="outer-wrapper ">
                                            <div className="inner-wrapper">
                                                <div data-cy="Grid" className="grid grid-cols-12 gap-0 "><a
                                                        data-external-link="true" href="https://www.databricks.com/"
                                                        aria-data-label="databricks logo"
                                                        className="cursor-pointer testId-variant-a"
                                                        style={{gridColumn: '1 / span 12'}}>
                                                        <figure>
                                                            <div className="h-full ">
                                                                <div data-gatsby-image-wrapper=""
                                                                    className="gatsby-image-wrapper optanon-category-C0001">
                                                                    <div aria-hidden="true"
                                                                        style={{paddingTop: '15.748031496062993%'}}></div>
                                                                    <div aria-hidden="true" data-placeholder-image=""
                                                                        style={{opacity: '0', transition: 'opacity 500ms linear', backgroundColor: 'transparent', position: 'absolute', inset: '0px'}}>
                                                                    </div><img className="" data-ot-ignore="1"
                                                                        data-main-image="" style={{opacity: '1'}}
                                                                        sizes="100vw" decoding="async" loading="lazy"
                                                                        alt="databricks logo"
                                                                        src="https://www.databricks.com/sites/default/files/2023-08/databricks-default.png?v=1712162038" /><noscript><img
                                                                            data-gatsby-image-ssr="" className=""
                                                                            data-ot-ignore="1" data-main-image=""
                                                                            style={{opacity: '0'}} sizes="100vw"
                                                                            decoding="async" loading="lazy"
                                                                            src="https://www.databricks.com/sites/default/files/2023-08/databricks-default.png?v=1712162038"
                                                                            alt="databricks logo" /></noscript>
                                                                    <script type="module" data-ot-ignore="1"
                                                                        className="optanon-category-C0001" dangerouslySetInnerHTML={{ __html: `const t = "undefined" != typeof HTMLImageElement && "loading" in HTMLImageElement.prototype; if (t) { const t = document.querySelectorAll("img[data-main-image]"); for (let e of t) { e.dataset.src && (e.setAttribute("src", e.dataset.src), e.removeAttribute("data-src")), e.dataset.srcset && (e.setAttribute("srcset", e.dataset.srcset), e.removeAttribute("data-srcset")); const t = e.parentNode.querySelectorAll("source[data-srcset]"); for (let e of t) e.setAttribute("srcset", e.dataset.srcset), e.removeAttribute("data-srcset"); e.complete && (e.style.opacity = 1, e.parentNode.parentNode.querySelector("[data-placeholder-image]").style.opacity = 0) } }` }} />
                                                                </div>
                                                            </div>
                                                        </figure>
                                                    </a></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="my-4 flex flex-col gap-4 lg:my-0 lg:w-full lg:flex-row">
                                        <div className="basis-full first:ml-0">
                                            <div className="hidden lg:block">
                                                <div
                                                    className="first:text-2 text-1.75 pb-2 text-white first:pb-3 first:font-medium first:text-orange-500 hover:text-white first:hover:text-orange-500 lg:pb-2">
                                                    <span aria-data-label="Why Databricks page link in footer" role="heading"
                                                        aria-level={2}
                                                        className="inline-block pl-0 text-inherit hover:text-inherit">Why
                                                        Databricks</span>
                                                </div>
                                                <div
                                                    className="first:text-2 text-1.75 pb-2 text-white first:pb-3 first:font-medium first:text-orange-500 hover:text-white first:hover:text-orange-500 lg:pb-2 flex flex-col gap-1">
                                                    <span aria-data-label="Discover page link in footer" role="heading"
                                                        aria-level={3}
                                                        className="inline-block pl-0 text-inherit hover:text-inherit">Discover</span>
                                                    <ul className="text-navy-400 flex flex-col gap-1">
                                                        <li><a data-external-link="true"
                                                                href="/why-databricks/executives"
                                                                aria-data-label="For Executives page link in footer"
                                                                className="tertiary-underline text-inherit hover:text-inherit">For
                                                                Executives</a></li>
                                                        <li><a data-external-link="true" href="/product/startups"
                                                                aria-data-label="For Startups page link in footer"
                                                                className="tertiary-underline text-inherit hover:text-inherit">For
                                                                Startups</a></li>
                                                        <li><a data-external-link="true" href="/product/data-lakehouse"
                                                                aria-data-label="Lakehouse Architecture page link in footer"
                                                                className="tertiary-underline text-inherit hover:text-inherit">Lakehouse
                                                                Architecture</a></li>
                                                        <li><a data-external-link="true" href="/research/mosaic"
                                                                aria-data-label="Mosaic Research page link in footer"
                                                                className="tertiary-underline text-inherit hover:text-inherit">Mosaic
                                                                Research</a></li>
                                                    </ul>
                                                </div>
                                                <div
                                                    className="first:text-2 text-1.75 pb-2 text-white first:pb-3 first:font-medium first:text-orange-500 hover:text-white first:hover:text-orange-500 lg:pb-2 flex flex-col gap-1">
                                                    <span aria-data-label="Customers page link in footer" role="heading"
                                                        aria-level={3}
                                                        className="inline-block pl-0 text-inherit hover:text-inherit">Customers</span>
                                                    <ul className="text-navy-400 flex flex-col gap-1">
                                                        <li><a data-external-link="true"
                                                                href="https://www.databricks.com/customers"
                                                                aria-data-label="Customer Stories page link in footer"
                                                                className="tertiary-underline text-inherit hover:text-inherit">Customer
                                                                Stories</a></li>
                                                    </ul>
                                                </div>
                                                <div
                                                    className="first:text-2 text-1.75 pb-2 text-white first:pb-3 first:font-medium first:text-orange-500 hover:text-white first:hover:text-orange-500 lg:pb-2 flex flex-col gap-1">
                                                    <span aria-data-label="Partners page link in footer" role="heading"
                                                        aria-level={3}
                                                        className="inline-block pl-0 text-inherit hover:text-inherit">Partners</span>
                                                    <ul className="text-navy-400 flex flex-col gap-1">
                                                        <li><a data-external-link="true"
                                                                href="/company/partners/cloud-partners"
                                                                aria-data-label="Cloud Providers page link in footer"
                                                                className="tertiary-underline text-inherit hover:text-inherit">Cloud
                                                                Providers</a></li>
                                                        <li><a data-external-link="true"
                                                                href="/company/partners/technology-partner-program"
                                                                aria-data-label="Technology Partners page link in footer"
                                                                className="tertiary-underline text-inherit hover:text-inherit">Technology
                                                                Partners</a></li>
                                                        <li><a data-external-link="true"
                                                                href="/company/partners/data-partner-program"
                                                                aria-data-label="Data Partners page link in footer"
                                                                className="tertiary-underline text-inherit hover:text-inherit">Data
                                                                Partners</a></li>
                                                        <li><a data-external-link="true"
                                                                href="/company/partners/built-on-partner-program"
                                                                aria-data-label="Built on Databricks page link in footer"
                                                                className="tertiary-underline text-inherit hover:text-inherit">Built
                                                                on Databricks</a></li>
                                                        <li><a data-external-link="true"
                                                                href="/company/partners/consulting-and-si"
                                                                aria-data-label="Consulting &amp; System Integrators page link in footer"
                                                                className="tertiary-underline text-inherit hover:text-inherit">Consulting
                                                                &amp; System Integrators</a></li>
                                                        <li><a data-external-link="true"
                                                                href="/company/partners/consulting-and-si/candsi-partner-program"
                                                                aria-data-label="C&amp;SI Partner Program page link in footer"
                                                                className="tertiary-underline text-inherit hover:text-inherit">C&amp;SI
                                                                Partner Program</a></li>
                                                        <li><a data-external-link="true"
                                                                href="/company/partners/consulting-and-si/partner-solutions"
                                                                aria-data-label="Partner Solutions page link in footer"
                                                                className="tertiary-underline text-inherit hover:text-inherit">Partner
                                                                Solutions</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="block lg:hidden">
                                                <div
                                                    className="first:text-2 text-1.75 flex flex-col items-start gap-1 text-white first:font-medium first:text-orange-500 hover:text-white first:hover:text-orange-500">
                                                    <div className="flex items-center"><button data-label="Why Databricks"
                                                            className="">Why Databricks</button><button
                                                            aria-data-label="Why Databricks" type="button"
                                                            className="text-3 font-bold transition-all duration-200"><svg
                                                                viewBox="0 0 330 512" version="1.1"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                xmlnsXlink="http://www.w3.org/1999/xlink" width="1em"
                                                                height="1em" aria-hidden="true" className="">
                                                                <path
                                                                    d="M305.913 197.085c0 2.266-1.133 4.815-2.833 6.514L171.087 335.593c-1.7 1.7-4.249 2.832-6.515 2.832s-4.815-1.133-6.515-2.832L26.064 203.599c-1.7-1.7-2.832-4.248-2.832-6.514s1.132-4.816 2.832-6.515l14.162-14.163c1.7-1.699 3.966-2.832 6.515-2.832 2.266 0 4.815 1.133 6.515 2.832l111.316 111.317 111.316-111.317c1.7-1.699 4.249-2.832 6.515-2.832s4.815 1.133 6.515 2.832l14.162 14.163c1.7 1.7 2.833 4.249 2.833 6.515"
                                                                    fill="currentColor"></path>
                                                            </svg></button></div>
                                                </div>
                                                <div
                                                    className="first:text-2 text-1.75 flex flex-col items-start gap-1 text-white first:font-medium first:text-orange-500 hover:text-white first:hover:text-orange-500">
                                                    <div className="flex items-center"><span data-label="Discover"
                                                            className="pl-0 text-inherit hover:text-inherit hidden">Discover</span>
                                                    </div>
                                                    <ul className="text-navy-400 flex flex-col gap-1 hidden">
                                                        <li><a data-external-link="true"
                                                                href="/why-databricks/executives" data-label="For Executives"
                                                                className="inline-block text-inherit hover:text-inherit">For
                                                                Executives</a></li>
                                                        <li><a data-external-link="true" href="/product/startups"
                                                                data-label="For Startups"
                                                                className="inline-block text-inherit hover:text-inherit">For
                                                                Startups</a></li>
                                                        <li><a data-external-link="true" href="/product/data-lakehouse"
                                                                data-label="Lakehouse Architecture"
                                                                className="inline-block text-inherit hover:text-inherit">Lakehouse
                                                                Architecture</a></li>
                                                        <li><a data-external-link="true" href="/research/mosaic"
                                                                data-label="Mosaic Research"
                                                                className="inline-block text-inherit hover:text-inherit">Mosaic
                                                                Research</a></li>
                                                    </ul>
                                                </div>
                                                <div
                                                    className="first:text-2 text-1.75 flex flex-col items-start gap-1 text-white first:font-medium first:text-orange-500 hover:text-white first:hover:text-orange-500">
                                                    <div className="flex items-center"><span data-label="Customers"
                                                            className="pl-0 text-inherit hover:text-inherit hidden">Customers</span>
                                                    </div>
                                                    <ul className="text-navy-400 flex flex-col gap-1 hidden">
                                                        <li><a data-external-link="true"
                                                                href="https://www.databricks.com/customers"
                                                                data-label="Customer Stories"
                                                                className="inline-block text-inherit hover:text-inherit">Customer
                                                                Stories</a></li>
                                                    </ul>
                                                </div>
                                                <div
                                                    className="first:text-2 text-1.75 flex flex-col items-start gap-1 text-white first:font-medium first:text-orange-500 hover:text-white first:hover:text-orange-500">
                                                    <div className="flex items-center"><span data-label="Partners"
                                                            className="pl-0 text-inherit hover:text-inherit hidden">Partners</span>
                                                    </div>
                                                    <ul className="text-navy-400 flex flex-col gap-1 hidden">
                                                        <li><a data-external-link="true"
                                                                href="/company/partners/cloud-partners"
                                                                data-label="Cloud Providers"
                                                                className="inline-block text-inherit hover:text-inherit">Cloud
                                                                Providers</a></li>
                                                        <li><a data-external-link="true"
                                                                href="/company/partners/technology-partner-program"
                                                                data-label="Technology Partners"
                                                                className="inline-block text-inherit hover:text-inherit">Technology
                                                                Partners</a></li>
                                                        <li><a data-external-link="true"
                                                                href="/company/partners/data-partner-program"
                                                                data-label="Data Partners"
                                                                className="inline-block text-inherit hover:text-inherit">Data
                                                                Partners</a></li>
                                                        <li><a data-external-link="true"
                                                                href="/company/partners/built-on-partner-program"
                                                                data-label="Built on Databricks"
                                                                className="inline-block text-inherit hover:text-inherit">Built
                                                                on Databricks</a></li>
                                                        <li><a data-external-link="true"
                                                                href="/company/partners/consulting-and-si"
                                                                data-label="Consulting &amp; System Integrators"
                                                                className="inline-block text-inherit hover:text-inherit">Consulting
                                                                &amp; System Integrators</a></li>
                                                        <li><a data-external-link="true"
                                                                href="/company/partners/consulting-and-si/candsi-partner-program"
                                                                data-label="C&amp;SI Partner Program"
                                                                className="inline-block text-inherit hover:text-inherit">C&amp;SI
                                                                Partner Program</a></li>
                                                        <li><a data-external-link="true"
                                                                href="/company/partners/consulting-and-si/partner-solutions"
                                                                data-label="Partner Solutions"
                                                                className="inline-block text-inherit hover:text-inherit">Partner
                                                                Solutions</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="basis-full first:ml-0">
                                            <div className="hidden lg:block">
                                                <div
                                                    className="first:text-2 text-1.75 pb-2 text-white first:pb-3 first:font-medium first:text-orange-500 hover:text-white first:hover:text-orange-500 lg:pb-2">
                                                    <span aria-data-label="Product page link in footer" role="heading"
                                                        aria-level={2}
                                                        className="inline-block pl-0 text-inherit hover:text-inherit">Product</span>
                                                </div>
                                                <div
                                                    className="first:text-2 text-1.75 pb-2 text-white first:pb-3 first:font-medium first:text-orange-500 hover:text-white first:hover:text-orange-500 lg:pb-2 flex flex-col gap-1">
                                                    <span aria-data-label="Databricks Platform page link in footer"
                                                        role="heading" aria-level={3}
                                                        className="inline-block pl-0 text-inherit hover:text-inherit">Databricks
                                                        Platform</span>
                                                    <ul className="text-navy-400 flex flex-col gap-1">
                                                        <li><a data-external-link="true"
                                                                href="/product/data-intelligence-platform"
                                                                aria-data-label="Platform Overview page link in footer"
                                                                className="tertiary-underline text-inherit hover:text-inherit">Platform
                                                                Overview</a></li>
                                                        <li><a data-external-link="true" href="/product/delta-sharing"
                                                                aria-data-label="Sharing page link in footer"
                                                                className="tertiary-underline text-inherit hover:text-inherit">Sharing</a>
                                                        </li>
                                                        <li><a data-external-link="true" href="/product/unity-catalog"
                                                                aria-data-label="Governance page link in footer"
                                                                className="tertiary-underline text-inherit hover:text-inherit">Governance</a>
                                                        </li>
                                                        <li><a data-external-link="true"
                                                                href="/product/artificial-intelligence"
                                                                aria-data-label="Artificial Intelligence page link in footer"
                                                                className="tertiary-underline text-inherit hover:text-inherit">Artificial
                                                                Intelligence</a></li>
                                                        <li><a data-external-link="true"
                                                                href="/product/business-intelligence"
                                                                aria-data-label="Business Intelligence page link in footer"
                                                                className="tertiary-underline text-inherit hover:text-inherit">Business
                                                                Intelligence</a></li>
                                                        <li><a data-external-link="true" href="/product/lakebase"
                                                                aria-data-label="Database page link in footer"
                                                                className="tertiary-underline text-inherit hover:text-inherit">Database</a>
                                                        </li>
                                                        <li><a data-external-link="true"
                                                                href="/product/delta-lake-on-databricks"
                                                                aria-data-label="Data Management page link in footer"
                                                                className="tertiary-underline text-inherit hover:text-inherit">Data
                                                                Management</a></li>
                                                        <li><a data-external-link="true" href="/product/databricks-sql"
                                                                aria-data-label="Data Warehousing page link in footer"
                                                                className="tertiary-underline text-inherit hover:text-inherit">Data
                                                                Warehousing</a></li>
                                                        <li><a data-external-link="true"
                                                                href="/product/data-engineering"
                                                                aria-data-label="Data Engineering page link in footer"
                                                                className="tertiary-underline text-inherit hover:text-inherit">Data
                                                                Engineering</a></li>
                                                        <li><a data-external-link="true" href="/product/data-science"
                                                                aria-data-label="Data Science page link in footer"
                                                                className="tertiary-underline text-inherit hover:text-inherit">Data
                                                                Science</a></li>
                                                        <li><a data-external-link="true" href="/product/databricks-apps"
                                                                aria-data-label="Application Development page link in footer"
                                                                className="tertiary-underline text-inherit hover:text-inherit">Application
                                                                Development</a></li>
                                                    </ul>
                                                </div>
                                                <div
                                                    className="first:text-2 text-1.75 pb-2 text-white first:pb-3 first:font-medium first:text-orange-500 hover:text-white first:hover:text-orange-500 lg:pb-2 flex flex-col gap-1">
                                                    <span aria-data-label="Pricing page link in footer" role="heading"
                                                        aria-level={3}
                                                        className="inline-block pl-0 text-inherit hover:text-inherit">Pricing</span>
                                                    <ul className="text-navy-400 flex flex-col gap-1">
                                                        <li><a data-external-link="true" href="/product/pricing"
                                                                aria-data-label="Pricing Overview page link in footer"
                                                                className="tertiary-underline text-inherit hover:text-inherit">Pricing
                                                                Overview</a></li>
                                                        <li><a data-external-link="true"
                                                                href="/product/pricing/product-pricing/instance-types"
                                                                aria-data-label="Pricing Calculator page link in footer"
                                                                className="tertiary-underline text-inherit hover:text-inherit">Pricing
                                                                Calculator</a></li>
                                                    </ul>
                                                </div>
                                                <div
                                                    className="first:text-2 text-1.75 pb-2 text-white first:pb-3 first:font-medium first:text-orange-500 hover:text-white first:hover:text-orange-500 lg:pb-2">
                                                    <a data-external-link="true" href="/product/open-source"
                                                        aria-data-label="Open Source page link in footer"
                                                        className="inline-block pl-0 text-inherit hover:text-inherit tertiary-underline">Open
                                                        Source</a>
                                                </div>
                                                <div
                                                    className="first:text-2 text-1.75 pb-2 text-white first:pb-3 first:font-medium first:text-orange-500 hover:text-white first:hover:text-orange-500 lg:pb-2 flex flex-col gap-1">
                                                    <span aria-data-label="Integrations and Data page link in footer"
                                                        role="heading" aria-level={3}
                                                        className="inline-block pl-0 text-inherit hover:text-inherit">Integrations
                                                        and Data</span>
                                                    <ul className="text-navy-400 flex flex-col gap-1">
                                                        <li><a data-external-link="true" href="/product/marketplace"
                                                                aria-data-label="Marketplace page link in footer"
                                                                className="tertiary-underline text-inherit hover:text-inherit">Marketplace</a>
                                                        </li>
                                                        <li><a data-external-link="true"
                                                                href="/product/data-science/ide-integrations"
                                                                aria-data-label="IDE Integrations page link in footer"
                                                                className="tertiary-underline text-inherit hover:text-inherit">IDE
                                                                Integrations</a></li>
                                                        <li><a data-external-link="true" href="/partnerconnect"
                                                                aria-data-label="Partner Connect page link in footer"
                                                                className="tertiary-underline text-inherit hover:text-inherit">Partner
                                                                Connect</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="block lg:hidden">
                                                <div
                                                    className="first:text-2 text-1.75 flex flex-col items-start gap-1 text-white first:font-medium first:text-orange-500 hover:text-white first:hover:text-orange-500">
                                                    <div className="flex items-center"><button data-label="Product"
                                                            className="">Product</button><button aria-data-label="Product"
                                                            type="button"
                                                            className="text-3 font-bold transition-all duration-200"><svg
                                                                viewBox="0 0 330 512" version="1.1"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                xmlnsXlink="http://www.w3.org/1999/xlink" width="1em"
                                                                height="1em" aria-hidden="true" className="">
                                                                <path
                                                                    d="M305.913 197.085c0 2.266-1.133 4.815-2.833 6.514L171.087 335.593c-1.7 1.7-4.249 2.832-6.515 2.832s-4.815-1.133-6.515-2.832L26.064 203.599c-1.7-1.7-2.832-4.248-2.832-6.514s1.132-4.816 2.832-6.515l14.162-14.163c1.7-1.699 3.966-2.832 6.515-2.832 2.266 0 4.815 1.133 6.515 2.832l111.316 111.317 111.316-111.317c1.7-1.699 4.249-2.832 6.515-2.832s4.815 1.133 6.515 2.832l14.162 14.163c1.7 1.7 2.833 4.249 2.833 6.515"
                                                                    fill="currentColor"></path>
                                                            </svg></button></div>
                                                </div>
                                                <div
                                                    className="first:text-2 text-1.75 flex flex-col items-start gap-1 text-white first:font-medium first:text-orange-500 hover:text-white first:hover:text-orange-500">
                                                    <div className="flex items-center"><span data-label="Databricks Platform"
                                                            className="pl-0 text-inherit hover:text-inherit hidden">Databricks
                                                            Platform</span></div>
                                                    <ul className="text-navy-400 flex flex-col gap-1 hidden">
                                                        <li><a data-external-link="true"
                                                                href="/product/data-intelligence-platform"
                                                                data-label="Platform Overview"
                                                                className="inline-block text-inherit hover:text-inherit">Platform
                                                                Overview</a></li>
                                                        <li><a data-external-link="true" href="/product/delta-sharing"
                                                                data-label="Sharing"
                                                                className="inline-block text-inherit hover:text-inherit">Sharing</a>
                                                        </li>
                                                        <li><a data-external-link="true" href="/product/unity-catalog"
                                                                data-label="Governance"
                                                                className="inline-block text-inherit hover:text-inherit">Governance</a>
                                                        </li>
                                                        <li><a data-external-link="true"
                                                                href="/product/artificial-intelligence"
                                                                data-label="Artificial Intelligence"
                                                                className="inline-block text-inherit hover:text-inherit">Artificial
                                                                Intelligence</a></li>
                                                        <li><a data-external-link="true"
                                                                href="/product/business-intelligence"
                                                                data-label="Business Intelligence"
                                                                className="inline-block text-inherit hover:text-inherit">Business
                                                                Intelligence</a></li>
                                                        <li><a data-external-link="true" href="/product/lakebase"
                                                                data-label="Database"
                                                                className="inline-block text-inherit hover:text-inherit">Database</a>
                                                        </li>
                                                        <li><a data-external-link="true"
                                                                href="/product/delta-lake-on-databricks"
                                                                data-label="Data Management"
                                                                className="inline-block text-inherit hover:text-inherit">Data
                                                                Management</a></li>
                                                        <li><a data-external-link="true" href="/product/databricks-sql"
                                                                data-label="Data Warehousing"
                                                                className="inline-block text-inherit hover:text-inherit">Data
                                                                Warehousing</a></li>
                                                        <li><a data-external-link="true"
                                                                href="/product/data-engineering"
                                                                data-label="Data Engineering"
                                                                className="inline-block text-inherit hover:text-inherit">Data
                                                                Engineering</a></li>
                                                        <li><a data-external-link="true" href="/product/data-science"
                                                                data-label="Data Science"
                                                                className="inline-block text-inherit hover:text-inherit">Data
                                                                Science</a></li>
                                                        <li><a data-external-link="true" href="/product/databricks-apps"
                                                                data-label="Application Development"
                                                                className="inline-block text-inherit hover:text-inherit">Application
                                                                Development</a></li>
                                                    </ul>
                                                </div>
                                                <div
                                                    className="first:text-2 text-1.75 flex flex-col items-start gap-1 text-white first:font-medium first:text-orange-500 hover:text-white first:hover:text-orange-500">
                                                    <div className="flex items-center"><span data-label="Pricing"
                                                            className="pl-0 text-inherit hover:text-inherit hidden">Pricing</span>
                                                    </div>
                                                    <ul className="text-navy-400 flex flex-col gap-1 hidden">
                                                        <li><a data-external-link="true" href="/product/pricing"
                                                                data-label="Pricing Overview"
                                                                className="inline-block text-inherit hover:text-inherit">Pricing
                                                                Overview</a></li>
                                                        <li><a data-external-link="true"
                                                                href="/product/pricing/product-pricing/instance-types"
                                                                data-label="Pricing Calculator"
                                                                className="inline-block text-inherit hover:text-inherit">Pricing
                                                                Calculator</a></li>
                                                    </ul>
                                                </div>
                                                <div
                                                    className="first:text-2 text-1.75 flex flex-col items-start gap-1 text-white first:font-medium first:text-orange-500 hover:text-white first:hover:text-orange-500">
                                                    <div className="flex items-center"><button data-label="Open Source"
                                                            data-to="/product/open-source" className="hidden">Open
                                                            Source</button></div>
                                                </div>
                                                <div
                                                    className="first:text-2 text-1.75 flex flex-col items-start gap-1 text-white first:font-medium first:text-orange-500 hover:text-white first:hover:text-orange-500">
                                                    <div className="flex items-center"><span data-label="Integrations and Data"
                                                            className="pl-0 text-inherit hover:text-inherit hidden">Integrations
                                                            and Data</span></div>
                                                    <ul className="text-navy-400 flex flex-col gap-1 hidden">
                                                        <li><a data-external-link="true" href="/product/marketplace"
                                                                data-label="Marketplace"
                                                                className="inline-block text-inherit hover:text-inherit">Marketplace</a>
                                                        </li>
                                                        <li><a data-external-link="true"
                                                                href="/product/data-science/ide-integrations"
                                                                data-label="IDE Integrations"
                                                                className="inline-block text-inherit hover:text-inherit">IDE
                                                                Integrations</a></li>
                                                        <li><a data-external-link="true" href="/partnerconnect"
                                                                data-label="Partner Connect"
                                                                className="inline-block text-inherit hover:text-inherit">Partner
                                                                Connect</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="basis-full first:ml-0">
                                            <div className="hidden lg:block">
                                                <div
                                                    className="first:text-2 text-1.75 pb-2 text-white first:pb-3 first:font-medium first:text-orange-500 hover:text-white first:hover:text-orange-500 lg:pb-2">
                                                    <span aria-data-label="Solutions page link in footer" role="heading"
                                                        aria-level={2}
                                                        className="inline-block pl-0 text-inherit hover:text-inherit">Solutions</span>
                                                </div>
                                                <div
                                                    className="first:text-2 text-1.75 pb-2 text-white first:pb-3 first:font-medium first:text-orange-500 hover:text-white first:hover:text-orange-500 lg:pb-2 flex flex-col gap-1">
                                                    <span aria-data-label="Databricks For Industries page link in footer"
                                                        role="heading" aria-level={3}
                                                        className="inline-block pl-0 text-inherit hover:text-inherit">Databricks
                                                        For Industries</span>
                                                    <ul className="text-navy-400 flex flex-col gap-1">
                                                        <li><a data-external-link="true"
                                                                href="/solutions/industries/communications-old"
                                                                aria-data-label="Communications page link in footer"
                                                                className="tertiary-underline text-inherit hover:text-inherit">Communications</a>
                                                        </li>
                                                        <li><a data-external-link="true"
                                                                href="/solutions/industries/financial-services"
                                                                aria-data-label="Financial Services page link in footer"
                                                                className="tertiary-underline text-inherit hover:text-inherit">Financial
                                                                Services</a></li>
                                                        <li><a data-external-link="true"
                                                                href="/solutions/industries/healthcare-and-life-sciences"
                                                                aria-data-label="Healthcare and Life Sciences page link in footer"
                                                                className="tertiary-underline text-inherit hover:text-inherit">Healthcare
                                                                and Life Sciences</a></li>
                                                        <li><a data-external-link="true"
                                                                href="/solutions/industries/manufacturing-industry-solutions"
                                                                aria-data-label="Manufacturing page link in footer"
                                                                className="tertiary-underline text-inherit hover:text-inherit">Manufacturing</a>
                                                        </li>
                                                        <li><a data-external-link="true"
                                                                href="/solutions/industries/media-and-entertainment-old"
                                                                aria-data-label="Media and Entertainment page link in footer"
                                                                className="tertiary-underline text-inherit hover:text-inherit">Media
                                                                and Entertainment</a></li>
                                                        <li><a data-external-link="true"
                                                                href="/solutions/industries/federal-government"
                                                                aria-data-label="Public Sector page link in footer"
                                                                className="tertiary-underline text-inherit hover:text-inherit">Public
                                                                Sector</a></li>
                                                        <li><a data-external-link="true"
                                                                href="/solutions/industries/retail-industry-solutions-old"
                                                                aria-data-label="Retail page link in footer"
                                                                className="tertiary-underline text-inherit hover:text-inherit">Retail</a>
                                                        </li>
                                                        <li><a data-external-link="true" href="/solutions"
                                                                aria-data-label="View All page link in footer"
                                                                className="tertiary-underline text-inherit hover:text-inherit">View
                                                                All</a></li>
                                                    </ul>
                                                </div>
                                                <div
                                                    className="first:text-2 text-1.75 pb-2 text-white first:pb-3 first:font-medium first:text-orange-500 hover:text-white first:hover:text-orange-500 lg:pb-2 flex flex-col gap-1">
                                                    <span aria-data-label="Cross Industry Solutions page link in footer"
                                                        role="heading" aria-level={3}
                                                        className="inline-block pl-0 text-inherit hover:text-inherit">Cross
                                                        Industry Solutions</span>
                                                    <ul className="text-navy-400 flex flex-col gap-1">
                                                        <li><a data-external-link="true"
                                                                href="/solutions/industries/cybersecurity"
                                                                aria-data-label="Cybersecurity page link in footer"
                                                                className="tertiary-underline text-inherit hover:text-inherit">Cybersecurity</a>
                                                        </li>
                                                        <li><a data-external-link="true"
                                                                href="/solutions/industries/marketing"
                                                                aria-data-label="Marketing page link in footer"
                                                                className="tertiary-underline text-inherit hover:text-inherit">Marketing</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div
                                                    className="first:text-2 text-1.75 pb-2 text-white first:pb-3 first:font-medium first:text-orange-500 hover:text-white first:hover:text-orange-500 lg:pb-2">
                                                    <a data-external-link="true" href="/solutions/migration"
                                                        aria-data-label="Data Migration page link in footer"
                                                        className="inline-block pl-0 text-inherit hover:text-inherit tertiary-underline">Data
                                                        Migration</a>
                                                </div>
                                                <div
                                                    className="first:text-2 text-1.75 pb-2 text-white first:pb-3 first:font-medium first:text-orange-500 hover:text-white first:hover:text-orange-500 lg:pb-2">
                                                    <a data-external-link="true" href="/professional-services"
                                                        aria-data-label="Professional Services page link in footer"
                                                        className="inline-block pl-0 text-inherit hover:text-inherit tertiary-underline">Professional
                                                        Services</a>
                                                </div>
                                                <div
                                                    className="first:text-2 text-1.75 pb-2 text-white first:pb-3 first:font-medium first:text-orange-500 hover:text-white first:hover:text-orange-500 lg:pb-2">
                                                    <a data-external-link="true" href="/solutions/accelerators"
                                                        aria-data-label="Solution Accelerators page link in footer"
                                                        className="inline-block pl-0 text-inherit hover:text-inherit tertiary-underline">Solution
                                                        Accelerators</a>
                                                </div>
                                            </div>
                                            <div className="block lg:hidden">
                                                <div
                                                    className="first:text-2 text-1.75 flex flex-col items-start gap-1 text-white first:font-medium first:text-orange-500 hover:text-white first:hover:text-orange-500">
                                                    <div className="flex items-center"><button data-label="Solutions"
                                                            className="">Solutions</button><button aria-data-label="Solutions"
                                                            type="button"
                                                            className="text-3 font-bold transition-all duration-200"><svg
                                                                viewBox="0 0 330 512" version="1.1"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                xmlnsXlink="http://www.w3.org/1999/xlink" width="1em"
                                                                height="1em" aria-hidden="true" className="">
                                                                <path
                                                                    d="M305.913 197.085c0 2.266-1.133 4.815-2.833 6.514L171.087 335.593c-1.7 1.7-4.249 2.832-6.515 2.832s-4.815-1.133-6.515-2.832L26.064 203.599c-1.7-1.7-2.832-4.248-2.832-6.514s1.132-4.816 2.832-6.515l14.162-14.163c1.7-1.699 3.966-2.832 6.515-2.832 2.266 0 4.815 1.133 6.515 2.832l111.316 111.317 111.316-111.317c1.7-1.699 4.249-2.832 6.515-2.832s4.815 1.133 6.515 2.832l14.162 14.163c1.7 1.7 2.833 4.249 2.833 6.515"
                                                                    fill="currentColor"></path>
                                                            </svg></button></div>
                                                </div>
                                                <div
                                                    className="first:text-2 text-1.75 flex flex-col items-start gap-1 text-white first:font-medium first:text-orange-500 hover:text-white first:hover:text-orange-500">
                                                    <div className="flex items-center"><span
                                                            data-label="Databricks For Industries"
                                                            className="pl-0 text-inherit hover:text-inherit hidden">Databricks
                                                            For Industries</span></div>
                                                    <ul className="text-navy-400 flex flex-col gap-1 hidden">
                                                        <li><a data-external-link="true"
                                                                href="/solutions/industries/communications-old"
                                                                data-label="Communications"
                                                                className="inline-block text-inherit hover:text-inherit">Communications</a>
                                                        </li>
                                                        <li><a data-external-link="true"
                                                                href="/solutions/industries/financial-services"
                                                                data-label="Financial Services"
                                                                className="inline-block text-inherit hover:text-inherit">Financial
                                                                Services</a></li>
                                                        <li><a data-external-link="true"
                                                                href="/solutions/industries/healthcare-and-life-sciences"
                                                                data-label="Healthcare and Life Sciences"
                                                                className="inline-block text-inherit hover:text-inherit">Healthcare
                                                                and Life Sciences</a></li>
                                                        <li><a data-external-link="true"
                                                                href="/solutions/industries/manufacturing-industry-solutions"
                                                                data-label="Manufacturing"
                                                                className="inline-block text-inherit hover:text-inherit">Manufacturing</a>
                                                        </li>
                                                        <li><a data-external-link="true"
                                                                href="/solutions/industries/media-and-entertainment-old"
                                                                data-label="Media and Entertainment"
                                                                className="inline-block text-inherit hover:text-inherit">Media
                                                                and Entertainment</a></li>
                                                        <li><a data-external-link="true"
                                                                href="/solutions/industries/federal-government"
                                                                data-label="Public Sector"
                                                                className="inline-block text-inherit hover:text-inherit">Public
                                                                Sector</a></li>
                                                        <li><a data-external-link="true"
                                                                href="/solutions/industries/retail-industry-solutions-old"
                                                                data-label="Retail"
                                                                className="inline-block text-inherit hover:text-inherit">Retail</a>
                                                        </li>
                                                        <li><a data-external-link="true" href="/solutions"
                                                                data-label="View All"
                                                                className="inline-block text-inherit hover:text-inherit">View
                                                                All</a></li>
                                                    </ul>
                                                </div>
                                                <div
                                                    className="first:text-2 text-1.75 flex flex-col items-start gap-1 text-white first:font-medium first:text-orange-500 hover:text-white first:hover:text-orange-500">
                                                    <div className="flex items-center"><span
                                                            data-label="Cross Industry Solutions"
                                                            className="pl-0 text-inherit hover:text-inherit hidden">Cross
                                                            Industry Solutions</span></div>
                                                    <ul className="text-navy-400 flex flex-col gap-1 hidden">
                                                        <li><a data-external-link="true"
                                                                href="/solutions/industries/cybersecurity"
                                                                data-label="Cybersecurity"
                                                                className="inline-block text-inherit hover:text-inherit">Cybersecurity</a>
                                                        </li>
                                                        <li><a data-external-link="true"
                                                                href="/solutions/industries/marketing" data-label="Marketing"
                                                                className="inline-block text-inherit hover:text-inherit">Marketing</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div
                                                    className="first:text-2 text-1.75 flex flex-col items-start gap-1 text-white first:font-medium first:text-orange-500 hover:text-white first:hover:text-orange-500">
                                                    <div className="flex items-center"><button data-label="Data Migration"
                                                            data-to="/solutions/migration" className="hidden">Data
                                                            Migration</button></div>
                                                </div>
                                                <div
                                                    className="first:text-2 text-1.75 flex flex-col items-start gap-1 text-white first:font-medium first:text-orange-500 hover:text-white first:hover:text-orange-500">
                                                    <div className="flex items-center"><button data-label="Professional Services"
                                                            data-to="/professional-services" className="hidden">Professional
                                                            Services</button></div>
                                                </div>
                                                <div
                                                    className="first:text-2 text-1.75 flex flex-col items-start gap-1 text-white first:font-medium first:text-orange-500 hover:text-white first:hover:text-orange-500">
                                                    <div className="flex items-center"><button data-label="Solution Accelerators"
                                                            data-to="/solutions/accelerators" className="hidden">Solution
                                                            Accelerators</button></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="basis-full first:ml-0">
                                            <div className="hidden lg:block">
                                                <div
                                                    className="first:text-2 text-1.75 pb-2 text-white first:pb-3 first:font-medium first:text-orange-500 hover:text-white first:hover:text-orange-500 lg:pb-2">
                                                    <span aria-data-label="Resources page link in footer" role="heading"
                                                        aria-level={2}
                                                        className="inline-block pl-0 text-inherit hover:text-inherit">Resources</span>
                                                </div>
                                                <div
                                                    className="first:text-2 text-1.75 pb-2 text-white first:pb-3 first:font-medium first:text-orange-500 hover:text-white first:hover:text-orange-500 lg:pb-2">
                                                    <a data-external-link="true"
                                                        href="https://www.databricks.com/databricks-documentation"
                                                        aria-data-label="Documentation page link in footer"
                                                        className="inline-block pl-0 text-inherit hover:text-inherit tertiary-underline">Documentation</a>
                                                </div>
                                                <div
                                                    className="first:text-2 text-1.75 pb-2 text-white first:pb-3 first:font-medium first:text-orange-500 hover:text-white first:hover:text-orange-500 lg:pb-2">
                                                    <a data-external-link="true"
                                                        href="https://www.databricks.com/support"
                                                        aria-data-label="Customer Support page link in footer"
                                                        className="inline-block pl-0 text-inherit hover:text-inherit tertiary-underline">Customer
                                                        Support</a>
                                                </div>
                                                <div
                                                    className="first:text-2 text-1.75 pb-2 text-white first:pb-3 first:font-medium first:text-orange-500 hover:text-white first:hover:text-orange-500 lg:pb-2">
                                                    <a data-external-link="true"
                                                        href="https://community.databricks.com/"
                                                        aria-data-label="Community page link in footer"
                                                        className="inline-block pl-0 text-inherit hover:text-inherit tertiary-underline"
                                                        target="_blank" rel="noopener noreferrer">Community</a>
                                                </div>
                                                <div
                                                    className="first:text-2 text-1.75 pb-2 text-white first:pb-3 first:font-medium first:text-orange-500 hover:text-white first:hover:text-orange-500 lg:pb-2 flex flex-col gap-1">
                                                    <span aria-data-label="Learning page link in footer" role="heading"
                                                        aria-level={3}
                                                        className="inline-block pl-0 text-inherit hover:text-inherit">Learning</span>
                                                    <ul className="text-navy-400 flex flex-col gap-1">
                                                        <li><a data-external-link="true" href="/learn/training/home"
                                                                aria-data-label="Training page link in footer"
                                                                className="tertiary-underline text-inherit hover:text-inherit">Training</a>
                                                        </li>
                                                        <li><a data-external-link="true"
                                                                href="https://www.databricks.com/learn/training/certification"
                                                                aria-data-label="Certification page link in footer"
                                                                className="tertiary-underline text-inherit hover:text-inherit">Certification</a>
                                                        </li>
                                                        <li><a data-external-link="true" href="/learn/free-edition"
                                                                aria-data-label="Free Edition page link in footer"
                                                                className="tertiary-underline text-inherit hover:text-inherit">Free
                                                                Edition</a></li>
                                                        <li><a data-external-link="true" href="/university"
                                                                aria-data-label="University Alliance page link in footer"
                                                                className="tertiary-underline text-inherit hover:text-inherit">University
                                                                Alliance</a></li>
                                                        <li><a data-external-link="true"
                                                                href="https://www.databricks.com/learn/training/login"
                                                                aria-data-label="Databricks Academy Login page link in footer"
                                                                className="tertiary-underline text-inherit hover:text-inherit">Databricks
                                                                Academy Login</a></li>
                                                    </ul>
                                                </div>
                                                <div
                                                    className="first:text-2 text-1.75 pb-2 text-white first:pb-3 first:font-medium first:text-orange-500 hover:text-white first:hover:text-orange-500 lg:pb-2 flex flex-col gap-1">
                                                    <span aria-data-label="Events page link in footer" role="heading"
                                                        aria-level={3}
                                                        className="inline-block pl-0 text-inherit hover:text-inherit">Events</span>
                                                    <ul className="text-navy-400 flex flex-col gap-1">
                                                        <li><a data-external-link="true" href="/dataaisummit"
                                                                aria-data-label="Data + AI Summit page link in footer"
                                                                className="tertiary-underline text-inherit hover:text-inherit"
                                                                target="_blank" rel="noopener noreferrer">Data + AI
                                                                Summit</a></li>
                                                        <li><a data-external-link="true" href="/dataaisummit/worldtour"
                                                                aria-data-label="Data + AI World Tour page link in footer"
                                                                className="tertiary-underline text-inherit hover:text-inherit"
                                                                target="_blank" rel="noopener noreferrer">Data + AI
                                                                World Tour</a></li>
                                                        <li><a data-external-link="true"
                                                                href="/lp/data-intelligence-days"
                                                                aria-data-label="Data Intelligence Days page link in footer"
                                                                className="tertiary-underline text-inherit hover:text-inherit">Data
                                                                Intelligence Days</a></li>
                                                        <li><a data-external-link="true" href="/events"
                                                                aria-data-label="Event Calendar page link in footer"
                                                                className="tertiary-underline text-inherit hover:text-inherit">Event
                                                                Calendar</a></li>
                                                    </ul>
                                                </div>
                                                <div
                                                    className="first:text-2 text-1.75 pb-2 text-white first:pb-3 first:font-medium first:text-orange-500 hover:text-white first:hover:text-orange-500 lg:pb-2 flex flex-col gap-1">
                                                    <span aria-data-label="Blog and Podcasts page link in footer"
                                                        role="heading" aria-level={3}
                                                        className="inline-block pl-0 text-inherit hover:text-inherit">Blog
                                                        and Podcasts</span>
                                                    <ul className="text-navy-400 flex flex-col gap-1">
                                                        <li><a data-external-link="true" href="/blog"
                                                                aria-data-label="Databricks Blog page link in footer"
                                                                className="tertiary-underline text-inherit hover:text-inherit">Databricks
                                                                Blog</a></li>
                                                        <li><a data-external-link="true"
                                                                href="https://www.databricks.com/blog/category/generative-ai/mosaic-research"
                                                                aria-data-label="Databricks Mosaic Research Blog page link in footer"
                                                                className="tertiary-underline text-inherit hover:text-inherit">Databricks
                                                                Mosaic Research Blog</a></li>
                                                        <li><a data-external-link="true" href="/discover/data-brew"
                                                                aria-data-label="Data Brew Podcast page link in footer"
                                                                className="tertiary-underline text-inherit hover:text-inherit">Data
                                                                Brew Podcast</a></li>
                                                        <li><a data-external-link="true"
                                                                href="/discover/champions-of-data-and-ai"
                                                                aria-data-label="Champions of Data &amp; AI Podcast page link in footer"
                                                                className="tertiary-underline text-inherit hover:text-inherit">Champions
                                                                of Data &amp; AI Podcast</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="block lg:hidden">
                                                <div
                                                    className="first:text-2 text-1.75 flex flex-col items-start gap-1 text-white first:font-medium first:text-orange-500 hover:text-white first:hover:text-orange-500">
                                                    <div className="flex items-center"><button data-label="Resources"
                                                            className="">Resources</button><button aria-data-label="Resources"
                                                            type="button"
                                                            className="text-3 font-bold transition-all duration-200"><svg
                                                                viewBox="0 0 330 512" version="1.1"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                xmlnsXlink="http://www.w3.org/1999/xlink" width="1em"
                                                                height="1em" aria-hidden="true" className="">
                                                                <path
                                                                    d="M305.913 197.085c0 2.266-1.133 4.815-2.833 6.514L171.087 335.593c-1.7 1.7-4.249 2.832-6.515 2.832s-4.815-1.133-6.515-2.832L26.064 203.599c-1.7-1.7-2.832-4.248-2.832-6.514s1.132-4.816 2.832-6.515l14.162-14.163c1.7-1.699 3.966-2.832 6.515-2.832 2.266 0 4.815 1.133 6.515 2.832l111.316 111.317 111.316-111.317c1.7-1.699 4.249-2.832 6.515-2.832s4.815 1.133 6.515 2.832l14.162 14.163c1.7 1.7 2.833 4.249 2.833 6.515"
                                                                    fill="currentColor"></path>
                                                            </svg></button></div>
                                                </div>
                                                <div
                                                    className="first:text-2 text-1.75 flex flex-col items-start gap-1 text-white first:font-medium first:text-orange-500 hover:text-white first:hover:text-orange-500">
                                                    <div className="flex items-center"><button data-label="Documentation"
                                                            data-to="https://www.databricks.com/databricks-documentation"
                                                            className="hidden">Documentation</button></div>
                                                </div>
                                                <div
                                                    className="first:text-2 text-1.75 flex flex-col items-start gap-1 text-white first:font-medium first:text-orange-500 hover:text-white first:hover:text-orange-500">
                                                    <div className="flex items-center"><button data-label="Customer Support"
                                                            data-to="https://www.databricks.com/support"
                                                            className="hidden">Customer Support</button></div>
                                                </div>
                                                <div
                                                    className="first:text-2 text-1.75 flex flex-col items-start gap-1 text-white first:font-medium first:text-orange-500 hover:text-white first:hover:text-orange-500">
                                                    <div className="flex items-center"><button data-label="Community"
                                                            data-to="https://community.databricks.com/"
                                                            className="hidden">Community</button></div>
                                                </div>
                                                <div
                                                    className="first:text-2 text-1.75 flex flex-col items-start gap-1 text-white first:font-medium first:text-orange-500 hover:text-white first:hover:text-orange-500">
                                                    <div className="flex items-center"><span data-label="Learning"
                                                            className="pl-0 text-inherit hover:text-inherit hidden">Learning</span>
                                                    </div>
                                                    <ul className="text-navy-400 flex flex-col gap-1 hidden">
                                                        <li><a data-external-link="true" href="/learn/training/home"
                                                                data-label="Training"
                                                                className="inline-block text-inherit hover:text-inherit">Training</a>
                                                        </li>
                                                        <li><a data-external-link="true"
                                                                href="https://www.databricks.com/learn/training/certification"
                                                                data-label="Certification"
                                                                className="inline-block text-inherit hover:text-inherit">Certification</a>
                                                        </li>
                                                        <li><a data-external-link="true" href="/learn/free-edition"
                                                                data-label="Free Edition"
                                                                className="inline-block text-inherit hover:text-inherit">Free
                                                                Edition</a></li>
                                                        <li><a data-external-link="true" href="/university"
                                                                data-label="University Alliance"
                                                                className="inline-block text-inherit hover:text-inherit">University
                                                                Alliance</a></li>
                                                        <li><a data-external-link="true"
                                                                href="https://www.databricks.com/learn/training/login"
                                                                data-label="Databricks Academy Login"
                                                                className="inline-block text-inherit hover:text-inherit">Databricks
                                                                Academy Login</a></li>
                                                    </ul>
                                                </div>
                                                <div
                                                    className="first:text-2 text-1.75 flex flex-col items-start gap-1 text-white first:font-medium first:text-orange-500 hover:text-white first:hover:text-orange-500">
                                                    <div className="flex items-center"><span data-label="Events"
                                                            className="pl-0 text-inherit hover:text-inherit hidden">Events</span>
                                                    </div>
                                                    <ul className="text-navy-400 flex flex-col gap-1 hidden">
                                                        <li><a data-external-link="true" href="/dataaisummit"
                                                                data-label="Data + AI Summit"
                                                                className="inline-block text-inherit hover:text-inherit"
                                                                target="_blank" rel="noopener noreferrer">Data + AI
                                                                Summit</a></li>
                                                        <li><a data-external-link="true" href="/dataaisummit/worldtour"
                                                                data-label="Data + AI World Tour"
                                                                className="inline-block text-inherit hover:text-inherit"
                                                                target="_blank" rel="noopener noreferrer">Data + AI
                                                                World Tour</a></li>
                                                        <li><a data-external-link="true"
                                                                href="/lp/data-intelligence-days"
                                                                data-label="Data Intelligence Days"
                                                                className="inline-block text-inherit hover:text-inherit">Data
                                                                Intelligence Days</a></li>
                                                        <li><a data-external-link="true" href="/events"
                                                                data-label="Event Calendar"
                                                                className="inline-block text-inherit hover:text-inherit">Event
                                                                Calendar</a></li>
                                                    </ul>
                                                </div>
                                                <div
                                                    className="first:text-2 text-1.75 flex flex-col items-start gap-1 text-white first:font-medium first:text-orange-500 hover:text-white first:hover:text-orange-500">
                                                    <div className="flex items-center"><span data-label="Blog and Podcasts"
                                                            className="pl-0 text-inherit hover:text-inherit hidden">Blog and
                                                            Podcasts</span></div>
                                                    <ul className="text-navy-400 flex flex-col gap-1 hidden">
                                                        <li><a data-external-link="true" href="/blog"
                                                                data-label="Databricks Blog"
                                                                className="inline-block text-inherit hover:text-inherit">Databricks
                                                                Blog</a></li>
                                                        <li><a data-external-link="true"
                                                                href="https://www.databricks.com/blog/category/generative-ai/mosaic-research"
                                                                data-label="Databricks Mosaic Research Blog"
                                                                className="inline-block text-inherit hover:text-inherit">Databricks
                                                                Mosaic Research Blog</a></li>
                                                        <li><a data-external-link="true" href="/discover/data-brew"
                                                                data-label="Data Brew Podcast"
                                                                className="inline-block text-inherit hover:text-inherit">Data
                                                                Brew Podcast</a></li>
                                                        <li><a data-external-link="true"
                                                                href="/discover/champions-of-data-and-ai"
                                                                data-label="Champions of Data &amp; AI Podcast"
                                                                className="inline-block text-inherit hover:text-inherit">Champions
                                                                of Data &amp; AI Podcast</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="basis-full first:ml-0">
                                            <div className="hidden lg:block">
                                                <div
                                                    className="first:text-2 text-1.75 pb-2 text-white first:pb-3 first:font-medium first:text-orange-500 hover:text-white first:hover:text-orange-500 lg:pb-2">
                                                    <span aria-data-label="About page link in footer" role="heading"
                                                        aria-level={2}
                                                        className="inline-block pl-0 text-inherit hover:text-inherit">About</span>
                                                </div>
                                                <div
                                                    className="first:text-2 text-1.75 pb-2 text-white first:pb-3 first:font-medium first:text-orange-500 hover:text-white first:hover:text-orange-500 lg:pb-2 flex flex-col gap-1">
                                                    <span aria-data-label="Company page link in footer" role="heading"
                                                        aria-level={3}
                                                        className="inline-block pl-0 text-inherit hover:text-inherit">Company</span>
                                                    <ul className="text-navy-400 flex flex-col gap-1">
                                                        <li><a data-external-link="true" href="/company/about-us"
                                                                aria-data-label="Who We Are page link in footer"
                                                                className="tertiary-underline text-inherit hover:text-inherit">Who
                                                                We Are</a></li>
                                                        <li><a data-external-link="true" href="/company/leadership-team"
                                                                aria-data-label="Our Team page link in footer"
                                                                className="tertiary-underline text-inherit hover:text-inherit">Our
                                                                Team</a></li>
                                                        <li><a data-external-link="true" href="/databricks-ventures"
                                                                aria-data-label="Databricks Ventures page link in footer"
                                                                className="tertiary-underline text-inherit hover:text-inherit">Databricks
                                                                Ventures</a></li>
                                                        <li><a data-external-link="true" href="/company/contact"
                                                                aria-data-label="Contact Us page link in footer"
                                                                className="tertiary-underline text-inherit hover:text-inherit">Contact
                                                                Us</a></li>
                                                    </ul>
                                                </div>
                                                <div
                                                    className="first:text-2 text-1.75 pb-2 text-white first:pb-3 first:font-medium first:text-orange-500 hover:text-white first:hover:text-orange-500 lg:pb-2 flex flex-col gap-1">
                                                    <span aria-data-label="Careers page link in footer" role="heading"
                                                        aria-level={3}
                                                        className="inline-block pl-0 text-inherit hover:text-inherit">Careers</span>
                                                    <ul className="text-navy-400 flex flex-col gap-1">
                                                        <li><a data-external-link="true"
                                                                href="/company/careers/open-positions"
                                                                aria-data-label="Open Jobs page link in footer"
                                                                className="tertiary-underline text-inherit hover:text-inherit">Open
                                                                Jobs</a></li>
                                                        <li><a data-external-link="true" href="/company/careers"
                                                                aria-data-label="Working at Databricks page link in footer"
                                                                className="tertiary-underline text-inherit hover:text-inherit">Working
                                                                at Databricks</a></li>
                                                    </ul>
                                                </div>
                                                <div
                                                    className="first:text-2 text-1.75 pb-2 text-white first:pb-3 first:font-medium first:text-orange-500 hover:text-white first:hover:text-orange-500 lg:pb-2 flex flex-col gap-1">
                                                    <span aria-data-label="Press page link in footer" role="heading"
                                                        aria-level={3}
                                                        className="inline-block pl-0 text-inherit hover:text-inherit">Press</span>
                                                    <ul className="text-navy-400 flex flex-col gap-1">
                                                        <li><a data-external-link="true"
                                                                href="/company/awards-and-recognition"
                                                                aria-data-label="Awards and Recognition page link in footer"
                                                                className="tertiary-underline text-inherit hover:text-inherit">Awards
                                                                and Recognition</a></li>
                                                        <li><a data-external-link="true" href="/company/newsroom"
                                                                aria-data-label="Newsroom page link in footer"
                                                                className="tertiary-underline text-inherit hover:text-inherit">Newsroom</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div
                                                    className="first:text-2 text-1.75 pb-2 text-white first:pb-3 first:font-medium first:text-orange-500 hover:text-white first:hover:text-orange-500 lg:pb-2">
                                                    <a data-external-link="true" href="/trust"
                                                        aria-data-label="Security and Trust page link in footer"
                                                        className="inline-block pl-0 text-inherit hover:text-inherit tertiary-underline">Security
                                                        and Trust</a>
                                                </div>
                                            </div>
                                            <div className="block lg:hidden">
                                                <div
                                                    className="first:text-2 text-1.75 flex flex-col items-start gap-1 text-white first:font-medium first:text-orange-500 hover:text-white first:hover:text-orange-500">
                                                    <div className="flex items-center"><button data-label="About"
                                                            className="">About</button><button aria-data-label="About"
                                                            type="button"
                                                            className="text-3 font-bold transition-all duration-200"><svg
                                                                viewBox="0 0 330 512" version="1.1"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                xmlnsXlink="http://www.w3.org/1999/xlink" width="1em"
                                                                height="1em" aria-hidden="true" className="">
                                                                <path
                                                                    d="M305.913 197.085c0 2.266-1.133 4.815-2.833 6.514L171.087 335.593c-1.7 1.7-4.249 2.832-6.515 2.832s-4.815-1.133-6.515-2.832L26.064 203.599c-1.7-1.7-2.832-4.248-2.832-6.514s1.132-4.816 2.832-6.515l14.162-14.163c1.7-1.699 3.966-2.832 6.515-2.832 2.266 0 4.815 1.133 6.515 2.832l111.316 111.317 111.316-111.317c1.7-1.699 4.249-2.832 6.515-2.832s4.815 1.133 6.515 2.832l14.162 14.163c1.7 1.7 2.833 4.249 2.833 6.515"
                                                                    fill="currentColor"></path>
                                                            </svg></button></div>
                                                </div>
                                                <div
                                                    className="first:text-2 text-1.75 flex flex-col items-start gap-1 text-white first:font-medium first:text-orange-500 hover:text-white first:hover:text-orange-500">
                                                    <div className="flex items-center"><span data-label="Company"
                                                            className="pl-0 text-inherit hover:text-inherit hidden">Company</span>
                                                    </div>
                                                    <ul className="text-navy-400 flex flex-col gap-1 hidden">
                                                        <li><a data-external-link="true" href="/company/about-us"
                                                                data-label="Who We Are"
                                                                className="inline-block text-inherit hover:text-inherit">Who
                                                                We Are</a></li>
                                                        <li><a data-external-link="true" href="/company/leadership-team"
                                                                data-label="Our Team"
                                                                className="inline-block text-inherit hover:text-inherit">Our
                                                                Team</a></li>
                                                        <li><a data-external-link="true" href="/databricks-ventures"
                                                                data-label="Databricks Ventures"
                                                                className="inline-block text-inherit hover:text-inherit">Databricks
                                                                Ventures</a></li>
                                                        <li><a data-external-link="true" href="/company/contact"
                                                                data-label="Contact Us"
                                                                className="inline-block text-inherit hover:text-inherit">Contact
                                                                Us</a></li>
                                                    </ul>
                                                </div>
                                                <div
                                                    className="first:text-2 text-1.75 flex flex-col items-start gap-1 text-white first:font-medium first:text-orange-500 hover:text-white first:hover:text-orange-500">
                                                    <div className="flex items-center"><span data-label="Careers"
                                                            className="pl-0 text-inherit hover:text-inherit hidden">Careers</span>
                                                    </div>
                                                    <ul className="text-navy-400 flex flex-col gap-1 hidden">
                                                        <li><a data-external-link="true"
                                                                href="/company/careers/open-positions" data-label="Open Jobs"
                                                                className="inline-block text-inherit hover:text-inherit">Open
                                                                Jobs</a></li>
                                                        <li><a data-external-link="true" href="/company/careers"
                                                                data-label="Working at Databricks"
                                                                className="inline-block text-inherit hover:text-inherit">Working
                                                                at Databricks</a></li>
                                                    </ul>
                                                </div>
                                                <div
                                                    className="first:text-2 text-1.75 flex flex-col items-start gap-1 text-white first:font-medium first:text-orange-500 hover:text-white first:hover:text-orange-500">
                                                    <div className="flex items-center"><span data-label="Press"
                                                            className="pl-0 text-inherit hover:text-inherit hidden">Press</span>
                                                    </div>
                                                    <ul className="text-navy-400 flex flex-col gap-1 hidden">
                                                        <li><a data-external-link="true"
                                                                href="/company/awards-and-recognition"
                                                                data-label="Awards and Recognition"
                                                                className="inline-block text-inherit hover:text-inherit">Awards
                                                                and Recognition</a></li>
                                                        <li><a data-external-link="true" href="/company/newsroom"
                                                                data-label="Newsroom"
                                                                className="inline-block text-inherit hover:text-inherit">Newsroom</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div
                                                    className="first:text-2 text-1.75 flex flex-col items-start gap-1 text-white first:font-medium first:text-orange-500 hover:text-white first:hover:text-orange-500">
                                                    <div className="flex items-center"><button data-label="Security and Trust"
                                                            data-to="/trust" className="hidden">Security and Trust</button></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="main-image max-w-[126px] hidden lg:mb-4 lg:block">
                                            <div data-cy="Wrapper" className="outer-wrapper ">
                                                <div className="inner-wrapper">
                                                    <div data-cy="Grid" className="grid grid-cols-12 gap-0 "><a
                                                            data-external-link="true" href="https://www.databricks.com/"
                                                            aria-data-label="databricks logo"
                                                            className="cursor-pointer testId-variant-a"
                                                            style={{gridColumn: '1 / span 12'}}>
                                                            <figure>
                                                                <div className="h-full ">
                                                                    <div data-gatsby-image-wrapper=""
                                                                        className="gatsby-image-wrapper optanon-category-C0001">
                                                                        <div aria-hidden="true"
                                                                            style={{paddingTop: '15.748031496062993%'}}>
                                                                        </div>
                                                                        <div aria-hidden="true"
                                                                            data-placeholder-image=""
                                                                            style={{opacity: '0', transition: 'opacity 500ms linear', backgroundColor: 'transparent', position: 'absolute', inset: '0px'}}>
                                                                        </div><img className="" data-ot-ignore="1"
                                                                            data-main-image="" style={{opacity: '1'}}
                                                                            sizes="100vw" decoding="async"
                                                                            loading="lazy" alt="databricks logo"
                                                                            src="https://www.databricks.com/sites/default/files/2023-08/databricks-default.png?v=1712162038" /><noscript><img
                                                                                data-gatsby-image-ssr="" className=""
                                                                                data-ot-ignore="1" data-main-image=""
                                                                                style={{opacity: '0'}} sizes="100vw"
                                                                                decoding="async" loading="lazy"
                                                                                src="https://www.databricks.com/sites/default/files/2023-08/databricks-default.png?v=1712162038"
                                                                                alt="databricks logo" /></noscript>
                                                                        <script type="module" data-ot-ignore="1"
                                                                            className="optanon-category-C0001" dangerouslySetInnerHTML={{ __html: `const t = "undefined" != typeof HTMLImageElement && "loading" in HTMLImageElement.prototype; if (t) { const t = document.querySelectorAll("img[data-main-image]"); for (let e of t) { e.dataset.src && (e.setAttribute("src", e.dataset.src), e.removeAttribute("data-src")), e.dataset.srcset && (e.setAttribute("srcset", e.dataset.srcset), e.removeAttribute("data-srcset")); const t = e.parentNode.querySelectorAll("source[data-srcset]"); for (let e of t) e.setAttribute("srcset", e.dataset.srcset), e.removeAttribute("data-srcset"); e.complete && (e.style.opacity = 1, e.parentNode.parentNode.querySelector("[data-placeholder-image]").style.opacity = 0) } }` }} />
                                                                    </div>
                                                                </div>
                                                            </figure>
                                                        </a></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="flex flex-row items-end justify-between lg:w-[164px] lg:flex-col lg:items-baseline lg:align-baseline">
                                            <div className="text-1.5 max-w-[164px] leading-5">
                                                <p>Databricks Inc.<br />
                                                    160 Spear Street, 15th Floor<br />
                                                    San Francisco, CA 94105<br />
                                                    1-866-330-0121</p>
                                            </div>
                                            <div className="mt-4 hidden lg:block lg:w-16">
                                                <ul data-cy="IconList" className="iconList flex flex-wrap gap-1.5 ">
                                                    <li className="" data-cy="IconList-item"><a data-external-link="true"
                                                            href="https://www.linkedin.com/company/databricks"
                                                            target="_blank" rel="noopener noreferrer"
                                                            className="hover:text-navy-01 active:text-navy-03 text-white transition-colors duration-100"
                                                            aria-data-label="Visit our LinkedIn page"><svg width="24px"
                                                                height="24px" viewBox="0 0 30 30" fill="none"
                                                                xmlns="http://www.w3.org/2000/svg" aria-data-label="LinkedIn"
                                                                aria-hidden="true" className="">
                                                                <path
                                                                    d="M27.785 0H2.215A2.215 2.215 0 0 0 0 2.215v25.57A2.215 2.215 0 0 0 2.215 30h25.57A2.215 2.215 0 0 0 30 27.785V2.215A2.215 2.215 0 0 0 27.785 0M8.942 25.556h-4.51V11.23h4.51zM6.683 9.244a2.59 2.59 0 1 1 2.605-2.588 2.55 2.55 0 0 1-2.605 2.588m18.884 16.325h-4.509v-7.827c0-2.309-.98-3.021-2.248-3.021-1.337 0-2.65 1.008-2.65 3.079v7.769h-4.51v-14.33h4.338v1.986h.058c.435-.881 1.96-2.387 4.287-2.387 2.517 0 5.236 1.493 5.236 5.868z"
                                                                    fill="currentColor"></path>
                                                            </svg></a></li>
                                                    <li className="" data-cy="IconList-item"><a data-external-link="true"
                                                            href="https://www.facebook.com/pages/Databricks/560203607379694"
                                                            target="_blank" rel="noopener noreferrer"
                                                            className="hover:text-navy-01 active:text-navy-03 text-white transition-colors duration-100"
                                                            aria-data-label="Visit our Facebook page"><svg width="24px"
                                                                height="24px" viewBox="0 0 22 22" fill="none"
                                                                xmlns="http://www.w3.org/2000/svg" aria-data-label="Facebook"
                                                                aria-hidden="true" className="">
                                                                <path fillRule="evenodd" clipRule="evenodd"
                                                                    d="M11.7509 21.5H1.21423C0.543433 21.5 0 20.9809 0 20.3409V1.65903C0 1.01881 0.543519 0.5 1.21423 0.5H20.7859C21.4564 0.5 22 1.01881 22 1.65903V20.3409C22 20.981 21.4563 21.5 20.7859 21.5H15.1797V13.3676H18.0393L18.4675 10.1983H15.1797V8.17491C15.1797 7.25731 15.4466 6.632 16.8251 6.632L18.5833 6.63127V3.7966C18.2792 3.75798 17.2355 3.67169 16.0213 3.67169C13.4864 3.67169 11.7509 5.14867 11.7509 7.86103V10.1983H8.88393V13.3676H11.7509V21.5Z"
                                                                    fill="currentColor"></path>
                                                            </svg></a></li>
                                                    <li className="basis-1/3" data-cy="IconList-item"><a
                                                            data-external-link="true"
                                                            href="https://twitter.com/databricks" target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="hover:text-navy-01 active:text-navy-03 text-white transition-colors duration-100"
                                                            aria-data-label="Visit our Twitter page"><svg width="24px"
                                                                height="24px" viewBox="0 0 48 48" fill="none"
                                                                xmlns="http://www.w3.org/2000/svg" aria-data-label="Twitter"
                                                                aria-hidden="true" className="">
                                                                <path fillRule="evenodd" clipRule="evenodd"
                                                                    d="M28.9523 20.3247L46.4371 0H42.2938L27.1117 17.6477L14.9858 0H1L19.3367 26.6864L1 48H5.14358L21.1763 29.3635L33.9821 48H47.9679L28.9513 20.3247H28.9523ZM23.2771 26.9215L21.4192 24.2642L6.63658 3.11923H13.0009L24.9306 20.1839L26.7885 22.8412L42.2957 45.0226H35.9314L23.2771 26.9225V26.9215Z"
                                                                    fill="currentColor"></path>
                                                            </svg></a></li>
                                                    <li className="" data-cy="IconList-item"><a data-external-link="true"
                                                            href="https://www.databricks.com/feed" target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="hover:text-navy-01 active:text-navy-03 text-white transition-colors duration-100"
                                                            aria-data-label="rss feed"><svg width="24px" height="24px"
                                                                viewBox="0 0 24 24" fill="none"
                                                                xmlns="http://www.w3.org/2000/svg" aria-data-label="Rss"
                                                                aria-hidden="true" className="">
                                                                <path fillRule="evenodd" clipRule="evenodd"
                                                                    d="M4.5 0H19.5C21.9853 0 24 2.01472 24 4.5V19.5C24 21.9853 21.9853 24 19.5 24H4.5C2.01472 24 0 21.9853 0 19.5V4.5C0 2.01472 2.01472 0 4.5 0ZM9 18C9 19.6569 7.65685 21 6 21C4.34315 21 3 19.6569 3 18C3 16.3431 4.34315 15 6 15C7.65685 15 9 16.3431 9 18ZM3 12C5.38695 12 7.67613 12.9482 9.36396 14.636C11.0518 16.3239 12 18.6131 12 21H15C15 17.8174 13.7357 14.7652 11.4853 12.5147C9.23485 10.2643 6.1826 9 3 9V12ZM8.74025 7.14181C6.92037 6.38799 4.96983 6 3 6V3C7.7739 3 12.3523 4.89642 15.7279 8.27208C19.1036 11.6477 21 16.2261 21 21H18C18 19.0302 17.612 17.0796 16.8582 15.2597C16.1044 13.4399 14.9995 11.7863 13.6066 10.3934C12.2137 9.00052 10.5601 7.89563 8.74025 7.14181Z"
                                                                    fill="currentColor"></path>
                                                            </svg></a></li>
                                                    <li className="" data-cy="IconList-item"><a data-external-link="true"
                                                            href="https://www.glassdoor.com/Overview/Working-at-Databricks-EI_IE954734.11,21.htm"
                                                            target="_blank" rel="noopener noreferrer"
                                                            className="hover:text-navy-01 active:text-navy-03 text-white transition-colors duration-100"
                                                            aria-data-label="glassdoor"><svg width="24px" height="24px"
                                                                viewBox="0 0 48 48" fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                aria-data-label="Glassdoor" aria-hidden="true" className="">
                                                                <g clip-path="url(#clipPath_rxpr19m20)">
                                                                    <path
                                                                        d="M21.7949 14.7437H1.77531C1.62333 14.7437 1.5 14.8659 1.5 15.0149V32.9462C1.5 33.0959 1.62419 33.2175 1.77531 33.2175L13.0206 33.2201C13.0206 38.6758 9.04025 40.2434 3.80151 40.5831C3.66428 40.5917 3.55745 40.7037 3.55745 40.8389V47.7433C3.55745 47.8897 3.68165 48.0069 3.83016 47.9999C9.79757 47.7227 14.2616 46.3109 17.2345 43.9733C20.4679 41.4302 22.0668 37.7902 22.0711 33.3159V15.0149C22.0711 14.8651 21.946 14.7437 21.7949 14.7437Z"
                                                                        fill="currentColor"></path>
                                                                    <path
                                                                        d="M46.1553 33.2567H26.1357C25.9837 33.2567 25.8604 33.1343 25.8604 32.9855V15.0541C25.8604 14.9044 25.9846 14.7829 26.1357 14.7829L37.381 14.7803C37.381 9.32487 33.4006 7.75736 28.162 7.41768C28.0248 7.40912 27.9178 7.29704 27.9178 7.16185V0.256972C27.9178 0.110661 28.0421 -0.00655972 28.1906 0.000285267C34.158 0.277507 38.6221 1.68928 41.5949 4.02685C44.8282 6.56976 46.4272 10.2096 46.4316 14.6836V32.9845C46.4316 33.1343 46.3063 33.2567 46.1553 33.2567Z"
                                                                        fill="currentColor"></path>
                                                                </g>
                                                                <defs>
                                                                    <clipPath id="clipPath_rxpr19m20">
                                                                        <rect width="48" height="48" fill="white">
                                                                        </rect>
                                                                    </clipPath>
                                                                </defs>
                                                            </svg></a></li>
                                                    <li className="basis-1/3" data-cy="IconList-item"><a
                                                            data-external-link="true"
                                                            href="https://www.youtube.com/@Databricks" target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="hover:text-navy-01 active:text-navy-03 text-white transition-colors duration-100"
                                                            aria-data-label="Watch the Video on Youtube"><svg width="24px"
                                                                height="24px" viewBox="0 0 22 14" fill="none"
                                                                xmlns="http://www.w3.org/2000/svg" aria-data-label="Youtube"
                                                                aria-hidden="true" className="">
                                                                <path
                                                                    d="m8.729 9.582-.001-5.593 5.944 2.806zM21.78 3.02s-.215-1.372-.875-1.976C20.07.251 19.132.248 18.702.202 15.623 0 11.005 0 11.005 0h-.01S6.377 0 3.3.202c-.43.046-1.368.05-2.205.842C.434 1.648.22 3.02.22 3.02S0 4.631 0 6.24v1.51c0 1.612.22 3.222.22 3.222s.215 1.372.874 1.976c.837.793 1.937.768 2.426.85C5.28 13.954 11 14 11 14s4.623-.006 7.701-.208c.43-.046 1.368-.05 2.204-.843.66-.604.875-1.976.875-1.976s.22-1.61.22-3.221v-1.51c0-1.611-.22-3.222-.22-3.222"
                                                                    fill="currentColor"></path>
                                                            </svg></a></li>
                                                </ul>
                                            </div>
                                            <div className="text-1.75 footer-careers flex w-12 flex-col gap-1 lg:mt-10">
                                                <div data-cy="Wrapper" className="outer-wrapper "
                                                    id="Drupal_ParagraphImage-ca1f9d5f-d675-4180-89b4-d3fe2ae63626">
                                                    <div className="inner-wrapper">
                                                        <div data-cy="Grid" className="grid grid-cols-12 gap-0 ">
                                                            <figure className="!overflow-visible"
                                                                style={{gridColumn: '1 / span 12'}}>
                                                                <div className="h-full ">
                                                                    <div data-gatsby-image-wrapper=""
                                                                        className="gatsby-image-wrapper  optanon-category-C0001">
                                                                        <div aria-hidden="true"
                                                                            style={{paddingTop: '100%'}}></div>
                                                                        <div aria-hidden="true"
                                                                            data-placeholder-image=""
                                                                            style={{opacity: '1', transition: 'opacity 500ms linear', backgroundColor: 'transparent', position: 'absolute', top: '0', left: '0', bottom: '0', right: '0'}}>
                                                                        </div><img data-gatsby-image-ssr=""
                                                                            data-ot-ignore="1" data-main-image=""
                                                                            style={{opacity: '0'}} sizes="100vw"
                                                                            decoding="async" loading="lazy" alt=""
                                                                            src="https://www.databricks.com/sites/default/files/2021/02/telco-icon-2.png?v=1715274112" /><noscript><img
                                                                                data-gatsby-image-ssr=""
                                                                                data-ot-ignore="1" data-main-image=""
                                                                                style={{opacity: '0'}} sizes="100vw"
                                                                                decoding="async" loading="lazy"
                                                                                src="https://www.databricks.com/sites/default/files/2021/02/telco-icon-2.png?v=1715274112"
                                                                                alt="" /></noscript>
                                                                        <script type="module" data-ot-ignore="1"
                                                                            className="optanon-category-C0001" dangerouslySetInnerHTML={{ __html: `const t = "undefined" != typeof HTMLImageElement && "loading" in HTMLImageElement.prototype; if (t) { const t = document.querySelectorAll("img[data-main-image]"); for (let e of t) { e.dataset.src && (e.setAttribute("src", e.dataset.src), e.removeAttribute("data-src")), e.dataset.srcset && (e.setAttribute("srcset", e.dataset.srcset), e.removeAttribute("data-srcset")); const t = e.parentNode.querySelectorAll("source[data-srcset]"); for (let e of t) e.setAttribute("srcset", e.dataset.srcset), e.removeAttribute("data-srcset"); e.complete && (e.style.opacity = 1, e.parentNode.parentNode.querySelector("[data-placeholder-image]").style.opacity = 0) } }` }} />
                                                                    </div>
                                                                </div>
                                                            </figure>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div data-cy="Wrapper" className="outer-wrapper "
                                                    id="Drupal_ParagraphRichtext-0bcbdd20-841f-4e7f-83a5-beef98719b3d">
                                                    <div className="inner-wrapper">
                                                        <div className="rich-text-body">
                                                            <p><a href="https://www.databricks.com/company/careers"><span
                                                                        className="text-white">See Careers<br />
                                                                        at Databricks</span></a></p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-4 lg:hidden">
                                            <ul data-cy="IconList" className="iconList flex flex-wrap gap-1.5 ">
                                                <li className="" data-cy="IconList-item"><a data-external-link="true"
                                                        href="https://www.linkedin.com/company/databricks"
                                                        target="_blank" rel="noopener noreferrer"
                                                        className="hover:text-navy-01 active:text-navy-03 text-white transition-colors duration-100"
                                                        aria-data-label="Visit our LinkedIn page"><svg width="24px"
                                                            height="24px" viewBox="0 0 30 30" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg" aria-data-label="LinkedIn"
                                                            aria-hidden="true" className="">
                                                            <path
                                                                d="M27.785 0H2.215A2.215 2.215 0 0 0 0 2.215v25.57A2.215 2.215 0 0 0 2.215 30h25.57A2.215 2.215 0 0 0 30 27.785V2.215A2.215 2.215 0 0 0 27.785 0M8.942 25.556h-4.51V11.23h4.51zM6.683 9.244a2.59 2.59 0 1 1 2.605-2.588 2.55 2.55 0 0 1-2.605 2.588m18.884 16.325h-4.509v-7.827c0-2.309-.98-3.021-2.248-3.021-1.337 0-2.65 1.008-2.65 3.079v7.769h-4.51v-14.33h4.338v1.986h.058c.435-.881 1.96-2.387 4.287-2.387 2.517 0 5.236 1.493 5.236 5.868z"
                                                                fill="currentColor"></path>
                                                        </svg></a></li>
                                                <li className="" data-cy="IconList-item"><a data-external-link="true"
                                                        href="https://www.facebook.com/pages/Databricks/560203607379694"
                                                        target="_blank" rel="noopener noreferrer"
                                                        className="hover:text-navy-01 active:text-navy-03 text-white transition-colors duration-100"
                                                        aria-data-label="Visit our Facebook page"><svg width="24px"
                                                            height="24px" viewBox="0 0 22 22" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg" aria-data-label="Facebook"
                                                            aria-hidden="true" className="">
                                                            <path fillRule="evenodd" clipRule="evenodd"
                                                                d="M11.7509 21.5H1.21423C0.543433 21.5 0 20.9809 0 20.3409V1.65903C0 1.01881 0.543519 0.5 1.21423 0.5H20.7859C21.4564 0.5 22 1.01881 22 1.65903V20.3409C22 20.981 21.4563 21.5 20.7859 21.5H15.1797V13.3676H18.0393L18.4675 10.1983H15.1797V8.17491C15.1797 7.25731 15.4466 6.632 16.8251 6.632L18.5833 6.63127V3.7966C18.2792 3.75798 17.2355 3.67169 16.0213 3.67169C13.4864 3.67169 11.7509 5.14867 11.7509 7.86103V10.1983H8.88393V13.3676H11.7509V21.5Z"
                                                                fill="currentColor"></path>
                                                        </svg></a></li>
                                                <li className="basis-1/3" data-cy="IconList-item"><a
                                                        data-external-link="true" href="https://twitter.com/databricks"
                                                        target="_blank" rel="noopener noreferrer"
                                                        className="hover:text-navy-01 active:text-navy-03 text-white transition-colors duration-100"
                                                        aria-data-label="Visit our Twitter page"><svg width="24px"
                                                            height="24px" viewBox="0 0 48 48" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg" aria-data-label="Twitter"
                                                            aria-hidden="true" className="">
                                                            <path fillRule="evenodd" clipRule="evenodd"
                                                                d="M28.9523 20.3247L46.4371 0H42.2938L27.1117 17.6477L14.9858 0H1L19.3367 26.6864L1 48H5.14358L21.1763 29.3635L33.9821 48H47.9679L28.9513 20.3247H28.9523ZM23.2771 26.9215L21.4192 24.2642L6.63658 3.11923H13.0009L24.9306 20.1839L26.7885 22.8412L42.2957 45.0226H35.9314L23.2771 26.9225V26.9215Z"
                                                                fill="currentColor"></path>
                                                        </svg></a></li>
                                                <li className="" data-cy="IconList-item"><a data-external-link="true"
                                                        href="https://www.databricks.com/feed" target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="hover:text-navy-01 active:text-navy-03 text-white transition-colors duration-100"
                                                        aria-data-label="rss feed"><svg width="24px" height="24px"
                                                            viewBox="0 0 24 24" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg" aria-data-label="Rss"
                                                            aria-hidden="true" className="">
                                                            <path fillRule="evenodd" clipRule="evenodd"
                                                                d="M4.5 0H19.5C21.9853 0 24 2.01472 24 4.5V19.5C24 21.9853 21.9853 24 19.5 24H4.5C2.01472 24 0 21.9853 0 19.5V4.5C0 2.01472 2.01472 0 4.5 0ZM9 18C9 19.6569 7.65685 21 6 21C4.34315 21 3 19.6569 3 18C3 16.3431 4.34315 15 6 15C7.65685 15 9 16.3431 9 18ZM3 12C5.38695 12 7.67613 12.9482 9.36396 14.636C11.0518 16.3239 12 18.6131 12 21H15C15 17.8174 13.7357 14.7652 11.4853 12.5147C9.23485 10.2643 6.1826 9 3 9V12ZM8.74025 7.14181C6.92037 6.38799 4.96983 6 3 6V3C7.7739 3 12.3523 4.89642 15.7279 8.27208C19.1036 11.6477 21 16.2261 21 21H18C18 19.0302 17.612 17.0796 16.8582 15.2597C16.1044 13.4399 14.9995 11.7863 13.6066 10.3934C12.2137 9.00052 10.5601 7.89563 8.74025 7.14181Z"
                                                                fill="currentColor"></path>
                                                        </svg></a></li>
                                                <li className="" data-cy="IconList-item"><a data-external-link="true"
                                                        href="https://www.glassdoor.com/Overview/Working-at-Databricks-EI_IE954734.11,21.htm"
                                                        target="_blank" rel="noopener noreferrer"
                                                        className="hover:text-navy-01 active:text-navy-03 text-white transition-colors duration-100"
                                                        aria-data-label="glassdoor"><svg width="24px" height="24px"
                                                            viewBox="0 0 48 48" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg" aria-data-label="Glassdoor"
                                                            aria-hidden="true" className="">
                                                            <g clip-path="url(#clipPath_vtmo2tlf4)">
                                                                <path
                                                                    d="M21.7949 14.7437H1.77531C1.62333 14.7437 1.5 14.8659 1.5 15.0149V32.9462C1.5 33.0959 1.62419 33.2175 1.77531 33.2175L13.0206 33.2201C13.0206 38.6758 9.04025 40.2434 3.80151 40.5831C3.66428 40.5917 3.55745 40.7037 3.55745 40.8389V47.7433C3.55745 47.8897 3.68165 48.0069 3.83016 47.9999C9.79757 47.7227 14.2616 46.3109 17.2345 43.9733C20.4679 41.4302 22.0668 37.7902 22.0711 33.3159V15.0149C22.0711 14.8651 21.946 14.7437 21.7949 14.7437Z"
                                                                    fill="currentColor"></path>
                                                                <path
                                                                    d="M46.1553 33.2567H26.1357C25.9837 33.2567 25.8604 33.1343 25.8604 32.9855V15.0541C25.8604 14.9044 25.9846 14.7829 26.1357 14.7829L37.381 14.7803C37.381 9.32487 33.4006 7.75736 28.162 7.41768C28.0248 7.40912 27.9178 7.29704 27.9178 7.16185V0.256972C27.9178 0.110661 28.0421 -0.00655972 28.1906 0.000285267C34.158 0.277507 38.6221 1.68928 41.5949 4.02685C44.8282 6.56976 46.4272 10.2096 46.4316 14.6836V32.9845C46.4316 33.1343 46.3063 33.2567 46.1553 33.2567Z"
                                                                    fill="currentColor"></path>
                                                            </g>
                                                            <defs>
                                                                <clipPath id="clipPath_vtmo2tlf4">
                                                                    <rect width="48" height="48" fill="white"></rect>
                                                                </clipPath>
                                                            </defs>
                                                        </svg></a></li>
                                                <li className="basis-1/3" data-cy="IconList-item"><a
                                                        data-external-link="true"
                                                        href="https://www.youtube.com/@Databricks" target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="hover:text-navy-01 active:text-navy-03 text-white transition-colors duration-100"
                                                        aria-data-label="Watch the Video on Youtube"><svg width="24px"
                                                            height="24px" viewBox="0 0 22 14" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg" aria-data-label="Youtube"
                                                            aria-hidden="true" className="">
                                                            <path
                                                                d="m8.729 9.582-.001-5.593 5.944 2.806zM21.78 3.02s-.215-1.372-.875-1.976C20.07.251 19.132.248 18.702.202 15.623 0 11.005 0 11.005 0h-.01S6.377 0 3.3.202c-.43.046-1.368.05-2.205.842C.434 1.648.22 3.02.22 3.02S0 4.631 0 6.24v1.51c0 1.612.22 3.222.22 3.222s.215 1.372.874 1.976c.837.793 1.937.768 2.426.85C5.28 13.954 11 14 11 14s4.623-.006 7.701-.208c.43-.046 1.368-.05 2.204-.843.66-.604.875-1.976.875-1.976s.22-1.61.22-3.221v-1.51c0-1.611-.22-3.222-.22-3.222"
                                                                fill="currentColor"></path>
                                                        </svg></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-1.5">
                                    <div className="border-navy-04 mb-1 border-b pb-1 lg:mb-1 lg:pb-1">
                                        <div className="footer-disclaimer max-w-[405px] md:max-w-full">
                                            <div data-cy="Wrapper" className="outer-wrapper "
                                                id="Drupal_ParagraphRichtext-c08d3893-65c6-4b9d-b773-ff64a4870076">
                                                <div className="inner-wrapper">
                                                    <div className="rich-text-body">
                                                        <p>© Databricks <span className="currentYear">2025</span>. All
                                                            rights reserved. Apache, Apache Spark, Spark, the Spark
                                                            Logo, Apache Iceberg, Iceberg, and the Apache Iceberg logo
                                                            are trademarks of the <a data-external-link="true"
                                                                href="https://www.apache.org/"
                                                                aria-data-label="The Apache Software Foundation"
                                                                target="_blank" rel="noopener noreferrer">Apache
                                                                Software Foundation</a>.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <ul>
                                        <li className="inline-block"><a data-external-link="true"
                                                href="https://www.databricks.com/legal/privacynotice"
                                                aria-data-label="Read Privacy Notice"
                                                className="cursor-pointer testId-variant-a tertiary-underline mx-1 text-white first:ml-0 hover:text-white">Privacy
                                                Notice</a></li>
                                        <li className="inline-block"><span aria-hidden="true">|</span><a
                                                data-external-link="true"
                                                href="https://www.databricks.com/legal/terms-of-use"
                                                aria-data-label="Read Terms of Use"
                                                className="cursor-pointer testId-variant-a tertiary-underline mx-1 text-white first:ml-0 hover:text-white">Terms
                                                of Use</a></li>
                                        <li className="inline-block"><span aria-hidden="true">|</span><a
                                                data-external-link="true"
                                                href="https://www.databricks.com/legal/modern-slavery-policy-statement"
                                                aria-data-label="Read Modern Slavery Statement"
                                                className="cursor-pointer testId-variant-a tertiary-underline mx-1 text-white first:ml-0 hover:text-white">Modern
                                                Slavery Statement</a></li>
                                        <li className="inline-block"><span aria-hidden="true">|</span><a
                                                data-external-link="true"
                                                href="https://www.databricks.com/legal/supplemental-privacy-notice-california-residents"
                                                aria-data-label="Read California Privacy"
                                                className="cursor-pointer testId-variant-a tertiary-underline mx-1 text-white first:ml-0 hover:text-white">California
                                                Privacy</a></li>
                                        <li className="inline-block"><span aria-hidden="true">|</span><a
                                                data-external-link="true" href="#yourprivacychoices"
                                                aria-data-label="Read Your Privacy Choices"
                                                className="cursor-pointer testId-variant-a tertiary-underline mx-1 text-white first:ml-0 hover:text-white dbyourprivacychoices">Your
                                                Privacy Choices</a></li>
                                        <li className="inline-block"><img alt=""
                                                src="https://www.databricks.com/sites/default/files/2022-12/gpcicon_small.png"
                                                data-ot-ignore="1" className="dbgpcicon inline-block max-h-[15px] w-auto"
                                                width="31" height="15" /></li>
                                    </ul>
                                </div>
                            </div>
                        </footer>
                    </div>
    </>
  );
}
