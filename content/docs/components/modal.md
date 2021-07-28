---
layout: docs
title: Modal
description: Build vertically collapsing accordions in combination with our Collapse JavaScript plugin.
group: components
toc: true
---

## Notification
{{< example >}}
<!-- Button Modal -->
<button type="button" class="btn btn-block btn-primary mb-3" data-bs-toggle="modal" data-bs-target="#modalNotification">Notification</button>
<!-- Modal Content -->
<div class="modal fade" id="modalNotification" tabindex="-1" role="dialog" aria-labelledby="modalTitleNotify" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <p class="modal-title" id="modalTitleNotify">A new experience, personalized for you.</p>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <div class="py-3 text-center">
                    <svg class="icon icon-xl text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"></path></svg>
                    <h2 class="h4 modal-title my-3">Important message!</h2>
                    <p>Do you know that you can assign status and relation to a company right in the visit list?</p>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-sm btn-primary">Go to Inbox</button>
            </div>
        </div>
    </div>
</div>
<!-- End of Modal Content -->
{{< /example >}}

## Sign In
{{< example >}}
<!-- Button Modal -->
<button type="button" class="btn btn-block btn-primary mb-3" data-bs-toggle="modal" data-bs-target="#modalSignIn">Sign In</button>
<!-- Modal Content -->
<div class="modal fade" id="modalSignIn" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body px-md-5">
                <h2 class="h4 text-center">Sign in to our platform</h2>
                <p class="text-center mb-4">Login here using your username and password</p>
                <form action="#">
                    <!-- Form -->
                    <div class="form-group mb-4">
                        <label for="email">Your Email</label>
                        <div class="input-group">
                            <span class="input-group-text border-gray-300" id="basic-addon3">
                                <svg class="icon icon-xxs" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                            </span>
                            <input type="email" class="form-control border-gray-300" placeholder="example@company.com" id="email" autofocus required>
                        </div>  
                    </div>
                    <!-- End of Form -->
                    <div class="form-group">
                        <!-- Form -->
                        <div class="form-group mb-4">
                            <label for="password">Your Password</label>
                            <div class="input-group">
                                <span class="input-group-text border-gray-300" id="basic-addon4">
                                    <svg class="icon icon-xxs"" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd"></path></svg>
                                </span>
                                <input type="password" placeholder="Password" class="form-control border-gray-300" id="password" required>
                            </div>  
                        </div>
                        <!-- End of Form -->
                        <div class="form-check mb-4">
                            <input class="form-check-input border-gray-300" type="checkbox" value="" id="terms" required>
                            <label class="form-check-label" for="terms">
                                I agree to the <a href="#">terms and conditions</a>
                            </label>
                        </div>
                    </div>
                    <div class="d-grid">
                        <button type="submit" class="btn btn-primary">Sign in</button>
                    </div>
                </form>
                <div class="text-center mt-3 mb-2">
                    <span class="fw-normal">or</span>
                </div>
                <div class="d-flex justify-content-center my-2">
                    <a href="#" class="btn btn-icon-only btn-info text-white me-2" aria-label="facebook button" title="facebook button">
                        <span aria-hidden="true" class="fab fa-facebook-f"></span>
                    </a>
                    <a href="#" class="btn btn-icon-only btn-cyan text-white me-2" aria-label="twitter button" title="twitter button">
                        <span aria-hidden="true" class="fab fa-twitter"></span>
                    </a>
                    <a href="#" class="btn btn-icon-only btn-pill btn-dark text-white" aria-label="github button" title="github button">
                        <span aria-hidden="true" class="fab fa-github"></span>
                    </a>
                </div>
                <div class="d-flex justify-content-center align-items-center mt-4">
                    <span class="fw-normal">
                        Not registered? 
                        <a href="./sign-up.html" class="fw-bold">Create account</a>
                    </span>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- End of Modal Content -->
{{< /example >}}

## Sign Up
{{< example >}}
<!-- Button Modal -->
<button type="button" class="btn btn-block btn-primary mb-3" data-bs-toggle="modal" data-bs-target="#modalSignUp">Sign Up</button>
<!-- Modal Content -->
<div class="modal fade" id="modalSignUp" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body px-md-5">
                <h2 class="h4 text-center">Create Account</h2>
                <p class="text-center mb-4">One account. All of Themesberg working for you.</p>
                <form action="#">
                    <!-- Form -->
                    <div class="form-group mb-4">
                        <label for="email">Your Email</label>
                        <div class="input-group">
                            <span class="input-group-text border-gray-300" id="basic-addon3">
                                <svg class="icon icon-xxs" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                            </span>
                            <input type="email" class="form-control border-gray-300" placeholder="example@company.com" id="email" autofocus required>
                        </div>  
                    </div>
                    <!-- End of Form -->
                    <div class="form-group">
                        <!-- Form -->
                        <div class="form-group mb-4">
                            <label for="password">Your Password</label>
                            <div class="input-group">
                                <span class="input-group-text border-gray-300" id="basic-addon4">
                                    <svg class="icon icon-xxs"" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd"></path></svg>
                                </span>
                                <input type="password" placeholder="Password" class="form-control border-gray-300" id="password" required>
                            </div>  
                        </div>
                        <!-- End of Form -->
                        <!-- Form -->
                        <div class="form-group mb-4">
                            <label for="confirm_password">Confirm Password</label>
                            <div class="input-group">
                                <span class="input-group-text border-gray-300" id="basic-addon5">
                                    <svg class="icon icon-xxs"" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd"></path></svg>
                                </span>
                                <input type="password" placeholder="Confirm Password" class="form-control border-gray-300" id="confirm_password" required>
                            </div>  
                        </div>
                        <!-- End of Form -->
                        <div class="form-check mb-4">
                            <input class="form-check-input border-gray-300" type="checkbox" value="" id="terms" required>
                            <label class="form-check-label" for="terms">
                                I agree to the <a href="#">terms and conditions</a>
                            </label>
                        </div>
                    </div>
                    <div class="d-grid">
                        <button type="submit" class="btn btn-primary">Sign up</button>
                    </div>
                </form>
                <div class="text-center mt-3 mb-2">
                    <span class="fw-normal">or</span>
                </div>
                <div class="d-flex justify-content-center my-2">
                    <a href="#" class="btn btn-icon-only btn-info text-white me-2" type="button" aria-label="facebook button" title="facebook button">
                        <span aria-hidden="true" class="fab fa-facebook-f"></span>
                    </a>
                    <a href="#" class="btn btn-icon-only btn-cyan text-white me-2" type="button" aria-label="twitter button" title="twitter button">
                        <span aria-hidden="true" class="fab fa-twitter"></span>
                    </a>
                    <a href="#" class="btn btn-icon-only btn-pill btn-dark text-white" type="button" aria-label="github button" title="github button">
                        <span aria-hidden="true" class="fab fa-github"></span>
                    </a>
                </div>
                <div class="d-flex justify-content-center align-items-center mt-4">
                    <span class="fw-normal">
                        Already have an account?
                        <a href="./sign-in.html" class="fw-bold">Login here</a>
                    </span>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- End of Modal Content -->
{{< /example >}}

## Subscribe
{{< example >}}
<!-- Button Modal -->
<button type="button" class="btn btn-block btn-primary mb-3" data-bs-toggle="modal" data-bs-target="#modalSubscribe">Subscribe</button>
<!-- Modal Content -->
<div class="modal fade" id="modalSubscribe" tabindex="-1" role="dialog" aria-labelledby="modalTitleSubscribe" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div class="modal-content py-xl-4">
            <div class="modal-body text-center py-3">
                <svg class="icon icon-xl text-primary mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path></svg>
                <h3 class="modal-title mb-3" id="modalTitleSubscribe">Join our 1,360,462 subscribers</h3>
                <p class="mb-4 lead">Get exclusive access to freebies, premium products and news.</p>
                <div class="form-group px-lg-5">
                    <div class="d-flex mb-3 justify-content-center">
                        <input type="text" id="subscribe" class="me-sm-1 mb-sm-0 form-control form-control-lg border-gray-300" placeholder="example@company.com">
                        <div>
                            <button type="submit" class="ms-2 btn large-form-btn btn-primary">Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer z-2 mx-auto text-center">
                <p class="text-dark fw-normal font-small">
                    We’ll never share your details with third parties.
                    <br class="visible-md">View our <a href="#">Privacy Policy</a> for more info.
                </p>
            </div>
        </div>
    </div>
</div>
<!-- End of Modal Content -->
{{< /example >}}
