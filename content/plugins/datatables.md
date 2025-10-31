---
layout: docs
title: Tailwind CSS Datatables - Flowbite
description: Use the datatable component to search, sort, filter, export and paginate table data of rows and columns for your web application coded with the utility classes from Tailwind CSS
group: plugins
toc: true
requires_js: true

previous: Charts
previousLink: plugins/charts/

next: WYSIWYG
nextLink: plugins/wysiwyg/
---

The datatable component examples from Flowbite are open-source under the MIT License and they are based on the [simple-datatables](https://github.com/fiduswriter/simple-datatables) repository from GitHub which you need to install via NPM or CDN.

This page provides multiple examples of datatable components where you can search, sort, filter, paginate and export table data up to thousands of entries coded with Tailwind CSS and leveraging JavaScript code provided by the parent library.

All examples are responsive, dark mode and RTL support included and by installing the Flowbite plugin the custom styles will automatically be applied to the datatable components using Tailwind CSS.

## Getting started

Before continuing make sure that you have Tailwind CSS, Flowbite, and Simple Datables in your project.

1. Install Tailwind CSS and follow our <a href="{{< ref "getting-started/quickstart" >}}">quickstart guide</a> to install Flowbite and the official plugin

2. Install the `simple-datatables` library using NPM:

{{< code lang="bash" >}}
npm install simple-datatables --save
{{< /code >}}

Alternatively, you can also include it in your project using CDN:

{{< code lang="html" file="datatables.html" icon="file" >}}
<script src="https://cdn.jsdelivr.net/npm/simple-datatables@9.0.3"></script>
{{< /code >}}

Now that you have installed all libraries you can start copy-pasting the datatable components from Flowbite.

Make sure that in addition to the HTML markup you also copy the JavaScript code to initialize the component.

## Default datatable

Use this example to show table data with default sorting and pagination functionalities.

{{< example class="flex justify-center bg-neutral-primary" github="plugins/datatables.md" show_dark=true datatables=true disable_init_js=true javascript=`
if (document.getElementById("default-table") && typeof simpleDatatables.DataTable !== 'undefined') {
    const dataTable = new simpleDatatables.DataTable("#default-table", {
        searchable: false,
        perPageSelect: false
    });
}
` >}}
<table id="default-table">
    <thead>
        <tr>
            <th>
                <span class="flex items-center">
                    Name
                    <svg class="w-4 h-4 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m8 15 4 4 4-4m0-6-4-4-4 4"/>
                    </svg>
                </span>
            </th>
            <th data-type="date" data-format="YYYY/DD/MM">
                <span class="flex items-center">
                    Release Date
                    <svg class="w-4 h-4 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m8 15 4 4 4-4m0-6-4-4-4 4"/>
                    </svg>
                </span>
            </th>
            <th>
                <span class="flex items-center">
                    NPM Downloads
                    <svg class="w-4 h-4 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m8 15 4 4 4-4m0-6-4-4-4 4"/>
                    </svg>
                </span>
            </th>
            <th>
                <span class="flex items-center">
                    Growth
                    <svg class="w-4 h-4 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m8 15 4 4 4-4m0-6-4-4-4 4"/>
                    </svg>
                </span>
            </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="font-medium text-heading whitespace-nowrap">Flowbite</td>
            <td>2021/25/09</td>
            <td>269000</td>
            <td>49%</td>
        </tr>
        <tr>
            <td class="font-medium text-heading whitespace-nowrap">React</td>
            <td>2013/24/05</td>
            <td>4500000</td>
            <td>24%</td>
        </tr>
        <tr>
            <td class="font-medium text-heading whitespace-nowrap">Angular</td>
            <td>2010/20/09</td>
            <td>2800000</td>
            <td>17%</td>
        </tr>
        <tr>
            <td class="font-medium text-heading whitespace-nowrap">Vue</td>
            <td>2014/12/02</td>
            <td>3600000</td>
            <td>30%</td>
        </tr>
        <tr>
            <td class="font-medium text-heading whitespace-nowrap">Svelte</td>
            <td>2016/26/11</td>
            <td>1200000</td>
            <td>57%</td>
        </tr>
        <tr>
            <td class="font-medium text-heading whitespace-nowrap">Ember</td>
            <td>2011/08/12</td>
            <td>500000</td>
            <td>44%</td>
        </tr>
        <tr>
            <td class="font-medium text-heading whitespace-nowrap">Backbone</td>
            <td>2010/13/10</td>
            <td>300000</td>
            <td>9%</td>
        </tr>
        <tr>
            <td class="font-medium text-heading whitespace-nowrap">jQuery</td>
            <td>2006/28/01</td>
            <td>6000000</td>
            <td>5%</td>
        </tr>
        <tr>
            <td class="font-medium text-heading whitespace-nowrap">Bootstrap</td>
            <td>2011/19/08</td>
            <td>1800000</td>
            <td>12%</td>
        </tr>
        <tr>
            <td class="font-medium text-heading whitespace-nowrap">Foundation</td>
            <td>2011/23/09</td>
            <td>700000</td>
            <td>8%</td>
        </tr>
        <tr>
            <td class="font-medium text-heading whitespace-nowrap">Bulma</td>
            <td>2016/24/10</td>
            <td>500000</td>
            <td>7%</td>
        </tr>
        <tr>
            <td class="font-medium text-heading whitespace-nowrap">Next.js</td>
            <td>2016/25/10</td>
            <td>2300000</td>
            <td>45%</td>
        </tr>
        <tr>
            <td class="font-medium text-heading whitespace-nowrap">Nuxt.js</td>
            <td>2016/16/10</td>
            <td>900000</td>
            <td>50%</td>
        </tr>
        <tr>
            <td class="font-medium text-heading whitespace-nowrap">Meteor</td>
            <td>2012/17/01</td>
            <td>1000000</td>
            <td>10%</td>
        </tr>
        <tr>
            <td class="font-medium text-heading whitespace-nowrap">Aurelia</td>
            <td>2015/08/07</td>
            <td>200000</td>
            <td>20%</td>
        </tr>
        <tr>
            <td class="font-medium text-heading whitespace-nowrap">Inferno</td>
            <td>2016/27/09</td>
            <td>100000</td>
            <td>35%</td>
        </tr>
        <tr>
            <td class="font-medium text-heading whitespace-nowrap">Preact</td>
            <td>2015/16/08</td>
            <td>600000</td>
            <td>28%</td>
        </tr>
        <tr>
            <td class="font-medium text-heading whitespace-nowrap">Lit</td>
            <td>2018/28/05</td>
            <td>400000</td>
            <td>60%</td>
        </tr>
        <tr>
            <td class="font-medium text-heading whitespace-nowrap">Alpine.js</td>
            <td>2019/02/11</td>
            <td>300000</td>
            <td>70%</td>
        </tr>
        <tr>
            <td class="font-medium text-heading whitespace-nowrap">Stimulus</td>
            <td>2018/06/03</td>
            <td>150000</td>
            <td>25%</td>
        </tr>
        <tr>
            <td class="font-medium text-heading whitespace-nowrap">Solid</td>
            <td>2021/05/07</td>
            <td>250000</td>
            <td>80%</td>
        </tr>
    </tbody>
</table>
{{< /example >}}

## Table search

Set the `searchable` option to `true` to enable the search functionality for all table data.

{{< example class="flex justify-center bg-neutral-primary" github="plugins/datatables.md" show_dark=true datatables=true disable_init_js=true javascript=`
if (document.getElementById("search-table") && typeof simpleDatatables.DataTable !== 'undefined') {
    const dataTable = new simpleDatatables.DataTable("#search-table", {
        searchable: true,
        sortable: false
    });
}
` >}}
<table id="search-table">
    <thead>
        <tr>
            <th>
                <span class="flex items-center">
                    Company Name
                </span>
            </th>
            <th>
                <span class="flex items-center">
                    Ticker
                </span>
            </th>
            <th>
                <span class="flex items-center">
                    Stock Price
                </span>
            </th>
            <th>
                <span class="flex items-center">
                    Market Capitalization
                </span>
            </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="font-medium text-heading whitespace-nowrap">Apple Inc.</td>
            <td>AAPL</td>
            <td>$192.58</td>
            <td>$3.04T</td>
        </tr>
        <tr>
            <td class="font-medium text-heading whitespace-nowrap">Microsoft Corporation</td>
            <td>MSFT</td>
            <td>$340.54</td>
            <td>$2.56T</td>
        </tr>
        <tr>
            <td class="font-medium text-heading whitespace-nowrap">Alphabet Inc.</td>
            <td>GOOGL</td>
            <td>$134.12</td>
            <td>$1.72T</td>
        </tr>
        <tr>
            <td class="font-medium text-heading whitespace-nowrap">Amazon.com Inc.</td>
            <td>AMZN</td>
            <td>$138.01</td>
            <td>$1.42T</td>
        </tr>
        <tr>
            <td class="font-medium text-heading whitespace-nowrap">NVIDIA Corporation</td>
            <td>NVDA</td>
            <td>$466.19</td>
            <td>$1.16T</td>
        </tr>
        <tr>
            <td class="font-medium text-heading whitespace-nowrap">Tesla Inc.</td>
            <td>TSLA</td>
            <td>$255.98</td>
            <td>$811.00B</td>
        </tr>
        <tr>
            <td class="font-medium text-heading whitespace-nowrap">Meta Platforms Inc.</td>
            <td>META</td>
            <td>$311.71</td>
            <td>$816.00B</td>
        </tr>
        <tr>
            <td class="font-medium text-heading whitespace-nowrap">Berkshire Hathaway Inc.</td>
            <td>BRK.B</td>
            <td>$354.08</td>
            <td>$783.00B</td>
        </tr>
        <tr>
            <td class="font-medium text-heading whitespace-nowrap">TSMC</td>
            <td>TSM</td>
            <td>$103.51</td>
            <td>$538.00B</td>
        </tr>
        <tr>
            <td class="font-medium text-heading whitespace-nowrap">UnitedHealth Group Incorporated</td>
            <td>UNH</td>
            <td>$501.96</td>
            <td>$466.00B</td>
        </tr>
        <tr>
            <td class="font-medium text-heading whitespace-nowrap">Johnson & Johnson</td>
            <td>JNJ</td>
            <td>$172.85</td>
            <td>$452.00B</td>
        </tr>
        <tr>
            <td class="font-medium text-heading whitespace-nowrap">JPMorgan Chase & Co.</td>
            <td>JPM</td>
            <td>$150.23</td>
            <td>$431.00B</td>
        </tr>
        <tr>
            <td class="font-medium text-heading whitespace-nowrap">Visa Inc.</td>
            <td>V</td>
            <td>$246.39</td>
            <td>$519.00B</td>
        </tr>
        <tr>
            <td class="font-medium text-heading whitespace-nowrap">Eli Lilly and Company</td>
            <td>LLY</td>
            <td>$582.97</td>
            <td>$552.00B</td>
        </tr>
        <tr>
            <td class="font-medium text-heading whitespace-nowrap">Walmart Inc.</td>
            <td>WMT</td>
            <td>$159.67</td>
            <td>$429.00B</td>
        </tr>
        <tr>
            <td class="font-medium text-heading whitespace-nowrap">Samsung Electronics Co., Ltd.</td>
            <td>005930.KS</td>
            <td>$70.22</td>
            <td>$429.00B</td>
        </tr>
        <tr>
            <td class="font-medium text-heading whitespace-nowrap">Procter & Gamble Co.</td>
            <td>PG</td>
            <td>$156.47</td>
            <td>$366.00B</td>
        </tr>
        <tr>
            <td class="font-medium text-heading whitespace-nowrap">Nestlé S.A.</td>
            <td>NESN.SW</td>
            <td>$120.51</td>
            <td>$338.00B</td>
        </tr>
        <tr>
            <td class="font-medium text-heading whitespace-nowrap">Roche Holding AG</td>
            <td>ROG.SW</td>
            <td>$296.00</td>
            <td>$317.00B</td>
        </tr>
        <tr>
            <td class="font-medium text-heading whitespace-nowrap">Chevron Corporation</td>
            <td>CVX</td>
            <td>$160.92</td>
            <td>$310.00B</td>
        </tr>
        <tr>
            <td class="font-medium text-heading whitespace-nowrap">LVMH Moët Hennessy Louis Vuitton</td>
            <td>MC.PA</td>
            <td>$956.60</td>
            <td>$478.00B</td>
        </tr>
        <tr>
            <td class="font-medium text-heading whitespace-nowrap">Pfizer Inc.</td>
            <td>PFE</td>
            <td>$35.95</td>
            <td>$200.00B</td>
        </tr>
        <tr>
            <td class="font-medium text-heading whitespace-nowrap">Novo Nordisk A/S</td>
            <td>NVO</td>
            <td>$189.15</td>
            <td>$443.00B</td>
        </tr>
        <tr>
            <td class="font-medium text-heading whitespace-nowrap">PepsiCo, Inc.</td>
            <td>PEP</td>
            <td>$182.56</td>
            <td>$311.00B</td>
        </tr>
        <tr>
            <td class="font-medium text-heading whitespace-nowrap">ASML Holding N.V.</td>
            <td>ASML</td>
            <td>$665.72</td>
            <td>$273.00B</td>
        </tr>
        <tr>
            <td class="font-medium text-heading whitespace-nowrap">The Coca-Cola Company</td>
            <td>KO</td>
            <td>$61.37</td>
            <td>$265.00B</td>
        </tr>
        <tr>
            <td class="font-medium text-heading whitespace-nowrap">Oracle Corporation</td>
            <td>ORCL</td>
            <td>$118.36</td>
            <td>$319.00B</td>
        </tr>
        <tr>
            <td class="font-medium text-heading whitespace-nowrap">Merck & Co., Inc.</td>
            <td>MRK</td>
            <td>$109.12</td>
            <td>$276.00B</td>
        </tr>
        <tr>
            <td class="font-medium text-heading whitespace-nowrap">Broadcom Inc.</td>
            <td>AVGO</td>
            <td>$861.80</td>
            <td>$356.00B</td>
        </tr>
        <tr>
            <td class="font-medium text-heading whitespace-nowrap">Mastercard Incorporated</td>
            <td>MA</td>
            <td>$421.44</td>
            <td>$396.00B</td>
        </tr>
    </tbody>
</table>

{{< /example >}}

## Filtering data

To enable filtering data based on a search query for each column you need to copy the custom code from the JavaScript tab and the HTML structure of the table. Enabling search for each individual data column is an advanced way of letting users browse complex data.

{{< example class="flex justify-center bg-neutral-primary" github="plugins/datatables.md" show_dark=true datatables=true disable_init_js=true javascript=`
if (document.getElementById("filter-table") && typeof simpleDatatables.DataTable !== 'undefined') {
    const dataTable = new simpleDatatables.DataTable("#filter-table", {
        tableRender: (_data, table, type) => {
            if (type === "print") {
                return table
            }
            const tHead = table.childNodes[0]
            const filterHeaders = {
                nodeName: "TR",
                attributes: {
                    class: "search-filtering-row"
                },
                childNodes: tHead.childNodes[0].childNodes.map(
                    (_th, index) => ({nodeName: "TH",
                        childNodes: [
                            {
                                nodeName: "INPUT",
                                attributes: {
                                    class: "datatable-input",
                                    type: "search",
                                    "data-columns": "[" + index + "]"
                                }
                            }
                        ]})
                )
            }
            tHead.childNodes.push(filterHeaders)
            return table
        }
    });
}
` >}}
<table id="filter-table">
    <thead>
        <tr>
            <th>
                <span class="flex items-center">
                    Name
                    <svg class="w-4 h-4 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m8 15 4 4 4-4m0-6-4-4-4 4"/>
                    </svg>
                </span>
            </th>
            <th>
                <span class="flex items-center">
                    Category
                    <svg class="w-4 h-4 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m8 15 4 4 4-4m0-6-4-4-4 4"/>
                    </svg>
                </span>
            </th>
            <th>
                <span class="flex items-center">
                    Brand
                    <svg class="w-4 h-4 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m8 15 4 4 4-4m0-6-4-4-4 4"/>
                    </svg>
                </span>
            </th>
            <th>
                <span class="flex items-center">
                    Price
                    <svg class="w-4 h-4 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m8 15 4 4 4-4m0-6-4-4-4 4"/>
                    </svg>
                </span>
            </th>
            <th>
                <span class="flex items-center">
                    Stock
                    <svg class="w-4 h-4 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m8 15 4 4 4-4m0-6-4-4-4 4"/>
                    </svg>
                </span>
            </th>
            <th>
                <span class="flex items-center">
                    Total Sales
                    <svg class="w-4 h-4 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m8 15 4 4 4-4m0-6-4-4-4 4"/>
                    </svg>
                </span>
            </th>
            <th>
                <span class="flex items-center">
                    Status
                    <svg class="w-4 h-4 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m8 15 4 4 4-4m0-6-4-4-4 4"/>
                    </svg>
                </span>
            </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="font-medium text-heading whitespace-nowrap">Apple iMac</td>
            <td>Computers</td>
            <td>Apple</td>
            <td>$1,299</td>
            <td>50</td>
            <td>200</td>
            <td>In Stock</td>
        </tr>
        <tr>
            <td class="font-medium text-heading whitespace-nowrap">Apple iPhone</td>
            <td>Mobile Phones</td>
            <td>Apple</td>
            <td>$999</td>
            <td>120</td>
            <td>300</td>
            <td>In Stock</td>
        </tr>
        <tr>
            <td class="font-medium text-heading whitespace-nowrap">Samsung Galaxy</td>
            <td>Mobile Phones</td>
            <td>Samsung</td>
            <td>$899</td>
            <td>80</td>
            <td>150</td>
            <td>In Stock</td>
        </tr>
        <tr>
            <td class="font-medium text-heading whitespace-nowrap">Dell XPS 13</td>
            <td>Computers</td>
            <td>Dell</td>
            <td>$1,099</td>
            <td>30</td>
            <td>120</td>
            <td>In Stock</td>
        </tr>
        <tr>
            <td class="font-medium text-heading whitespace-nowrap">HP Spectre x360</td>
            <td>Computers</td>
            <td>HP</td>
            <td>$1,299</td>
            <td>25</td>
            <td>80</td>
            <td>In Stock</td>
        </tr>
        <tr>
            <td class="font-medium text-heading whitespace-nowrap">Google Pixel 6</td>
            <td>Mobile Phones</td>
            <td>Google</td>
            <td>$799</td>
            <td>100</td>
            <td>200</td>
            <td>In Stock</td>
        </tr>
        <tr>
            <td class="font-medium text-heading whitespace-nowrap">Sony WH-1000XM4</td>
            <td>Headphones</td>
            <td>Sony</td>
            <td>$349</td>
            <td>60</td>
            <td>150</td>
            <td>In Stock</td>
        </tr>
        <tr>
            <td class="font-medium text-heading whitespace-nowrap">Apple AirPods Pro</td>
            <td>Headphones</td>
            <td>Apple</td>
            <td>$249</td>
            <td>200</td>
            <td>300</td>
            <td>In Stock</td>
        </tr>
        <tr>
            <td class="font-medium text-heading whitespace-nowrap">Asus ROG Zephyrus</td>
            <td>Computers</td>
            <td>Asus</td>
            <td>$1,899</td>
            <td>15</td>
            <td>50</td>
            <td>In Stock</td>
        </tr>
        <tr>
            <td class="font-medium text-heading whitespace-nowrap">Microsoft Surface Pro 7</td>
            <td>Computers</td>
            <td>Microsoft</td>
            <td>$899</td>
            <td>40</td>
            <td>100</td>
            <td>In Stock</td>
        </tr>
        <tr>
            <td class="font-medium text-heading whitespace-nowrap">Samsung QLED TV</td>
            <td>Televisions</td>
            <td>Samsung</td>
            <td>$1,299</td>
            <td>25</td>
            <td>70</td>
            <td>In Stock</td>
        </tr>
        <tr>
            <td class="font-medium text-heading whitespace-nowrap">LG OLED TV</td>
            <td>Televisions</td>
            <td>LG</td>
            <td>$1,499</td>
            <td>20</td>
            <td>50</td>
            <td>In Stock</td>
        </tr>
        <tr>
            <td class="font-medium text-heading whitespace-nowrap">Canon EOS R5</td>
            <td>Cameras</td>
            <td>Canon</td>
            <td>$3,899</td>
            <td>10</td>
            <td>30</td>
            <td>In Stock</td>
        </tr>
        <tr>
            <td class="font-medium text-heading whitespace-nowrap">Nikon Z7 II</td>
            <td>Cameras</td>
            <td>Nikon</td>
            <td>$3,299</td>
            <td>8</td>
            <td>25</td>
            <td>In Stock</td>
        </tr>
        <tr>
            <td class="font-medium text-heading whitespace-nowrap">Apple Watch Series 7</td>
            <td>Wearables</td>
            <td>Apple</td>
            <td>$399</td>
            <td>150</td>
            <td>500</td>
            <td>In Stock</td>
        </tr>
        <tr>
            <td class="font-medium text-heading whitespace-nowrap">Fitbit Charge 5</td>
            <td>Wearables</td>
            <td>Fitbit</td>
            <td>$179</td>
            <td>100</td>
            <td>250</td>
            <td>In Stock</td>
        </tr>
        <tr>
            <td class="font-medium text-heading whitespace-nowrap">Dyson V11 Vacuum</td>
            <td>Home Appliances</td>
            <td>Dyson</td>
            <td>$599</td>
            <td>30</td>
            <td>90</td>
            <td>In Stock</td>
        </tr>
        <tr>
            <td class="font-medium text-heading whitespace-nowrap">iRobot Roomba i7+</td>
            <td>Home Appliances</td>
            <td>iRobot</td>
            <td>$799</td>
            <td>20</td>
            <td>70</td>
            <td>In Stock</td>
        </tr>
        <tr>
            <td class="font-medium text-heading whitespace-nowrap">Bose SoundLink Revolve</td>
            <td>Speakers</td>
            <td>Bose</td>
            <td>$199</td>
            <td>80</td>
            <td>200</td>
            <td>In Stock</td>
        </tr>
        <tr>
            <td class="font-medium text-heading whitespace-nowrap">Sonos One</td>
            <td>Speakers</td>
            <td>Sonos</td>
            <td>$219</td>
            <td>60</td>
            <td>180</td>
            <td>In Stock</td>
        </tr>
        <tr>
            <td class="font-medium text-heading whitespace-nowrap">Apple iPad Pro</td>
            <td>Tablets</td>
            <td>Apple</td>
            <td>$1,099</td>
            <td>50</td>
            <td>150</td>
            <td>In Stock</td>
        </tr>
        <tr>
            <td class="font-medium text-heading whitespace-nowrap">Samsung Galaxy Tab S7</td>
            <td>Tablets</td>
            <td>Samsung</td>
            <td>$649</td>
            <td>70</td>
            <td>130</td>
            <td>In Stock</td>
        </tr>
        <tr>
            <td class="font-medium text-heading whitespace-nowrap">Amazon Echo Dot</td>
            <td>Smart Home</td>
            <td>Amazon</td>
            <td>$49</td>
            <td>300</td>
            <td>800</td>
            <td>In Stock</td>
        </tr>
        <tr>
            <td class="font-medium text-heading whitespace-nowrap">Google Nest Hub</td>
            <td>Smart Home</td>
            <td>Google</td>
            <td>$89</td>
            <td>150</td>
            <td>400</td>
            <td>In Stock</td>
        </tr>
        <tr>
            <td class="font-medium text-heading whitespace-nowrap">PlayStation 5</td>
            <td>Gaming Consoles</td>
            <td>Sony</td>
            <td>$499</td>
            <td>10</td>
            <td>500</td>
            <td>Out of Stock</td>
        </tr>
        <tr>
            <td class="font-medium text-heading whitespace-nowrap">Xbox Series X</td>
            <td>Gaming Consoles</td>
            <td>Microsoft</td>
            <td>$499</td>
            <td>15</td>
            <td>450</td>
            <td>Out of Stock</td>
        </tr>
        <tr>
            <td class="font-medium text-heading whitespace-nowrap">Nintendo Switch</td>
            <td>Gaming Consoles</td>
            <td>Nintendo</td>
            <td>$299</td>
            <td>40</td>
            <td>600</td>
            <td>In Stock</td>
        </tr>
        <tr>
            <td class="font-medium text-heading whitespace-nowrap">Apple MacBook Pro</td>
            <td>Computers</td>
            <td>Apple</td>
            <td>$1,299</td>
            <td>20</td>
            <td>100</td>
            <td>In Stock</td>
        </tr>
    </tbody>
</table>
{{< /example >}}

## Sorting data

By setting the value `sortable` to `true` you'll enable all data rows from the datatable to be sortable by clicking on the table column heading. You can also disable it by setting the same option to `false`.

{{< example class="flex justify-center bg-neutral-primary" github="plugins/datatables.md" show_dark=true datatables=true disable_init_js=true javascript=`
if (document.getElementById("sorting-table") && typeof simpleDatatables.DataTable !== 'undefined') {
    const dataTable = new simpleDatatables.DataTable("#sorting-table", {
        searchable: false,
        perPageSelect: false,
        sortable: true
    });
}
` >}}
<table id="sorting-table">
    <thead>
        <tr>
            <th>
                <span class="flex items-center">
                    Country
                    <svg class="w-4 h-4 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m8 15 4 4 4-4m0-6-4-4-4 4"/>
                    </svg>
                </span>
            </th>
            <th>
                <span class="flex items-center">
                    GDP
                    <svg class="w-4 h-4 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m8 15 4 4 4-4m0-6-4-4-4 4"/>
                    </svg>
                </span>
            </th>
            <th>
                <span class="flex items-center">
                    Population
                    <svg class="w-4 h-4 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m8 15 4 4 4-4m0-6-4-4-4 4"/>
                    </svg>
                </span>
            </th>
            <th>
                <span class="flex items-center">
                    GDP per Capita
                    <svg class="w-4 h-4 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m8 15 4 4 4-4m0-6-4-4-4 4"/>
                    </svg>
                </span>
            </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="font-medium text-heading whitespace-nowrap">United States</td>
            <td>$21433 billion</td>
            <td>331 million</td>
            <td>$64763</td>
        </tr>
        <tr>
            <td class="font-medium text-heading whitespace-nowrap">China</td>
            <td>$14342 billion</td>
            <td>1441 million</td>
            <td>$9957</td>
        </tr>
        <tr>
            <td class="font-medium text-heading whitespace-nowrap">Japan</td>
            <td>$5082 billion</td>
            <td>126 million</td>
            <td>$40335</td>
        </tr>
        <tr>
            <td class="font-medium text-heading whitespace-nowrap">Germany</td>
            <td>$3846 billion</td>
            <td>83 million</td>
            <td>$46386</td>
        </tr>
        <tr>
            <td class="font-medium text-heading whitespace-nowrap">India</td>
            <td>$2875 billion</td>
            <td>1380 million</td>
            <td>$2083</td>
        </tr>
        <tr>
            <td class="font-medium text-heading whitespace-nowrap">United Kingdom</td>
            <td>$2829 billion</td>
            <td>67 million</td>
            <td>$42224</td>
        </tr>
        <tr>
            <td class="font-medium text-heading whitespace-nowrap">France</td>
            <td>$2716 billion</td>
            <td>65 million</td>
            <td>$41723</td>
        </tr>
        <tr>
            <td class="font-medium text-heading whitespace-nowrap">Italy</td>
            <td>$2001 billion</td>
            <td>60 million</td>
            <td>$33350</td>
        </tr>
        <tr>
            <td class="font-medium text-heading whitespace-nowrap">Canada</td>
            <td>$1643 billion</td>
            <td>38 million</td>
            <td>$43237</td>
        </tr>
        <tr>
            <td class="font-medium text-heading whitespace-nowrap">South Korea</td>
            <td>$1631 billion</td>
            <td>52 million</td>
            <td>$31365</td>
        </tr>
        <tr>
            <td class="font-medium text-heading whitespace-nowrap">Russia</td>
            <td>$1460 billion</td>
            <td>144 million</td>
            <td>$10139</td>
        </tr>
        <tr>
            <td class="font-medium text-heading whitespace-nowrap">Brazil</td>
            <td>$1430 billion</td>
            <td>213 million</td>
            <td>$6718</td>
        </tr>
        <tr>
            <td class="font-medium text-heading whitespace-nowrap">Australia</td>
            <td>$1393 billion</td>
            <td>25 million</td>
            <td>$55720</td>
        </tr>
        <tr>
            <td class="font-medium text-heading whitespace-nowrap">Spain</td>
            <td>$1326 billion</td>
            <td>47 million</td>
            <td>$28255</td>
        </tr>
        <tr>
            <td class="font-medium text-heading whitespace-nowrap">Mexico</td>
            <td>$1194 billion</td>
            <td>129 million</td>
            <td>$9255</td>
        </tr>
        <tr>
            <td class="font-medium text-heading whitespace-nowrap">Indonesia</td>
            <td>$1158 billion</td>
            <td>273 million</td>
            <td>$4241</td>
        </tr>
        <tr>
            <td class="font-medium text-heading whitespace-nowrap">Netherlands</td>
            <td>$1010 billion</td>
            <td>17 million</td>
            <td>$59412</td>
        </tr>
        <tr>
            <td class="font-medium text-heading whitespace-nowrap">Saudi Arabia</td>
            <td>$804 billion</td>
            <td>35 million</td>
            <td>$22914</td>
        </tr>
        <tr>
            <td class="font-medium text-heading whitespace-nowrap">Turkey</td>
            <td>$761 billion</td>
            <td>84 million</td>
            <td>$9060</td>
        </tr>
        <tr>
            <td class="font-medium text-heading whitespace-nowrap">Switzerland</td>
            <td>$741 billion</td>
            <td>9 million</td>
            <td>$82333</td>
        </tr>
    </tbody>
</table>
{{< /example >}}

## Table pagination

Pagination is enabled by default for all datatables from Flowbite, however, you can disable it by setting the option `paging` to `false`. Use the `perPage` option to specify how many data rows to show by default. 

You can also set the `perPageSelect` option to set the selection options of the table.

{{< example class="flex justify-center bg-neutral-primary" github="plugins/datatables.md" show_dark=true datatables=true disable_init_js=true javascript=`
if (document.getElementById("pagination-table") && typeof simpleDatatables.DataTable !== 'undefined') {
    const dataTable = new simpleDatatables.DataTable("#pagination-table", {
        paging: true,
        perPage: 5,
        perPageSelect: [5, 10, 15, 20, 25],
        sortable: false
    });
}
` >}}
<table id="pagination-table">
    <thead>
        <tr>
            <th>
                <span class="flex items-center">
                    Model Name
                </span>
            </th>
            <th>
                <span class="flex items-center">
                    Developer
                </span>
            </th>
            <th data-type="date" data-format="Month YYYY">
                <span class="flex items-center">
                    Release Date
                </span>
            </th>
            <th>
                <span class="flex items-center">
                    Parameters
                </span>
            </th>
            <th>
                <span class="flex items-center">
                    Primary Application
                </span>
            </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="font-medium text-heading whitespace-nowrap">GPT-4</td>
            <td>OpenAI</td>
            <td>March 2023</td>
            <td>1 trillion</td>
            <td>Natural Language Processing</td>
        </tr>
        <tr>
            <td class="font-medium text-heading whitespace-nowrap">BERT</td>
            <td>Google</td>
            <td>October 2018</td>
            <td>340 million</td>
            <td>Natural Language Understanding</td>
        </tr>
        <tr>
            <td class="font-medium text-heading whitespace-nowrap">DALL-E 2</td>
            <td>OpenAI</td>
            <td>April 2022</td>
            <td>3.5 billion</td>
            <td>Image Generation</td>
        </tr>
        <tr>
            <td class="font-medium text-heading whitespace-nowrap">T5</td>
            <td>Google</td>
            <td>October 2019</td>
            <td>11 billion</td>
            <td>Text-to-Text Transfer</td>
        </tr>
        <tr>
            <td class="font-medium text-heading whitespace-nowrap">GPT-3.5</td>
            <td>OpenAI</td>
            <td>November 2022</td>
            <td>175 billion</td>
            <td>Natural Language Processing</td>
        </tr>
        <tr>
            <td class="font-medium text-heading whitespace-nowrap">Codex</td>
            <td>OpenAI</td>
            <td>August 2021</td>
            <td>12 billion</td>
            <td>Code Generation</td>
        </tr>
        <tr>
            <td class="font-medium text-heading whitespace-nowrap">PaLM 2</td>
            <td>Google</td>
            <td>May 2023</td>
            <td>540 billion</td>
            <td>Multilingual Understanding</td>
        </tr>
        <tr>
            <td class="font-medium text-heading whitespace-nowrap">LaMDA</td>
            <td>Google</td>
            <td>May 2021</td>
            <td>137 billion</td>
            <td>Conversational AI</td>
        </tr>
        <tr>
            <td class="font-medium text-heading whitespace-nowrap">CLIP</td>
            <td>OpenAI</td>
            <td>January 2021</td>
            <td>400 million</td>
            <td>Image and Text Understanding</td>
        </tr>
        <tr>
            <td class="font-medium text-heading whitespace-nowrap">XLNet</td>
            <td>Google</td>
            <td>June 2019</td>
            <td>340 million</td>
            <td>Natural Language Processing</td>
        </tr>
        <tr>
            <td class="font-medium text-heading whitespace-nowrap">Meena</td>
            <td>Google</td>
            <td>January 2020</td>
            <td>2.6 billion</td>
            <td>Conversational AI</td>
        </tr>
        <tr>
            <td class="font-medium text-heading whitespace-nowrap">BigGAN</td>
            <td>Google</td>
            <td>September 2018</td>
            <td>Unlimited</td>
            <td>Image Generation</td>
        </tr>
        <tr>
            <td class="font-medium text-heading whitespace-nowrap">Electra</td>
            <td>Google</td>
            <td>March 2020</td>
            <td>14 million</td>
            <td>Natural Language Understanding</td>
        </tr>
        <tr>
            <td class="font-medium text-heading whitespace-nowrap">Swin Transformer</td>
            <td>Microsoft</td>
            <td>April 2021</td>
            <td>88 million</td>
            <td>Vision Processing</td>
        </tr>
        <tr>
            <td class="font-medium text-heading whitespace-nowrap">GPT-NeoX-20B</td>
            <td>EleutherAI</td>
            <td>April 2022</td>
            <td>20 billion</td>
            <td>Natural Language Processing</td>
        </tr>
        <tr>
            <td class="font-medium text-heading whitespace-nowrap">Ernie 3.0</td>
            <td>Baidu</td>
            <td>July 2021</td>
            <td>10 billion</td>
            <td>Natural Language Processing</td>
        </tr>
        <tr>
            <td class="font-medium text-heading whitespace-nowrap">Turing-NLG</td>
            <td>Microsoft</td>
            <td>February 2020</td>
            <td>17 billion</td>
            <td>Natural Language Processing</td>
        </tr>
        <tr>
            <td class="font-medium text-heading whitespace-nowrap">Wu Dao 2.0</td>
            <td>Beijing Academy of AI</td>
            <td>June 2021</td>
            <td>1.75 trillion</td>
            <td>Multimodal Processing</td>
        </tr>
        <tr>
            <td class="font-medium text-heading whitespace-nowrap">Jukebox</td>
            <td>OpenAI</td>
            <td>April 2020</td>
            <td>1.2 billion</td>
            <td>Music Generation</td>
        </tr>
        <tr>
            <td class="font-medium text-heading whitespace-nowrap">StyleGAN2</td>
            <td>NVIDIA</td>
            <td>February 2020</td>
            <td>Unlimited</td>
            <td>Image Generation</td>
        </tr>
        <tr>
            <td class="font-medium text-heading whitespace-nowrap">FLAN</td>
            <td>Google</td>
            <td>December 2021</td>
            <td>137 billion</td>
            <td>Few-shot Learning</td>
        </tr>
        <tr>
            <td class="font-medium text-heading whitespace-nowrap">GShard</td>
            <td>Google</td>
            <td>June 2020</td>
            <td>600 billion</td>
            <td>Multilingual Understanding</td>
        </tr>
        <tr>
            <td class="font-medium text-heading whitespace-nowrap">AlphaFold</td>
            <td>DeepMind</td>
            <td>December 2020</td>
            <td>Unknown</td>
            <td>Protein Folding</td>
        </tr>
        <tr>
            <td class="font-medium text-heading whitespace-nowrap">GPT-J</td>
            <td>EleutherAI</td>
            <td>June 2021</td>
            <td>6 billion</td>
            <td>Natural Language Processing</td>
        </tr>
        <tr>
            <td class="font-medium text-heading whitespace-nowrap">M6</td>
            <td>Alibaba</td>
            <td>December 2020</td>
            <td>10 billion</td>
            <td>Multimodal Processing</td>
        </tr>
        <tr>
            <td class="font-medium text-heading whitespace-nowrap">Megatron-Turing NLG</td>
            <td>NVIDIA & Microsoft</td>
            <td>October 2021</td>
            <td>530 billion</td>
            <td>Natural Language Processing</td>
        </tr>
        <tr>
            <td class="font-medium text-heading whitespace-nowrap">DeepSpeed</td>
            <td>Microsoft</td>
            <td>February 2020</td>
            <td>Not disclosed</td>
            <td>AI Training Optimization</td>
        </tr>
    </tbody>
</table>
{{< /example >}}

## Selecting rows

Use this example to enable the selection of rows by clicking anywhere one of the table row elements by copying setting the `multiselect` option to `true` and copying the JavaScript configuration from Flowbite.

Use the `datatable.selectrow` event to write your own code and get the data from the selected table row.

{{< example class="flex justify-center bg-neutral-primary" github="plugins/datatables.md" show_dark=true datatables=true disable_init_js=true javascript=`
if (document.getElementById("selection-table") && typeof simpleDatatables.DataTable !== 'undefined') {

    let multiSelect = true;
    let rowNavigation = false;
    let table = null;

    const resetTable = function() {
        if (table) {
            table.destroy();
        }

        const options = {
            rowRender: (row, tr, _index) => {
                if (!tr.attributes) {
                    tr.attributes = {};
                }
                if (!tr.attributes.class) {
                    tr.attributes.class = "";
                }
                if (row.selected) {
                    tr.attributes.class += " selected";
                } else {
                    tr.attributes.class = tr.attributes.class.replace(" selected", "");
                }
                return tr;
            }
        };
        if (rowNavigation) {
            options.rowNavigation = true;
            options.tabIndex = 1;
        }

        table = new simpleDatatables.DataTable("#selection-table", options);

        // Mark all rows as unselected
        table.data.data.forEach(data => {
            data.selected = false;
        });

        table.on("datatable.selectrow", (rowIndex, event) => {
            event.preventDefault();
            const row = table.data.data[rowIndex];
            if (row.selected) {
                row.selected = false;
            } else {
                if (!multiSelect) {
                    table.data.data.forEach(data => {
                        data.selected = false;
                    });
                }
                row.selected = true;
            }
            table.update();
        });
    };

    // Row navigation makes no sense on mobile, so we deactivate it and hide the checkbox.
    const isMobile = window.matchMedia("(any-pointer:coarse)").matches;
    if (isMobile) {
        rowNavigation = false;
    }

    resetTable();
}
` >}}
<table id="selection-table">
    <thead>
        <tr>
            <th>
                <span class="flex items-center">
                    Name
                    <svg class="w-4 h-4 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m8 15 4 4 4-4m0-6-4-4-4 4"/>
                    </svg>
                </span>
            </th>
            <th data-type="date" data-format="YYYY/DD/MM">
                <span class="flex items-center">
                    Release Date
                    <svg class="w-4 h-4 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m8 15 4 4 4-4m0-6-4-4-4 4"/>
                    </svg>
                </span>
            </th>
            <th>
                <span class="flex items-center">
                    NPM Downloads
                    <svg class="w-4 h-4 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m8 15 4 4 4-4m0-6-4-4-4 4"/>
                    </svg>
                </span>
            </th>
            <th>
                <span class="flex items-center">
                    Growth
                    <svg class="w-4 h-4 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m8 15 4 4 4-4m0-6-4-4-4 4"/>
                    </svg>
                </span>
            </th>
        </tr>
    </thead>
    <tbody>
        <tr class="hover:bg-neutral-secondary-soft cursor-pointer">
            <td class="font-medium text-heading whitespace-nowrap">Flowbite</td>
            <td>2021/25/09</td>
            <td>269000</td>
            <td>49%</td>
        </tr>
        <tr class="hover:bg-neutral-secondary-soft cursor-pointer">
            <td class="font-medium text-heading whitespace-nowrap">React</td>
            <td>2013/24/05</td>
            <td>4500000</td>
            <td>24%</td>
        </tr>
        <tr class="hover:bg-neutral-secondary-soft cursor-pointer">
            <td class="font-medium text-heading whitespace-nowrap">Angular</td>
            <td>2010/20/09</td>
            <td>2800000</td>
            <td>17%</td>
        </tr>
        <tr class="hover:bg-neutral-secondary-soft cursor-pointer">
            <td class="font-medium text-heading whitespace-nowrap">Vue</td>
            <td>2014/12/02</td>
            <td>3600000</td>
            <td>30%</td>
        </tr>
        <tr class="hover:bg-neutral-secondary-soft cursor-pointer">
            <td class="font-medium text-heading whitespace-nowrap">Svelte</td>
            <td>2016/26/11</td>
            <td>1200000</td>
            <td>57%</td>
        </tr>
        <tr class="hover:bg-neutral-secondary-soft cursor-pointer">
            <td class="font-medium text-heading whitespace-nowrap">Ember</td>
            <td>2011/08/12</td>
            <td>500000</td>
            <td>44%</td>
        </tr>
        <tr class="hover:bg-neutral-secondary-soft cursor-pointer">
            <td class="font-medium text-heading whitespace-nowrap">Backbone</td>
            <td>2010/13/10</td>
            <td>300000</td>
            <td>9%</td>
        </tr>
        <tr class="hover:bg-neutral-secondary-soft cursor-pointer">
            <td class="font-medium text-heading whitespace-nowrap">jQuery</td>
            <td>2006/28/01</td>
            <td>6000000</td>
            <td>5%</td>
        </tr>
        <tr class="hover:bg-neutral-secondary-soft cursor-pointer">
            <td class="font-medium text-heading whitespace-nowrap">Bootstrap</td>
            <td>2011/19/08</td>
            <td>1800000</td>
            <td>12%</td>
        </tr>
        <tr class="hover:bg-neutral-secondary-soft cursor-pointer">
            <td class="font-medium text-heading whitespace-nowrap">Foundation</td>
            <td>2011/23/09</td>
            <td>700000</td>
            <td>8%</td>
        </tr>
        <tr class="hover:bg-neutral-secondary-soft cursor-pointer">
            <td class="font-medium text-heading whitespace-nowrap">Bulma</td>
            <td>2016/24/10</td>
            <td>500000</td>
            <td>7%</td>
        </tr>
        <tr class="hover:bg-neutral-secondary-soft cursor-pointer">
            <td class="font-medium text-heading whitespace-nowrap">Next.js</td>
            <td>2016/25/10</td>
            <td>2300000</td>
            <td>45%</td>
        </tr>
        <tr class="hover:bg-neutral-secondary-soft cursor-pointer">
            <td class="font-medium text-heading whitespace-nowrap">Nuxt.js</td>
            <td>2016/16/10</td>
            <td>900000</td>
            <td>50%</td>
        </tr>
        <tr class="hover:bg-neutral-secondary-soft cursor-pointer">
            <td class="font-medium text-heading whitespace-nowrap">Meteor</td>
            <td>2012/17/01</td>
            <td>1000000</td>
            <td>10%</td>
        </tr>
        <tr class="hover:bg-neutral-secondary-soft cursor-pointer">
            <td class="font-medium text-heading whitespace-nowrap">Aurelia</td>
            <td>2015/08/07</td>
            <td>200000</td>
            <td>20%</td>
        </tr>
        <tr class="hover:bg-neutral-secondary-soft cursor-pointer">
            <td class="font-medium text-heading whitespace-nowrap">Inferno</td>
            <td>2016/27/09</td>
            <td>100000</td>
            <td>35%</td>
        </tr>
        <tr class="hover:bg-neutral-secondary-soft cursor-pointer">
            <td class="font-medium text-heading whitespace-nowrap">Preact</td>
            <td>2015/16/08</td>
            <td>600000</td>
            <td>28%</td>
        </tr>
        <tr class="hover:bg-neutral-secondary-soft cursor-pointer">
            <td class="font-medium text-heading whitespace-nowrap">Lit</td>
            <td>2018/28/05</td>
            <td>400000</td>
            <td>60%</td>
        </tr>
        <tr class="hover:bg-neutral-secondary-soft cursor-pointer">
            <td class="font-medium text-heading whitespace-nowrap">Alpine.js</td>
            <td>2019/02/11</td>
            <td>300000</td>
            <td>70%</td>
        </tr>
        <tr class="hover:bg-neutral-secondary-soft cursor-pointer">
            <td class="font-medium text-heading whitespace-nowrap">Stimulus</td>
            <td>2018/06/03</td>
            <td>150000</td>
            <td>25%</td>
        </tr>
        <tr class="hover:bg-neutral-secondary-soft cursor-pointer">
            <td class="font-medium text-heading whitespace-nowrap">Solid</td>
            <td>2021/05/07</td>
            <td>250000</td>
            <td>80%</td>
        </tr>
    </tbody>
</table>
{{< /example >}}

## Export files

If you want to enable the export of the table data, you can use the `simpleDatatables.exportCSV` function to export the data as a CSV file. The option is also available for TXT, JSON, and SQL formats.

{{< example class="dark:bg-gray-900" github="plugins/datatables.md" show_dark=true datatables=true disable_init_js=true javascript=`
if (document.getElementById("export-table") && typeof simpleDatatables.DataTable !== 'undefined') {

    const exportCustomCSV = function(dataTable, userOptions = {}) {
        // A modified CSV export that includes a row of minuses at the start and end.
        const clonedUserOptions = {
            ...userOptions
        }
        clonedUserOptions.download = false
        const csv = simpleDatatables.exportCSV(dataTable, clonedUserOptions)
        // If CSV didn't work, exit.
        if (!csv) {
            return false
        }
        const defaults = {
            download: true,
            lineDelimiter: "\n",
            columnDelimiter: ";"
        }
        const options = {
            ...defaults,
            ...clonedUserOptions
        }
        const separatorRow = Array(dataTable.data.headings.filter((_heading, index) => !dataTable.columns.settings[index]?.hidden).length)
            .fill("+")
            .join("+"); // Use "+" as the delimiter

        const str = separatorRow + options.lineDelimiter + csv + options.lineDelimiter + separatorRow;

        if (userOptions.download) {
            // Create a link to trigger the download
            const link = document.createElement("a");
            link.href = encodeURI("data:text/csv;charset=utf-8," + str);
            link.download = (options.filename || "datatable_export") + ".txt";
            // Append the link
            document.body.appendChild(link);
            // Trigger the download
            link.click();
            // Remove the link
            document.body.removeChild(link);
        }

        return str
    }
    const table = new simpleDatatables.DataTable("#export-table", {
        template: (options, dom) => "<div class='" + options.classes.top + "'>" +
            "<div class='flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-3 rtl:space-x-reverse w-full sm:w-auto'>" +
            (options.paging && options.perPageSelect ?
                "<div class='" + options.classes.dropdown + "'>" +
                    "<label>" +
                        "<select class='" + options.classes.selector + "'></select> " + options.labels.perPage +
                    "</label>" +
                "</div>" : ""
            ) + "<button id='exportDropdownButton' type='button' class='flex w-full sm:w-auto text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-sm px-3 py-2 focus:outline-none'>" +
            "Export as" +
            "<svg class='-me-0.5 ms-1.5 h-4 w-4' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='none' viewBox='0 0 24 24'>" +
                "<path stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m19 9-7 7-7-7' />" +
            "</svg>" +
        "</button>" +
        "<div id='exportDropdown' class='z-10 hidden w-52 divide-y divide-gray-100 rounded-lg bg-white shadow-sm dark:bg-gray-700' data-popper-placement='bottom'>" +
            "<ul class='p-2 text-left text-sm font-medium text-gray-500 dark:text-gray-400' aria-labelledby='exportDropdownButton'>" +
                "<li>" +
                    "<button id='export-csv' class='group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white'>" +
                        "<svg class='me-1.5 h-4 w-4 text-gray-400 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='currentColor' viewBox='0 0 24 24'>" +
                            "<path fill-rule='evenodd' d='M9 2.221V7H4.221a2 2 0 0 1 .365-.5L8.5 2.586A2 2 0 0 1 9 2.22ZM11 2v5a2 2 0 0 1-2 2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2 2 2 0 0 0 2 2h12a2 2 0 0 0 2-2 2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2V4a2 2 0 0 0-2-2h-7Zm1.018 8.828a2.34 2.34 0 0 0-2.373 2.13v.008a2.32 2.32 0 0 0 2.06 2.497l.535.059a.993.993 0 0 0 .136.006.272.272 0 0 1 .263.367l-.008.02a.377.377 0 0 1-.018.044.49.49 0 0 1-.078.02 1.689 1.689 0 0 1-.297.021h-1.13a1 1 0 1 0 0 2h1.13c.417 0 .892-.05 1.324-.279.47-.248.78-.648.953-1.134a2.272 2.272 0 0 0-2.115-3.06l-.478-.052a.32.32 0 0 1-.285-.341.34.34 0 0 1 .344-.306l.94.02a1 1 0 1 0 .043-2l-.943-.02h-.003Zm7.933 1.482a1 1 0 1 0-1.902-.62l-.57 1.747-.522-1.726a1 1 0 0 0-1.914.578l1.443 4.773a1 1 0 0 0 1.908.021l1.557-4.773Zm-13.762.88a.647.647 0 0 1 .458-.19h1.018a1 1 0 1 0 0-2H6.647A2.647 2.647 0 0 0 4 13.647v1.706A2.647 2.647 0 0 0 6.647 18h1.018a1 1 0 1 0 0-2H6.647A.647.647 0 0 1 6 15.353v-1.706c0-.172.068-.336.19-.457Z' clip-rule='evenodd'/>" +
                        "</svg>" +
                        "<span>Export CSV</span>" +
                    "</button>" +
                "</li>" +
                "<li>" +
                    "<button id='export-json' class='group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white'>" +
                        "<svg class='me-1.5 h-4 w-4 text-gray-400 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='currentColor' viewBox='0 0 24 24'>" +
                            "<path fill-rule='evenodd' d='M9 2.221V7H4.221a2 2 0 0 1 .365-.5L8.5 2.586A2 2 0 0 1 9 2.22ZM11 2v5a2 2 0 0 1-2 2H4v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-7Zm-.293 9.293a1 1 0 0 1 0 1.414L9.414 14l1.293 1.293a1 1 0 0 1-1.414 1.414l-2-2a1 1 0 0 1 0-1.414l2-2a1 1 0 0 1 1.414 0Zm2.586 1.414a1 1 0 0 1 1.414-1.414l2 2a1 1 0 0 1 0 1.414l-2 2a1 1 0 0 1-1.414-1.414L14.586 14l-1.293-1.293Z' clip-rule='evenodd'/>" +
                        "</svg>" +
                        "<span>Export JSON</span>" +
                    "</button>" +
                "</li>" +
                "<li>" +
                    "<button id='export-txt' class='group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white'>" +
                        "<svg class='me-1.5 h-4 w-4 text-gray-400 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='currentColor' viewBox='0 0 24 24'>" +
                            "<path fill-rule='evenodd' d='M9 2.221V7H4.221a2 2 0 0 1 .365-.5L8.5 2.586A2 2 0 0 1 9 2.22ZM11 2v5a2 2 0 0 1-2 2H4v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-7ZM8 16a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1Zm1-5a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2H9Z' clip-rule='evenodd'/>" +
                        "</svg>" +
                        "<span>Export TXT</span>" +
                    "</button>" +
                "</li>" +
                "<li>" +
                    "<button id='export-sql' class='group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white'>" +
                        "<svg class='me-1.5 h-4 w-4 text-gray-400 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='currentColor' viewBox='0 0 24 24'>" +
                            "<path d='M12 7.205c4.418 0 8-1.165 8-2.602C20 3.165 16.418 2 12 2S4 3.165 4 4.603c0 1.437 3.582 2.602 8 2.602ZM12 22c4.963 0 8-1.686 8-2.603v-4.404c-.052.032-.112.06-.165.09a7.75 7.75 0 0 1-.745.387c-.193.088-.394.173-.6.253-.063.024-.124.05-.189.073a18.934 18.934 0 0 1-6.3.998c-2.135.027-4.26-.31-6.3-.998-.065-.024-.126-.05-.189-.073a10.143 10.143 0 0 1-.852-.373 7.75 7.75 0 0 1-.493-.267c-.053-.03-.113-.058-.165-.09v4.404C4 20.315 7.037 22 12 22Zm7.09-13.928a9.91 9.91 0 0 1-.6.253c-.063.025-.124.05-.189.074a18.935 18.935 0 0 1-6.3.998c-2.135.027-4.26-.31-6.3-.998-.065-.024-.126-.05-.189-.074a10.163 10.163 0 0 1-.852-.372 7.816 7.816 0 0 1-.493-.268c-.055-.03-.115-.058-.167-.09V12c0 .917 3.037 2.603 8 2.603s8-1.686 8-2.603V7.596c-.052.031-.112.059-.165.09a7.816 7.816 0 0 1-.745.386Z'/>" +
                        "</svg>" +
                        "<span>Export SQL</span>" +
                    "</button>" +
                "</li>" +
            "</ul>" +
        "</div>" + "</div>" +
            (options.searchable ?
                "<div class='" + options.classes.search + "'>" +
                    "<input class='" + options.classes.input + "' placeholder='" + options.labels.placeholder + "' type='search' title='" + options.labels.searchTitle + "'" + (dom.id ? " aria-controls='" + dom.id + "'" : "") + ">" +
                "</div>" : ""
            ) +
        "</div>" +
        "<div class='" + options.classes.container + "'" + (options.scrollY.length ? " style='height: " + options.scrollY + "; overflow-Y: auto;'" : "") + "></div>" +
        "<div class='" + options.classes.bottom + "'>" +
            (options.paging ?
                "<div class='" + options.classes.info + "'></div>" : ""
            ) +
            "<nav class='" + options.classes.pagination + "'></nav>" +
        "</div>"
    })
    const $exportButton = document.getElementById("exportDropdownButton");
    const $exportDropdownEl = document.getElementById("exportDropdown");
    const dropdown = new Dropdown($exportDropdownEl, $exportButton);
    console.log(dropdown)

    document.getElementById("export-csv").addEventListener("click", () => {
        simpleDatatables.exportCSV(table, {
            download: true,
            lineDelimiter: "\n",
            columnDelimiter: ";"
        })
    })
    document.getElementById("export-sql").addEventListener("click", () => {
        simpleDatatables.exportSQL(table, {
            download: true,
            tableName: "export_table"
        })
    })
    document.getElementById("export-txt").addEventListener("click", () => {
        simpleDatatables.exportTXT(table, {
            download: true
        })
    })
    document.getElementById("export-json").addEventListener("click", () => {
        simpleDatatables.exportJSON(table, {
            download: true,
            space: 3
        })
    })
}
` >}}
<table id="export-table">
    <thead>
        <tr>
            <th>
                <span class="flex items-center">
                    Name
                    <svg class="w-4 h-4 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m8 15 4 4 4-4m0-6-4-4-4 4"/>
                    </svg>
                </span>
            </th>
            <th data-type="date" data-format="YYYY/DD/MM">
                <span class="flex items-center">
                    Release Date
                    <svg class="w-4 h-4 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m8 15 4 4 4-4m0-6-4-4-4 4"/>
                    </svg>
                </span>
            </th>
            <th>
                <span class="flex items-center">
                    NPM Downloads
                    <svg class="w-4 h-4 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m8 15 4 4 4-4m0-6-4-4-4 4"/>
                    </svg>
                </span>
            </th>
            <th>
                <span class="flex items-center">
                    Growth
                    <svg class="w-4 h-4 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m8 15 4 4 4-4m0-6-4-4-4 4"/>
                    </svg>
                </span>
            </th>
        </tr>
    </thead>
    <tbody>
        <tr class="hover:bg-neutral-secondary-soft cursor-pointer">
            <td class="font-medium text-heading whitespace-nowrap">Flowbite</td>
            <td>2021/25/09</td>
            <td>269000</td>
            <td>49%</td>
        </tr>
        <tr class="hover:bg-neutral-secondary-soft cursor-pointer">
            <td class="font-medium text-heading whitespace-nowrap">React</td>
            <td>2013/24/05</td>
            <td>4500000</td>
            <td>24%</td>
        </tr>
        <tr class="hover:bg-neutral-secondary-soft cursor-pointer">
            <td class="font-medium text-heading whitespace-nowrap">Angular</td>
            <td>2010/20/09</td>
            <td>2800000</td>
            <td>17%</td>
        </tr>
        <tr class="hover:bg-neutral-secondary-soft cursor-pointer">
            <td class="font-medium text-heading whitespace-nowrap">Vue</td>
            <td>2014/12/02</td>
            <td>3600000</td>
            <td>30%</td>
        </tr>
        <tr class="hover:bg-neutral-secondary-soft cursor-pointer">
            <td class="font-medium text-heading whitespace-nowrap">Svelte</td>
            <td>2016/26/11</td>
            <td>1200000</td>
            <td>57%</td>
        </tr>
        <tr class="hover:bg-neutral-secondary-soft cursor-pointer">
            <td class="font-medium text-heading whitespace-nowrap">Ember</td>
            <td>2011/08/12</td>
            <td>500000</td>
            <td>44%</td>
        </tr>
        <tr class="hover:bg-neutral-secondary-soft cursor-pointer">
            <td class="font-medium text-heading whitespace-nowrap">Backbone</td>
            <td>2010/13/10</td>
            <td>300000</td>
            <td>9%</td>
        </tr>
        <tr class="hover:bg-neutral-secondary-soft cursor-pointer">
            <td class="font-medium text-heading whitespace-nowrap">jQuery</td>
            <td>2006/28/01</td>
            <td>6000000</td>
            <td>5%</td>
        </tr>
        <tr class="hover:bg-neutral-secondary-soft cursor-pointer">
            <td class="font-medium text-heading whitespace-nowrap">Bootstrap</td>
            <td>2011/19/08</td>
            <td>1800000</td>
            <td>12%</td>
        </tr>
        <tr class="hover:bg-neutral-secondary-soft cursor-pointer">
            <td class="font-medium text-heading whitespace-nowrap">Foundation</td>
            <td>2011/23/09</td>
            <td>700000</td>
            <td>8%</td>
        </tr>
        <tr class="hover:bg-neutral-secondary-soft cursor-pointer">
            <td class="font-medium text-heading whitespace-nowrap">Bulma</td>
            <td>2016/24/10</td>
            <td>500000</td>
            <td>7%</td>
        </tr>
        <tr class="hover:bg-neutral-secondary-soft cursor-pointer">
            <td class="font-medium text-heading whitespace-nowrap">Next.js</td>
            <td>2016/25/10</td>
            <td>2300000</td>
            <td>45%</td>
        </tr>
        <tr class="hover:bg-neutral-secondary-soft cursor-pointer">
            <td class="font-medium text-heading whitespace-nowrap">Nuxt.js</td>
            <td>2016/16/10</td>
            <td>900000</td>
            <td>50%</td>
        </tr>
        <tr class="hover:bg-neutral-secondary-soft cursor-pointer">
            <td class="font-medium text-heading whitespace-nowrap">Meteor</td>
            <td>2012/17/01</td>
            <td>1000000</td>
            <td>10%</td>
        </tr>
        <tr class="hover:bg-neutral-secondary-soft cursor-pointer">
            <td class="font-medium text-heading whitespace-nowrap">Aurelia</td>
            <td>2015/08/07</td>
            <td>200000</td>
            <td>20%</td>
        </tr>
        <tr class="hover:bg-neutral-secondary-soft cursor-pointer">
            <td class="font-medium text-heading whitespace-nowrap">Inferno</td>
            <td>2016/27/09</td>
            <td>100000</td>
            <td>35%</td>
        </tr>
        <tr class="hover:bg-neutral-secondary-soft cursor-pointer">
            <td class="font-medium text-heading whitespace-nowrap">Preact</td>
            <td>2015/16/08</td>
            <td>600000</td>
            <td>28%</td>
        </tr>
        <tr class="hover:bg-neutral-secondary-soft cursor-pointer">
            <td class="font-medium text-heading whitespace-nowrap">Lit</td>
            <td>2018/28/05</td>
            <td>400000</td>
            <td>60%</td>
        </tr>
        <tr class="hover:bg-neutral-secondary-soft cursor-pointer">
            <td class="font-medium text-heading whitespace-nowrap">Alpine.js</td>
            <td>2019/02/11</td>
            <td>300000</td>
            <td>70%</td>
        </tr>
        <tr class="hover:bg-neutral-secondary-soft cursor-pointer">
            <td class="font-medium text-heading whitespace-nowrap">Stimulus</td>
            <td>2018/06/03</td>
            <td>150000</td>
            <td>25%</td>
        </tr>
        <tr class="hover:bg-neutral-secondary-soft cursor-pointer">
            <td class="font-medium text-heading whitespace-nowrap">Solid</td>
            <td>2021/05/07</td>
            <td>250000</td>
            <td>80%</td>
        </tr>
    </tbody>
</table>
{{< /example >}}

## JavaScript behaviour

Learn more about how you can customize the DataTables plugin such as changing the default options, customizing the table appearance, dynamically loading data, and more by checking the examples below.

After installing the DataTables plugin either via NPM or CDN you can initialize by calling the `DataTable` constructor and passing the table selector as the first argument.

{{< code lang="javascript" file="datatables.js" icon="file" >}}
// if you installed via CDN
const dataTable = new simpleDatatables.DataTable("#default-table");

// if you installed via NPM
import { DataTable } from "simple-datatables";
const dataTable = DataTable("#default-table");
{{< /code >}}

You can pass an object of options as the second argument to customize the table appearance and behavior.

{{< code lang="javascript" file="datatables.js" icon="file" >}}
const dataTable = new simpleDatatables.DataTable("#default-table", options);
{{< /code >}}

After initializing the DataTable, you can access the instance methods and properties.

Here's a full list of the <a href="https://fiduswriter.github.io/simple-datatables/documentation/#events" target="_blank" rel="nofollow">exposed methods and properties</a> from the simple-datatables repository.

## Options

Check out some of the more commonly used options that you can pass to the DataTable instance.

### Injecting data

Use the `data` option to pass data from an array of arrays to the table using JavaScript.

{{< code lang="javascript" file="datatables.js" icon="file" >}}
const customData = {
    "headings": [
        "Name",
        "Company",
        "Date",
    ],
    "data": [
        [
            "Flowbite",
            "Bergside",
            "05/23/2023",
        ],
        [
            "Next.js",
            "Vercel",
            "03/12/2024",
    ],
};

const dataTable = new DataTable("#default-table", { data: customData });
{{< /code >}}

This is a useful feature where instead of a hard coded array you can pass data from an API or a JSON file.

### Appearance

Use the following options to customize the appearance of the table such as adding a caption, custom classes, footer, header, updating the HTML rendering template, and enabling vertical scrolling, and more.

{{< code lang="javascript" file="datatables.js" icon="file" >}}
const dataTable = new DataTable("#default-table", {
    caption: "Flowbite is an open-source library",
    classes: {
        // add custom HTML classes, full list: https://fiduswriter.github.io/simple-datatables/documentation/classes
        // we recommend keeping the default ones in addition to whatever you want to add because Flowbite hooks to the default classes for styles
    },
    footer: true, // enable or disable the footer
    header: true, // enable or disable the header
    labels: {
        // add custom text for the labels, full list: https://fiduswriter.github.io/simple-datatables/documentation/labels
    },
    template: (options, dom) => {
        // add custom HTML template for the table, full list: https://fiduswriter.github.io/simple-datatables/documentation/template
    },
    scrollY: "300px", // enable vertical scrolling
});
{{< /code >}}

These options are useful if you want to add your own HTML elements inside the dynamically generated table header or footer as we used in the export a file example above.

### Pagination

Use these options to enable pagination, set the number of rows per page, and customize the appearance.

{{< code lang="javascript" file="datatables.js" icon="file" >}}
const dataTable = new DataTable("#default-table", {
    paging: true, // enable or disable pagination
    perPage: 10, // set the number of rows per page
    perPageSelect: [5, 10, 20, 50], // set the number of rows per page options
    firstLast: true, // enable or disable the first and last buttons
    nextPrev: true, // enable or disable the next and previous buttons
});
{{< /code >}}

Pagination is a useful feature when you have a large dataset and you want to split it into multiple pages.

### Searching

These options can be used to enable searching, set the search placeholder, and customize the appearance.

{{< code lang="javascript" file="datatables.js" icon="file" >}}
const dataTable = new DataTable("#default-table", {
    searchable: true, // enable or disable searching
    sensitivity: "base" // set the search sensitivity (base, accent, case, variant)
    searchQuerySeparator: " ", // set the search query separator
});
{{< /code >}}

The searching feature is great when you have a large dataset and you want to search for a specific row.

### Sorting

Use these options to enable sorting, set the default sort column, and customize the sort appearance.

{{< code lang="javascript" file="datatables.js" icon="file" >}}
const dataTable = new DataTable("#default-table", {
    sortable: true, // enable or disable sorting
    locale: "en-US", // set the locale for sorting
    numeric: true, // enable or disable numeric sorting
    caseFirst: "false", // set the case first for sorting (upper, lower)
    ignorePunctuation: true // enable or disable punctuation sorting
});
{{< /code >}}

The sorting feature is useful when you want to sort the table rows based on a specific column.

## Methods

Check out some of the common methods that you can use to interact with the DataTable instance.

{{< code lang="javascript" file="datatables.js" icon="file" >}}
// programatically search the table where the "term" variable is the query string
dataTable.search(term, columns);

// add a new table row data to the table (considering you have four columns)
dataTable.insert({
    "Heading 1": "Cell 1",
    "Heading 2": "Cell 2",
    "Heading 3": "Cell 3",
    "Heading 4": "Cell 4",
});

// updates the DOM of the table
dataTable.update();
{{< /code >}}

Here's a full list of the <a href="https://fiduswriter.github.io/simple-datatables/documentation/#methods" target="_blank" rel="nofollow">exposed methods and properties</a> from the simple-datatables repository.

## License

All of the examples above built by Flowbite are open-source and licensed under the MIT license. The simple-datatables repository is also open-source and licensed under the <a href="https://github.com/fiduswriter/simple-datatables/blob/main/LICENSE" target="_blank" rel="nofollow">GNU license</a>.