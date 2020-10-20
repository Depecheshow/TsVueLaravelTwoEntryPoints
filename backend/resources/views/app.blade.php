<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link rel="stylesheet" href="{{ URL::asset('css/app.css') }}">
    <title>Laravel</title>
</head>
<body>
<div id="app" class="d-flex flex-column">
    <header-component></header-component>
    <router-view class="container"></router-view>
    <footer-component class="mt-auto"></footer-component>
</div>
<script src="{{ URL::asset('js/app.js') }}"></script>
</body>
