---
layout: docs
title: Colors
description: Use the color system of Glass UI to apply any desired color to inline text elements
group: utilities
toc: true
---

Glass UI extends the default utility classes from Bootstrap which specify the `color` of any inline text element.

## Text color

Colorize any inline text element using the `.text-{color}` utility classes where the color can be anything from the `$theme-colors` variables.

{{< example >}}
{{< text-colors.inline >}}
{{- range (index $.Site.Data "theme-colors") }}<p class="text-{{ .name }} {{ if .contrast_color }}bg-dark{{ end }}">Design is not just what it looks like and feels like. Design is how it works.</p>
{{ end -}}
{{< /text-colors.inline >}}
{{< /example >}}

You can also use the colors from the `$grays` variable.

{{< example >}}
{{< text-colors.inline >}}
{{- range (index $.Site.Data "grays") }}<p class="text-{{ .name }} {{ if .contrast_color }}bg-dark{{ end }}">Design is not just what it looks like and feels like. Design is how it works.</p>
{{ end -}}
{{< /text-colors.inline >}}
{{< /example >}}

And you can also use the following special classes, such as `text-muted`, `text-body` (which is the default body color), `black-50`, `white-50`, and `reset`.

{{< example >}}
<p class="text-muted">Design is not just what it looks like and feels like. Design is how it works.</p>
<p class="text-black-50">Design is not just what it looks like and feels like. Design is how it works.</p>
<p class="text-white-50 bg-dark">Design is not just what it looks like and feels like. Design is how it works.</p>
<p class="text-reset">Design is not just what it looks like and feels like. Design is how it works.</p>
{{< /example >}}

<pre class="bg-soft language-bash">
<code class="language-bash">
.
├── components
│   ├── buttons.blade.php                       # Buttons page
│   ├── forms.blade.php                         # Forms page
│   ├── modals.blade.php                        # Modals page
│   ├── notifications.blade.php                 # Notifications page
│   └── typography.blade.php                    # Typography page
├── dashboard.blade.php                         # Dashboard
├── layouts
│   ├── app.blade.php                           # Including layouts based on routes
│   ├── base.blade.php                          # All the styles and scripts included
│   ├── footer2.blade.php                       # Footer for pages without sidenav
│   ├── footer.blade.php                        # Footer for pages with sidenav
│   ├── nav.blade.php                           # Nav for mobile view 
│   ├── sidenav.blade.php                       # The sidebar menu
│   └── topbar.blade.php                        # Search bar, notifications and user area
├── livewire                                    # All the pages that are using livewire functionality
│   ├── auth                                    # Handles auth routes (login and register)
│   │   ├── login.blade.php                     
│   │   └── register.blade.php
│   ├── forgot-password.blade.php               # Handles the forgot-password form
│   ├── logout.blade.php                        # Logout functionality
│   ├── profile.blade.php                       # Profile page
│   ├── reset-password.blade.php                # Handles the reset password form
│   └── users.blade.php                         # Users table
├── upgrade-to-pro.blade.php                    # Upgrade to pro page
├── lock.blade.php                              # Lock page
└── transactions.blade.php                      # Transactions page
├── 404.blade.php                               # Error 404 page
├── 500.blade.php                               # Error 500 page
├── bootstrap-tables.blade.php                  # Bootstrap tables page                
</code>
</pre>