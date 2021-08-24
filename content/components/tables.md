---
layout: home
title: Tables
description: Documentation and examples for adding custom Bootstrap tooltips with CSS and JavaScript using CSS3 for animations and data-bs-attributes for local title storage.
group: components
toc: true
---

## Default

In this example you can see the sizes fo buttons:

{{< example >}}
<div class="flex flex-col">
    <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div class="overflow-hidden sm:rounded-lg shadow-md">
                <table class="min-w-full">
                    <thead class="bg-gray-50">
                        <tr>
                            <th scope="col" class="text-xs font-medium text-gray-700 px-6 py-3 text-left uppercase tracking-wider">
                                Name
                            </th>
                            <th scope="col" class="text-xs font-medium text-gray-700 px-6 py-3 text-left uppercase tracking-wider">
                                Color
                            </th>
                            <th scope="col" class="text-xs font-medium text-gray-700 px-6 py-3 text-left uppercase tracking-wider">
                                Category
                            </th>
                            <th scope="col" class="text-xs font-medium text-gray-700 px-6 py-3 text-left uppercase tracking-wider">
                                Price
                            </th>
                            <th scope="col" class="relative px-6 py-3">
                                <span class="sr-only">Edit</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <!-- Product 1 -->
                        <tr class="bg-white border-b">
                            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                Apple MacBook Pro 17"
                            </td>
                            <td class="text-sm text-gray-500 px-6 py-4 whitespace-nowrap">
                                Sliver
                            </td>
                            <td class="text-sm text-gray-500 px-6 py-4 whitespace-nowrap">
                                Laptop
                            </td>
                            <td class="text-sm text-gray-500 px-6 py-4 whitespace-nowrap">
                                $2999
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                <a href="#" class="text-blue-600 hover:text-blue-900">Edit</a>
                            </td>
                        </tr>
                        <!-- Product 2 -->
                        <tr class="bg-white border-b">
                            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                Apple Imac 27"
                            </td>
                            <td class="text-sm text-gray-500 px-6 py-4 whitespace-nowrap">
                                White
                            </td>
                            <td class="text-sm text-gray-500 px-6 py-4 whitespace-nowrap">
                                Desktop Pc
                            </td>
                            <td class="text-sm text-gray-500 px-6 py-4 whitespace-nowrap">
                                $1999
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                <a href="#" class="text-blue-600 hover:text-blue-900">Edit</a>
                            </td>
                        </tr>
                        <!-- Product 2 -->
                        <tr class="bg-white">
                            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                Apple Magic Mouse 2
                            </td>
                            <td class="text-sm text-gray-500 px-6 py-4 whitespace-nowrap">
                                White
                            </td>
                            <td class="text-sm text-gray-500 px-6 py-4 whitespace-nowrap">
                                Accessories
                            </td>
                            <td class="text-sm text-gray-500 px-6 py-4 whitespace-nowrap">
                                $99
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                <a href="#" class="text-blue-600 hover:text-blue-900">Edit</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
{{< /example >}}