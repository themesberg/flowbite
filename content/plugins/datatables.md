---
layout: home
title: Tailwind CSS Datatables - Flowbite
description: 
group: plugins
toc: true
requires_js: true

previous: Horizontal line (HR)
previousLink: typography/hr/
---

## Default datatable

{{< example id="default-area-chart-example" class="flex justify-center dark:bg-gray-900" github="plugins/datatables.md" show_dark=true datatables=true disable_init_js=true javascript=`
if (document.getElementById("demo-table") && typeof simpleDatatables.DataTable !== 'undefined') {
  let dataTable = new simpleDatatables.DataTable("#demo-table", {
    perPageSelect: [5, 10, 15, ["All", -1]],
        columns: [
            {
                select: 1,
                sortSequence: ["desc", "asc"]
            },
            {
                select: 2,
                sortSequence: ["desc"]
            },
            {
                select: 3,
                cellClass: "green",
                headerClass: "red"
            }
        ]
    });
}
` >}}
<table id="demo-table">
    <thead>
        <tr>
            <th>Name</th>
            <th data-type="date" data-format="YYYY/DD/MM">Release Date</th>
            <th>NPM Downloads</th>
            <th>Growth</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="font-medium text-gray-900 whitespace-nowrap dark:text-white">React</td>
            <td>2013/24/05</td>
            <td>4,500,000</td>
            <td>24%</td>
        </tr>
        <tr>
            <td class="font-medium text-gray-900 whitespace-nowrap dark:text-white">Angular</td>
            <td>2010/20/09</td>
            <td>2,800,000</td>
            <td>17%</td>
        </tr>
        <tr>
            <td class="font-medium text-gray-900 whitespace-nowrap dark:text-white">Vue</td>
            <td>2014/12/02</td>
            <td>3,600,000</td>
            <td>30%</td>
        </tr>
        <tr>
            <td class="font-medium text-gray-900 whitespace-nowrap dark:text-white">Svelte</td>
            <td>2016/26/11</td>
            <td>1,200,000</td>
            <td>57%</td>
        </tr>
        <tr>
            <td class="font-medium text-gray-900 whitespace-nowrap dark:text-white">Ember</td>
            <td>2011/08/12</td>
            <td>500,000</td>
            <td>44%</td>
        </tr>
        <tr>
            <td class="font-medium text-gray-900 whitespace-nowrap dark:text-white">Backbone</td>
            <td>2010/13/10</td>
            <td>300,000</td>
            <td>9%</td>
        </tr>
        <tr>
            <td class="font-medium text-gray-900 whitespace-nowrap dark:text-white">jQuery</td>
            <td>2006/28/01</td>
            <td>6,000,000</td>
            <td>5%</td>
        </tr>
        <tr>
            <td class="font-medium text-gray-900 whitespace-nowrap dark:text-white">Bootstrap</td>
            <td>2011/19/08</td>
            <td>1,800,000</td>
            <td>12%</td>
        </tr>
        <tr>
            <td class="font-medium text-gray-900 whitespace-nowrap dark:text-white">Foundation</td>
            <td>2011/23/09</td>
            <td>700,000</td>
            <td>8%</td>
        </tr>
        <tr>
            <td class="font-medium text-gray-900 whitespace-nowrap dark:text-white">Bulma</td>
            <td>2016/24/10</td>
            <td>500,000</td>
            <td>7%</td>
        </tr>
        <tr>
            <td class="font-medium text-gray-900 whitespace-nowrap dark:text-white">Next.js</td>
            <td>2016/25/10</td>
            <td>2,300,000</td>
            <td>45%</td>
        </tr>
        <tr>
            <td class="font-medium text-gray-900 whitespace-nowrap dark:text-white">Nuxt.js</td>
            <td>2016/16/10</td>
            <td>900,000</td>
            <td>50%</td>
        </tr>
        <tr>
            <td class="font-medium text-gray-900 whitespace-nowrap dark:text-white">Meteor</td>
            <td>2012/17/01</td>
            <td>1,000,000</td>
            <td>10%</td>
        </tr>
        <tr>
            <td class="font-medium text-gray-900 whitespace-nowrap dark:text-white">Aurelia</td>
            <td>2015/08/07</td>
            <td>200,000</td>
            <td>20%</td>
        </tr>
        <tr>
            <td class="font-medium text-gray-900 whitespace-nowrap dark:text-white">Inferno</td>
            <td>2016/27/09</td>
            <td>100,000</td>
            <td>35%</td>
        </tr>
        <tr>
            <td class="font-medium text-gray-900 whitespace-nowrap dark:text-white">Preact</td>
            <td>2015/16/08</td>
            <td>600,000</td>
            <td>28%</td>
        </tr>
        <tr>
            <td class="font-medium text-gray-900 whitespace-nowrap dark:text-white">Lit</td>
            <td>2018/28/05</td>
            <td>400,000</td>
            <td>60%</td>
        </tr>
        <tr>
            <td class="font-medium text-gray-900 whitespace-nowrap dark:text-white">Alpine.js</td>
            <td>2019/02/11</td>
            <td>300,000</td>
            <td>70%</td>
        </tr>
        <tr>
            <td class="font-medium text-gray-900 whitespace-nowrap dark:text-white">Stimulus</td>
            <td>2018/06/03</td>
            <td>150,000</td>
            <td>25%</td>
        </tr>
        <tr>
            <td class="font-medium text-gray-900 whitespace-nowrap dark:text-white">Solid</td>
            <td>2021/05/07</td>
            <td>250,000</td>
            <td>80%</td>
        </tr>
    </tbody>
</table>
{{< /example >}}