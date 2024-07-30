---
layout: home
title: Tailwind CSS Datatables - Flowbite
description: Use the datatable component to search, sort, filter, export and paginate table data of rows and columns for your web application coded with the utility classes from Tailwind CSS
toc: true
requires_js: true

previous: Charts
previousLink: plugins/charts/
---

The datatable component examples from Flowbite are open-source under the MIT License and they are based on the [simple-datatables](https://github.com/fiduswriter/simple-datatables) repository from GitHub which you need to install via NPM or CDN.

This page provides multiple examples of datatable components where you can search, sort, filter, paginate and export table data up to thousands of entries coded with Tailwind CSS and leveraging JavaScript code provided by the parent library.

All examples are responsive, dark mode and RTL support included and by installing the Flowbite plugin the custom styles will automatically be applied to the datatable components using Tailwind CSS.

## Getting started

Before continuing make sure that you have Tailwind CSS, Flowbite, and Simple Datables in your project.

1. Install Tailwind CSS and follow our <a href="{{< ref "getting-started/quickstart" >}}">quickstart guide</a> to install Flowbite and the official plugin
2. Set the field `datatables` to the value `true` inside the `tailwind.config.js` file:

```javascript
plugins: [
  require('flowbite/plugin')({
      datatables: true,
  }),
  // ... other plugins
]
```

3. Install the `simple-datatables` library using NPM:

```bash
npm install simple-datatables --save
```

Alternatively, you can also include it in your project using CDN:

```html
<script src="https://cdn.jsdelivr.net/npm/simple-datatables@9.0.3"></script>
```

Now that you have installed all libraries you can start copy-pasting the datatable components from Flowbite.

Make sure that in addition to the HTML markup you also copy the JavaScript code to initialize the component.

## Default datatable

Use this example to show table data with default sorting and pagination functionalities.

{{< example id="default-datatable-example" class="flex justify-center dark:bg-gray-900" github="plugins/datatables.md" show_dark=true datatables=true disable_init_js=true javascript=`
if (document.getElementById("default-table") && typeof simpleDatatables.DataTable !== 'undefined') {
    let dataTable = new simpleDatatables.DataTable("#default-table", {
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
            <td class="font-medium text-gray-900 whitespace-nowrap dark:text-white">Flowbite</td>
            <td>2021/25/09</td>
            <td>269000</td>
            <td>49%</td>
        </tr>
        <tr>
            <td class="font-medium text-gray-900 whitespace-nowrap dark:text-white">React</td>
            <td>2013/24/05</td>
            <td>4500000</td>
            <td>24%</td>
        </tr>
        <tr>
            <td class="font-medium text-gray-900 whitespace-nowrap dark:text-white">Angular</td>
            <td>2010/20/09</td>
            <td>2800000</td>
            <td>17%</td>
        </tr>
        <tr>
            <td class="font-medium text-gray-900 whitespace-nowrap dark:text-white">Vue</td>
            <td>2014/12/02</td>
            <td>3600000</td>
            <td>30%</td>
        </tr>
        <tr>
            <td class="font-medium text-gray-900 whitespace-nowrap dark:text-white">Svelte</td>
            <td>2016/26/11</td>
            <td>1200000</td>
            <td>57%</td>
        </tr>
        <tr>
            <td class="font-medium text-gray-900 whitespace-nowrap dark:text-white">Ember</td>
            <td>2011/08/12</td>
            <td>500000</td>
            <td>44%</td>
        </tr>
        <tr>
            <td class="font-medium text-gray-900 whitespace-nowrap dark:text-white">Backbone</td>
            <td>2010/13/10</td>
            <td>300000</td>
            <td>9%</td>
        </tr>
        <tr>
            <td class="font-medium text-gray-900 whitespace-nowrap dark:text-white">jQuery</td>
            <td>2006/28/01</td>
            <td>6000000</td>
            <td>5%</td>
        </tr>
        <tr>
            <td class="font-medium text-gray-900 whitespace-nowrap dark:text-white">Bootstrap</td>
            <td>2011/19/08</td>
            <td>1800000</td>
            <td>12%</td>
        </tr>
        <tr>
            <td class="font-medium text-gray-900 whitespace-nowrap dark:text-white">Foundation</td>
            <td>2011/23/09</td>
            <td>700000</td>
            <td>8%</td>
        </tr>
        <tr>
            <td class="font-medium text-gray-900 whitespace-nowrap dark:text-white">Bulma</td>
            <td>2016/24/10</td>
            <td>500000</td>
            <td>7%</td>
        </tr>
        <tr>
            <td class="font-medium text-gray-900 whitespace-nowrap dark:text-white">Next.js</td>
            <td>2016/25/10</td>
            <td>2300000</td>
            <td>45%</td>
        </tr>
        <tr>
            <td class="font-medium text-gray-900 whitespace-nowrap dark:text-white">Nuxt.js</td>
            <td>2016/16/10</td>
            <td>900000</td>
            <td>50%</td>
        </tr>
        <tr>
            <td class="font-medium text-gray-900 whitespace-nowrap dark:text-white">Meteor</td>
            <td>2012/17/01</td>
            <td>1000000</td>
            <td>10%</td>
        </tr>
        <tr>
            <td class="font-medium text-gray-900 whitespace-nowrap dark:text-white">Aurelia</td>
            <td>2015/08/07</td>
            <td>200000</td>
            <td>20%</td>
        </tr>
        <tr>
            <td class="font-medium text-gray-900 whitespace-nowrap dark:text-white">Inferno</td>
            <td>2016/27/09</td>
            <td>100000</td>
            <td>35%</td>
        </tr>
        <tr>
            <td class="font-medium text-gray-900 whitespace-nowrap dark:text-white">Preact</td>
            <td>2015/16/08</td>
            <td>600000</td>
            <td>28%</td>
        </tr>
        <tr>
            <td class="font-medium text-gray-900 whitespace-nowrap dark:text-white">Lit</td>
            <td>2018/28/05</td>
            <td>400000</td>
            <td>60%</td>
        </tr>
        <tr>
            <td class="font-medium text-gray-900 whitespace-nowrap dark:text-white">Alpine.js</td>
            <td>2019/02/11</td>
            <td>300000</td>
            <td>70%</td>
        </tr>
        <tr>
            <td class="font-medium text-gray-900 whitespace-nowrap dark:text-white">Stimulus</td>
            <td>2018/06/03</td>
            <td>150000</td>
            <td>25%</td>
        </tr>
        <tr>
            <td class="font-medium text-gray-900 whitespace-nowrap dark:text-white">Solid</td>
            <td>2021/05/07</td>
            <td>250000</td>
            <td>80%</td>
        </tr>
    </tbody>
</table>
{{< /example >}}

## Table search

Set the `searchable` option to `true` to enable the search functionality for all table data.

{{< example id="search-datatable-example" class="flex justify-center dark:bg-gray-900" github="plugins/datatables.md" show_dark=true datatables=true disable_init_js=true javascript=`
if (document.getElementById("search-table") && typeof simpleDatatables.DataTable !== 'undefined') {
    let dataTable = new simpleDatatables.DataTable("#search-table", {
        searchable: true
    });
}
` >}}
<table id="search-table">
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
            <td class="font-medium text-gray-900 whitespace-nowrap dark:text-white">Flowbite</td>
            <td>2021/25/09</td>
            <td>269000</td>
            <td>49%</td>
        </tr>
        <tr>
            <td class="font-medium text-gray-900 whitespace-nowrap dark:text-white">React</td>
            <td>2013/24/05</td>
            <td>4500000</td>
            <td>24%</td>
        </tr>
        <tr>
            <td class="font-medium text-gray-900 whitespace-nowrap dark:text-white">Angular</td>
            <td>2010/20/09</td>
            <td>2800000</td>
            <td>17%</td>
        </tr>
        <tr>
            <td class="font-medium text-gray-900 whitespace-nowrap dark:text-white">Vue</td>
            <td>2014/12/02</td>
            <td>3600000</td>
            <td>30%</td>
        </tr>
        <tr>
            <td class="font-medium text-gray-900 whitespace-nowrap dark:text-white">Svelte</td>
            <td>2016/26/11</td>
            <td>1200000</td>
            <td>57%</td>
        </tr>
        <tr>
            <td class="font-medium text-gray-900 whitespace-nowrap dark:text-white">Ember</td>
            <td>2011/08/12</td>
            <td>500000</td>
            <td>44%</td>
        </tr>
        <tr>
            <td class="font-medium text-gray-900 whitespace-nowrap dark:text-white">Backbone</td>
            <td>2010/13/10</td>
            <td>300000</td>
            <td>9%</td>
        </tr>
        <tr>
            <td class="font-medium text-gray-900 whitespace-nowrap dark:text-white">jQuery</td>
            <td>2006/28/01</td>
            <td>6000000</td>
            <td>5%</td>
        </tr>
        <tr>
            <td class="font-medium text-gray-900 whitespace-nowrap dark:text-white">Bootstrap</td>
            <td>2011/19/08</td>
            <td>1800000</td>
            <td>12%</td>
        </tr>
        <tr>
            <td class="font-medium text-gray-900 whitespace-nowrap dark:text-white">Foundation</td>
            <td>2011/23/09</td>
            <td>700000</td>
            <td>8%</td>
        </tr>
        <tr>
            <td class="font-medium text-gray-900 whitespace-nowrap dark:text-white">Bulma</td>
            <td>2016/24/10</td>
            <td>500000</td>
            <td>7%</td>
        </tr>
        <tr>
            <td class="font-medium text-gray-900 whitespace-nowrap dark:text-white">Next.js</td>
            <td>2016/25/10</td>
            <td>2300000</td>
            <td>45%</td>
        </tr>
        <tr>
            <td class="font-medium text-gray-900 whitespace-nowrap dark:text-white">Nuxt.js</td>
            <td>2016/16/10</td>
            <td>900000</td>
            <td>50%</td>
        </tr>
        <tr>
            <td class="font-medium text-gray-900 whitespace-nowrap dark:text-white">Meteor</td>
            <td>2012/17/01</td>
            <td>1000000</td>
            <td>10%</td>
        </tr>
        <tr>
            <td class="font-medium text-gray-900 whitespace-nowrap dark:text-white">Aurelia</td>
            <td>2015/08/07</td>
            <td>200000</td>
            <td>20%</td>
        </tr>
        <tr>
            <td class="font-medium text-gray-900 whitespace-nowrap dark:text-white">Inferno</td>
            <td>2016/27/09</td>
            <td>100000</td>
            <td>35%</td>
        </tr>
        <tr>
            <td class="font-medium text-gray-900 whitespace-nowrap dark:text-white">Preact</td>
            <td>2015/16/08</td>
            <td>600000</td>
            <td>28%</td>
        </tr>
        <tr>
            <td class="font-medium text-gray-900 whitespace-nowrap dark:text-white">Lit</td>
            <td>2018/28/05</td>
            <td>400000</td>
            <td>60%</td>
        </tr>
        <tr>
            <td class="font-medium text-gray-900 whitespace-nowrap dark:text-white">Alpine.js</td>
            <td>2019/02/11</td>
            <td>300000</td>
            <td>70%</td>
        </tr>
        <tr>
            <td class="font-medium text-gray-900 whitespace-nowrap dark:text-white">Stimulus</td>
            <td>2018/06/03</td>
            <td>150000</td>
            <td>25%</td>
        </tr>
        <tr>
            <td class="font-medium text-gray-900 whitespace-nowrap dark:text-white">Solid</td>
            <td>2021/05/07</td>
            <td>250000</td>
            <td>80%</td>
        </tr>
    </tbody>
</table>
{{< /example >}}

## Filtering data

{{< example id="filter-datatable-example" class="flex justify-center dark:bg-gray-900" github="plugins/datatables.md" show_dark=true datatables=true disable_init_js=true javascript=`
if (document.getElementById("filter-table") && typeof simpleDatatables.DataTable !== 'undefined') {
    let dataTable = new simpleDatatables.DataTable("#filter-table", {
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
            <td class="font-medium text-gray-900 whitespace-nowrap dark:text-white">Apple iMac</td>
            <td>Computers</td>
            <td>Apple</td>
            <td>$1,299</td>
            <td>50</td>
            <td>200</td>
            <td>In Stock</td>
        </tr>
        <tr>
            <td class="font-medium text-gray-900 whitespace-nowrap dark:text-white">Apple iPhone</td>
            <td>Mobile Phones</td>
            <td>Apple</td>
            <td>$999</td>
            <td>120</td>
            <td>300</td>
            <td>In Stock</td>
        </tr>
        <tr>
            <td class="font-medium text-gray-900 whitespace-nowrap dark:text-white">Samsung Galaxy</td>
            <td>Mobile Phones</td>
            <td>Samsung</td>
            <td>$899</td>
            <td>80</td>
            <td>150</td>
            <td>In Stock</td>
        </tr>
        <tr>
            <td class="font-medium text-gray-900 whitespace-nowrap dark:text-white">Dell XPS 13</td>
            <td>Computers</td>
            <td>Dell</td>
            <td>$1,099</td>
            <td>30</td>
            <td>120</td>
            <td>In Stock</td>
        </tr>
        <tr>
            <td class="font-medium text-gray-900 whitespace-nowrap dark:text-white">HP Spectre x360</td>
            <td>Computers</td>
            <td>HP</td>
            <td>$1,299</td>
            <td>25</td>
            <td>80</td>
            <td>In Stock</td>
        </tr>
        <tr>
            <td class="font-medium text-gray-900 whitespace-nowrap dark:text-white">Google Pixel 6</td>
            <td>Mobile Phones</td>
            <td>Google</td>
            <td>$799</td>
            <td>100</td>
            <td>200</td>
            <td>In Stock</td>
        </tr>
        <tr>
            <td class="font-medium text-gray-900 whitespace-nowrap dark:text-white">Sony WH-1000XM4</td>
            <td>Headphones</td>
            <td>Sony</td>
            <td>$349</td>
            <td>60</td>
            <td>150</td>
            <td>In Stock</td>
        </tr>
        <tr>
            <td class="font-medium text-gray-900 whitespace-nowrap dark:text-white">Apple AirPods Pro</td>
            <td>Headphones</td>
            <td>Apple</td>
            <td>$249</td>
            <td>200</td>
            <td>300</td>
            <td>In Stock</td>
        </tr>
        <tr>
            <td class="font-medium text-gray-900 whitespace-nowrap dark:text-white">Asus ROG Zephyrus</td>
            <td>Computers</td>
            <td>Asus</td>
            <td>$1,899</td>
            <td>15</td>
            <td>50</td>
            <td>In Stock</td>
        </tr>
        <tr>
            <td class="font-medium text-gray-900 whitespace-nowrap dark:text-white">Microsoft Surface Pro 7</td>
            <td>Computers</td>
            <td>Microsoft</td>
            <td>$899</td>
            <td>40</td>
            <td>100</td>
            <td>In Stock</td>
        </tr>
        <tr>
            <td class="font-medium text-gray-900 whitespace-nowrap dark:text-white">Samsung QLED TV</td>
            <td>Televisions</td>
            <td>Samsung</td>
            <td>$1,299</td>
            <td>25</td>
            <td>70</td>
            <td>In Stock</td>
        </tr>
        <tr>
            <td class="font-medium text-gray-900 whitespace-nowrap dark:text-white">LG OLED TV</td>
            <td>Televisions</td>
            <td>LG</td>
            <td>$1,499</td>
            <td>20</td>
            <td>50</td>
            <td>In Stock</td>
        </tr>
        <tr>
            <td class="font-medium text-gray-900 whitespace-nowrap dark:text-white">Canon EOS R5</td>
            <td>Cameras</td>
            <td>Canon</td>
            <td>$3,899</td>
            <td>10</td>
            <td>30</td>
            <td>In Stock</td>
        </tr>
        <tr>
            <td class="font-medium text-gray-900 whitespace-nowrap dark:text-white">Nikon Z7 II</td>
            <td>Cameras</td>
            <td>Nikon</td>
            <td>$3,299</td>
            <td>8</td>
            <td>25</td>
            <td>In Stock</td>
        </tr>
        <tr>
            <td class="font-medium text-gray-900 whitespace-nowrap dark:text-white">Apple Watch Series 7</td>
            <td>Wearables</td>
            <td>Apple</td>
            <td>$399</td>
            <td>150</td>
            <td>500</td>
            <td>In Stock</td>
        </tr>
        <tr>
            <td class="font-medium text-gray-900 whitespace-nowrap dark:text-white">Fitbit Charge 5</td>
            <td>Wearables</td>
            <td>Fitbit</td>
            <td>$179</td>
            <td>100</td>
            <td>250</td>
            <td>In Stock</td>
        </tr>
        <tr>
            <td class="font-medium text-gray-900 whitespace-nowrap dark:text-white">Dyson V11 Vacuum</td>
            <td>Home Appliances</td>
            <td>Dyson</td>
            <td>$599</td>
            <td>30</td>
            <td>90</td>
            <td>In Stock</td>
        </tr>
        <tr>
            <td class="font-medium text-gray-900 whitespace-nowrap dark:text-white">iRobot Roomba i7+</td>
            <td>Home Appliances</td>
            <td>iRobot</td>
            <td>$799</td>
            <td>20</td>
            <td>70</td>
            <td>In Stock</td>
        </tr>
        <tr>
            <td class="font-medium text-gray-900 whitespace-nowrap dark:text-white">Bose SoundLink Revolve</td>
            <td>Speakers</td>
            <td>Bose</td>
            <td>$199</td>
            <td>80</td>
            <td>200</td>
            <td>In Stock</td>
        </tr>
        <tr>
            <td class="font-medium text-gray-900 whitespace-nowrap dark:text-white">Sonos One</td>
            <td>Speakers</td>
            <td>Sonos</td>
            <td>$219</td>
            <td>60</td>
            <td>180</td>
            <td>In Stock</td>
        </tr>
        <tr>
            <td class="font-medium text-gray-900 whitespace-nowrap dark:text-white">Apple iPad Pro</td>
            <td>Tablets</td>
            <td>Apple</td>
            <td>$1,099</td>
            <td>50</td>
            <td>150</td>
            <td>In Stock</td>
        </tr>
        <tr>
            <td class="font-medium text-gray-900 whitespace-nowrap dark:text-white">Samsung Galaxy Tab S7</td>
            <td>Tablets</td>
            <td>Samsung</td>
            <td>$649</td>
            <td>70</td>
            <td>130</td>
            <td>In Stock</td>
        </tr>
        <tr>
            <td class="font-medium text-gray-900 whitespace-nowrap dark:text-white">Amazon Echo Dot</td>
            <td>Smart Home</td>
            <td>Amazon</td>
            <td>$49</td>
            <td>300</td>
            <td>800</td>
            <td>In Stock</td>
        </tr>
        <tr>
            <td class="font-medium text-gray-900 whitespace-nowrap dark:text-white">Google Nest Hub</td>
            <td>Smart Home</td>
            <td>Google</td>
            <td>$89</td>
            <td>150</td>
            <td>400</td>
            <td>In Stock</td>
        </tr>
        <tr>
            <td class="font-medium text-gray-900 whitespace-nowrap dark:text-white">PlayStation 5</td>
            <td>Gaming Consoles</td>
            <td>Sony</td>
            <td>$499</td>
            <td>10</td>
            <td>500</td>
            <td>Out of Stock</td>
        </tr>
        <tr>
            <td class="font-medium text-gray-900 whitespace-nowrap dark:text-white">Xbox Series X</td>
            <td>Gaming Consoles</td>
            <td>Microsoft</td>
            <td>$499</td>
            <td>15</td>
            <td>450</td>
            <td>Out of Stock</td>
        </tr>
        <tr>
            <td class="font-medium text-gray-900 whitespace-nowrap dark:text-white">Nintendo Switch</td>
            <td>Gaming Consoles</td>
            <td>Nintendo</td>
            <td>$299</td>
            <td>40</td>
            <td>600</td>
            <td>In Stock</td>
        </tr>
        <tr>
            <td class="font-medium text-gray-900 whitespace-nowrap dark:text-white">Apple MacBook Pro</td>
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

{{< example id="sorting-datatable-example" class="flex justify-center dark:bg-gray-900" github="plugins/datatables.md" show_dark=true datatables=true disable_init_js=true javascript=`
if (document.getElementById("sorting-table") && typeof simpleDatatables.DataTable !== 'undefined') {
    let dataTable = new simpleDatatables.DataTable("#sorting-table", {
        searchable: false,
        perPageSelect: false
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
                    GDP (in billions)
                    <svg class="w-4 h-4 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m8 15 4 4 4-4m0-6-4-4-4 4"/>
                    </svg>
                </span>
            </th>
            <th>
                <span class="flex items-center">
                    Population (in millions)
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
            <td class="font-medium text-gray-900 whitespace-nowrap dark:text-white">United States</td>
            <td>21433</td>
            <td>331</td>
            <td>$64763</td>
        </tr>
        <tr>
            <td class="font-medium text-gray-900 whitespace-nowrap dark:text-white">China</td>
            <td>14342</td>
            <td>1441</td>
            <td>$9957</td>
        </tr>
        <tr>
            <td class="font-medium text-gray-900 whitespace-nowrap dark:text-white">Japan</td>
            <td>5082</td>
            <td>126</td>
            <td>$40335</td>
        </tr>
        <tr>
            <td class="font-medium text-gray-900 whitespace-nowrap dark:text-white">Germany</td>
            <td>3846</td>
            <td>83</td>
            <td>$46386</td>
        </tr>
        <tr>
            <td class="font-medium text-gray-900 whitespace-nowrap dark:text-white">India</td>
            <td>2875</td>
            <td>1380</td>
            <td>$2083</td>
        </tr>
        <tr>
            <td class="font-medium text-gray-900 whitespace-nowrap dark:text-white">United Kingdom</td>
            <td>2829</td>
            <td>67</td>
            <td>$42224</td>
        </tr>
        <tr>
            <td class="font-medium text-gray-900 whitespace-nowrap dark:text-white">France</td>
            <td>2716</td>
            <td>65</td>
            <td>$41723</td>
        </tr>
        <tr>
            <td class="font-medium text-gray-900 whitespace-nowrap dark:text-white">Italy</td>
            <td>2001</td>
            <td>60</td>
            <td>$33350</td>
        </tr>
        <tr>
            <td class="font-medium text-gray-900 whitespace-nowrap dark:text-white">Canada</td>
            <td>1643</td>
            <td>38</td>
            <td>$43237</td>
        </tr>
        <tr>
            <td class="font-medium text-gray-900 whitespace-nowrap dark:text-white">South Korea</td>
            <td>1631</td>
            <td>52</td>
            <td>$31365</td>
        </tr>
        <tr>
            <td class="font-medium text-gray-900 whitespace-nowrap dark:text-white">Russia</td>
            <td>1460</td>
            <td>144</td>
            <td>$10139</td>
        </tr>
        <tr>
            <td class="font-medium text-gray-900 whitespace-nowrap dark:text-white">Brazil</td>
            <td>1430</td>
            <td>213</td>
            <td>$6718</td>
        </tr>
        <tr>
            <td class="font-medium text-gray-900 whitespace-nowrap dark:text-white">Australia</td>
            <td>1393</td>
            <td>25</td>
            <td>$55720</td>
        </tr>
        <tr>
            <td class="font-medium text-gray-900 whitespace-nowrap dark:text-white">Spain</td>
            <td>1326</td>
            <td>47</td>
            <td>$28255</td>
        </tr>
        <tr>
            <td class="font-medium text-gray-900 whitespace-nowrap dark:text-white">Mexico</td>
            <td>1194</td>
            <td>129</td>
            <td>$9255</td>
        </tr>
        <tr>
            <td class="font-medium text-gray-900 whitespace-nowrap dark:text-white">Indonesia</td>
            <td>1158</td>
            <td>273</td>
            <td>$4241</td>
        </tr>
        <tr>
            <td class="font-medium text-gray-900 whitespace-nowrap dark:text-white">Netherlands</td>
            <td>1010</td>
            <td>17</td>
            <td>$59412</td>
        </tr>
        <tr>
            <td class="font-medium text-gray-900 whitespace-nowrap dark:text-white">Saudi Arabia</td>
            <td>804</td>
            <td>35</td>
            <td>$22914</td>
        </tr>
        <tr>
            <td class="font-medium text-gray-900 whitespace-nowrap dark:text-white">Turkey</td>
            <td>761</td>
            <td>84</td>
            <td>$9060</td>
        </tr>
        <tr>
            <td class="font-medium text-gray-900 whitespace-nowrap dark:text-white">Switzerland</td>
            <td>741</td>
            <td>9</td>
            <td>$82333</td>
        </tr>
    </tbody>
</table>

{{< /example >}}

## Table pagination

## Export files

## Options

## JavaScript behaviour