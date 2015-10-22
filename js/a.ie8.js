


<!DOCTYPE html>
<html lang="en" class=" is-copy-enabled">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Language" content="en">
    <meta name="viewport" content="width=1020">
    
    
    <title>ES5-DOM-SHIM/a.ie8.js at 0.8 · termi/ES5-DOM-SHIM</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png">
    <meta property="fb:app_id" content="1401488693436528">

      <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="termi/ES5-DOM-SHIM" name="twitter:title" /><meta content="ES5-DOM-SHIM - Lightweight ES5 and DOM shim with IE6 and IE7 support" name="twitter:description" /><meta content="https://avatars2.githubusercontent.com/u/973643?v=3&amp;s=400" name="twitter:image:src" />
      <meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://avatars2.githubusercontent.com/u/973643?v=3&amp;s=400" property="og:image" /><meta content="termi/ES5-DOM-SHIM" property="og:title" /><meta content="https://github.com/termi/ES5-DOM-SHIM" property="og:url" /><meta content="ES5-DOM-SHIM - Lightweight ES5 and DOM shim with IE6 and IE7 support" property="og:description" />
      <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">
    <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">
    <link rel="assets" href="https://assets-cdn.github.com/">
    <link rel="web-socket" href="wss://live.github.com/_sockets/MjU4Nzc0NTpmNmY5OTI4MWYwN2JiZDcwMDE4MTBkZmE4OGNkNDg4NDo1M2E5NDA3YzQyODU3NjcxOTcyNWVhYzY3Mzc4YzM0NjUwZTQ1ODg0OTM5OGI5ODNhMjY0YzA0Zjc0YzhkNWQ4--bc55bc8c27fb78485fa5b290177a0d562057e64f">
    <meta name="pjax-timeout" content="1000">
    <link rel="sudo-modal" href="/sessions/sudo_modal">

    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="selected-link" value="repo_source" data-pjax-transient>

    <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
    <meta name="google-analytics" content="UA-3769691-2">

<meta content="collector.githubapp.com" name="octolytics-host" /><meta content="github" name="octolytics-app-id" /><meta content="70AA3BF0:45C5:9222A53:5628F318" name="octolytics-dimension-request_id" /><meta content="2587745" name="octolytics-actor-id" /><meta content="hkgit" name="octolytics-actor-login" /><meta content="ad04872b60f74bf7019845583b26dc7228a44f0b50a94826e3bc2c506440ffcf" name="octolytics-actor-hash" />

<meta content="Rails, view, blob#show" data-pjax-transient="true" name="analytics-event" />


  <meta class="js-ga-set" name="dimension1" content="Logged In">
    <meta class="js-ga-set" name="dimension4" content="Current repo nav">




    <meta name="is-dotcom" content="true">
        <meta name="hostname" content="github.com">
    <meta name="user-login" content="hkgit">

      <link rel="mask-icon" href="https://assets-cdn.github.com/pinned-octocat.svg" color="#4078c0">
      <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">

    <meta content="10547a7c627bc51e7f7c7bb5e3dc892d919653c6" name="form-nonce" />

    <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/github-ce671588d7b6afbb8bc61feba5b37b4acc3341aec654ff7a2405b657922ff0c1.css" media="all" rel="stylesheet" />
    <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/github2-8d66f9bfcef65682f8b799f2330467be836c483d58670c9388d40c9e4c0492a3.css" media="all" rel="stylesheet" />
    
    
    


    <meta http-equiv="x-pjax-version" content="f7a60445478c6154531fdca94f3ffd1b">

      
  <meta name="description" content="ES5-DOM-SHIM - Lightweight ES5 and DOM shim with IE6 and IE7 support">
  <meta name="go-import" content="github.com/termi/ES5-DOM-SHIM git https://github.com/termi/ES5-DOM-SHIM.git">

  <meta content="973643" name="octolytics-dimension-user_id" /><meta content="termi" name="octolytics-dimension-user_login" /><meta content="2843268" name="octolytics-dimension-repository_id" /><meta content="termi/ES5-DOM-SHIM" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="2843268" name="octolytics-dimension-repository_network_root_id" /><meta content="termi/ES5-DOM-SHIM" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/termi/ES5-DOM-SHIM/commits/0.8.atom" rel="alternate" title="Recent Commits to ES5-DOM-SHIM:0.8" type="application/atom+xml">

  </head>


  <body class="logged_in   env-production windows vis-public page-blob">
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>

    
    
    



      <div class="header header-logged-in true" role="banner">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/" data-hotkey="g d" aria-label="Homepage" data-ga-click="Header, go to dashboard, icon:logo">
  <span class="mega-octicon octicon-mark-github"></span>
</a>


      <div class="site-search repo-scope js-site-search" role="search">
          <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/termi/ES5-DOM-SHIM/search" class="js-site-search-form" data-global-search-url="/search" data-repo-search-url="/termi/ES5-DOM-SHIM/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
  <label class="js-chromeless-input-container form-control">
    <div class="scope-badge">This repository</div>
    <input type="text"
      class="js-site-search-focus js-site-search-field is-clearable chromeless-input"
      data-hotkey="s"
      name="q"
      placeholder="Search"
      aria-label="Search this repository"
      data-global-scope-placeholder="Search GitHub"
      data-repo-scope-placeholder="Search"
      tabindex="1"
      autocapitalize="off">
  </label>
</form>
      </div>

      <ul class="header-nav left" role="navigation">
        <li class="header-nav-item">
          <a href="/pulls" class="js-selected-navigation-item header-nav-link" data-ga-click="Header, click, Nav menu - item:pulls context:user" data-hotkey="g p" data-selected-links="/pulls /pulls/assigned /pulls/mentioned /pulls">
            Pull requests
</a>        </li>
        <li class="header-nav-item">
          <a href="/issues" class="js-selected-navigation-item header-nav-link" data-ga-click="Header, click, Nav menu - item:issues context:user" data-hotkey="g i" data-selected-links="/issues /issues/assigned /issues/mentioned /issues">
            Issues
</a>        </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="https://gist.github.com/" data-ga-click="Header, go to gist, text:gist">Gist</a>
          </li>
      </ul>

    
<ul class="header-nav user-nav right" id="user-links">
  <li class="header-nav-item">
      <span class="js-socket-channel js-updatable-content"
        data-channel="notification-changed:hkgit"
        data-url="/notifications/header">
      <a href="/notifications" aria-label="You have no unread notifications" class="header-nav-link notification-indicator tooltipped tooltipped-s" data-ga-click="Header, go to notifications, icon:read" data-hotkey="g n">
          <span class="mail-status all-read"></span>
          <span class="octicon octicon-bell"></span>
</a>  </span>

  </li>

  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link tooltipped tooltipped-s js-menu-target" href="/new"
       aria-label="Create new…"
       data-ga-click="Header, create new, icon:add">
      <span class="octicon octicon-plus left"></span>
      <span class="dropdown-caret"></span>
    </a>

    <div class="dropdown-menu-content js-menu-content">
      <ul class="dropdown-menu dropdown-menu-sw">
        
<a class="dropdown-item" href="/new" data-ga-click="Header, create new repository">
  New repository
</a>


  <a class="dropdown-item" href="/organizations/new" data-ga-click="Header, create new organization">
    New organization
  </a>



  <div class="dropdown-divider"></div>
  <div class="dropdown-header">
    <span title="termi/ES5-DOM-SHIM">This repository</span>
  </div>
    <a class="dropdown-item" href="/termi/ES5-DOM-SHIM/issues/new" data-ga-click="Header, create new issue">
      New issue
    </a>

      </ul>
    </div>
  </li>

  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link name tooltipped tooltipped-s js-menu-target" href="/hkgit"
       aria-label="View profile and more"
       data-ga-click="Header, show menu, icon:avatar">
      <img alt="@hkgit" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/2587745?v=3&amp;s=40" width="20" />
      <span class="dropdown-caret"></span>
    </a>

    <div class="dropdown-menu-content js-menu-content">
      <div class="dropdown-menu  dropdown-menu-sw">
        <div class=" dropdown-header header-nav-current-user css-truncate">
            Signed in as <strong class="css-truncate-target">hkgit</strong>

        </div>


        <div class="dropdown-divider"></div>

          <a class="dropdown-item" href="/hkgit" data-ga-click="Header, go to profile, text:your profile">
            Your profile
          </a>
        <a class="dropdown-item" href="/stars" data-ga-click="Header, go to starred repos, text:your stars">
          Your stars
        </a>
        <a class="dropdown-item" href="/explore" data-ga-click="Header, go to explore, text:explore">
          Explore
        </a>
          <a class="dropdown-item" href="/integrations" data-ga-click="Header, go to integrations, text:integrations">
            Integrations
          </a>
        <a class="dropdown-item" href="https://help.github.com" data-ga-click="Header, go to help, text:help">
          Help
        </a>

          <div class="dropdown-divider"></div>

          <a class="dropdown-item" href="/settings/profile" data-ga-click="Header, go to settings, icon:settings">
            Settings
          </a>

          <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/logout" class="logout-form" data-form-nonce="10547a7c627bc51e7f7c7bb5e3dc892d919653c6" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="DWvc0rBVTVqE31shJj0dMJI3erRMVM0hGLU9X6MVeIibWJQ28nwo2HSzwRoj6NN5DqaGP4jieZ7OxgT0PXvJGw==" /></div>
            <button class="dropdown-item dropdown-signout" data-ga-click="Header, sign out, icon:logout">
              Sign out
            </button>
</form>
      </div>
    </div>
  </li>
</ul>


    
  </div>
</div>

      

      


    <div id="start-of-content" class="accessibility-aid"></div>

    <div id="js-flash-container">
</div>


    <div role="main" class="main-content">
        <div itemscope itemtype="http://schema.org/WebPage">
    <div class="pagehead repohead instapaper_ignore readability-menu">

      <div class="container">

        <div class="clearfix">
          

<ul class="pagehead-actions">

  <li>
      <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-form-nonce="10547a7c627bc51e7f7c7bb5e3dc892d919653c6" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="pPWD25fAgoMO7dEz9guAtJaVGt+XVrCg8B0QpT2AKg4Rh3Jrs5dpr8kA0+uV+pGkiv1LXrcZp5OgGPSlaOR3Lw==" /></div>    <input id="repository_id" name="repository_id" type="hidden" value="2843268" />

      <div class="select-menu js-menu-container js-select-menu">
        <a href="/termi/ES5-DOM-SHIM/subscription"
          class="btn btn-sm btn-with-count select-menu-button js-menu-target" role="button" tabindex="0" aria-haspopup="true"
          data-ga-click="Repository, click Watch settings, action:blob#show">
          <span class="js-select-button">
            <span class="octicon octicon-eye"></span>
            Watch
          </span>
        </a>
        <a class="social-count js-social-count" href="/termi/ES5-DOM-SHIM/watchers">
          8
        </a>

        <div class="select-menu-modal-holder">
          <div class="select-menu-modal subscription-menu-modal js-menu-content" aria-hidden="true">
            <div class="select-menu-header">
              <span class="select-menu-title">Notifications</span>
              <span class="octicon octicon-x js-menu-close" role="button" aria-label="Close"></span>
            </div>

            <div class="select-menu-list js-navigation-container" role="menu">

              <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
                <span class="select-menu-item-icon octicon octicon-check"></span>
                <div class="select-menu-item-text">
                  <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                  <span class="select-menu-item-heading">Not watching</span>
                  <span class="description">Be notified when participating or @mentioned.</span>
                  <span class="js-select-button-text hidden-select-button-text">
                    <span class="octicon octicon-eye"></span>
                    Watch
                  </span>
                </div>
              </div>

              <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                <span class="select-menu-item-icon octicon octicon octicon-check"></span>
                <div class="select-menu-item-text">
                  <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                  <span class="select-menu-item-heading">Watching</span>
                  <span class="description">Be notified of all conversations.</span>
                  <span class="js-select-button-text hidden-select-button-text">
                    <span class="octicon octicon-eye"></span>
                    Unwatch
                  </span>
                </div>
              </div>

              <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                <span class="select-menu-item-icon octicon octicon-check"></span>
                <div class="select-menu-item-text">
                  <input id="do_ignore" name="do" type="radio" value="ignore" />
                  <span class="select-menu-item-heading">Ignoring</span>
                  <span class="description">Never be notified.</span>
                  <span class="js-select-button-text hidden-select-button-text">
                    <span class="octicon octicon-mute"></span>
                    Stop ignoring
                  </span>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
</form>
  </li>

  <li>
    
  <div class="js-toggler-container js-social-container starring-container ">

    <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/termi/ES5-DOM-SHIM/unstar" class="js-toggler-form starred js-unstar-button" data-form-nonce="10547a7c627bc51e7f7c7bb5e3dc892d919653c6" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="BufjqO+iVcjIftuaETagaCof1EZP5cT1TX/bccvdCjZ/o7ULZPHSRhldZlgVZO3lQCRpNo28BiRnEgQ4oXUI4Q==" /></div>
      <button
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Unstar this repository" title="Unstar termi/ES5-DOM-SHIM"
        data-ga-click="Repository, click unstar button, action:blob#show; text:Unstar">
        <span class="octicon octicon-star"></span>
        Unstar
      </button>
        <a class="social-count js-social-count" href="/termi/ES5-DOM-SHIM/stargazers">
          113
        </a>
</form>
    <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/termi/ES5-DOM-SHIM/star" class="js-toggler-form unstarred js-star-button" data-form-nonce="10547a7c627bc51e7f7c7bb5e3dc892d919653c6" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="9L5PAvHbrSZ3Qv+HMCkFp/esuckFnm9XK0+bA+ausAVFPPTHqPA0/OM2YYx4TTAQ2UNsA+dTjt9x/xNnmjtmFQ==" /></div>
      <button
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Star this repository" title="Star termi/ES5-DOM-SHIM"
        data-ga-click="Repository, click star button, action:blob#show; text:Star">
        <span class="octicon octicon-star"></span>
        Star
      </button>
        <a class="social-count js-social-count" href="/termi/ES5-DOM-SHIM/stargazers">
          113
        </a>
</form>  </div>

  </li>

  <li>
          <a href="#fork-destination-box" class="btn btn-sm btn-with-count"
              title="Fork your own copy of termi/ES5-DOM-SHIM to your account"
              aria-label="Fork your own copy of termi/ES5-DOM-SHIM to your account"
              rel="facebox"
              data-ga-click="Repository, show fork modal, action:blob#show; text:Fork">
            <span class="octicon octicon-repo-forked"></span>
            Fork
          </a>

          <div id="fork-destination-box" style="display: none;">
            <h2 class="facebox-header" data-facebox-id="facebox-header">Where should we fork this repository?</h2>
            <include-fragment src=""
                class="js-fork-select-fragment fork-select-fragment"
                data-url="/termi/ES5-DOM-SHIM/fork?fragment=1">
              <img alt="Loading" height="64" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-128.gif" width="64" />
            </include-fragment>
          </div>

    <a href="/termi/ES5-DOM-SHIM/network" class="social-count">
      11
    </a>
  </li>
</ul>

          <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public ">
  <span class="mega-octicon octicon-repo"></span>
  <span class="author"><a href="/termi" class="url fn" itemprop="url" rel="author"><span itemprop="title">termi</span></a></span><!--
--><span class="path-divider">/</span><!--
--><strong><a href="/termi/ES5-DOM-SHIM" data-pjax="#js-repo-pjax-container">ES5-DOM-SHIM</a></strong>

  <span class="page-context-loader">
    <img alt="" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
  </span>

</h1>

        </div>
      </div>
    </div>

    <div class="container">
      <div class="repository-with-sidebar repo-container new-discussion-timeline ">
        <div class="repository-sidebar clearfix">
          
<nav class="sunken-menu repo-nav js-repo-nav js-sidenav-container-pjax js-octicon-loaders"
     role="navigation"
     data-pjax="#js-repo-pjax-container"
     data-issue-count-url="/termi/ES5-DOM-SHIM/issues/counts">
  <ul class="sunken-menu-group">
    <li class="tooltipped tooltipped-w" aria-label="Code">
      <a href="/termi/ES5-DOM-SHIM" aria-label="Code" aria-selected="true" class="js-selected-navigation-item selected sunken-menu-item" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /termi/ES5-DOM-SHIM">
        <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>    </li>

      <li class="tooltipped tooltipped-w" aria-label="Issues">
        <a href="/termi/ES5-DOM-SHIM/issues" aria-label="Issues" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /termi/ES5-DOM-SHIM/issues">
          <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
          <span class="js-issue-replace-counter"></span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

    <li class="tooltipped tooltipped-w" aria-label="Pull requests">
      <a href="/termi/ES5-DOM-SHIM/pulls" aria-label="Pull requests" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g p" data-selected-links="repo_pulls /termi/ES5-DOM-SHIM/pulls">
          <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull requests</span>
          <span class="js-pull-replace-counter"></span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>    </li>

      <li class="tooltipped tooltipped-w" aria-label="Wiki">
        <a href="/termi/ES5-DOM-SHIM/wiki" aria-label="Wiki" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g w" data-selected-links="repo_wiki /termi/ES5-DOM-SHIM/wiki">
          <span class="octicon octicon-book"></span> <span class="full-word">Wiki</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>
  </ul>
  <div class="sunken-menu-separator"></div>
  <ul class="sunken-menu-group">

    <li class="tooltipped tooltipped-w" aria-label="Pulse">
      <a href="/termi/ES5-DOM-SHIM/pulse" aria-label="Pulse" class="js-selected-navigation-item sunken-menu-item" data-selected-links="pulse /termi/ES5-DOM-SHIM/pulse">
        <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>    </li>

    <li class="tooltipped tooltipped-w" aria-label="Graphs">
      <a href="/termi/ES5-DOM-SHIM/graphs" aria-label="Graphs" class="js-selected-navigation-item sunken-menu-item" data-selected-links="repo_graphs repo_contributors /termi/ES5-DOM-SHIM/graphs">
        <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>    </li>
  </ul>


</nav>

            <div class="only-with-full-nav">
                
<div class="js-clone-url clone-url open"
  data-protocol-type="http">
  <h3 class="text-small text-muted"><span class="text-emphasized">HTTPS</span> clone URL</h3>
  <div class="input-group js-zeroclipboard-container">
    <input type="text" class="input-mini text-small text-muted input-monospace js-url-field js-zeroclipboard-target"
           value="https://github.com/termi/ES5-DOM-SHIM.git" readonly="readonly" aria-label="HTTPS clone URL">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  
<div class="js-clone-url clone-url "
  data-protocol-type="ssh">
  <h3 class="text-small text-muted"><span class="text-emphasized">SSH</span> clone URL</h3>
  <div class="input-group js-zeroclipboard-container">
    <input type="text" class="input-mini text-small text-muted input-monospace js-url-field js-zeroclipboard-target"
           value="git@github.com:termi/ES5-DOM-SHIM.git" readonly="readonly" aria-label="SSH clone URL">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  
<div class="js-clone-url clone-url "
  data-protocol-type="subversion">
  <h3 class="text-small text-muted"><span class="text-emphasized">Subversion</span> checkout URL</h3>
  <div class="input-group js-zeroclipboard-container">
    <input type="text" class="input-mini text-small text-muted input-monospace js-url-field js-zeroclipboard-target"
           value="https://github.com/termi/ES5-DOM-SHIM" readonly="readonly" aria-label="Subversion checkout URL">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>



<div class="clone-options text-small text-muted">You can clone with
  <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone" class="inline-form js-clone-selector-form is-enabled" data-form-nonce="10547a7c627bc51e7f7c7bb5e3dc892d919653c6" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="yfYJKBfi0aKX0P47VyfZVfKrPNrcTwJz4U7RT0gb5/7zQ2S58Cxak+L7hAKpuf9Z0pg/CDUKxk8tO/z9WBIwcg==" /></div><button class="btn-link js-clone-selector" data-protocol="http" type="submit">HTTPS</button></form>, <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/users/set_protocol?protocol_selector=ssh&amp;protocol_type=clone" class="inline-form js-clone-selector-form is-enabled" data-form-nonce="10547a7c627bc51e7f7c7bb5e3dc892d919653c6" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="hiBhXigHuyqSD032xx8zipzvioqXSuxtyrcew+2P2ICaw4YFATyZRDWx0vAMLyRG6Cscfj2fOBHkq89mnzsnQA==" /></div><button class="btn-link js-clone-selector" data-protocol="ssh" type="submit">SSH</button></form>, or <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone" class="inline-form js-clone-selector-form is-enabled" data-form-nonce="10547a7c627bc51e7f7c7bb5e3dc892d919653c6" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="HjEk+96k4NNTGahAWc4vHG91wg2xw9sgN04+y0IEmkAJgVbswUAE2oHtv3l3BsoT7Vpjt5YVqCpB/AoQwQycVQ==" /></div><button class="btn-link js-clone-selector" data-protocol="subversion" type="submit">Subversion</button></form>.
  <a href="https://help.github.com/articles/which-remote-url-should-i-use" class="help tooltipped tooltipped-n" aria-label="Get help on which URL is right for you.">
    <span class="octicon octicon-question"></span>
  </a>
</div>
  <a href="github-windows://openRepo/https://github.com/termi/ES5-DOM-SHIM" class="btn btn-sm sidebar-button" title="Save termi/ES5-DOM-SHIM to your computer and use it in GitHub Desktop." aria-label="Save termi/ES5-DOM-SHIM to your computer and use it in GitHub Desktop.">
    <span class="octicon octicon-desktop-download"></span>
    Clone in Desktop
  </a>

              <a href="/termi/ES5-DOM-SHIM/archive/0.8.zip"
                 class="btn btn-sm sidebar-button"
                 aria-label="Download the contents of termi/ES5-DOM-SHIM as a zip file"
                 title="Download the contents of termi/ES5-DOM-SHIM as a zip file"
                 rel="nofollow">
                <span class="octicon octicon-cloud-download"></span>
                Download ZIP
              </a>
            </div>
        </div>
        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>

          

<a href="/termi/ES5-DOM-SHIM/blob/bd9c253cbace62d9ac259cf714bfd1dbfaadcfae/__COMPILED/a.ie8.js" class="hidden js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:d2556be450541555ac93e4dd376e0e7c -->

  <div class="file-navigation js-zeroclipboard-container">
    
<div class="select-menu js-menu-container js-select-menu left">
  <button class="btn btn-sm select-menu-button js-menu-target css-truncate" data-hotkey="w"
    title="0.8"
    type="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <i>Branch:</i>
    <span class="js-select-button css-truncate-target">0.8</span>
  </button>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-x js-menu-close" role="button" aria-label="Close"></span>
      </div>

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" data-filter-placeholder="Filter branches/tags" class="js-select-menu-tab" role="tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" data-filter-placeholder="Find a tag…" class="js-select-menu-tab" role="tab">Tags</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches" role="menu">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/termi/ES5-DOM-SHIM/blob/0.7/__COMPILED/a.ie8.js"
               data-name="0.7"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="0.7">
                0.7
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open selected"
               href="/termi/ES5-DOM-SHIM/blob/0.8/__COMPILED/a.ie8.js"
               data-name="0.8"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="0.8">
                0.8
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/termi/ES5-DOM-SHIM/blob/Latest_DOM4_API/__COMPILED/a.ie8.js"
               data-name="Latest_DOM4_API"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="Latest_DOM4_API">
                Latest_DOM4_API
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/termi/ES5-DOM-SHIM/blob/dev/__COMPILED/a.ie8.js"
               data-name="dev"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="dev">
                dev
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/termi/ES5-DOM-SHIM/blob/issue-4/__COMPILED/a.ie8.js"
               data-name="issue-4"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="issue-4">
                issue-4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/termi/ES5-DOM-SHIM/blob/issue-5/__COMPILED/a.ie8.js"
               data-name="issue-5"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="issue-5">
                issue-5
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/termi/ES5-DOM-SHIM/blob/master/__COMPILED/a.ie8.js"
               data-name="master"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="master">
                master
              </span>
            </a>
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div>

    </div>
  </div>
</div>

    <div class="btn-group right">
      <a href="/termi/ES5-DOM-SHIM/find/0.8"
            class="js-show-file-finder btn btn-sm empty-icon tooltipped tooltipped-nw"
            data-pjax
            data-hotkey="t"
            aria-label="Quickly jump between files">
        <span class="octicon octicon-list-unordered"></span>
      </a>
      <button aria-label="Copy file path to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </div>

    <div class="breadcrumb js-zeroclipboard-target">
      <span class="repo-root js-repo-root"><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/termi/ES5-DOM-SHIM" class="" data-branch="0.8" data-pjax="true" itemscope="url"><span itemprop="title">ES5-DOM-SHIM</span></a></span></span><span class="separator">/</span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/termi/ES5-DOM-SHIM/tree/0.8/__COMPILED" class="" data-branch="0.8" data-pjax="true" itemscope="url"><span itemprop="title">__COMPILED</span></a></span><span class="separator">/</span><strong class="final-path">a.ie8.js</strong>
    </div>
  </div>


  <div class="commit-tease">
      <span class="right">
        <a class="commit-tease-sha" href="/termi/ES5-DOM-SHIM/commit/bd9c253cbace62d9ac259cf714bfd1dbfaadcfae" data-pjax>
          bd9c253
        </a>
        <time datetime="2013-06-03T20:00:50Z" is="relative-time">Jun 4, 2013</time>
      </span>
      <div>
        <img alt="@termi" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/973643?v=3&amp;s=40" width="20" />
        <a href="/termi" class="user-mention" rel="author">termi</a>
          <a href="/termi/ES5-DOM-SHIM/commit/bd9c253cbace62d9ac259cf714bfd1dbfaadcfae" class="message" data-pjax="true" title="Large update | new methods | bug fixes

a.js:
- XHR exrta object
+ old spec fix classList polyfill
+ Object.isObject
+ [extras] Object.isPlainObject
+ Object.is
+ Object.assign
+ Object.mixin
* Object.create
* new Array.from from latest spec
+ Array.prototype[find, findIndex]
+ String.prototype[trimLeft, trimRight, codePointAt]
* String.prototype[startsWith, endsWith]
+ String.fromCodePoint
+ Number[MAX_INTEGER, EPSILON, parseInt, parseFloat, isNaN, isFinite,
isInteger, toInteger]
+ [extras] Number.isNumeric
+ Math[acosh, asinh, atanh, cbrt, cosh, expm1, hypot, log2, log10,
log1p, sign, sinh, tanh, trunc, imul]
* [extras] DOMStringCollection fix
+ CharacterData.prototype[after, before, replace, remove]
* Fix HTMLSelectionElement.prototype.remove to compare with
Element.prototype.remove
* [NodeList, HTMLAllCollection, HTMLCollection].prototype.&lt;methods&gt; =
Array.prototype.&lt;methods&gt;
* RadioNodeList, &lt;form elements&gt;.prototype.labels,
HTMLLabelElement.prototype.control
+ [optionaly] Remove legacy methods from String.prototype

a.ie8.js:
+ [extras] Object.isPlainObject (working with DOM-objects)
+ (IE8)Array.prototype.splice (bug in IE8) fix
* add &#39;main&#39; to known HTML5 tags
* Function.prototype.apply refactoring
* Node.prototype[addEventListener, removeEventListener, dispatchEvent]
polyfill fixes
* [HTMLInputElement, HTMLTextAreaElement].prototype[selectionStart,
selectionEnd, setSelectionRange] polyfill fixes
* (IE8)CSSStyleDeclaration.prototype[float, opacity] fixes
* (IE8)Element.prototype[getAttribute, setAttribute, hasAttribute,
removeAttribute] polyfill fixes
+ (IE8)TextRectangle.prototype[width, height]

a.ielt8:
&lt;all from a.ie8.js except (IE8)&gt;
* document.createTextNode fix for IE&lt;8
* querySelector[All] and matchesSelector bug fix
* (IE &lt; 8)Element.prototype[getAttribute, setAttribute, hasAttribute,
removeAttribute] polyfill fixes
* (IE &lt; 8)CSSStyleDeclaration.prototype[float, opacity] (returned from
getComputedStyle) fixes

Tests:
+ ES5/6 test cases (still need more tests)">Large update | new methods | bug fixes</a>
      </div>

    <div class="commit-tease-contributors">
      <a class="muted-link contributors-toggle" href="#blob_contributors_box" rel="facebox">
        <strong>1</strong>
         contributor
      </a>
      
    </div>

    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header" data-facebox-id="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list" data-facebox-id="facebox-description">
          <li class="facebox-user-list-item">
            <img alt="@termi" height="24" src="https://avatars2.githubusercontent.com/u/973643?v=3&amp;s=48" width="24" />
            <a href="/termi">termi</a>
          </li>
      </ul>
    </div>
  </div>

<div class="file">
  <div class="file-header">
  <div class="file-actions">

    <div class="btn-group">
      <a href="/termi/ES5-DOM-SHIM/raw/0.8/__COMPILED/a.ie8.js" class="btn btn-sm " id="raw-url">Raw</a>
        <a href="/termi/ES5-DOM-SHIM/blame/0.8/__COMPILED/a.ie8.js" class="btn btn-sm js-update-url-with-hash">Blame</a>
      <a href="/termi/ES5-DOM-SHIM/commits/0.8/__COMPILED/a.ie8.js" class="btn btn-sm " rel="nofollow">History</a>
    </div>

      <a class="octicon-btn tooltipped tooltipped-nw"
         href="github-windows://openRepo/https://github.com/termi/ES5-DOM-SHIM?branch=0.8&amp;filepath=__COMPILED%2Fa.ie8.js"
         aria-label="Open this file in GitHub Desktop"
         data-ga-click="Repository, open with desktop, type:windows">
          <span class="octicon octicon-device-desktop"></span>
      </a>

        <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/termi/ES5-DOM-SHIM/edit/0.8/__COMPILED/a.ie8.js" class="inline-form js-update-url-with-hash" data-form-nonce="10547a7c627bc51e7f7c7bb5e3dc892d919653c6" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="kitjp9AvWnXk1+zQJCigat/Q8tpcw2Q2+D10detaJCul7ypYuhr27JSvMY8cZMg1sGVn5mzJElSdEJigYj82UQ==" /></div>
          <button class="octicon-btn tooltipped tooltipped-nw" type="submit"
            aria-label="Fork this project and edit the file" data-hotkey="e" data-disable-with>
            <span class="octicon octicon-pencil"></span>
          </button>
</form>        <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/termi/ES5-DOM-SHIM/delete/0.8/__COMPILED/a.ie8.js" class="inline-form" data-form-nonce="10547a7c627bc51e7f7c7bb5e3dc892d919653c6" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="DBVpQ4j2akdZ4z2Pkm8n7asjvSOfyIeVMSfRlKWtJcAs7sJk0vtbIM/fqcqL4WjQtOfftCZ5LsJnAhiqwawQWA==" /></div>
          <button class="octicon-btn octicon-btn-danger tooltipped tooltipped-nw" type="submit"
            aria-label="Fork this project and delete the file" data-disable-with>
            <span class="octicon octicon-trashcan"></span>
          </button>
</form>  </div>

  <div class="file-info">
      50 lines (49 sloc)
      <span class="file-info-divider"></span>
    23.7 KB
  </div>
</div>

  

  <div class="blob-wrapper data type-javascript">
      <table class="highlight tab-size js-file-line-container" data-tab-size="8">
      <tr>
        <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-code blob-code-inner js-file-line"><span class="pl-c">/* ES6/DOM4 polyfill for IE8 | @version 0.8.8 | MIT License | github.com/termi */</span></td>
      </tr>
      <tr>
        <td id="L2" class="blob-num js-line-number" data-line-number="2"></td>
        <td id="LC2" class="blob-code blob-code-inner js-file-line"><span class="pl-k">void</span> <span class="pl-k">function</span>(<span class="pl-smi">z</span>){<span class="pl-k">var</span> k<span class="pl-k">=void</span> <span class="pl-c1">0</span>,m<span class="pl-k">=!</span><span class="pl-c1">0</span>,p<span class="pl-k">=</span><span class="pl-c1">null</span>,q<span class="pl-k">=!</span><span class="pl-c1">1</span>;<span class="pl-k">function</span> <span class="pl-en">K</span>(){<span class="pl-k">return</span> <span class="pl-k">function</span>(){}}<span class="pl-k">function</span> <span class="pl-en">A</span>(<span class="pl-smi">a</span>){<span class="pl-k">if</span>(<span class="pl-k">!</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>__isFixed<span class="pl-pds">&quot;</span></span><span class="pl-k">in</span> a<span class="pl-k">||</span>a.isTrusted<span class="pl-k">===</span>q)){<span class="pl-k">var</span> b<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&quot;</span>button<span class="pl-pds">&quot;</span></span><span class="pl-k">in</span> a<span class="pl-k">&amp;&amp;</span>a.button;a.__isFixed<span class="pl-k">=</span>m;<span class="pl-k">if</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>click<span class="pl-pds">&quot;</span></span><span class="pl-k">===</span>a.<span class="pl-c1">type</span><span class="pl-k">||</span><span class="pl-s"><span class="pl-pds">&quot;</span>dblclick<span class="pl-pds">&quot;</span></span><span class="pl-k">===</span>a.<span class="pl-c1">type</span>)a.detail<span class="pl-k">===</span>k<span class="pl-k">&amp;&amp;</span>(a.detail<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&quot;</span>click<span class="pl-pds">&quot;</span></span><span class="pl-k">===</span>a.<span class="pl-c1">type</span><span class="pl-k">?</span><span class="pl-c1">1</span><span class="pl-k">:</span><span class="pl-c1">2</span>),<span class="pl-k">!</span>a.button<span class="pl-k">&amp;&amp;</span>A.b<span class="pl-k">!==</span>k<span class="pl-k">&amp;&amp;</span>(b<span class="pl-k">=</span>A.b);z(a,G);a.defaultPrevented<span class="pl-k">||</span>(a.defaultPrevented<span class="pl-k">=</span>q);a.<span class="pl-c1">target</span><span class="pl-k">||</span>(a.<span class="pl-c1">target</span><span class="pl-k">=</span>a.srcElement<span class="pl-k">||</span>g);a.relatedTarget<span class="pl-k">===</span>k<span class="pl-k">&amp;&amp;</span>a.fromElement<span class="pl-k">&amp;&amp;</span>(a.relatedTarget<span class="pl-k">=</span>a.fromElement<span class="pl-k">==</span>a.<span class="pl-c1">target</span><span class="pl-k">?</span>a.toElement<span class="pl-k">:</span>a.fromElement);<span class="pl-s"><span class="pl-pds">&quot;</span>clientX<span class="pl-pds">&quot;</span></span><span class="pl-k">in</span> a<span class="pl-k">&amp;&amp;</span>a.<span class="pl-c1">pageX</span><span class="pl-k">==</span>p<span class="pl-k">&amp;&amp;</span>(a.<span class="pl-c1">pageX</span><span class="pl-k">=</span>a.clientX<span class="pl-k">+</span>P()<span class="pl-k">-</span>(r.clientLeft<span class="pl-k">||</span><span class="pl-c1">0</span>),a.<span class="pl-c1">pageY</span><span class="pl-k">=</span>a.clientY<span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L3" class="blob-num js-line-number" data-line-number="3"></td>
        <td id="LC3" class="blob-code blob-code-inner js-file-line">Q()<span class="pl-k">-</span>(r.clientTop<span class="pl-k">||</span><span class="pl-c1">0</span>));<span class="pl-k">!</span>a.which<span class="pl-k">&amp;&amp;</span>b<span class="pl-k">&amp;&amp;</span>(a.which<span class="pl-k">=</span>b<span class="pl-k">&amp;</span><span class="pl-c1">1</span><span class="pl-k">?</span><span class="pl-c1">1</span><span class="pl-k">:</span>b<span class="pl-k">&amp;</span><span class="pl-c1">2</span><span class="pl-k">?</span><span class="pl-c1">3</span><span class="pl-k">:</span>b<span class="pl-k">&amp;</span><span class="pl-c1">4</span><span class="pl-k">?</span><span class="pl-c1">2</span><span class="pl-k">:</span><span class="pl-c1">0</span>);<span class="pl-s"><span class="pl-pds">&quot;</span>timeStamp<span class="pl-pds">&quot;</span></span><span class="pl-k">in</span> a<span class="pl-k">||</span>(a.timeStamp<span class="pl-k">=+</span><span class="pl-k">new</span> <span class="pl-en">ha</span>);<span class="pl-s"><span class="pl-pds">&quot;</span>eventPhase<span class="pl-pds">&quot;</span></span><span class="pl-k">in</span> a<span class="pl-k">||</span>(a.eventPhase<span class="pl-k">=</span>a.<span class="pl-c1">target</span><span class="pl-k">==</span><span class="pl-v">this</span><span class="pl-k">?</span><span class="pl-c1">2</span><span class="pl-k">:</span><span class="pl-c1">3</span>);a.keyCode<span class="pl-k">||</span>(a.keyCode<span class="pl-k">=</span>a.charCode<span class="pl-k">||</span>a.which);<span class="pl-k">!</span>a.attrName<span class="pl-k">&amp;&amp;</span>a.propertyName<span class="pl-k">&amp;&amp;</span>(a.attrName<span class="pl-k">=</span>ia.<span class="pl-c1">call</span>(a.propertyName,<span class="pl-s"><span class="pl-pds">&quot;</span>.<span class="pl-pds">&quot;</span></span>)[<span class="pl-c1">0</span>]);<span class="pl-k">return</span> a}}<span class="pl-k">function</span> <span class="pl-en">B</span>(<span class="pl-smi">a</span>){<span class="pl-k">if</span>(A<span class="pl-k">!==</span>k){<span class="pl-k">var</span> b<span class="pl-k">=</span><span class="pl-v">this</span>._,c,d,h,e,E,w,j,n;<span class="pl-k">if</span>(<span class="pl-k">!</span>b.__stop_events__){c<span class="pl-k">=</span>[];d<span class="pl-k">=</span>[];e<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&quot;</span>_e_8vj<span class="pl-pds">&quot;</span></span><span class="pl-k">+</span>(qa<span class="pl-k">?</span><span class="pl-s"><span class="pl-pds">&quot;</span>-<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>);<span class="pl-k">if</span>(<span class="pl-k">!</span>b<span class="pl-k">||!</span>b[e])<span class="pl-k">if</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>__dom0__<span class="pl-pds">&quot;</span></span><span class="pl-k">in</span> a)b<span class="pl-k">||</span>(b<span class="pl-k">=</span>{}),b[e]<span class="pl-k">||</span>(b[e]<span class="pl-k">=</span>{});<span class="pl-k">else</span> <span class="pl-k">return</span>;a<span class="pl-k">||</span>(a<span class="pl-k">=</span>f.<span class="pl-c1">event</span>);<span class="pl-k">if</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>__custom_event<span class="pl-pds">&quot;</span></span><span class="pl-k">in</span> a)h<span class="pl-k">=</span></td>
      </tr>
      <tr>
        <td id="L4" class="blob-num js-line-number" data-line-number="4"></td>
        <td id="LC4" class="blob-code blob-code-inner js-file-line">a;<span class="pl-k">else</span> <span class="pl-k">if</span>(<span class="pl-k">!</span>(h<span class="pl-k">=</span>a.__customEvent__))a.bubbles<span class="pl-k">==</span>k<span class="pl-k">&amp;&amp;</span>(a.bubbles<span class="pl-k">=</span>m),a.cancelable<span class="pl-k">==</span>k<span class="pl-k">&amp;&amp;</span>(a.cancelable<span class="pl-k">=</span>m),h<span class="pl-k">=</span>a.__customEvent__<span class="pl-k">=</span><span class="pl-k">new</span> <span class="pl-en">x</span>(a),h.initEvent(a.<span class="pl-c1">type</span>,a.bubbles,a.cancelable),h.h<span class="pl-k">=</span>a.h<span class="pl-k">!==</span>q,A.<span class="pl-c1">call</span>(<span class="pl-v">this</span>,h),h.__custom_event<span class="pl-k">=</span>p;h.ietl9_event<span class="pl-k">=</span>a;h.currentTarget<span class="pl-k">=</span><span class="pl-v">this</span>;<span class="pl-s"><span class="pl-pds">&quot;</span>__dom0__<span class="pl-pds">&quot;</span></span><span class="pl-k">in</span> a<span class="pl-k">&amp;&amp;</span>(w<span class="pl-k">=</span>a.__dom0__);<span class="pl-k">if</span>((b<span class="pl-k">=</span>b[e][h.<span class="pl-c1">type</span>])<span class="pl-k">||</span>w)E<span class="pl-k">=</span>b<span class="pl-k">?</span>F.<span class="pl-c1">call</span>(b)<span class="pl-k">:</span>[],w<span class="pl-k">&amp;&amp;</span>E.<span class="pl-c1">unshift</span>(w);<span class="pl-k">if</span>(E<span class="pl-k">&amp;&amp;</span>E.<span class="pl-c1">length</span>){<span class="pl-k">for</span>(;w<span class="pl-k">=</span>E.<span class="pl-c1">shift</span>();)<span class="pl-k">if</span>(w<span class="pl-k">&amp;&amp;</span>(<span class="pl-k">!</span>(n<span class="pl-k">=</span>w[H])<span class="pl-k">||</span><span class="pl-s"><span class="pl-pds">&quot;</span>_<span class="pl-pds">&quot;</span></span><span class="pl-k">+</span>n <span class="pl-k">in</span> b)){<span class="pl-s"><span class="pl-pds">&quot;</span>object<span class="pl-pds">&quot;</span></span><span class="pl-k">===typeof</span> w<span class="pl-k">&amp;&amp;</span>(j<span class="pl-k">=</span>w,w<span class="pl-k">=</span>w.handleEvent);<span class="pl-k">try</span>{<span class="pl-k">if</span>(w<span class="pl-k">&amp;&amp;</span>(h.result<span class="pl-k">=</span>s.<span class="pl-c1">call</span>(w,j<span class="pl-k">||</span><span class="pl-v">this</span>,h))<span class="pl-k">===</span>q)h.defaultPrevented<span class="pl-k">===</span></td>
      </tr>
      <tr>
        <td id="L5" class="blob-num js-line-number" data-line-number="5"></td>
        <td id="LC5" class="blob-code blob-code-inner js-file-line">q<span class="pl-k">&amp;&amp;</span>h.returnValue<span class="pl-k">!==</span>q<span class="pl-k">&amp;&amp;</span>h.preventDefault(),h.stopPropagation()}<span class="pl-k">catch</span>(l){c.<span class="pl-c1">push</span>(l),d.<span class="pl-c1">push</span>(l.message)}<span class="pl-k">if</span>(h.__stopNow)<span class="pl-k">break</span>}a.returnValue<span class="pl-k">=</span>h.returnValue;a.cancelBubble<span class="pl-k">=</span>h.cancelBubble;<span class="pl-c1">1</span><span class="pl-k">==</span>c.<span class="pl-c1">length</span><span class="pl-k">?</span>L(c[<span class="pl-c1">0</span>])<span class="pl-k">:</span><span class="pl-c1">1</span><span class="pl-k">&lt;</span>c.<span class="pl-c1">length</span><span class="pl-k">&amp;&amp;</span>(d<span class="pl-k">=</span>Error(<span class="pl-s"><span class="pl-pds">&quot;</span>Multiple errors thrown : <span class="pl-pds">&quot;</span></span><span class="pl-k">+</span>h.<span class="pl-c1">type</span><span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&quot;</span> :  : <span class="pl-pds">&quot;</span></span><span class="pl-k">+</span>d.<span class="pl-c1">join</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>|<span class="pl-pds">&quot;</span></span>)),d.errors<span class="pl-k">=</span>c,L(d))}<span class="pl-v">this</span><span class="pl-k">===</span>g<span class="pl-k">&amp;&amp;</span>(<span class="pl-k">!</span>h.cancelBubble<span class="pl-k">&amp;&amp;</span><span class="pl-c1">3</span><span class="pl-k">===</span>h.eventPhase)<span class="pl-k">&amp;&amp;</span>(B.<span class="pl-c1">call</span>(<span class="pl-v">this</span>.<span class="pl-c1">defaultView</span>,h),a.cancelBubble<span class="pl-k">=</span>m);x.d.<span class="pl-c1">call</span>(h);a.__customEvent__<span class="pl-k">=</span>p}}}<span class="pl-k">function</span> <span class="pl-en">V</span>(<span class="pl-smi">a</span>){<span class="pl-k">var</span> b<span class="pl-k">=</span>(<span class="pl-v">this</span>.__orig__createElement__<span class="pl-k">||</span>W)(a);<span class="pl-k">if</span>(ja.<span class="pl-c1">test</span>(a))<span class="pl-k">return</span> b;<span class="pl-k">~</span>M.<span class="pl-c1">indexOf</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>|<span class="pl-pds">&quot;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L6" class="blob-num js-line-number" data-line-number="6"></td>
        <td id="LC6" class="blob-code blob-code-inner js-file-line">a<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&quot;</span>|<span class="pl-pds">&quot;</span></span>)<span class="pl-k">||</span>(X.<span class="pl-c1">push</span>(a),M<span class="pl-k">+=</span>a<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&quot;</span>|<span class="pl-pds">&quot;</span></span>,(C.__orig__createElement__<span class="pl-k">||</span>C.createElement)(a));<span class="pl-k">return</span> C.<span class="pl-c1">appendChild</span>(b)}<span class="pl-k">function</span> <span class="pl-en">Y</span>(<span class="pl-smi">a</span>){<span class="pl-k">var</span> b<span class="pl-k">=-</span><span class="pl-c1">1</span>;<span class="pl-k">if</span>(a.createElement){<span class="pl-k">for</span>(;<span class="pl-k">++</span>b<span class="pl-k">&lt;</span>X.<span class="pl-c1">length</span>;)a.<span class="pl-c1">createElement</span>(X[b]);a.createElement<span class="pl-k">!==</span>V<span class="pl-k">&amp;&amp;!</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>ielt9<span class="pl-pds">&quot;</span></span><span class="pl-k">in</span> a.createElement)<span class="pl-k">&amp;&amp;</span>(a.__orig__createElement__<span class="pl-k">=</span>a.createElement,a.createElement<span class="pl-k">=</span>V)}<span class="pl-k">return</span> a}<span class="pl-k">var</span> f<span class="pl-k">=</span><span class="pl-v">this</span>,g<span class="pl-k">=</span>f.<span class="pl-c1">document</span>,e,v<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&quot;</span>attachEvent<span class="pl-pds">&quot;</span></span><span class="pl-k">in</span> g<span class="pl-k">&amp;&amp;</span><span class="pl-s"><span class="pl-pds">&quot;</span>all<span class="pl-pds">&quot;</span></span><span class="pl-k">in</span> g<span class="pl-k">&amp;&amp;</span><span class="pl-s"><span class="pl-pds">&quot;</span>uniqueID<span class="pl-pds">&quot;</span></span><span class="pl-k">in</span> g.<span class="pl-c1">documentElement</span><span class="pl-k">&amp;&amp;+</span>((<span class="pl-sr"><span class="pl-pds">/</span>msie (<span class="pl-c1">\d</span><span class="pl-k">+</span>)<span class="pl-pds">/</span>i</span>.<span class="pl-c1">exec</span>(<span class="pl-c1">navigator</span>.<span class="pl-c1">userAgent</span>)<span class="pl-k">||</span>[])[<span class="pl-c1">1</span>]<span class="pl-k">||</span><span class="pl-c1">0</span>)<span class="pl-k">||</span>p;<span class="pl-k">if</span>(v<span class="pl-k">&amp;&amp;!</span>(<span class="pl-c1">9</span><span class="pl-k">&lt;</span>v)){f.Element<span class="pl-k">||</span>((f.Element<span class="pl-k">=</span>f.ActiveXObject).<span class="pl-c1">prototype</span>.ie<span class="pl-k">=</span></td>
      </tr>
      <tr>
        <td id="L7" class="blob-num js-line-number" data-line-number="7"></td>
        <td id="LC7" class="blob-code blob-code-inner js-file-line">m);f.HTMLElement<span class="pl-k">||</span>(f.HTMLElement<span class="pl-k">=</span>f.Element);f.Node<span class="pl-k">||</span>(f.Node<span class="pl-k">=</span>f.Element);f.DocumentFragment<span class="pl-k">||</span>(f.DocumentFragment<span class="pl-k">=</span>f.Document<span class="pl-k">||</span>f.HTMLDocument<span class="pl-k">||</span>(e<span class="pl-k">=</span>K(),<span class="pl-c1">e</span>.<span class="pl-c1">prototype</span><span class="pl-k">=</span>{},e));f.Document<span class="pl-k">||</span>(f.Document<span class="pl-k">=</span>f.DocumentFragment);f._<span class="pl-k">=</span>{ielt9shims<span class="pl-k">:</span>[],orig_<span class="pl-k">:</span>f._,<span class="pl-en">isPlainObject</span><span class="pl-k">:</span><span class="pl-k">function</span>(<span class="pl-smi">a</span>){<span class="pl-k">return</span> a<span class="pl-k">&amp;&amp;</span><span class="pl-s"><span class="pl-pds">&quot;</span>[object Object]<span class="pl-pds">&quot;</span></span><span class="pl-k">===</span>Z.<span class="pl-c1">call</span>(a)<span class="pl-k">&amp;&amp;</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>function<span class="pl-pds">&quot;</span></span><span class="pl-k">===typeof</span> a.<span class="pl-c1">constructor</span><span class="pl-k">&amp;&amp;</span><span class="pl-s"><span class="pl-pds">&quot;</span>[object Function]<span class="pl-pds">&quot;</span></span><span class="pl-k">===</span>Z.<span class="pl-c1">call</span>(a.<span class="pl-c1">constructor</span>)<span class="pl-k">||</span>a.__proto__<span class="pl-k">===</span>p)<span class="pl-k">&amp;&amp;!</span>R(a,<span class="pl-s"><span class="pl-pds">&quot;</span>callee<span class="pl-pds">&quot;</span></span>)},apply<span class="pl-k">:</span><span class="pl-c1">Function</span>.<span class="pl-c1">prototype</span>.apply};<span class="pl-k">var</span> n<span class="pl-k">=</span>f._.ielt9shims,$<span class="pl-k">=</span>g.createDocumentFragment,W<span class="pl-k">=</span></td>
      </tr>
      <tr>
        <td id="L8" class="blob-num js-line-number" data-line-number="8"></td>
        <td id="LC8" class="blob-code blob-code-inner js-file-line">g.createElement,aa<span class="pl-k">=</span>g.createTextNode,r<span class="pl-k">=</span>g.<span class="pl-c1">documentElement</span>,<span class="pl-en">L</span><span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">a</span>){<span class="pl-k">throw</span><span class="pl-s"><span class="pl-pds">&quot;</span>object<span class="pl-pds">&quot;</span></span><span class="pl-k">==typeof</span> a<span class="pl-k">&amp;&amp;</span>a <span class="pl-k">instanceof</span> Error<span class="pl-k">?</span>a<span class="pl-k">:</span>Error(a);},<span class="pl-en">ka</span><span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">a</span>){<span class="pl-k">var</span> b<span class="pl-k">=</span><span class="pl-c1">Object</span>.create(DOMException.<span class="pl-c1">prototype</span>);b.<span class="pl-c1">code</span><span class="pl-k">=</span>DOMException[a];b.message<span class="pl-k">=</span>a<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&quot;</span>: DOM Exception <span class="pl-pds">&quot;</span></span><span class="pl-k">+</span>b.<span class="pl-c1">code</span>;<span class="pl-k">throw</span> b;},<span class="pl-en">la</span><span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">a</span>,<span class="pl-smi">b</span>){<span class="pl-k">for</span>(<span class="pl-k">var</span> c <span class="pl-k">in</span> b)<span class="pl-k">if</span>(R(b,c)<span class="pl-k">&amp;&amp;</span>a[c]<span class="pl-k">!==</span>b[c])<span class="pl-k">try</span>{a[c]<span class="pl-k">=</span>b[c]}<span class="pl-k">catch</span>(d){}},ta<span class="pl-k">=</span><span class="pl-c1">String</span>.<span class="pl-c1">prototype</span>.trim<span class="pl-k">||</span><span class="pl-k">function</span>(){<span class="pl-k">for</span>(<span class="pl-k">var</span> a<span class="pl-k">=</span><span class="pl-v">this</span>.<span class="pl-c1">replace</span>(ra,<span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>),b<span class="pl-k">=</span>a.<span class="pl-c1">length</span>;sa.<span class="pl-c1">test</span>(a.<span class="pl-c1">charAt</span>(<span class="pl-k">--</span>b)););<span class="pl-k">return</span> a.<span class="pl-c1">slice</span>(<span class="pl-c1">0</span>,b<span class="pl-k">+</span><span class="pl-c1">1</span>)},ia<span class="pl-k">=</span><span class="pl-c1">String</span>.<span class="pl-c1">prototype</span>.split,ua<span class="pl-k">=</span><span class="pl-c1">String</span>.<span class="pl-c1">prototype</span>.substr,</td>
      </tr>
      <tr>
        <td id="L9" class="blob-num js-line-number" data-line-number="9"></td>
        <td id="LC9" class="blob-code blob-code-inner js-file-line">F<span class="pl-k">=</span><span class="pl-c1">Array</span>.<span class="pl-c1">prototype</span>.slice,ba<span class="pl-k">=</span><span class="pl-c1">Array</span>.<span class="pl-c1">prototype</span>.splice,<span class="pl-en">va</span><span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">a</span>){<span class="pl-k">var</span> b,c<span class="pl-k">=</span>a.<span class="pl-c1">length</span><span class="pl-k">&gt;&gt;&gt;</span><span class="pl-c1">0</span>,d;<span class="pl-k">try</span>{<span class="pl-k">if</span>(b<span class="pl-k">=</span>F.<span class="pl-c1">call</span>(a),b.<span class="pl-c1">length</span><span class="pl-k">===</span>c)<span class="pl-k">return</span> b}<span class="pl-k">catch</span>(h){}b<span class="pl-k">=</span>[];<span class="pl-k">for</span>(d<span class="pl-k">=</span><span class="pl-c1">0</span>;d<span class="pl-k">&lt;</span>c;d<span class="pl-k">++</span>)d <span class="pl-k">in</span> a<span class="pl-k">&amp;&amp;</span>(b[d]<span class="pl-k">=</span>a[d]);<span class="pl-k">return</span> b},T<span class="pl-k">=</span><span class="pl-c1">Function</span>.<span class="pl-c1">prototype</span>.apply,s<span class="pl-k">=</span><span class="pl-c1">Function</span>.<span class="pl-c1">prototype</span>.call,y<span class="pl-k">=</span><span class="pl-c1">Function</span>.<span class="pl-c1">prototype</span>.bind<span class="pl-k">||</span><span class="pl-k">function</span>(<span class="pl-smi">a</span>,<span class="pl-smi">b</span>){<span class="pl-k">var</span> c<span class="pl-k">=</span><span class="pl-v">this</span>,d;<span class="pl-k">return</span> <span class="pl-c1">1</span><span class="pl-k">&lt;</span>arguments.<span class="pl-c1">length</span><span class="pl-k">?</span>(d<span class="pl-k">=</span>F.<span class="pl-c1">call</span>(arguments,<span class="pl-c1">1</span>),<span class="pl-k">function</span>(){<span class="pl-k">return</span> T.<span class="pl-c1">call</span>(c,a,d.<span class="pl-c1">concat</span>(F.<span class="pl-c1">call</span>(arguments)))})<span class="pl-k">:</span><span class="pl-k">function</span>(){<span class="pl-k">return</span> T.<span class="pl-c1">call</span>(c,a,arguments)}},Z<span class="pl-k">=</span><span class="pl-c1">Object</span>.<span class="pl-c1">prototype</span>.toString,R<span class="pl-k">=</span>y.<span class="pl-c1">call</span>(s,<span class="pl-c1">Object</span>.<span class="pl-c1">prototype</span>.hasOwnProperty),</td>
      </tr>
      <tr>
        <td id="L10" class="blob-num js-line-number" data-line-number="10"></td>
        <td id="LC10" class="blob-code blob-code-inner js-file-line">u<span class="pl-k">=</span>g.<span class="pl-c1">createElement</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>p<span class="pl-pds">&quot;</span></span>),j<span class="pl-k">=</span>f.Node.<span class="pl-c1">prototype</span>,t<span class="pl-k">=</span>f.Element.<span class="pl-c1">prototype</span>,wa<span class="pl-k">=</span>u.contains<span class="pl-k">||</span>j.contains,ha<span class="pl-k">=</span><span class="pl-c1">Date</span>,xa<span class="pl-k">=</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span><span class="pl-cce">\&lt;</span>(<span class="pl-c1">[<span class="pl-c1">\w</span><span class="pl-cce">\:\-</span>]</span><span class="pl-k">*</span>)<span class="pl-c1">[<span class="pl-cce">\&gt;\ </span>]</span><span class="pl-pds">/</span>i</span>,ra<span class="pl-k">=</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span><span class="pl-c1">\s</span><span class="pl-k">+</span><span class="pl-pds">/</span></span>,sa<span class="pl-k">=</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">\s</span><span class="pl-pds">/</span></span>,ca,D,da<span class="pl-k">=</span><span class="pl-sr"><span class="pl-pds">/</span>alpha<span class="pl-cce">\(</span>opacity=(<span class="pl-c1">[<span class="pl-k">^</span><span class="pl-cce">\)</span>]</span><span class="pl-k">+</span>)<span class="pl-cce">\)</span><span class="pl-pds">/</span></span>,<span class="pl-en">U</span><span class="pl-k">=</span><span class="pl-k">function</span>(){<span class="pl-k">var</span> a<span class="pl-k">=</span>(<span class="pl-v">this</span>.filter<span class="pl-k">||</span><span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>).<span class="pl-c1">match</span>(da);<span class="pl-k">return</span> a<span class="pl-k">?</span><span class="pl-c1">parseInt</span>(a[<span class="pl-c1">1</span>])<span class="pl-k">/</span><span class="pl-c1">100</span><span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>},ea<span class="pl-k">=</span>{<span class="pl-en">getPropertyValue</span><span class="pl-k">:</span><span class="pl-k">function</span>(<span class="pl-smi">a</span>){<span class="pl-k">return</span> <span class="pl-v">this</span>.<span class="pl-c1">getAttribute</span>(a)},<span class="pl-en">removeProperty</span><span class="pl-k">:</span><span class="pl-k">function</span>(<span class="pl-smi">a</span>){<span class="pl-v">this</span>.removeAttribute(a)},<span class="pl-en">setProperty</span><span class="pl-k">:</span><span class="pl-k">function</span>(<span class="pl-smi">a</span>,<span class="pl-smi">b</span>,<span class="pl-smi">c</span>){<span class="pl-s"><span class="pl-pds">&quot;</span>important<span class="pl-pds">&quot;</span></span><span class="pl-k">!=</span>c<span class="pl-k">?</span><span class="pl-v">this</span>.<span class="pl-c1">setAttribute</span>(a,b)<span class="pl-k">:</span>(c<span class="pl-k">=</span><span class="pl-c1">RegExp</span>(a<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\\</span>s*:<span class="pl-cce">\\</span>s*(<span class="pl-cce">\\</span>S+)<span class="pl-cce">\\</span>s*(?:[$;]|(?:(!important)<span class="pl-cce">\\</span>s*[$;]))<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L11" class="blob-num js-line-number" data-line-number="11"></td>
        <td id="LC11" class="blob-code blob-code-inner js-file-line"><span class="pl-s"><span class="pl-pds">&quot;</span>i<span class="pl-pds">&quot;</span></span>),a<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&quot;</span>;<span class="pl-pds">&quot;</span></span><span class="pl-k">+</span>a<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&quot;</span>:<span class="pl-pds">&quot;</span></span><span class="pl-k">+</span>b<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&quot;</span> !important;<span class="pl-pds">&quot;</span></span>,<span class="pl-v">this</span>.cssText<span class="pl-k">=</span>c.<span class="pl-c1">test</span>(<span class="pl-v">this</span>.cssText)<span class="pl-k">?</span><span class="pl-v">this</span>.cssText.<span class="pl-c1">replace</span>(c,a)<span class="pl-k">:</span><span class="pl-v">this</span>.cssText<span class="pl-k">+</span>a)},<span class="pl-en">getPropertyPriority</span><span class="pl-k">:</span><span class="pl-k">function</span>(<span class="pl-smi">a</span>){<span class="pl-k">return</span>((<span class="pl-v">this</span>.cssText<span class="pl-k">||</span><span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>).<span class="pl-c1">match</span>(<span class="pl-c1">RegExp</span>(a<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\\</span>s*:<span class="pl-cce">\\</span>s*(<span class="pl-cce">\\</span>S+)<span class="pl-cce">\\</span>s*(?:[$;]|(?:(!important)<span class="pl-cce">\\</span>s*[$;]))<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>i<span class="pl-pds">&quot;</span></span>))<span class="pl-k">||</span>[])[<span class="pl-c1">2</span>]<span class="pl-k">||</span><span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>},item<span class="pl-k">:</span>K()},N<span class="pl-k">=</span>{<span class="pl-s"><span class="pl-pds">&quot;</span>for<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>htmlFor<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>class<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>className<span class="pl-pds">&quot;</span></span>,value<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>defaultValue<span class="pl-pds">&quot;</span></span>},fa<span class="pl-k">=</span>{action<span class="pl-k">:</span>p,cite<span class="pl-k">:</span>p,codebase<span class="pl-k">:</span>p,data<span class="pl-k">:</span>p,href<span class="pl-k">:</span>p,longdesc<span class="pl-k">:</span>p,lowsrc<span class="pl-k">:</span>p,src<span class="pl-k">:</span>p,usemap<span class="pl-k">:</span>p,disabled<span class="pl-k">:</span>p},I<span class="pl-k">=</span>{id<span class="pl-k">:</span>p,value<span class="pl-k">:</span>p,checked<span class="pl-k">:</span>p,ismap<span class="pl-k">:</span>p,multiple<span class="pl-k">:</span>p,readonly<span class="pl-k">:</span>p,selected<span class="pl-k">:</span>p},S<span class="pl-k">=</span>{style<span class="pl-k">:</span>{<span class="pl-en">get</span><span class="pl-k">:</span><span class="pl-k">function</span>(){<span class="pl-k">return</span> <span class="pl-v">this</span>.<span class="pl-c1">style</span><span class="pl-k">&amp;&amp;</span></td>
      </tr>
      <tr>
        <td id="L12" class="blob-num js-line-number" data-line-number="12"></td>
        <td id="LC12" class="blob-code blob-code-inner js-file-line"><span class="pl-v">this</span>.<span class="pl-c1">style</span>.cssText<span class="pl-k">?</span><span class="pl-v">this</span>.<span class="pl-c1">style</span>.cssText<span class="pl-k">:</span>p},<span class="pl-en">set</span><span class="pl-k">:</span><span class="pl-k">function</span>(<span class="pl-smi">a</span>){<span class="pl-v">this</span>.<span class="pl-c1">style</span><span class="pl-k">&amp;&amp;</span>(<span class="pl-v">this</span>.<span class="pl-c1">style</span>.cssText<span class="pl-k">=</span>a);<span class="pl-k">return</span> a},<span class="pl-en">remove</span><span class="pl-k">:</span><span class="pl-k">function</span>(){<span class="pl-k">return</span> <span class="pl-v">this</span>.<span class="pl-c1">style</span><span class="pl-k">&amp;&amp;</span><span class="pl-v">this</span>.<span class="pl-c1">style</span>.cssText<span class="pl-k">?</span>(<span class="pl-v">this</span>.<span class="pl-c1">style</span>.cssText<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>,m)<span class="pl-k">:</span>q},<span class="pl-en">has</span><span class="pl-k">:</span><span class="pl-k">function</span>(){<span class="pl-k">return</span><span class="pl-k">!</span>(<span class="pl-k">!</span><span class="pl-v">this</span>.<span class="pl-c1">style</span><span class="pl-k">||!</span><span class="pl-v">this</span>.<span class="pl-c1">style</span>.cssText)}}},x,J,G,H<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&quot;</span>uuid<span class="pl-pds">&quot;</span></span><span class="pl-k">+</span>(<span class="pl-c1">Math</span>.<span class="pl-c1">random</span>()<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>).<span class="pl-c1">substr</span>(<span class="pl-c1">2</span>),ya<span class="pl-k">=</span><span class="pl-c1">1</span>,za<span class="pl-k">=</span>K(),qa<span class="pl-k">=</span>q,ma,M<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&quot;</span>abbr|article|aside|audio|canvas|command|datalist|details|figure|figcaption|footer|header|hgroup|keygen|mark|meter|main|nav|output|progress|section|source|summary|time|video<span class="pl-pds">&quot;</span></span>,X<span class="pl-k">=</span>M.<span class="pl-c1">split</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>|<span class="pl-pds">&quot;</span></span>),</td>
      </tr>
      <tr>
        <td id="L13" class="blob-num js-line-number" data-line-number="13"></td>
        <td id="LC13" class="blob-code blob-code-inner js-file-line">ja<span class="pl-k">=</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>&lt;<span class="pl-k">|</span><span class="pl-k">^</span>(?:a<span class="pl-k">|</span>b<span class="pl-k">|</span>button<span class="pl-k">|</span>code<span class="pl-k">|</span>div<span class="pl-k">|</span>fieldset<span class="pl-k">|</span>form<span class="pl-k">|</span>map<span class="pl-k">|</span>h1<span class="pl-k">|</span>h2<span class="pl-k">|</span>h3<span class="pl-k">|</span>h4<span class="pl-k">|</span>h5<span class="pl-k">|</span>h6<span class="pl-k">|</span>i<span class="pl-k">|</span>object<span class="pl-k">|</span>iframe<span class="pl-k">|</span>img<span class="pl-k">|</span>input<span class="pl-k">|</span>label<span class="pl-k">|</span>li<span class="pl-k">|</span>link<span class="pl-k">|</span>ol<span class="pl-k">|</span>option<span class="pl-k">|</span>p<span class="pl-k">|</span>param<span class="pl-k">|</span>q<span class="pl-k">|</span>script<span class="pl-k">|</span>select<span class="pl-k">|</span>span<span class="pl-k">|</span>strong<span class="pl-k">|</span>style<span class="pl-k">|</span>table<span class="pl-k">|</span>tbody<span class="pl-k">|</span>td<span class="pl-k">|</span>textarea<span class="pl-k">|</span>tfoot<span class="pl-k">|</span>th<span class="pl-k">|</span>thead<span class="pl-k">|</span>tr<span class="pl-k">|</span>ul<span class="pl-k">|</span>optgroup)<span class="pl-k">$</span><span class="pl-pds">/</span>i</span>,C,O,na,P,Q;<span class="pl-s"><span class="pl-pds">&quot;</span>CSS1Compat<span class="pl-pds">&quot;</span></span><span class="pl-k">===</span>g.compatMode<span class="pl-k">?</span>(<span class="pl-en">P</span><span class="pl-k">=</span><span class="pl-k">function</span>(){<span class="pl-k">return</span> r.scrollLeft},<span class="pl-en">Q</span><span class="pl-k">=</span><span class="pl-k">function</span>(){<span class="pl-k">return</span> r.scrollTop})<span class="pl-k">:</span>(<span class="pl-en">P</span><span class="pl-k">=</span><span class="pl-k">function</span>(){<span class="pl-k">return</span> g.<span class="pl-c1">body</span>.scrollTop},<span class="pl-en">Q</span><span class="pl-k">=</span><span class="pl-k">function</span>(){<span class="pl-k">return</span> g.<span class="pl-c1">body</span>.scrollLeft});g.head<span class="pl-k">||</span>(g.head<span class="pl-k">=</span>g.<span class="pl-c1">getElementsByTagName</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>head<span class="pl-pds">&quot;</span></span>)[<span class="pl-c1">0</span>]);<span class="pl-s"><span class="pl-pds">&quot;</span>defaultView<span class="pl-pds">&quot;</span></span><span class="pl-k">in</span> g<span class="pl-k">||</span>(g.<span class="pl-c1">defaultView</span><span class="pl-k">=</span>g.<span class="pl-c1">parentWindow</span>);</td>
      </tr>
      <tr>
        <td id="L14" class="blob-num js-line-number" data-line-number="14"></td>
        <td id="LC14" class="blob-code blob-code-inner js-file-line">e<span class="pl-k">=</span>q;<span class="pl-k">try</span>{e<span class="pl-k">=</span>isNaN.<span class="pl-c1">apply</span>(p,{})}<span class="pl-k">catch</span>(Ga){}e<span class="pl-k">||</span>(<span class="pl-c1">Function</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">apply</span><span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">a</span>,<span class="pl-smi">b</span>){<span class="pl-k">var</span> c;<span class="pl-k">if</span>(<span class="pl-k">!</span>b<span class="pl-k">||!</span>(c<span class="pl-k">=+</span>b.<span class="pl-c1">length</span>))<span class="pl-k">return</span> s.<span class="pl-c1">call</span>(<span class="pl-v">this</span>,a);<span class="pl-k">if</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>object<span class="pl-pds">&quot;</span></span><span class="pl-k">!==typeof</span> b<span class="pl-k">||</span><span class="pl-c1">0</span><span class="pl-k">&gt;</span>c<span class="pl-k">||</span><span class="pl-s"><span class="pl-pds">&quot;</span>callee<span class="pl-pds">&quot;</span></span><span class="pl-k">in</span> b<span class="pl-k">&amp;&amp;</span><span class="pl-s"><span class="pl-pds">&quot;</span>caller<span class="pl-pds">&quot;</span></span><span class="pl-k">in</span> b<span class="pl-k">||</span><span class="pl-s"><span class="pl-pds">&quot;</span>[object Array]<span class="pl-pds">&quot;</span></span><span class="pl-k">==</span>Z.<span class="pl-c1">call</span>(b))<span class="pl-k">return</span> T.<span class="pl-c1">call</span>(<span class="pl-v">this</span>,a,b);<span class="pl-k">switch</span>(c){<span class="pl-k">case</span> <span class="pl-c1">1</span><span class="pl-k">:</span><span class="pl-k">return</span> s.<span class="pl-c1">call</span>(<span class="pl-v">this</span>,a,b[<span class="pl-c1">0</span>]);<span class="pl-k">case</span> <span class="pl-c1">2</span><span class="pl-k">:</span><span class="pl-k">return</span> s.<span class="pl-c1">call</span>(<span class="pl-v">this</span>,a,b[<span class="pl-c1">0</span>],b[<span class="pl-c1">1</span>]);<span class="pl-k">case</span> <span class="pl-c1">3</span><span class="pl-k">:</span><span class="pl-k">return</span> s.<span class="pl-c1">call</span>(<span class="pl-v">this</span>,a,b[<span class="pl-c1">0</span>],b[<span class="pl-c1">1</span>],b[<span class="pl-c1">2</span>]);<span class="pl-k">case</span> <span class="pl-c1">4</span><span class="pl-k">:</span><span class="pl-k">return</span> s.<span class="pl-c1">call</span>(<span class="pl-v">this</span>,a,b[<span class="pl-c1">0</span>],b[<span class="pl-c1">1</span>],b[<span class="pl-c1">2</span>],b[<span class="pl-c1">3</span>]);<span class="pl-k">case</span> <span class="pl-c1">5</span><span class="pl-k">:</span><span class="pl-k">return</span> s.<span class="pl-c1">call</span>(<span class="pl-v">this</span>,a,b[<span class="pl-c1">0</span>],b[<span class="pl-c1">1</span>],b[<span class="pl-c1">2</span>],b[<span class="pl-c1">3</span>],b[<span class="pl-c1">4</span>]);<span class="pl-k">case</span> <span class="pl-c1">6</span><span class="pl-k">:</span><span class="pl-k">return</span> s.<span class="pl-c1">call</span>(<span class="pl-v">this</span>,a,b[<span class="pl-c1">0</span>],</td>
      </tr>
      <tr>
        <td id="L15" class="blob-num js-line-number" data-line-number="15"></td>
        <td id="LC15" class="blob-code blob-code-inner js-file-line">b[<span class="pl-c1">1</span>],b[<span class="pl-c1">2</span>],b[<span class="pl-c1">3</span>],b[<span class="pl-c1">4</span>],b[<span class="pl-c1">5</span>]);<span class="pl-k">case</span> <span class="pl-c1">7</span><span class="pl-k">:</span><span class="pl-k">return</span> s.<span class="pl-c1">call</span>(<span class="pl-v">this</span>,a,b[<span class="pl-c1">0</span>],b[<span class="pl-c1">1</span>],b[<span class="pl-c1">2</span>],b[<span class="pl-c1">3</span>],b[<span class="pl-c1">4</span>],b[<span class="pl-c1">5</span>],b[<span class="pl-c1">6</span>])}<span class="pl-k">return</span> T.<span class="pl-c1">call</span>(<span class="pl-v">this</span>,a,va(b))});<span class="pl-s"><span class="pl-pds">&quot;</span>b<span class="pl-pds">&quot;</span></span><span class="pl-k">!==</span><span class="pl-s"><span class="pl-pds">&quot;</span>ab<span class="pl-pds">&quot;</span></span>.<span class="pl-c1">substr</span>(<span class="pl-k">-</span><span class="pl-c1">1</span>)<span class="pl-k">&amp;&amp;</span>(<span class="pl-c1">String</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">substr</span><span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">a</span>,<span class="pl-smi">b</span>){<span class="pl-k">return</span> ua.<span class="pl-c1">call</span>(<span class="pl-v">this</span>,<span class="pl-c1">0</span><span class="pl-k">&gt;</span>a<span class="pl-k">?</span><span class="pl-c1">0</span><span class="pl-k">&gt;</span>(a<span class="pl-k">=</span><span class="pl-v">this</span>.<span class="pl-c1">length</span><span class="pl-k">+</span>a)<span class="pl-k">?</span><span class="pl-c1">0</span><span class="pl-k">:</span>a<span class="pl-k">:</span>a,b)});<span class="pl-k">if</span>(<span class="pl-c1">2</span><span class="pl-k">!==</span><span class="pl-s"><span class="pl-pds">&quot;</span>ab<span class="pl-pds">&quot;</span></span>.<span class="pl-c1">split</span>(<span class="pl-sr"><span class="pl-pds">/</span>(?:ab)<span class="pl-k">*</span><span class="pl-pds">/</span></span>).<span class="pl-c1">length</span><span class="pl-k">||</span><span class="pl-c1">4</span><span class="pl-k">!==</span><span class="pl-s"><span class="pl-pds">&quot;</span>.<span class="pl-pds">&quot;</span></span>.<span class="pl-c1">split</span>(<span class="pl-sr"><span class="pl-pds">/</span>(<span class="pl-c1">.</span><span class="pl-k">?</span>)(<span class="pl-c1">.</span><span class="pl-k">?</span>)<span class="pl-pds">/</span></span>).<span class="pl-c1">length</span><span class="pl-k">||</span><span class="pl-s"><span class="pl-pds">&quot;</span>t<span class="pl-pds">&quot;</span></span><span class="pl-k">===</span><span class="pl-s"><span class="pl-pds">&quot;</span>tesst<span class="pl-pds">&quot;</span></span>.<span class="pl-c1">split</span>(<span class="pl-sr"><span class="pl-pds">/</span>(s)<span class="pl-k">*</span><span class="pl-pds">/</span></span>)[<span class="pl-c1">1</span>]<span class="pl-k">||</span><span class="pl-c1">0</span><span class="pl-k">===</span><span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>.<span class="pl-c1">split</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">.</span><span class="pl-k">?</span><span class="pl-pds">/</span></span>).<span class="pl-c1">length</span><span class="pl-k">||</span><span class="pl-c1">1</span><span class="pl-k">&lt;</span><span class="pl-s"><span class="pl-pds">&quot;</span>.<span class="pl-pds">&quot;</span></span>.<span class="pl-c1">split</span>(<span class="pl-sr"><span class="pl-pds">/</span>()()<span class="pl-pds">/</span></span>).<span class="pl-c1">length</span>)ca<span class="pl-k">=</span><span class="pl-sr"><span class="pl-pds">/</span>()<span class="pl-k">??</span><span class="pl-pds">/</span></span>.<span class="pl-c1">exec</span>(<span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>)[<span class="pl-c1">1</span>]<span class="pl-k">===</span>k,<span class="pl-c1">String</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">split</span><span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">a</span>,<span class="pl-smi">b</span>){<span class="pl-k">var</span> c<span class="pl-k">=</span><span class="pl-v">this</span>;<span class="pl-k">if</span>(<span class="pl-k">!</span>(a <span class="pl-k">instanceof</span> <span class="pl-c1">RegExp</span>))<span class="pl-k">return</span> a<span class="pl-k">===</span></td>
      </tr>
      <tr>
        <td id="L16" class="blob-num js-line-number" data-line-number="16"></td>
        <td id="LC16" class="blob-code blob-code-inner js-file-line">k<span class="pl-k">&amp;&amp;</span><span class="pl-c1">0</span><span class="pl-k">===</span>b<span class="pl-k">?</span>[]<span class="pl-k">:</span>ia.<span class="pl-c1">call</span>(c,a,b);<span class="pl-k">var</span> d<span class="pl-k">=</span>[],h<span class="pl-k">=</span>(a.<span class="pl-c1">ignoreCase</span><span class="pl-k">?</span><span class="pl-s"><span class="pl-pds">&quot;</span>i<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>)<span class="pl-k">+</span>(a.<span class="pl-c1">multiline</span><span class="pl-k">?</span><span class="pl-s"><span class="pl-pds">&quot;</span>m<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>)<span class="pl-k">+</span>(a.extended<span class="pl-k">?</span><span class="pl-s"><span class="pl-pds">&quot;</span>x<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>)<span class="pl-k">+</span>(a.sticky<span class="pl-k">?</span><span class="pl-s"><span class="pl-pds">&quot;</span>y<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>),g<span class="pl-k">=</span><span class="pl-c1">0</span>,f,e,j;a<span class="pl-k">=</span><span class="pl-c1">RegExp</span>(a.<span class="pl-c1">source</span>,h<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&quot;</span>g<span class="pl-pds">&quot;</span></span>);c<span class="pl-k">+=</span><span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>;ca<span class="pl-k">||</span>(f<span class="pl-k">=</span><span class="pl-c1">RegExp</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>^<span class="pl-pds">&quot;</span></span><span class="pl-k">+</span>a.<span class="pl-c1">source</span><span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&quot;</span>$(?!<span class="pl-cce">\\</span>s)<span class="pl-pds">&quot;</span></span>,h));b<span class="pl-k">=</span>b<span class="pl-k">===</span>k<span class="pl-k">?</span><span class="pl-c1">4294967295</span><span class="pl-k">:</span>b<span class="pl-k">&gt;&gt;&gt;</span><span class="pl-c1">0</span>;<span class="pl-k">if</span>(<span class="pl-k">!</span>b)<span class="pl-k">return</span>[];<span class="pl-k">for</span>(;e<span class="pl-k">=</span>a.<span class="pl-c1">exec</span>(c);){h<span class="pl-k">=</span>e.<span class="pl-c1">index</span><span class="pl-k">+</span>e[<span class="pl-c1">0</span>].<span class="pl-c1">length</span>;<span class="pl-k">if</span>(h<span class="pl-k">&gt;</span>g<span class="pl-k">&amp;&amp;</span>(d.<span class="pl-c1">push</span>(c.<span class="pl-c1">slice</span>(g,e.<span class="pl-c1">index</span>)),<span class="pl-k">!</span>ca<span class="pl-k">&amp;&amp;</span><span class="pl-c1">1</span><span class="pl-k">&lt;</span>e.<span class="pl-c1">length</span><span class="pl-k">&amp;&amp;</span>e[<span class="pl-c1">0</span>].<span class="pl-c1">replace</span>(f,<span class="pl-k">function</span>(){<span class="pl-k">for</span>(<span class="pl-k">var</span> a<span class="pl-k">=</span><span class="pl-c1">1</span>,b<span class="pl-k">=</span>arguments.<span class="pl-c1">length</span><span class="pl-k">-</span><span class="pl-c1">2</span>;a<span class="pl-k">&lt;</span>b;a<span class="pl-k">++</span>)arguments[a]<span class="pl-k">===</span>k<span class="pl-k">&amp;&amp;</span>(e[a]<span class="pl-k">=</span>k)}),<span class="pl-c1">1</span><span class="pl-k">&lt;</span>e.<span class="pl-c1">length</span><span class="pl-k">&amp;&amp;</span>e.<span class="pl-c1">index</span><span class="pl-k">&lt;</span>c.<span class="pl-c1">length</span><span class="pl-k">&amp;&amp;</span>d.push.<span class="pl-c1">apply</span>(d,e.<span class="pl-c1">slice</span>(<span class="pl-c1">1</span>)),j<span class="pl-k">=</span>e[<span class="pl-c1">0</span>].<span class="pl-c1">length</span>,</td>
      </tr>
      <tr>
        <td id="L17" class="blob-num js-line-number" data-line-number="17"></td>
        <td id="LC17" class="blob-code blob-code-inner js-file-line">g<span class="pl-k">=</span>h,d.<span class="pl-c1">length</span><span class="pl-k">&gt;=</span>b))<span class="pl-k">break</span>;a.<span class="pl-c1">lastIndex</span><span class="pl-k">===</span>e.<span class="pl-c1">index</span><span class="pl-k">&amp;&amp;</span>a.<span class="pl-c1">lastIndex</span><span class="pl-k">++</span>}g<span class="pl-k">===</span>c.<span class="pl-c1">length</span><span class="pl-k">?</span>(j<span class="pl-k">||!</span>a.<span class="pl-c1">test</span>(<span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>))<span class="pl-k">&amp;&amp;</span>d.<span class="pl-c1">push</span>(<span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>)<span class="pl-k">:</span>d.<span class="pl-c1">push</span>(c.<span class="pl-c1">slice</span>(g));<span class="pl-k">return</span> d.<span class="pl-c1">length</span><span class="pl-k">&gt;</span>b<span class="pl-k">?</span>d.<span class="pl-c1">slice</span>(<span class="pl-c1">0</span>,b)<span class="pl-k">:</span>d};f.DOMException<span class="pl-k">||</span>(e<span class="pl-k">=</span>(f.DOMException<span class="pl-k">=</span>K()).<span class="pl-c1">prototype</span><span class="pl-k">=</span>Error(),e.<span class="pl-c1">INDEX_SIZE_ERR</span><span class="pl-k">=</span><span class="pl-c1">1</span>,e.<span class="pl-c1">HIERARCHY_REQUEST_ERR</span><span class="pl-k">=</span><span class="pl-c1">3</span>,e.<span class="pl-c1">WRONG_DOCUMENT_ERR</span><span class="pl-k">=</span><span class="pl-c1">4</span>,e.<span class="pl-c1">INVALID_CHARACTER_ERR</span><span class="pl-k">=</span><span class="pl-c1">5</span>,e.<span class="pl-c1">NO_MODIFICATION_ALLOWED_ERR</span><span class="pl-k">=</span><span class="pl-c1">7</span>,e.<span class="pl-c1">NOT_FOUND_ERR</span><span class="pl-k">=</span><span class="pl-c1">8</span>,e.<span class="pl-c1">NOT_SUPPORTED_ERR</span><span class="pl-k">=</span><span class="pl-c1">9</span>,e.INVALID_STATE_ERR<span class="pl-k">=</span><span class="pl-c1">11</span>,e.SYNTAX_ERR<span class="pl-k">=</span><span class="pl-c1">12</span>,e.INVALID_MODIFICATION_ERR<span class="pl-k">=</span><span class="pl-c1">13</span>,e.NAMESPACE_ERR<span class="pl-k">=</span><span class="pl-c1">14</span>,e.INVALID_ACCESS_ERR<span class="pl-k">=</span><span class="pl-c1">15</span>);<span class="pl-s"><span class="pl-pds">&quot;</span>pageXOffset<span class="pl-pds">&quot;</span></span><span class="pl-k">in</span></td>
      </tr>
      <tr>
        <td id="L18" class="blob-num js-line-number" data-line-number="18"></td>
        <td id="LC18" class="blob-code blob-code-inner js-file-line">f<span class="pl-k">||</span>n.<span class="pl-c1">push</span>(<span class="pl-k">function</span>(){<span class="pl-c1">Object</span>.defineProperty(f,<span class="pl-s"><span class="pl-pds">&quot;</span>pageXOffset<span class="pl-pds">&quot;</span></span>,{get<span class="pl-k">:</span>P});<span class="pl-c1">Object</span>.defineProperty(f,<span class="pl-s"><span class="pl-pds">&quot;</span>pageYOffset<span class="pl-pds">&quot;</span></span>,{get<span class="pl-k">:</span>Q})});D<span class="pl-k">=</span><span class="pl-c1">f</span>.<span class="pl-en">Event</span><span class="pl-k">=</span><span class="pl-k">function</span>(){L(<span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>)};J<span class="pl-k">=</span>{<span class="pl-en">initEvent</span><span class="pl-k">:</span><span class="pl-k">function</span>(<span class="pl-smi">a</span>,<span class="pl-smi">b</span>,<span class="pl-smi">c</span>){(a<span class="pl-k">==</span>k<span class="pl-k">||</span>b<span class="pl-k">==</span>k<span class="pl-k">||</span>c<span class="pl-k">==</span>k)<span class="pl-k">&amp;&amp;</span>L(<span class="pl-s"><span class="pl-pds">&quot;</span>WRONG_ARGUMENTS_ERR<span class="pl-pds">&quot;</span></span>);<span class="pl-v">this</span>.<span class="pl-c1">type</span><span class="pl-k">=</span>a;<span class="pl-v">this</span>.bubbles<span class="pl-k">=</span>b;<span class="pl-v">this</span>.cancelable<span class="pl-k">=</span>c;<span class="pl-v">this</span>.h<span class="pl-k">=</span>q;<span class="pl-v">this</span>.<span class="pl-c1">target</span><span class="pl-k">=</span>p;<span class="pl-v">this</span>.timeStamp<span class="pl-k">||</span>(<span class="pl-v">this</span>.timeStamp<span class="pl-k">=+</span><span class="pl-k">new</span> <span class="pl-en">ha</span>)},<span class="pl-en">initCustomEvent</span><span class="pl-k">:</span><span class="pl-k">function</span>(<span class="pl-smi">a</span>,<span class="pl-smi">b</span>,<span class="pl-smi">c</span>,<span class="pl-smi">d</span>){J.initEvent.<span class="pl-c1">call</span>(<span class="pl-v">this</span>,a,b,c);<span class="pl-v">this</span>.detail<span class="pl-k">=</span>d},<span class="pl-en">initUIEvent</span><span class="pl-k">:</span><span class="pl-k">function</span>(<span class="pl-smi">a</span>,<span class="pl-smi">b</span>,<span class="pl-smi">c</span>,<span class="pl-smi">d</span>,<span class="pl-smi">h</span>){J.initCustomEvent.<span class="pl-c1">call</span>(<span class="pl-v">this</span>,a,b,c,h);<span class="pl-v">this</span>.view<span class="pl-k">=</span>d},<span class="pl-en">initMouseEvent</span><span class="pl-k">:</span><span class="pl-k">function</span>(<span class="pl-smi">a</span>,</td>
      </tr>
      <tr>
        <td id="L19" class="blob-num js-line-number" data-line-number="19"></td>
        <td id="LC19" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">b</span>,<span class="pl-smi">c</span>,<span class="pl-smi">d</span>,<span class="pl-smi">h</span>,<span class="pl-smi">g</span>,<span class="pl-smi">f</span>,<span class="pl-smi">e</span>,<span class="pl-smi">j</span>,<span class="pl-smi">n</span>,<span class="pl-smi">l</span>,<span class="pl-smi">r</span>,<span class="pl-smi">s</span>,<span class="pl-smi">t</span>,<span class="pl-smi">u</span>){J.initUIEvent.<span class="pl-c1">call</span>(<span class="pl-v">this</span>,a,b,c,d,h);<span class="pl-v">this</span>.<span class="pl-c1">screenX</span><span class="pl-k">=</span>g;<span class="pl-v">this</span>.<span class="pl-c1">screenY</span><span class="pl-k">=</span>f;<span class="pl-v">this</span>.clientX<span class="pl-k">=</span>e;<span class="pl-v">this</span>.clientY<span class="pl-k">=</span>j;<span class="pl-v">this</span>.ctrlKey<span class="pl-k">=</span>n;<span class="pl-v">this</span>.altKey<span class="pl-k">=</span>l;<span class="pl-v">this</span>.shiftKey<span class="pl-k">=</span>r;<span class="pl-v">this</span>.metaKey<span class="pl-k">=</span>s;<span class="pl-v">this</span>.button<span class="pl-k">=</span>t;<span class="pl-v">this</span>.relatedTarget<span class="pl-k">=</span>u}};G<span class="pl-k">=</span><span class="pl-c1">D</span>.<span class="pl-c1">prototype</span><span class="pl-k">=</span>{constructor<span class="pl-k">:</span>D,<span class="pl-en">preventDefault</span><span class="pl-k">:</span><span class="pl-k">function</span>(){<span class="pl-v">this</span>.cancelable<span class="pl-k">!==</span>q<span class="pl-k">&amp;&amp;</span>(x.a.<span class="pl-c1">call</span>(<span class="pl-v">this</span>).returnValue<span class="pl-k">=</span><span class="pl-v">this</span>.returnValue<span class="pl-k">=</span>q,x.d.<span class="pl-c1">call</span>(<span class="pl-v">this</span>),<span class="pl-v">this</span>.defaultPrevented<span class="pl-k">=</span>m)},<span class="pl-en">stopPropagation</span><span class="pl-k">:</span><span class="pl-k">function</span>(){x.a.<span class="pl-c1">call</span>(<span class="pl-v">this</span>).cancelBubble<span class="pl-k">=</span><span class="pl-v">this</span>.cancelBubble<span class="pl-k">=</span>m;x.d.<span class="pl-c1">call</span>(<span class="pl-v">this</span>)}};G.stopImmediatePropagation<span class="pl-k">=</span></td>
      </tr>
      <tr>
        <td id="L20" class="blob-num js-line-number" data-line-number="20"></td>
        <td id="LC20" class="blob-code blob-code-inner js-file-line"><span class="pl-k">function</span>(){<span class="pl-v">this</span>.__stopNow<span class="pl-k">=</span>m;<span class="pl-v">this</span>.stopPropagation()};G.defaultPrevented<span class="pl-k">=</span>q;<span class="pl-k">for</span>(e <span class="pl-k">in</span> J)R(J,e)<span class="pl-k">&amp;&amp;</span>(G[e]<span class="pl-k">=</span><span class="pl-k">function</span>(){J[arguments.<span class="pl-c1">callee</span>.<span class="pl-c1">name</span>].<span class="pl-c1">apply</span>(<span class="pl-v">this</span>,arguments);la(<span class="pl-v">this</span>.ietl9_event,<span class="pl-v">this</span>)},G[e].<span class="pl-c1">name</span><span class="pl-k">=</span>e);<span class="pl-en">x</span><span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">a</span>){<span class="pl-v">this</span>.ietl9_event<span class="pl-k">=</span>a;a.returnValue<span class="pl-k">=</span>m;la(<span class="pl-v">this</span>,a)};<span class="pl-c1">x</span>.<span class="pl-en">a</span><span class="pl-k">=</span><span class="pl-k">function</span>(){<span class="pl-k">var</span> a<span class="pl-k">=</span><span class="pl-v">this</span>.ietl9_event;a<span class="pl-k">===</span>k<span class="pl-k">?</span>L(<span class="pl-s"><span class="pl-pds">&quot;</span>WRONG_THIS_ERR<span class="pl-pds">&quot;</span></span>)<span class="pl-k">:</span>a<span class="pl-k">===</span>p<span class="pl-k">&amp;&amp;</span>(a<span class="pl-k">=</span>x.a.k);<span class="pl-k">return</span> a};x.a.k<span class="pl-k">=</span>{};<span class="pl-c1">x</span>.<span class="pl-en">d</span><span class="pl-k">=</span><span class="pl-k">function</span>(){<span class="pl-v">this</span>.ietl9_event<span class="pl-k">&amp;&amp;</span>(<span class="pl-v">this</span>.ietl9_event<span class="pl-k">=</span>p)};D<span class="pl-k">=</span>K();<span class="pl-c1">D</span>.<span class="pl-c1">prototype</span><span class="pl-k">=</span>G;D<span class="pl-k">=</span><span class="pl-k">new</span> <span class="pl-en">D</span>;D.<span class="pl-c1">constructor</span><span class="pl-k">=</span>x;<span class="pl-c1">x</span>.<span class="pl-c1">prototype</span><span class="pl-k">=</span>D;u.addEventListener<span class="pl-k">||</span>((f.<span class="pl-c1">Text</span><span class="pl-k">&amp;&amp;</span>f.<span class="pl-c1">Text</span>.<span class="pl-c1">prototype</span><span class="pl-k">||</span></td>
      </tr>
      <tr>
        <td id="L21" class="blob-num js-line-number" data-line-number="21"></td>
        <td id="LC21" class="blob-code blob-code-inner js-file-line">j).addEventListener<span class="pl-k">=</span>j.addEventListener<span class="pl-k">=</span>r.addEventListener<span class="pl-k">=</span>f.addEventListener<span class="pl-k">=</span><span class="pl-c1">g</span>.<span class="pl-en">addEventListener</span><span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">a</span>,<span class="pl-smi">b</span>,<span class="pl-smi">c</span>){<span class="pl-k">if</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>function<span class="pl-pds">&quot;</span></span><span class="pl-k">===typeof</span> b<span class="pl-k">||</span><span class="pl-s"><span class="pl-pds">&quot;</span>object<span class="pl-pds">&quot;</span></span><span class="pl-k">===typeof</span> b){<span class="pl-k">var</span> d<span class="pl-k">=</span><span class="pl-v">this</span>,h<span class="pl-k">=</span>d._,e<span class="pl-k">=</span>q;d<span class="pl-k">==</span>f<span class="pl-k">&amp;&amp;</span>(<span class="pl-k">!</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>_<span class="pl-pds">&quot;</span></span><span class="pl-k">in</span> g)<span class="pl-k">||!</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>_e_8vj<span class="pl-pds">&quot;</span></span><span class="pl-k">in</span> g._)<span class="pl-k">||!</span>(a <span class="pl-k">in</span> g._._e_8vj))<span class="pl-k">&amp;&amp;</span>g.addEventListener(a,za,c);h<span class="pl-k">||</span>(h<span class="pl-k">=</span>d._<span class="pl-k">=</span>{});<span class="pl-k">switch</span>(a){<span class="pl-k">case</span> <span class="pl-s"><span class="pl-pds">&quot;</span>DOMContentLoaded<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span><span class="pl-k">if</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>complete<span class="pl-pds">&quot;</span></span><span class="pl-k">==</span>g.<span class="pl-c1">readyState</span>)<span class="pl-k">return</span>;d<span class="pl-k">===</span>f<span class="pl-k">&amp;&amp;</span>(d<span class="pl-k">=</span>g);e<span class="pl-k">=</span>m;<span class="pl-k">if</span>(<span class="pl-k">!</span>ma){ma<span class="pl-k">=</span>m;<span class="pl-k">var</span> <span class="pl-en">E</span><span class="pl-k">=</span><span class="pl-k">function</span>(){<span class="pl-k">try</span>{r.doScroll(<span class="pl-s"><span class="pl-pds">&quot;</span>left<span class="pl-pds">&quot;</span></span>)}<span class="pl-k">catch</span>(b){<span class="pl-c1">setTimeout</span>(E,<span class="pl-c1">50</span>);<span class="pl-k">return</span>}B.<span class="pl-c1">call</span>(d,{type<span class="pl-k">:</span>a,isTrusted<span class="pl-k">:</span>m,__custom_event<span class="pl-k">:</span>k})};</td>
      </tr>
      <tr>
        <td id="L22" class="blob-num js-line-number" data-line-number="22"></td>
        <td id="LC22" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>createEventObject<span class="pl-pds">&quot;</span></span><span class="pl-k">in</span> g<span class="pl-k">&amp;&amp;</span><span class="pl-s"><span class="pl-pds">&quot;</span>doScroll<span class="pl-pds">&quot;</span></span><span class="pl-k">in</span> r)<span class="pl-k">try</span>{f.<span class="pl-c1">frameElement</span><span class="pl-k">||</span>E()}<span class="pl-k">catch</span>(w){}}<span class="pl-k">break</span>;<span class="pl-k">case</span> <span class="pl-s"><span class="pl-pds">&quot;</span>load<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>tagName<span class="pl-pds">&quot;</span></span><span class="pl-k">in</span> d<span class="pl-k">&amp;&amp;-</span><span class="pl-c1">1</span><span class="pl-k">!=</span><span class="pl-s"><span class="pl-pds">&quot;</span>SCRIPT|IFRAME<span class="pl-pds">&quot;</span></span>.<span class="pl-c1">indexOf</span>(d.<span class="pl-c1">tagName</span>.<span class="pl-c1">toUpperCase</span>())<span class="pl-k">&amp;&amp;</span>(e<span class="pl-k">=</span>m,<span class="pl-c1">d</span>.<span class="pl-en">onreadystatechange</span><span class="pl-k">=</span><span class="pl-k">function</span>(){<span class="pl-s"><span class="pl-pds">&quot;</span>loaded<span class="pl-pds">&quot;</span></span><span class="pl-k">===</span>d.<span class="pl-c1">readyState</span><span class="pl-k">&amp;&amp;</span>(d.<span class="pl-c1">onreadystatechange</span><span class="pl-k">=</span>p,d.<span class="pl-c1">attachEvent</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>onreadystatechange<span class="pl-pds">&quot;</span></span>,y.<span class="pl-c1">call</span>(B,d,{type<span class="pl-k">:</span>a})))},a<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&quot;</span>readystatechange<span class="pl-pds">&quot;</span></span>);<span class="pl-k">break</span>;<span class="pl-k">case</span> <span class="pl-s"><span class="pl-pds">&quot;</span>DOMMouseScroll<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span>a<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&quot;</span>mousewheel<span class="pl-pds">&quot;</span></span>}d.setInterval<span class="pl-k">&amp;&amp;</span>(d<span class="pl-k">!=</span>f<span class="pl-k">&amp;&amp;!</span>d.<span class="pl-c1">frameElement</span>)<span class="pl-k">&amp;&amp;</span>(d<span class="pl-k">=</span>f);b[H]<span class="pl-k">||</span>(b[H]<span class="pl-k">=++</span>ya);<span class="pl-k">if</span>(<span class="pl-k">!</span>(c<span class="pl-k">=</span>h._h_9e2))c<span class="pl-k">=</span>h._h_9e2<span class="pl-k">=</span>y.<span class="pl-c1">call</span>(B,d);h._e_8vj<span class="pl-k">||</span>(h._e_8vj<span class="pl-k">=</span>{});</td>
      </tr>
      <tr>
        <td id="L23" class="blob-num js-line-number" data-line-number="23"></td>
        <td id="LC23" class="blob-code blob-code-inner js-file-line">a <span class="pl-k">in</span> h._e_8vj<span class="pl-k">?</span>h<span class="pl-k">=</span>h._e_8vj[a]<span class="pl-k">:</span>(h<span class="pl-k">=</span>h._e_8vj[a]<span class="pl-k">=</span>[],e<span class="pl-k">||</span>d.<span class="pl-c1">attachEvent</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>on<span class="pl-pds">&quot;</span></span><span class="pl-k">+</span>a,c));<span class="pl-s"><span class="pl-pds">&quot;</span>_<span class="pl-pds">&quot;</span></span><span class="pl-k">+</span>b[H]<span class="pl-k">in</span> h<span class="pl-k">||</span>(h.<span class="pl-c1">push</span>(b),h[<span class="pl-s"><span class="pl-pds">&quot;</span>_<span class="pl-pds">&quot;</span></span><span class="pl-k">+</span>b[H]]<span class="pl-k">=</span>p)}},j.addEventListener.__shim__<span class="pl-k">=</span>m,(f.<span class="pl-c1">Text</span><span class="pl-k">&amp;&amp;</span>f.<span class="pl-c1">Text</span>.<span class="pl-c1">prototype</span><span class="pl-k">||</span>j).removeEventListener<span class="pl-k">=</span>j.removeEventListener<span class="pl-k">=</span>r.removeEventListener<span class="pl-k">=</span>f.removeEventListener<span class="pl-k">=</span><span class="pl-c1">g</span>.<span class="pl-en">removeEventListener</span><span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">a</span>,<span class="pl-smi">b</span>){<span class="pl-k">var</span> c<span class="pl-k">=</span><span class="pl-v">this</span>._,d,h,g,e,f;<span class="pl-k">if</span>(<span class="pl-k">!</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>function<span class="pl-pds">&quot;</span></span><span class="pl-k">!==typeof</span> b<span class="pl-k">&amp;&amp;!</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>object<span class="pl-pds">&quot;</span></span><span class="pl-k">===typeof</span> b<span class="pl-k">&amp;&amp;</span>b.handleEvent)<span class="pl-k">||!</span>b[H]<span class="pl-k">||!</span>c))<span class="pl-k">if</span>(d<span class="pl-k">=</span>c._h_9e2){h<span class="pl-k">=</span>c._e_8vj<span class="pl-k">&amp;&amp;</span>c._e_8vj[a];<span class="pl-k">for</span>(e<span class="pl-k">=</span><span class="pl-c1">0</span>;f<span class="pl-k">=</span>h[e<span class="pl-k">++</span>];)<span class="pl-k">if</span>(f<span class="pl-k">===</span>b){ba.<span class="pl-c1">call</span>(h,e<span class="pl-k">-</span><span class="pl-c1">1</span>,<span class="pl-c1">1</span>);<span class="pl-k">delete</span> h[<span class="pl-s"><span class="pl-pds">&quot;</span>_<span class="pl-pds">&quot;</span></span><span class="pl-k">+</span>b[H]];</td>
      </tr>
      <tr>
        <td id="L24" class="blob-num js-line-number" data-line-number="24"></td>
        <td id="LC24" class="blob-code blob-code-inner js-file-line"><span class="pl-k">break</span>}<span class="pl-k">if</span>(<span class="pl-k">!</span>h.<span class="pl-c1">length</span>){<span class="pl-v">this</span>.<span class="pl-c1">detachEvent</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>on<span class="pl-pds">&quot;</span></span><span class="pl-k">+</span>a,d);<span class="pl-k">delete</span> c._e_8vj[a];<span class="pl-k">for</span>(g <span class="pl-k">in</span> c._e_8vj)<span class="pl-k">if</span>(R(c._e_8vj,g))<span class="pl-k">return</span>;<span class="pl-k">delete</span> c._e_8vj;<span class="pl-k">delete</span> c._h_9e2}}},j.removeEventListener.__shim__<span class="pl-k">=</span>m,g.<span class="pl-c1">attachEvent</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>onmousedown<span class="pl-pds">&quot;</span></span>,<span class="pl-k">function</span>(){A.b<span class="pl-k">=</span><span class="pl-c1">event</span>.button}),g.<span class="pl-c1">attachEvent</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>onclick<span class="pl-pds">&quot;</span></span>,<span class="pl-k">function</span>(){A.b<span class="pl-k">=</span>k}));u.dispatchEvent<span class="pl-k">||</span>((f.<span class="pl-c1">Text</span><span class="pl-k">&amp;&amp;</span>f.<span class="pl-c1">Text</span>.<span class="pl-c1">prototype</span><span class="pl-k">||</span>j).dispatchEvent<span class="pl-k">=</span>j.dispatchEvent<span class="pl-k">=</span>r.dispatchEvent<span class="pl-k">=</span>f.dispatchEvent<span class="pl-k">=</span><span class="pl-c1">g</span>.<span class="pl-en">dispatchEvent</span><span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">a</span>){<span class="pl-k">if</span>(<span class="pl-k">!</span>a.<span class="pl-c1">type</span>)<span class="pl-k">return</span> m;a.returnValue<span class="pl-k">||</span>(a.returnValue<span class="pl-k">=</span>m);a.cancelBubble<span class="pl-k">&amp;&amp;</span>(a.cancelBubble<span class="pl-k">=</span></td>
      </tr>
      <tr>
        <td id="L25" class="blob-num js-line-number" data-line-number="25"></td>
        <td id="LC25" class="blob-code blob-code-inner js-file-line">q);<span class="pl-k">delete</span> a.__stopNow;<span class="pl-k">try</span>{<span class="pl-k">return</span> <span class="pl-v">this</span>.fireEvent(<span class="pl-s"><span class="pl-pds">&quot;</span>on<span class="pl-pds">&quot;</span></span><span class="pl-k">+</span>a.<span class="pl-c1">type</span>,a)}<span class="pl-k">catch</span>(b){<span class="pl-k">if</span>(<span class="pl-k">-</span><span class="pl-c1">2147024809</span><span class="pl-k">===</span>b.number<span class="pl-k">||</span><span class="pl-v">this</span><span class="pl-k">===</span>f<span class="pl-k">||-</span><span class="pl-c1">2146827850</span><span class="pl-k">===</span>b.number<span class="pl-k">&amp;&amp;!</span>(a.bubbles<span class="pl-k">=</span>q)){a.__custom_event<span class="pl-k">=</span>m;<span class="pl-k">for</span>(<span class="pl-k">var</span> c<span class="pl-k">=</span>a.<span class="pl-c1">target</span><span class="pl-k">=</span><span class="pl-v">this</span>,d<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&quot;</span>on<span class="pl-pds">&quot;</span></span><span class="pl-k">+</span>a.<span class="pl-c1">type</span>;<span class="pl-k">!</span>a.cancelBubble<span class="pl-k">&amp;&amp;</span>c;)(d <span class="pl-k">in</span> c<span class="pl-k">&amp;&amp;</span><span class="pl-s"><span class="pl-pds">&quot;</span>function<span class="pl-pds">&quot;</span></span><span class="pl-k">==typeof</span> c[d]<span class="pl-k">&amp;&amp;</span>(a.__dom0__<span class="pl-k">=</span>c[d])<span class="pl-k">||</span><span class="pl-s"><span class="pl-pds">&quot;</span>_<span class="pl-pds">&quot;</span></span><span class="pl-k">in</span> c<span class="pl-k">&amp;&amp;</span><span class="pl-s"><span class="pl-pds">&quot;</span>_e_8vj<span class="pl-pds">&quot;</span></span><span class="pl-k">in</span> c._)<span class="pl-k">&amp;&amp;</span>B.<span class="pl-c1">call</span>(c,a),c<span class="pl-k">=</span>a.bubbles<span class="pl-k">?</span>c<span class="pl-k">===</span>g<span class="pl-k">?</span>g.<span class="pl-c1">defaultView</span><span class="pl-k">:</span>c.<span class="pl-c1">parentNode</span><span class="pl-k">:</span>p,<span class="pl-s"><span class="pl-pds">&quot;</span>__dom0__<span class="pl-pds">&quot;</span></span><span class="pl-k">in</span> a<span class="pl-k">&amp;&amp;</span>(a.__dom0__<span class="pl-k">=</span>k,<span class="pl-k">delete</span> a.__dom0__);<span class="pl-k">return</span><span class="pl-k">!</span>a.cancelBubble}L(b)}},j.dispatchEvent.__shim__<span class="pl-k">=</span>m);g.createEvent<span class="pl-k">||</span>(<span class="pl-c1">g</span>.<span class="pl-en">createEvent</span><span class="pl-k">=</span><span class="pl-k">function</span>(){<span class="pl-k">return</span> <span class="pl-k">new</span> <span class="pl-en">x</span>(g.<span class="pl-c1">createEventObject</span>())});</td>
      </tr>
      <tr>
        <td id="L26" class="blob-num js-line-number" data-line-number="26"></td>
        <td id="LC26" class="blob-code blob-code-inner js-file-line">n.<span class="pl-c1">push</span>(<span class="pl-k">function</span>(){<span class="pl-k">function</span> <span class="pl-en">a</span>(<span class="pl-smi">a</span>){<span class="pl-k">var</span> b,c<span class="pl-k">=</span><span class="pl-v">this</span>.<span class="pl-c1">nodeName</span>.<span class="pl-c1">toUpperCase</span>(),d,e,f,j,n,l,r,s;<span class="pl-k">if</span>(<span class="pl-k">!</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>INPUT<span class="pl-pds">&quot;</span></span><span class="pl-k">!=</span>c<span class="pl-k">&amp;&amp;</span><span class="pl-s"><span class="pl-pds">&quot;</span>TEXTAREA<span class="pl-pds">&quot;</span></span><span class="pl-k">!=</span>c)){<span class="pl-s"><span class="pl-pds">&quot;</span>unknown<span class="pl-pds">&quot;</span></span><span class="pl-k">!=typeof</span> g.activeElement<span class="pl-k">&amp;&amp;</span>(l<span class="pl-k">=</span>g.activeElement);b<span class="pl-k">=</span>g.<span class="pl-c1">selection</span>;<span class="pl-v">this</span>._<span class="pl-k">&amp;&amp;</span>(r<span class="pl-k">=</span><span class="pl-v">this</span>._.__stop_events__,<span class="pl-v">this</span>._.__stop_events__<span class="pl-k">=</span>m);l<span class="pl-k">&amp;&amp;</span>l._<span class="pl-k">&amp;&amp;</span>(s<span class="pl-k">=</span>l._.__stop_events__,l._.__stop_events__<span class="pl-k">=</span>m);<span class="pl-k">try</span>{<span class="pl-v">this</span>.<span class="pl-c1">focus</span>(),d<span class="pl-k">=</span>b.createRange(),e<span class="pl-k">=</span>d.duplicate(),<span class="pl-s"><span class="pl-pds">&quot;</span>TEXTAREA<span class="pl-pds">&quot;</span></span><span class="pl-k">==</span>c<span class="pl-k">?</span>(f<span class="pl-k">=</span><span class="pl-v">this</span>.<span class="pl-c1">value</span>,d<span class="pl-k">=</span>e,a<span class="pl-k">?</span>(d.moveEnd(<span class="pl-s"><span class="pl-pds">&quot;</span>character<span class="pl-pds">&quot;</span></span>,f.<span class="pl-c1">length</span>),n<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span><span class="pl-k">==</span>d.<span class="pl-c1">text</span><span class="pl-k">?</span>f.<span class="pl-c1">length</span><span class="pl-k">:</span>f.<span class="pl-c1">lastIndexOf</span>(d.<span class="pl-c1">text</span>))<span class="pl-k">:</span>(d.moveStart(<span class="pl-s"><span class="pl-pds">&quot;</span>character<span class="pl-pds">&quot;</span></span>,<span class="pl-k">-</span>f.<span class="pl-c1">length</span>),n<span class="pl-k">=</span></td>
      </tr>
      <tr>
        <td id="L27" class="blob-num js-line-number" data-line-number="27"></td>
        <td id="LC27" class="blob-code blob-code-inner js-file-line">d.<span class="pl-c1">text</span>.<span class="pl-c1">length</span>))<span class="pl-k">:</span>(e.moveToElementText(<span class="pl-v">this</span>),e.setEndPoint(<span class="pl-s"><span class="pl-pds">&quot;</span>EndToEnd<span class="pl-pds">&quot;</span></span>,d),j<span class="pl-k">=</span>e.<span class="pl-c1">text</span>.<span class="pl-c1">length</span><span class="pl-k">-</span>d.<span class="pl-c1">text</span>.<span class="pl-c1">length</span>,n<span class="pl-k">=</span>a<span class="pl-k">?</span>j<span class="pl-k">:</span>j<span class="pl-k">+</span>d.<span class="pl-c1">text</span>.<span class="pl-c1">length</span>),l<span class="pl-k">&amp;&amp;</span>l.focus<span class="pl-k">&amp;&amp;</span>l.<span class="pl-c1">focus</span>()}<span class="pl-k">catch</span>(t){n<span class="pl-k">=</span>k}<span class="pl-v">this</span>._<span class="pl-k">&amp;&amp;!</span>r<span class="pl-k">&amp;&amp;delete</span> <span class="pl-v">this</span>._.__stop_events__;l<span class="pl-k">&amp;&amp;</span>(l._<span class="pl-k">&amp;&amp;!</span>s)<span class="pl-k">&amp;&amp;delete</span> l._.__stop_events__;<span class="pl-k">return</span> n}}<span class="pl-k">function</span> <span class="pl-en">b</span>(<span class="pl-smi">a</span>,<span class="pl-smi">b</span>){<span class="pl-k">if</span>(a<span class="pl-k">!=</span>k){b<span class="pl-k">==</span>k<span class="pl-k">&amp;&amp;</span>(b<span class="pl-k">=</span>a);<span class="pl-k">var</span> c<span class="pl-k">=</span><span class="pl-v">this</span>.<span class="pl-c1">nodeName</span>.<span class="pl-c1">toUpperCase</span>();<span class="pl-s"><span class="pl-pds">&quot;</span>INPUT<span class="pl-pds">&quot;</span></span><span class="pl-k">!=</span>c<span class="pl-k">&amp;&amp;</span><span class="pl-s"><span class="pl-pds">&quot;</span>TEXTAREA<span class="pl-pds">&quot;</span></span><span class="pl-k">!=</span>c<span class="pl-k">||</span>(c<span class="pl-k">=</span><span class="pl-v">this</span>.createTextRange(),c.collapse(m),c.moveStart(<span class="pl-s"><span class="pl-pds">&quot;</span>character<span class="pl-pds">&quot;</span></span>,a),c.moveEnd(<span class="pl-s"><span class="pl-pds">&quot;</span>character<span class="pl-pds">&quot;</span></span>,b),c.<span class="pl-c1">select</span>())}}<span class="pl-k">var</span> c<span class="pl-k">=</span>f.HTMLTextAreaElement<span class="pl-k">&amp;&amp;</span>f.HTMLTextAreaElement.<span class="pl-c1">prototype</span>,</td>
      </tr>
      <tr>
        <td id="L28" class="blob-num js-line-number" data-line-number="28"></td>
        <td id="LC28" class="blob-code blob-code-inner js-file-line">d<span class="pl-k">=</span>{setSelectionRange<span class="pl-k">:</span>{value<span class="pl-k">:</span>b},selectionStart<span class="pl-k">:</span>{<span class="pl-en">get</span><span class="pl-k">:</span><span class="pl-k">function</span>(){<span class="pl-k">return</span> a.<span class="pl-c1">call</span>(<span class="pl-v">this</span>,m)},<span class="pl-en">set</span><span class="pl-k">:</span><span class="pl-k">function</span>(<span class="pl-smi">c</span>){b.<span class="pl-c1">call</span>(<span class="pl-v">this</span>,c,a.<span class="pl-c1">call</span>(<span class="pl-v">this</span>));<span class="pl-k">return</span> c}},selectionEnd<span class="pl-k">:</span>{<span class="pl-en">get</span><span class="pl-k">:</span><span class="pl-k">function</span>(){<span class="pl-k">return</span> a.<span class="pl-c1">call</span>(<span class="pl-v">this</span>)},<span class="pl-en">set</span><span class="pl-k">:</span><span class="pl-k">function</span>(<span class="pl-smi">c</span>){b.<span class="pl-c1">call</span>(<span class="pl-v">this</span>,a.<span class="pl-c1">call</span>(<span class="pl-v">this</span>,m),c);<span class="pl-k">return</span> c}}};<span class="pl-c1">Object</span>.defineProperties(f.HTMLInputElement<span class="pl-k">&amp;&amp;</span>f.HTMLInputElement.<span class="pl-c1">prototype</span><span class="pl-k">||</span>t,d);c<span class="pl-k">&amp;&amp;</span><span class="pl-c1">Object</span>.defineProperties(c,d)});<span class="pl-c1">8</span><span class="pl-k">&gt;</span>v<span class="pl-k">&amp;&amp;</span>(t.ielt8<span class="pl-k">=</span>m);g.<span class="pl-c1">doctype</span><span class="pl-k">===</span>p<span class="pl-k">&amp;&amp;</span><span class="pl-c1">7</span><span class="pl-k">&lt;</span>v<span class="pl-k">&amp;&amp;</span>n.<span class="pl-c1">push</span>(<span class="pl-k">function</span>(){<span class="pl-k">var</span> a<span class="pl-k">=</span>g.<span class="pl-c1">childNodes</span>[<span class="pl-c1">0</span>];<span class="pl-c1">Object</span>.defineProperty(a,<span class="pl-s"><span class="pl-pds">&quot;</span>nodeType<span class="pl-pds">&quot;</span></span>,{<span class="pl-en">get</span><span class="pl-k">:</span><span class="pl-k">function</span>(){<span class="pl-k">return</span> <span class="pl-c1">10</span>}});</td>
      </tr>
      <tr>
        <td id="L29" class="blob-num js-line-number" data-line-number="29"></td>
        <td id="LC29" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">Object</span>.defineProperty(g,<span class="pl-s"><span class="pl-pds">&quot;</span>doctype<span class="pl-pds">&quot;</span></span>,{configurable<span class="pl-k">:</span>m,enumerable<span class="pl-k">:</span>q,<span class="pl-en">get</span><span class="pl-k">:</span><span class="pl-k">function</span>(){<span class="pl-k">return</span> a}})});j.contains<span class="pl-k">||</span>(j.contains<span class="pl-k">=</span>wa);s.<span class="pl-c1">call</span>(aa,g,<span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>).contains<span class="pl-k">||</span>(f.<span class="pl-c1">Text</span><span class="pl-k">&amp;&amp;</span>f.<span class="pl-c1">Text</span>.<span class="pl-c1">prototype</span><span class="pl-k">?</span>n.<span class="pl-c1">push</span>(y.<span class="pl-c1">call</span>(z,p,<span class="pl-c1">Text</span>.<span class="pl-c1">prototype</span>,j))<span class="pl-k">:</span><span class="pl-k">function</span>(){<span class="pl-k">var</span> a;<span class="pl-k">try</span>{a<span class="pl-k">=</span>s.<span class="pl-c1">call</span>(aa,<span class="pl-v">this</span>,<span class="pl-s"><span class="pl-pds">&quot;</span>a<span class="pl-pds">&quot;</span></span>),a.contains<span class="pl-k">=</span>K()}<span class="pl-k">catch</span>(b){<span class="pl-k">return</span> q}<span class="pl-k">return</span> m}()<span class="pl-k">&amp;&amp;</span>(<span class="pl-c1">g</span>.<span class="pl-en">createTextNode</span><span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">a</span>){a<span class="pl-k">=</span>s.<span class="pl-c1">call</span>(aa,<span class="pl-v">this</span>,a);a.contains<span class="pl-k">=</span>j.contains;<span class="pl-k">return</span> a}));<span class="pl-k">!</span>s.<span class="pl-c1">call</span>($,g).contains<span class="pl-k">&amp;&amp;</span>(f.HTMLDocument<span class="pl-k">&amp;&amp;</span>f.HTMLDocument.<span class="pl-c1">prototype</span>)<span class="pl-k">&amp;&amp;</span>n.<span class="pl-c1">push</span>(y.<span class="pl-c1">call</span>(z,p,f.HTMLDocument.<span class="pl-c1">prototype</span>,j));<span class="pl-s"><span class="pl-pds">&quot;</span>children<span class="pl-pds">&quot;</span></span><span class="pl-k">in</span></td>
      </tr>
      <tr>
        <td id="L30" class="blob-num js-line-number" data-line-number="30"></td>
        <td id="LC30" class="blob-code blob-code-inner js-file-line">u<span class="pl-k">||</span>n.<span class="pl-c1">push</span>(<span class="pl-k">function</span>(){<span class="pl-c1">Object</span>.defineProperty(t,<span class="pl-s"><span class="pl-pds">&quot;</span>children<span class="pl-pds">&quot;</span></span>,{<span class="pl-en">get</span><span class="pl-k">:</span><span class="pl-k">function</span>(){<span class="pl-k">for</span>(<span class="pl-k">var</span> a<span class="pl-k">=</span>[],b<span class="pl-k">=</span><span class="pl-v">this</span>.<span class="pl-c1">firstChild</span>;b;)<span class="pl-c1">1</span><span class="pl-k">==</span>b.<span class="pl-c1">nodeType</span><span class="pl-k">&amp;&amp;</span>a.<span class="pl-c1">push</span>(b),b<span class="pl-k">=</span>b.<span class="pl-c1">nextSibling</span>;<span class="pl-k">return</span> a}})});n.<span class="pl-c1">push</span>(<span class="pl-k">function</span>(){<span class="pl-k">function</span> <span class="pl-en">a</span>(<span class="pl-smi">a</span>,<span class="pl-smi">c</span>){<span class="pl-k">var</span> d;<span class="pl-k">try</span>{a<span class="pl-k">:</span>{<span class="pl-k">var</span> h<span class="pl-k">=</span>a;<span class="pl-s"><span class="pl-pds">&quot;</span>element<span class="pl-pds">&quot;</span></span><span class="pl-k">in</span> h<span class="pl-k">&amp;&amp;</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>defaults<span class="pl-pds">&quot;</span></span><span class="pl-k">in</span> h<span class="pl-k">&amp;&amp;</span><span class="pl-s"><span class="pl-pds">&quot;</span>document<span class="pl-pds">&quot;</span></span><span class="pl-k">in</span> h)<span class="pl-k">&amp;&amp;</span>(h<span class="pl-k">=</span>h.element);<span class="pl-k">var</span> e<span class="pl-k">=</span>h.getBoundingClientRect(),f,j,l;<span class="pl-k">if</span>((l<span class="pl-k">=</span>h.<span class="pl-c1">ownerDocument</span>)<span class="pl-k">!==</span>g){<span class="pl-k">if</span>(f<span class="pl-k">=</span>l<span class="pl-k">&amp;&amp;</span>l.<span class="pl-c1">body</span>,j<span class="pl-k">=</span>l<span class="pl-k">&amp;&amp;</span>l.<span class="pl-c1">documentElement</span>,<span class="pl-k">!</span>f<span class="pl-k">||!</span>j){d<span class="pl-k">=</span>c<span class="pl-k">?</span>e.<span class="pl-c1">left</span><span class="pl-k">:</span>e.<span class="pl-c1">top</span>;<span class="pl-k">break</span> a}}<span class="pl-k">else</span> f<span class="pl-k">=</span>g.<span class="pl-c1">body</span>,j<span class="pl-k">=</span>r;d<span class="pl-k">=</span>c<span class="pl-k">?</span>e.<span class="pl-c1">left</span><span class="pl-k">+</span>P()<span class="pl-k">-</span>(j.clientLeft<span class="pl-k">||</span>f.clientLeft<span class="pl-k">||</span><span class="pl-c1">0</span>)<span class="pl-k">:</span>e.<span class="pl-c1">top</span><span class="pl-k">+</span>Q()<span class="pl-k">-</span>(j.clientTop<span class="pl-k">||</span></td>
      </tr>
      <tr>
        <td id="L31" class="blob-num js-line-number" data-line-number="31"></td>
        <td id="LC31" class="blob-code blob-code-inner js-file-line">f.clientTop<span class="pl-k">||</span><span class="pl-c1">0</span>)}}<span class="pl-k">catch</span>(n){d<span class="pl-k">=</span>a;h<span class="pl-k">=</span><span class="pl-c1">0</span>;<span class="pl-k">for</span>(e<span class="pl-k">=</span>c<span class="pl-k">?</span><span class="pl-s"><span class="pl-pds">&quot;</span>offsetLeft<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>offsetTop<span class="pl-pds">&quot;</span></span>;d;)h<span class="pl-k">+=</span><span class="pl-c1">parseInt</span>(d[e],<span class="pl-c1">10</span>),d<span class="pl-k">=</span>d.offsetParent;d<span class="pl-k">=</span>h}<span class="pl-k">return</span> d}<span class="pl-c1">Object</span>.defineProperties(t,{offsetLeft<span class="pl-k">:</span>{<span class="pl-en">get</span><span class="pl-k">:</span><span class="pl-k">function</span>(){<span class="pl-k">return</span> a(<span class="pl-v">this</span>,m)}},offsetTop<span class="pl-k">:</span>{<span class="pl-en">get</span><span class="pl-k">:</span><span class="pl-k">function</span>(){<span class="pl-k">return</span> a(<span class="pl-v">this</span>)}}})});u.childElementCount<span class="pl-k">==</span>k<span class="pl-k">&amp;&amp;</span>n.<span class="pl-c1">push</span>(<span class="pl-k">function</span>(){<span class="pl-c1">Object</span>.defineProperties(t,{firstElementChild<span class="pl-k">:</span>{<span class="pl-en">get</span><span class="pl-k">:</span><span class="pl-k">function</span>(){<span class="pl-k">var</span> a;<span class="pl-k">for</span>(a<span class="pl-k">=</span><span class="pl-v">this</span>.<span class="pl-c1">firstChild</span>;a<span class="pl-k">&amp;&amp;</span><span class="pl-c1">1</span><span class="pl-k">!=</span>a.<span class="pl-c1">nodeType</span>;)a<span class="pl-k">=</span>a.<span class="pl-c1">nextSibling</span>;<span class="pl-k">return</span> a}},lastElementChild<span class="pl-k">:</span>{<span class="pl-en">get</span><span class="pl-k">:</span><span class="pl-k">function</span>(){<span class="pl-k">var</span> a;<span class="pl-k">for</span>(a<span class="pl-k">=</span><span class="pl-v">this</span>.<span class="pl-c1">lastChild</span>;a<span class="pl-k">&amp;&amp;</span><span class="pl-c1">1</span><span class="pl-k">!=</span>a.<span class="pl-c1">nodeType</span>;)a<span class="pl-k">=</span>a.previousSibling;</td>
      </tr>
      <tr>
        <td id="L32" class="blob-num js-line-number" data-line-number="32"></td>
        <td id="LC32" class="blob-code blob-code-inner js-file-line"><span class="pl-k">return</span> a}},nextElementSibling<span class="pl-k">:</span>{<span class="pl-en">get</span><span class="pl-k">:</span><span class="pl-k">function</span>(){<span class="pl-k">for</span>(<span class="pl-k">var</span> a<span class="pl-k">=</span><span class="pl-v">this</span>;(a<span class="pl-k">=</span>a.<span class="pl-c1">nextSibling</span>)<span class="pl-k">&amp;&amp;</span><span class="pl-c1">1</span><span class="pl-k">!=</span>a.<span class="pl-c1">nodeType</span>;);<span class="pl-k">return</span> a}},previousElementSibling<span class="pl-k">:</span>{<span class="pl-en">get</span><span class="pl-k">:</span><span class="pl-k">function</span>(){<span class="pl-k">for</span>(<span class="pl-k">var</span> a<span class="pl-k">=</span><span class="pl-v">this</span>;(a<span class="pl-k">=</span>a.previousSibling)<span class="pl-k">&amp;&amp;</span><span class="pl-c1">1</span><span class="pl-k">!=</span>a.<span class="pl-c1">nodeType</span>;);<span class="pl-k">return</span> a}}})});g.<span class="pl-c1">ELEMENT_NODE</span><span class="pl-k">||</span>(e<span class="pl-k">=</span>{<span class="pl-c1">ELEMENT_NODE</span><span class="pl-k">:</span><span class="pl-c1">1</span>,<span class="pl-c1">TEXT_NODE</span><span class="pl-k">:</span><span class="pl-c1">3</span>,<span class="pl-c1">PROCESSING_INSTRUCTION_NODE</span><span class="pl-k">:</span><span class="pl-c1">7</span>,<span class="pl-c1">COMMENT_NODE</span><span class="pl-k">:</span><span class="pl-c1">8</span>,<span class="pl-c1">DOCUMENT_NODE</span><span class="pl-k">:</span><span class="pl-c1">9</span>,<span class="pl-c1">DOCUMENT_TYPE_NODE</span><span class="pl-k">:</span><span class="pl-c1">10</span>,<span class="pl-c1">DOCUMENT_FRAGMENT_NODE</span><span class="pl-k">:</span><span class="pl-c1">11</span>},z(g,e),z(j,e),z(f.Node,e));<span class="pl-s"><span class="pl-pds">&quot;</span>textContent<span class="pl-pds">&quot;</span></span><span class="pl-k">in</span> u<span class="pl-k">||</span>n.<span class="pl-c1">push</span>(<span class="pl-k">function</span>(){<span class="pl-c1">Object</span>.defineProperty(j,<span class="pl-s"><span class="pl-pds">&quot;</span>textContent<span class="pl-pds">&quot;</span></span>,{<span class="pl-en">get</span><span class="pl-k">:</span><span class="pl-k">function</span>(){<span class="pl-k">if</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>innerText<span class="pl-pds">&quot;</span></span><span class="pl-k">in</span></td>
      </tr>
      <tr>
        <td id="L33" class="blob-num js-line-number" data-line-number="33"></td>
        <td id="LC33" class="blob-code blob-code-inner js-file-line"><span class="pl-v">this</span>)<span class="pl-k">return</span> <span class="pl-v">this</span>.innerText;<span class="pl-k">if</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>data<span class="pl-pds">&quot;</span></span><span class="pl-k">in</span> <span class="pl-v">this</span><span class="pl-k">&amp;&amp;</span><span class="pl-v">this</span>.appendData)<span class="pl-k">return</span> <span class="pl-v">this</span>.<span class="pl-c1">data</span>},<span class="pl-en">set</span><span class="pl-k">:</span><span class="pl-k">function</span>(<span class="pl-smi">a</span>){<span class="pl-s"><span class="pl-pds">&quot;</span>innerText<span class="pl-pds">&quot;</span></span><span class="pl-k">in</span> <span class="pl-v">this</span><span class="pl-k">?</span><span class="pl-v">this</span>.innerText<span class="pl-k">=</span>a<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>data<span class="pl-pds">&quot;</span></span><span class="pl-k">in</span> <span class="pl-v">this</span><span class="pl-k">&amp;&amp;</span><span class="pl-v">this</span>.replaceData<span class="pl-k">&amp;&amp;</span><span class="pl-v">this</span>.<span class="pl-c1">replaceData</span>(<span class="pl-c1">0</span>,<span class="pl-v">this</span>.<span class="pl-c1">length</span>,a);<span class="pl-k">return</span> a}})});<span class="pl-s"><span class="pl-pds">&quot;</span>isEqualNode<span class="pl-pds">&quot;</span></span><span class="pl-k">in</span> u<span class="pl-k">||</span>(g.isEqualNode<span class="pl-k">=</span>r.isEqualNode<span class="pl-k">=</span><span class="pl-c1">j</span>.<span class="pl-en">isEqualNode</span><span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">a</span>){<span class="pl-k">var</span> b,c;<span class="pl-k">if</span>(a<span class="pl-k">===</span>p<span class="pl-k">||</span>a.<span class="pl-c1">nodeType</span><span class="pl-k">!==</span><span class="pl-v">this</span>.<span class="pl-c1">nodeType</span><span class="pl-k">||</span><span class="pl-c1">10</span><span class="pl-k">===</span>a.<span class="pl-c1">nodeType</span><span class="pl-k">&amp;&amp;</span>(<span class="pl-v">this</span>.<span class="pl-c1">name</span><span class="pl-k">!==</span>a.<span class="pl-c1">name</span><span class="pl-k">||</span><span class="pl-v">this</span>.<span class="pl-c1">publicId</span><span class="pl-k">!==</span>a.<span class="pl-c1">publicId</span><span class="pl-k">||</span><span class="pl-v">this</span>.<span class="pl-c1">systemId</span><span class="pl-k">!==</span>a.<span class="pl-c1">systemId</span>))<span class="pl-k">return</span> q;<span class="pl-k">if</span>(<span class="pl-c1">1</span><span class="pl-k">===</span>a.<span class="pl-c1">nodeType</span>){<span class="pl-k">if</span>(<span class="pl-v">this</span>.<span class="pl-c1">namespaceURI</span><span class="pl-k">!=</span>a.<span class="pl-c1">namespaceURI</span><span class="pl-k">||</span><span class="pl-v">this</span>.<span class="pl-c1">prefix</span><span class="pl-k">!=</span></td>
      </tr>
      <tr>
        <td id="L34" class="blob-num js-line-number" data-line-number="34"></td>
        <td id="LC34" class="blob-code blob-code-inner js-file-line">a.<span class="pl-c1">prefix</span><span class="pl-k">||</span><span class="pl-v">this</span>.<span class="pl-c1">localName</span><span class="pl-k">!=</span>a.<span class="pl-c1">localName</span>)<span class="pl-k">return</span> q;b<span class="pl-k">=</span><span class="pl-c1">0</span>;<span class="pl-k">for</span>(c<span class="pl-k">=</span><span class="pl-v">this</span>.<span class="pl-c1">attributes</span>.<span class="pl-c1">length</span>;b<span class="pl-k">&lt;</span>c;b<span class="pl-k">++</span>){<span class="pl-k">var</span> d<span class="pl-k">=</span><span class="pl-v">this</span>.<span class="pl-c1">attributes</span>[length],e<span class="pl-k">=</span>a.getAttributeNS(d.<span class="pl-c1">namespaceURI</span>,d.<span class="pl-c1">localName</span>);<span class="pl-k">if</span>(e<span class="pl-k">===</span>p<span class="pl-k">||</span>e.<span class="pl-c1">value</span><span class="pl-k">!==</span>d.<span class="pl-c1">value</span>)<span class="pl-k">return</span> q}}<span class="pl-k">if</span>(<span class="pl-c1">7</span><span class="pl-k">===</span>a.<span class="pl-c1">nodeType</span><span class="pl-k">&amp;&amp;</span>(<span class="pl-v">this</span>.<span class="pl-c1">target</span><span class="pl-k">!==</span>a.<span class="pl-c1">target</span><span class="pl-k">||</span><span class="pl-v">this</span>.<span class="pl-c1">data</span><span class="pl-k">!==</span>a.<span class="pl-c1">data</span>)<span class="pl-k">||</span>(<span class="pl-c1">3</span><span class="pl-k">===</span>a.<span class="pl-c1">nodeType</span><span class="pl-k">||</span><span class="pl-c1">8</span><span class="pl-k">===</span>a.<span class="pl-c1">nodeType</span>)<span class="pl-k">&amp;&amp;</span><span class="pl-v">this</span>.<span class="pl-c1">data</span><span class="pl-k">!==</span>a.<span class="pl-c1">data</span><span class="pl-k">||</span>a.<span class="pl-c1">childNodes</span>.<span class="pl-c1">length</span><span class="pl-k">!==</span><span class="pl-v">this</span>.<span class="pl-c1">childNodes</span>.<span class="pl-c1">length</span>)<span class="pl-k">return</span> q;b<span class="pl-k">=</span><span class="pl-c1">0</span>;<span class="pl-k">for</span>(c<span class="pl-k">=</span>a.<span class="pl-c1">childNodes</span>.<span class="pl-c1">length</span>;b<span class="pl-k">&lt;</span>c;b<span class="pl-k">++</span>)<span class="pl-k">if</span>(a.<span class="pl-c1">childNodes</span>[b].isEqualNode(<span class="pl-v">this</span>.<span class="pl-c1">childNodes</span>[b])<span class="pl-k">===</span>q)<span class="pl-k">return</span> q;<span class="pl-k">return</span> m});g.importNode<span class="pl-k">||</span></td>
      </tr>
      <tr>
        <td id="L35" class="blob-num js-line-number" data-line-number="35"></td>
        <td id="LC35" class="blob-code blob-code-inner js-file-line">(<span class="pl-c1">g</span>.<span class="pl-en">importNode</span><span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">a</span>,<span class="pl-smi">b</span>){<span class="pl-k">switch</span>(a.<span class="pl-c1">nodeType</span>){<span class="pl-k">case</span> <span class="pl-c1">1</span><span class="pl-k">:</span><span class="pl-k">var</span> c<span class="pl-k">=</span>g.<span class="pl-c1">createElement</span>(a.<span class="pl-c1">nodeName</span>),d<span class="pl-k">=</span>a.<span class="pl-c1">attributes</span>,e,f,j;<span class="pl-k">if</span>(d<span class="pl-k">&amp;&amp;</span><span class="pl-c1">0</span><span class="pl-k">&lt;</span>d.<span class="pl-c1">length</span>){f<span class="pl-k">=</span><span class="pl-c1">0</span>;<span class="pl-k">for</span>(j<span class="pl-k">=</span>d.<span class="pl-c1">length</span>;f<span class="pl-k">&lt;</span>j;)d<span class="pl-k">=</span>a.<span class="pl-c1">attributes</span>[f<span class="pl-k">++</span>],c.<span class="pl-c1">setAttribute</span>(d.<span class="pl-c1">nodeName</span>,a.<span class="pl-c1">getAttribute</span>(d.<span class="pl-c1">nodeName</span>))}<span class="pl-k">if</span>(b<span class="pl-k">&amp;&amp;</span>(e<span class="pl-k">=</span>a.<span class="pl-c1">childNodes</span>)<span class="pl-k">&amp;&amp;</span><span class="pl-c1">0</span><span class="pl-k">&lt;</span>e.<span class="pl-c1">length</span>){f<span class="pl-k">=</span><span class="pl-c1">0</span>;<span class="pl-k">for</span>(j<span class="pl-k">=</span>e.<span class="pl-c1">length</span>;f<span class="pl-k">&lt;</span>j;)c.<span class="pl-c1">appendChild</span>(g.importNode(e[f<span class="pl-k">++</span>],b))}<span class="pl-k">return</span> c;<span class="pl-k">case</span> <span class="pl-c1">3</span><span class="pl-k">:</span><span class="pl-k">case</span> <span class="pl-c1">4</span><span class="pl-k">:</span><span class="pl-k">case</span> <span class="pl-c1">8</span><span class="pl-k">:</span><span class="pl-k">return</span> g.<span class="pl-c1">createTextNode</span>(a.<span class="pl-c1">nodeValue</span>)}ka(<span class="pl-s"><span class="pl-pds">&quot;</span>NOT_SUPPORTED_ERR<span class="pl-pds">&quot;</span></span>);<span class="pl-k">return</span> p},g.importNode.shim<span class="pl-k">=</span>m);e<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&quot;</span>compareDocumentPosition<span class="pl-pds">&quot;</span></span>;<span class="pl-k">if</span>(<span class="pl-k">!</span>(e <span class="pl-k">in</span> g)){<span class="pl-k">var</span> l,n<span class="pl-k">=</span>l<span class="pl-k">||</span><span class="pl-s"><span class="pl-pds">&quot;</span>DOCUMENT_POSITION_<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L36" class="blob-num js-line-number" data-line-number="36"></td>
        <td id="LC36" class="blob-code blob-code-inner js-file-line">r[e]<span class="pl-k">=</span>g[e]<span class="pl-k">=</span>j[e]<span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">a</span>){<span class="pl-k">return</span> <span class="pl-v">this</span>.contains<span class="pl-k">?</span>(<span class="pl-v">this</span><span class="pl-k">!=</span>a<span class="pl-k">&amp;&amp;</span><span class="pl-v">this</span>.contains(a)<span class="pl-k">&amp;&amp;</span><span class="pl-c1">16</span>)<span class="pl-k">+</span>(<span class="pl-v">this</span><span class="pl-k">!=</span>a<span class="pl-k">&amp;&amp;</span>a.contains(<span class="pl-v">this</span>)<span class="pl-k">&amp;&amp;</span><span class="pl-c1">8</span>)<span class="pl-k">+</span>(<span class="pl-c1">0</span><span class="pl-k">&lt;=</span><span class="pl-v">this</span>.sourceIndex<span class="pl-k">&amp;&amp;</span><span class="pl-c1">0</span><span class="pl-k">&lt;=</span>a.sourceIndex<span class="pl-k">?</span>(<span class="pl-v">this</span>.sourceIndex<span class="pl-k">&lt;</span>a.sourceIndex<span class="pl-k">&amp;&amp;</span><span class="pl-c1">4</span>)<span class="pl-k">+</span>(<span class="pl-v">this</span>.sourceIndex<span class="pl-k">&gt;</span>a.sourceIndex<span class="pl-k">&amp;&amp;</span><span class="pl-c1">2</span>)<span class="pl-k">:</span><span class="pl-c1">1</span>)<span class="pl-k">+</span><span class="pl-c1">0</span><span class="pl-k">:</span><span class="pl-c1">0</span>};l<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&quot;</span>DISCONNECTED<span class="pl-pds">&quot;</span></span>;r[n<span class="pl-k">+</span>l]<span class="pl-k">=</span>g[n<span class="pl-k">+</span>l]<span class="pl-k">=</span>j[n<span class="pl-k">+</span>l]<span class="pl-k">=</span><span class="pl-c1">1</span>;l<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&quot;</span>PRECEDING<span class="pl-pds">&quot;</span></span>;r[n<span class="pl-k">+</span>l]<span class="pl-k">=</span>g[n<span class="pl-k">+</span>l]<span class="pl-k">=</span>j[n<span class="pl-k">+</span>l]<span class="pl-k">=</span><span class="pl-c1">2</span>;l<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&quot;</span>FOLLOWING<span class="pl-pds">&quot;</span></span>;r[n<span class="pl-k">+</span>l]<span class="pl-k">=</span>g[n<span class="pl-k">+</span>l]<span class="pl-k">=</span>j[n<span class="pl-k">+</span>l]<span class="pl-k">=</span><span class="pl-c1">4</span>;l<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&quot;</span>CONTAINS<span class="pl-pds">&quot;</span></span>;r[n<span class="pl-k">+</span>l]<span class="pl-k">=</span>g[n<span class="pl-k">+</span>l]<span class="pl-k">=</span>j[n<span class="pl-k">+</span>l]<span class="pl-k">=</span><span class="pl-c1">8</span>;l<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&quot;</span>CONTAINED_BY<span class="pl-pds">&quot;</span></span>;r[n<span class="pl-k">+</span>l]<span class="pl-k">=</span>g[n<span class="pl-k">+</span>l]<span class="pl-k">=</span>j[n<span class="pl-k">+</span>l]<span class="pl-k">=</span><span class="pl-c1">16</span>}f.getComputedStyle<span class="pl-k">||</span>(<span class="pl-c1">f</span>.<span class="pl-en">getComputedStyle</span><span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">a</span>){<span class="pl-k">var</span> b<span class="pl-k">=</span>a.currentStyle<span class="pl-k">||</span>a.runtimeStyle;</td>
      </tr>
      <tr>
        <td id="L37" class="blob-num js-line-number" data-line-number="37"></td>
        <td id="LC37" class="blob-code blob-code-inner js-file-line"><span class="pl-s"><span class="pl-pds">&quot;</span>getPropertyValue<span class="pl-pds">&quot;</span></span><span class="pl-k">in</span> b<span class="pl-k">||</span>(a.runtimeStyle.getPropertyValue<span class="pl-k">=</span>y.<span class="pl-c1">call</span>(ea.getPropertyValue,a),a.runtimeStyle.setProperty<span class="pl-k">=</span>a.runtimeStyle.removeProperty<span class="pl-k">=</span>f.getComputedStyle.j,a.runtimeStyle.getPropertyPriority<span class="pl-k">=</span>f.getComputedStyle.i,a.runtimeStyle.item<span class="pl-k">=</span>ea.item);<span class="pl-k">var</span> c,d,e;(d<span class="pl-k">=</span>f.CSSStyleDeclaration)<span class="pl-k">&amp;&amp;</span>(d<span class="pl-k">=</span>d.<span class="pl-c1">prototype</span>)<span class="pl-k">&amp;&amp;</span>(<span class="pl-k">!</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>float<span class="pl-pds">&quot;</span></span><span class="pl-k">in</span> b)<span class="pl-k">||!</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>opacity<span class="pl-pds">&quot;</span></span><span class="pl-k">in</span> b))<span class="pl-k">?</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>float<span class="pl-pds">&quot;</span></span><span class="pl-k">in</span> b<span class="pl-k">||</span>((c<span class="pl-k">=</span><span class="pl-c1">Object</span>.getOwnPropertyDescriptor(d,<span class="pl-s"><span class="pl-pds">&quot;</span>float<span class="pl-pds">&quot;</span></span>))<span class="pl-k">&amp;&amp;delete</span> d[<span class="pl-s"><span class="pl-pds">&quot;</span>float<span class="pl-pds">&quot;</span></span>],e<span class="pl-k">=</span>y.<span class="pl-c1">call</span>(f.getComputedStyle.e,a),<span class="pl-c1">Object</span>.defineProperty(a.runtimeStyle,<span class="pl-s"><span class="pl-pds">&quot;</span>float<span class="pl-pds">&quot;</span></span>,{value<span class="pl-k">:</span>{valueOf<span class="pl-k">:</span>e,</td>
      </tr>
      <tr>
        <td id="L38" class="blob-num js-line-number" data-line-number="38"></td>
        <td id="LC38" class="blob-code blob-code-inner js-file-line">toString<span class="pl-k">:</span>e},configurable<span class="pl-k">:</span>m,writable<span class="pl-k">:</span>m}),c<span class="pl-k">&amp;&amp;</span><span class="pl-c1">Object</span>.defineProperty(d,<span class="pl-s"><span class="pl-pds">&quot;</span>float<span class="pl-pds">&quot;</span></span>,c)),<span class="pl-s"><span class="pl-pds">&quot;</span>opacity<span class="pl-pds">&quot;</span></span><span class="pl-k">in</span> b<span class="pl-k">||</span>((c<span class="pl-k">=</span><span class="pl-c1">Object</span>.getOwnPropertyDescriptor(d,<span class="pl-s"><span class="pl-pds">&quot;</span>opacity<span class="pl-pds">&quot;</span></span>))<span class="pl-k">&amp;&amp;</span><span class="pl-s"><span class="pl-pds">&quot;</span>opacity<span class="pl-pds">&quot;</span></span><span class="pl-k">in</span> d<span class="pl-k">&amp;&amp;delete</span> d.opacity,e<span class="pl-k">=</span>y.<span class="pl-c1">call</span>(f.getComputedStyle.f,a),<span class="pl-c1">Object</span>.defineProperty(a.runtimeStyle,<span class="pl-s"><span class="pl-pds">&quot;</span>opacity<span class="pl-pds">&quot;</span></span>,{value<span class="pl-k">:</span>{valueOf<span class="pl-k">:</span>e,toString<span class="pl-k">:</span>e},configurable<span class="pl-k">:</span>m,writable<span class="pl-k">:</span>m}),c<span class="pl-k">&amp;&amp;</span><span class="pl-c1">Object</span>.defineProperty(d,<span class="pl-s"><span class="pl-pds">&quot;</span>opacity<span class="pl-pds">&quot;</span></span>,c)))<span class="pl-k">:</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>float<span class="pl-pds">&quot;</span></span><span class="pl-k">in</span> b<span class="pl-k">||</span>(e<span class="pl-k">=</span>y.<span class="pl-c1">call</span>(f.getComputedStyle.e,a),a.runtimeStyle[<span class="pl-s"><span class="pl-pds">&quot;</span>float<span class="pl-pds">&quot;</span></span>]<span class="pl-k">=</span>{valueOf<span class="pl-k">:</span>e,toString<span class="pl-k">:</span>e}),<span class="pl-s"><span class="pl-pds">&quot;</span>opacity<span class="pl-pds">&quot;</span></span><span class="pl-k">in</span> b<span class="pl-k">||</span>(e<span class="pl-k">=</span>y.<span class="pl-c1">call</span>(f.getComputedStyle.f,a),</td>
      </tr>
      <tr>
        <td id="L39" class="blob-num js-line-number" data-line-number="39"></td>
        <td id="LC39" class="blob-code blob-code-inner js-file-line">a.runtimeStyle.opacity<span class="pl-k">=</span>{valueOf<span class="pl-k">:</span>e,toString<span class="pl-k">:</span>e}));<span class="pl-k">return</span> a.currentStyle},<span class="pl-c1">f.getComputedStyle</span>.<span class="pl-en">f</span><span class="pl-k">=</span><span class="pl-k">function</span>(){<span class="pl-k">return</span> <span class="pl-v">this</span>.runtimeStyle.msOpacity<span class="pl-k">||</span><span class="pl-v">this</span>.<span class="pl-c1">style</span>.msOpacity<span class="pl-k">||</span>U.<span class="pl-c1">call</span>(<span class="pl-v">this</span>.<span class="pl-c1">style</span>)<span class="pl-k">||</span>U.<span class="pl-c1">call</span>(<span class="pl-v">this</span>.runtimeStyle)},<span class="pl-c1">f.getComputedStyle</span>.<span class="pl-en">e</span><span class="pl-k">=</span><span class="pl-k">function</span>(){<span class="pl-k">return</span> <span class="pl-v">this</span>.runtimeStyle.styleFloat<span class="pl-k">||</span><span class="pl-v">this</span>.<span class="pl-c1">style</span>.styleFloat},<span class="pl-c1">f.getComputedStyle</span>.<span class="pl-en">j</span><span class="pl-k">=</span><span class="pl-k">function</span>(){ka(<span class="pl-s"><span class="pl-pds">&quot;</span>NO_MODIFICATION_ALLOWED_ERR<span class="pl-pds">&quot;</span></span>)},<span class="pl-c1">f.getComputedStyle</span>.<span class="pl-en">i</span><span class="pl-k">=</span><span class="pl-k">function</span>(){<span class="pl-k">return</span><span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>});<span class="pl-c1">g</span>.<span class="pl-en">createDocumentFragment</span><span class="pl-k">=</span><span class="pl-k">function</span>(){<span class="pl-k">var</span> a<span class="pl-k">=</span>s.<span class="pl-c1">call</span>($,<span class="pl-v">this</span>);f.DocumentFragment<span class="pl-k">===</span>f.Document<span class="pl-k">&amp;&amp;</span>z(a,</td>
      </tr>
      <tr>
        <td id="L40" class="blob-num js-line-number" data-line-number="40"></td>
        <td id="LC40" class="blob-code blob-code-inner js-file-line">f.DocumentFragment.<span class="pl-c1">prototype</span>);<span class="pl-k">return</span> Y(a)};e<span class="pl-k">=</span>(u.innerHTML<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&quot;</span>&lt;x-x&gt;&lt;/x-x&gt;<span class="pl-pds">&quot;</span></span>,<span class="pl-c1">1</span><span class="pl-k">===</span>u.<span class="pl-c1">childNodes</span>.<span class="pl-c1">length</span><span class="pl-k">&amp;&amp;</span><span class="pl-c1">1</span><span class="pl-k">===</span>u.<span class="pl-c1">childNodes</span>[<span class="pl-c1">0</span>].<span class="pl-c1">nodeType</span>);M<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&quot;</span>|<span class="pl-pds">&quot;</span></span><span class="pl-k">+</span>M<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&quot;</span>|<span class="pl-pds">&quot;</span></span>;V.ielt9<span class="pl-k">=</span>m;C<span class="pl-k">=</span>Y(s.<span class="pl-c1">call</span>($,g));e<span class="pl-k">||</span>(Y(g),g.head.insertAdjacentHTML(<span class="pl-s"><span class="pl-pds">&quot;</span>beforeend<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>&lt;br&gt;&lt;style&gt;article,aside,figcaption,figure,footer,header,hgroup,nav,section,main{display:block}mark{background:#FF0;color:#000}&lt;/style&gt;<span class="pl-pds">&quot;</span></span>));<span class="pl-c1">0</span><span class="pl-k">===</span>s.<span class="pl-c1">call</span>(W,g,<span class="pl-s"><span class="pl-pds">&quot;</span>x-x<span class="pl-pds">&quot;</span></span>).<span class="pl-c1">cloneNode</span>().outerHTML.<span class="pl-c1">indexOf</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>&lt;:x-x&gt;<span class="pl-pds">&quot;</span></span>)<span class="pl-k">&amp;&amp;</span>(O<span class="pl-k">=</span>C.<span class="pl-c1">appendChild</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>createElement<span class="pl-pds">&quot;</span></span><span class="pl-k">in</span> C<span class="pl-k">&amp;&amp;</span>C.<span class="pl-c1">createElement</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>div<span class="pl-pds">&quot;</span></span>)<span class="pl-k">||</span>C.<span class="pl-c1">ownerDocument</span>.<span class="pl-c1">createElement</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>div<span class="pl-pds">&quot;</span></span>)),</td>
      </tr>
      <tr>
        <td id="L41" class="blob-num js-line-number" data-line-number="41"></td>
        <td id="LC41" class="blob-code blob-code-inner js-file-line">na<span class="pl-k">=</span><span class="pl-c1">8</span><span class="pl-k">===</span>v<span class="pl-k">?</span>u.cloneNode<span class="pl-k">:</span><span class="pl-c1">8</span><span class="pl-k">&gt;</span>v<span class="pl-k">?</span>j.cloneNode<span class="pl-k">:</span>k,<span class="pl-c1">j</span>.<span class="pl-en">cloneNode</span><span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">a</span>){<span class="pl-k">var</span> b,c;ja.<span class="pl-c1">test</span>(<span class="pl-v">this</span>.<span class="pl-c1">nodeName</span>)<span class="pl-k">?</span>b<span class="pl-k">=</span>s.<span class="pl-c1">call</span>(<span class="pl-v">this</span>.__nativeCloneNode__<span class="pl-k">||</span>na,<span class="pl-v">this</span>,a)<span class="pl-k">:</span>(O.innerHTML<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>,c<span class="pl-k">=</span>a<span class="pl-k">?</span><span class="pl-v">this</span>.outerHTML<span class="pl-k">:</span><span class="pl-v">this</span>.outerHTML.<span class="pl-c1">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span>&lt;(<span class="pl-c1">\w</span><span class="pl-k">+</span>)(<span class="pl-c1">[<span class="pl-k">^</span>&gt;]</span><span class="pl-k">*</span>)&gt;<span class="pl-c1">[<span class="pl-c1">\W\w</span>]</span><span class="pl-k">*</span><span class="pl-k">$</span><span class="pl-pds">/</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>&lt;$1$2&gt;&lt;/$1&gt;<span class="pl-pds">&quot;</span></span>),O.innerHTML<span class="pl-k">=</span>c.<span class="pl-c1">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span><span class="pl-cce">\&lt;\:</span><span class="pl-pds">/</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>&lt;<span class="pl-pds">&quot;</span></span>).<span class="pl-c1">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-cce">\&lt;\/\:</span>(<span class="pl-c1">[<span class="pl-c1">\w</span><span class="pl-cce">\-</span>]</span><span class="pl-k">*</span><span class="pl-cce">\&gt;</span>)<span class="pl-k">$</span><span class="pl-pds">/</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>&lt;$1<span class="pl-pds">&quot;</span></span>),b<span class="pl-k">=</span>O.<span class="pl-c1">firstChild</span>,<span class="pl-k">!</span>b<span class="pl-k">&amp;&amp;!</span>a<span class="pl-k">&amp;&amp;</span>((c<span class="pl-k">=</span>c.<span class="pl-c1">match</span>(xa))<span class="pl-k">&amp;&amp;</span>(c<span class="pl-k">=</span>c[<span class="pl-c1">1</span>]),c<span class="pl-k">&amp;&amp;</span>(C.<span class="pl-c1">createElement</span>(c),O.innerHTML<span class="pl-k">=</span>c,b<span class="pl-k">=</span>O.<span class="pl-c1">firstChild</span>)));<span class="pl-k">return</span> C.<span class="pl-c1">appendChild</span>(b)});<span class="pl-en">u</span><span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">a</span>){<span class="pl-k">for</span>(<span class="pl-k">var</span> b<span class="pl-k">=</span>[];a<span class="pl-k">--</span>;)b.<span class="pl-c1">unshift</span>(a);<span class="pl-k">return</span> b};v<span class="pl-k">=</span>[];y.<span class="pl-c1">call</span>(v.splice,</td>
      </tr>
      <tr>
        <td id="L42" class="blob-num js-line-number" data-line-number="42"></td>
        <td id="LC42" class="blob-code blob-code-inner js-file-line">v,<span class="pl-c1">0</span>,<span class="pl-c1">0</span>).<span class="pl-c1">apply</span>(p,u(<span class="pl-c1">20</span>));y.<span class="pl-c1">call</span>(v.splice,v,<span class="pl-c1">0</span>,<span class="pl-c1">0</span>).<span class="pl-c1">apply</span>(p,u(<span class="pl-c1">26</span>));u<span class="pl-k">=</span>v.<span class="pl-c1">length</span>;v.<span class="pl-c1">splice</span>(<span class="pl-c1">5</span>,<span class="pl-c1">0</span>,<span class="pl-s"><span class="pl-pds">&quot;</span>XXX<span class="pl-pds">&quot;</span></span>);v<span class="pl-k">=</span>u<span class="pl-k">+</span><span class="pl-c1">1</span><span class="pl-k">==</span>v.<span class="pl-c1">length</span><span class="pl-k">?</span>m<span class="pl-k">:</span>k;v<span class="pl-k">||</span>(<span class="pl-c1">Array</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">splice</span><span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">a</span>,<span class="pl-smi">b</span>){<span class="pl-k">var</span> c,d<span class="pl-k">=</span>F.<span class="pl-c1">call</span>(arguments,<span class="pl-c1">2</span>);c<span class="pl-k">=</span>d.<span class="pl-c1">length</span>;<span class="pl-k">if</span>(<span class="pl-k">!</span>arguments.<span class="pl-c1">length</span>)<span class="pl-k">return</span>[];a<span class="pl-k">===</span>k<span class="pl-k">&amp;&amp;</span>(a<span class="pl-k">=</span><span class="pl-c1">0</span>);b<span class="pl-k">===</span>k<span class="pl-k">&amp;&amp;</span>(b<span class="pl-k">=</span><span class="pl-v">this</span>.<span class="pl-c1">length</span><span class="pl-k">-</span>a);<span class="pl-k">if</span>(<span class="pl-c1">0</span><span class="pl-k">&lt;</span>c){<span class="pl-k">if</span>(<span class="pl-c1">0</span><span class="pl-k">&gt;=</span>b){<span class="pl-k">if</span>(a<span class="pl-k">==</span><span class="pl-v">this</span>.<span class="pl-c1">length</span>)<span class="pl-k">return</span> <span class="pl-v">this</span>.push.<span class="pl-c1">apply</span>(<span class="pl-v">this</span>,d),[];<span class="pl-k">if</span>(<span class="pl-c1">0</span><span class="pl-k">==</span>a)<span class="pl-k">return</span> <span class="pl-v">this</span>.unshift.<span class="pl-c1">apply</span>(<span class="pl-v">this</span>,d),[]}c<span class="pl-k">=</span>F.<span class="pl-c1">call</span>(<span class="pl-v">this</span>,a,a<span class="pl-k">+</span>b);d.push.<span class="pl-c1">apply</span>(d,F.<span class="pl-c1">call</span>(<span class="pl-v">this</span>,a<span class="pl-k">+</span>b,<span class="pl-v">this</span>.<span class="pl-c1">length</span>));d.unshift.<span class="pl-c1">apply</span>(d,F.<span class="pl-c1">call</span>(<span class="pl-v">this</span>,<span class="pl-c1">0</span>,a));d.<span class="pl-c1">unshift</span>(<span class="pl-c1">0</span>,<span class="pl-v">this</span>.<span class="pl-c1">length</span>);ba.<span class="pl-c1">apply</span>(<span class="pl-v">this</span>,</td>
      </tr>
      <tr>
        <td id="L43" class="blob-num js-line-number" data-line-number="43"></td>
        <td id="LC43" class="blob-code blob-code-inner js-file-line">d);<span class="pl-k">return</span> c}<span class="pl-k">return</span> ba.<span class="pl-c1">call</span>(<span class="pl-v">this</span>,a,b)});<span class="pl-k">var</span> Aa<span class="pl-k">=</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">\s</span><span class="pl-k">+</span>(?=<span class="pl-c1">\S</span>)<span class="pl-k">|</span><span class="pl-k">^</span><span class="pl-pds">/</span>g</span>,ga<span class="pl-k">=</span>t.getAttribute,Ba<span class="pl-k">=</span>t.setAttribute,oa<span class="pl-k">=</span>t.removeAttribute;I.g<span class="pl-k">=</span>{};<span class="pl-c1">I</span>.<span class="pl-en">c</span><span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">a</span>,<span class="pl-smi">b</span>){<span class="pl-k">if</span>(b <span class="pl-k">in</span> <span class="pl-v">this</span>)<span class="pl-k">return</span> m;<span class="pl-k">var</span> c<span class="pl-k">=</span>a.<span class="pl-c1">nodeName</span>;<span class="pl-k">if</span>(<span class="pl-k">!</span>(a<span class="pl-k">=</span>I.g[c]))a<span class="pl-k">=</span>I.g[c]<span class="pl-k">=</span>W(c);c<span class="pl-k">=</span>ga.<span class="pl-c1">call</span>(a,b)<span class="pl-k">!==</span>p;c<span class="pl-k">||</span>(c<span class="pl-k">=</span>(c<span class="pl-k">=</span>a.<span class="pl-c1">constructor</span>)<span class="pl-k">&amp;&amp;</span>(c<span class="pl-k">=</span>c.<span class="pl-c1">prototype</span>)<span class="pl-k">&amp;&amp;</span><span class="pl-s"><span class="pl-pds">&quot;</span>object<span class="pl-pds">&quot;</span></span><span class="pl-k">===typeof</span>(c<span class="pl-k">=</span><span class="pl-c1">Object</span>.getOwnPropertyDescriptor(c,b))<span class="pl-k">&amp;&amp;</span><span class="pl-s"><span class="pl-pds">&quot;</span>get<span class="pl-pds">&quot;</span></span><span class="pl-k">in</span> c<span class="pl-k">&amp;&amp;</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-cce">\[</span>native<span class="pl-c1">\s</span>code<span class="pl-cce">\]</span><span class="pl-pds">/</span></span>.<span class="pl-c1">test</span>(c.get<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>));<span class="pl-k">return</span> <span class="pl-v">this</span>[b]<span class="pl-k">=</span>c};<span class="pl-c1">t</span>.<span class="pl-en">setAttribute</span><span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">a</span>,<span class="pl-smi">b</span>){<span class="pl-k">var</span> c<span class="pl-k">=</span>a.<span class="pl-c1">toLowerCase</span>(),d<span class="pl-k">=</span>a,e,f;<span class="pl-k">if</span>(c <span class="pl-k">in</span> S)<span class="pl-k">return</span> S[c].set.<span class="pl-c1">call</span>(<span class="pl-v">this</span>,b);N[c]<span class="pl-k">!==</span>k<span class="pl-k">?</span></td>
      </tr>
      <tr>
        <td id="L44" class="blob-num js-line-number" data-line-number="44"></td>
        <td id="LC44" class="blob-code blob-code-inner js-file-line">d<span class="pl-k">=</span>N[c]<span class="pl-k">:</span>fa[c]<span class="pl-k">===</span>k<span class="pl-k">&amp;&amp;</span>(<span class="pl-k">-</span><span class="pl-c1">1</span><span class="pl-k">===</span>c.<span class="pl-c1">indexOf</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>-<span class="pl-pds">&quot;</span></span>)<span class="pl-k">&amp;&amp;!</span>I.c(<span class="pl-v">this</span>,c))<span class="pl-k">&amp;&amp;</span>(d<span class="pl-k">=</span>a.<span class="pl-c1">toUpperCase</span>());d<span class="pl-k">!=</span>a<span class="pl-k">&amp;&amp;</span>a <span class="pl-k">in</span> <span class="pl-v">this</span><span class="pl-k">&amp;&amp;</span>(<span class="pl-k">!</span>(f<span class="pl-k">=</span><span class="pl-v">this</span>.<span class="pl-c1">attributes</span>)<span class="pl-k">||!</span>((f<span class="pl-k">=</span>f[a])<span class="pl-k">&amp;&amp;</span>f.<span class="pl-c1">expando</span><span class="pl-k">===</span>q))<span class="pl-k">?</span>(f<span class="pl-k">=</span><span class="pl-v">this</span>[a],e<span class="pl-k">=</span>m)<span class="pl-k">:</span>f<span class="pl-k">=</span>p;b<span class="pl-k">+=</span><span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>;d<span class="pl-k">!=</span>a<span class="pl-k">?</span>(<span class="pl-v">this</span>[d]<span class="pl-k">=</span>b,e<span class="pl-k">&amp;&amp;</span>(<span class="pl-v">this</span>[a]<span class="pl-k">=</span>f))<span class="pl-k">:</span>Ba.<span class="pl-c1">call</span>(<span class="pl-v">this</span>,d,b)};<span class="pl-c1">t</span>.<span class="pl-en">getAttribute</span><span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">a</span>){<span class="pl-k">var</span> b;b<span class="pl-k">=</span>a.<span class="pl-c1">toLowerCase</span>();<span class="pl-k">var</span> c;<span class="pl-k">if</span>((c<span class="pl-k">=</span>S[b])<span class="pl-k">!==</span>k)<span class="pl-k">return</span> c.get.<span class="pl-c1">call</span>(<span class="pl-v">this</span>);<span class="pl-k">if</span>(N[b]<span class="pl-k">!==</span>k)<span class="pl-k">return</span> ga.<span class="pl-c1">call</span>(<span class="pl-v">this</span>,N[b]);<span class="pl-k">if</span>(fa[b]<span class="pl-k">!==</span>k)<span class="pl-k">return</span>(c<span class="pl-k">=</span><span class="pl-v">this</span>.<span class="pl-c1">attributes</span>)<span class="pl-k">&amp;&amp;</span>(c<span class="pl-k">=</span>c[b])<span class="pl-k">&amp;&amp;</span>(c<span class="pl-k">=</span>c.<span class="pl-c1">nodeValue</span>)<span class="pl-k">&amp;&amp;</span>c<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span><span class="pl-k">||</span>p;<span class="pl-k">if</span>(<span class="pl-k">-</span><span class="pl-c1">1</span><span class="pl-k">===</span>b.<span class="pl-c1">indexOf</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>-<span class="pl-pds">&quot;</span></span>)<span class="pl-k">&amp;&amp;!</span>I.c(<span class="pl-v">this</span>,b))b<span class="pl-k">=</span>a.<span class="pl-c1">toUpperCase</span>();<span class="pl-k">else</span> <span class="pl-k">return</span> ga.<span class="pl-c1">call</span>(<span class="pl-v">this</span>,</td>
      </tr>
      <tr>
        <td id="L45" class="blob-num js-line-number" data-line-number="45"></td>
        <td id="LC45" class="blob-code blob-code-inner js-file-line">a);c<span class="pl-k">=</span><span class="pl-v">this</span>[b];c<span class="pl-k">||</span>(<span class="pl-k">!</span>(b <span class="pl-k">in</span> <span class="pl-v">this</span>)<span class="pl-k">&amp;&amp;</span><span class="pl-s"><span class="pl-pds">&quot;</span>string<span class="pl-pds">&quot;</span></span><span class="pl-k">===typeof</span> <span class="pl-v">this</span>[a]<span class="pl-k">?</span>(c<span class="pl-k">=</span><span class="pl-v">this</span>[b]<span class="pl-k">=</span><span class="pl-v">this</span>[a],<span class="pl-k">delete</span> <span class="pl-v">this</span>[a])<span class="pl-k">:</span>c<span class="pl-k">=</span>k);<span class="pl-k">return</span> c<span class="pl-k">!==</span>k<span class="pl-k">?</span>c<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span><span class="pl-k">:</span>p};<span class="pl-c1">t</span>.<span class="pl-en">removeAttribute</span><span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">a</span>){<span class="pl-k">var</span> b;b<span class="pl-k">=</span>a.<span class="pl-c1">toLowerCase</span>();<span class="pl-k">var</span> c;<span class="pl-k">if</span>(b <span class="pl-k">in</span> S)<span class="pl-k">return</span> S[b].remove.<span class="pl-c1">call</span>(<span class="pl-v">this</span>);<span class="pl-k">if</span>(N[b]<span class="pl-k">!==</span>k)<span class="pl-k">return</span> oa.<span class="pl-c1">call</span>(<span class="pl-v">this</span>,N[b]);<span class="pl-k">if</span>(fa[b]<span class="pl-k">===</span>k<span class="pl-k">&amp;&amp;-</span><span class="pl-c1">1</span><span class="pl-k">===</span>b.<span class="pl-c1">indexOf</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>-<span class="pl-pds">&quot;</span></span>)<span class="pl-k">&amp;&amp;!</span>I.c(<span class="pl-v">this</span>,b))b<span class="pl-k">=</span>a.<span class="pl-c1">toUpperCase</span>();<span class="pl-k">else</span> <span class="pl-k">return</span> oa.<span class="pl-c1">call</span>(<span class="pl-v">this</span>,a);((c<span class="pl-k">=</span>b <span class="pl-k">in</span> <span class="pl-v">this</span>)<span class="pl-k">||</span><span class="pl-v">this</span>.<span class="pl-c1">getAttribute</span>(a)<span class="pl-k">!==</span>p)<span class="pl-k">&amp;&amp;</span>b <span class="pl-k">in</span> <span class="pl-v">this</span><span class="pl-k">&amp;&amp;delete</span> <span class="pl-v">this</span>[b];<span class="pl-k">return</span> c};<span class="pl-c1">t</span>.<span class="pl-en">hasAttribute</span><span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">a</span>){<span class="pl-k">return</span> <span class="pl-v">this</span>.<span class="pl-c1">getAttribute</span>(a)<span class="pl-k">!==</span>p};e<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&quot;</span>getElementsByClassName<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L46" class="blob-num js-line-number" data-line-number="46"></td>
        <td id="LC46" class="blob-code blob-code-inner js-file-line"><span class="pl-k">!</span>t[e]<span class="pl-k">&amp;&amp;</span>g.querySelectorAll<span class="pl-k">&amp;&amp;</span>(t[e]<span class="pl-k">=</span>r[e]<span class="pl-k">=</span>g[e]<span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">a</span>){<span class="pl-k">return</span><span class="pl-k">!</span>a<span class="pl-k">||!</span>(a<span class="pl-k">=</span>ta.<span class="pl-c1">call</span>(a))<span class="pl-k">?</span>[]<span class="pl-k">:</span>s.<span class="pl-c1">call</span>(<span class="pl-v">this</span>.querySelectorAll<span class="pl-k">||</span>g.querySelectorAll,<span class="pl-v">this</span>,a.<span class="pl-c1">replace</span>(Aa,<span class="pl-s"><span class="pl-pds">&quot;</span>.<span class="pl-pds">&quot;</span></span>))});<span class="pl-k">if</span>(e<span class="pl-k">=</span>f.CSSStyleDeclaration)<span class="pl-s"><span class="pl-pds">&quot;</span>opacity<span class="pl-pds">&quot;</span></span><span class="pl-k">in</span> r.<span class="pl-c1">style</span><span class="pl-k">||</span>(<span class="pl-c1">Object</span>.defineProperty(e.<span class="pl-c1">prototype</span>,<span class="pl-s"><span class="pl-pds">&quot;</span>opacity<span class="pl-pds">&quot;</span></span>,{get<span class="pl-k">:</span>U,<span class="pl-en">set</span><span class="pl-k">:</span><span class="pl-k">function</span>(<span class="pl-smi">a</span>){<span class="pl-s"><span class="pl-pds">&quot;</span>object<span class="pl-pds">&quot;</span></span><span class="pl-k">==typeof</span> a<span class="pl-k">&amp;&amp;</span>(a<span class="pl-k">=</span>a.<span class="pl-c1">valueOf</span>());<span class="pl-v">this</span>.opacity<span class="pl-k">!==</span>U.<span class="pl-c1">call</span>(<span class="pl-v">this</span>)<span class="pl-k">&amp;&amp;delete</span> <span class="pl-v">this</span>.opacity;a<span class="pl-k">=</span>a<span class="pl-k">&amp;&amp;</span><span class="pl-s"><span class="pl-pds">&quot;</span>alpha(opacity=<span class="pl-pds">&quot;</span></span><span class="pl-k">+</span>(<span class="pl-c1">0.9999</span><span class="pl-k">&lt;=</span>a<span class="pl-k">?</span><span class="pl-s"><span class="pl-pds">&quot;</span>100<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span><span class="pl-c1">0</span><span class="pl-k">&gt;</span>a<span class="pl-k">?</span><span class="pl-c1">0</span><span class="pl-k">:~~</span>(<span class="pl-c1">100</span><span class="pl-k">*</span>a))<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&quot;</span>)<span class="pl-pds">&quot;</span></span><span class="pl-k">||</span><span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>;<span class="pl-v">this</span>.filter<span class="pl-k">=</span>da.<span class="pl-c1">test</span>(<span class="pl-v">this</span>.filter)<span class="pl-k">?</span><span class="pl-v">this</span>.filter.<span class="pl-c1">replace</span>(da,a)<span class="pl-k">:</span><span class="pl-v">this</span>.filter<span class="pl-k">+</span>(<span class="pl-s"><span class="pl-pds">&quot;</span> <span class="pl-pds">&quot;</span></span><span class="pl-k">+</span>a);</td>
      </tr>
      <tr>
        <td id="L47" class="blob-num js-line-number" data-line-number="47"></td>
        <td id="LC47" class="blob-code blob-code-inner js-file-line"><span class="pl-v">this</span>.msOpacity<span class="pl-k">=</span><span class="pl-v">this</span>.opacity}}),<span class="pl-c1">Object</span>.defineProperty(e.<span class="pl-c1">prototype</span>,<span class="pl-s"><span class="pl-pds">&quot;</span>msOpacity<span class="pl-pds">&quot;</span></span>,{value<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>})),<span class="pl-s"><span class="pl-pds">&quot;</span>float<span class="pl-pds">&quot;</span></span><span class="pl-k">in</span> r.<span class="pl-c1">style</span><span class="pl-k">||</span><span class="pl-c1">Object</span>.defineProperty(e.<span class="pl-c1">prototype</span>,<span class="pl-s"><span class="pl-pds">&quot;</span>float<span class="pl-pds">&quot;</span></span>,{<span class="pl-en">get</span><span class="pl-k">:</span><span class="pl-k">function</span>(){<span class="pl-k">return</span> <span class="pl-v">this</span>.styleFloat},<span class="pl-en">set</span><span class="pl-k">:</span><span class="pl-k">function</span>(<span class="pl-smi">a</span>){<span class="pl-k">return</span> <span class="pl-v">this</span>.styleFloat<span class="pl-k">=</span>a}}),<span class="pl-s"><span class="pl-pds">&quot;</span>getPropertyValue<span class="pl-pds">&quot;</span></span><span class="pl-k">in</span> e<span class="pl-k">||</span><span class="pl-k">function</span>(<span class="pl-smi">a</span>){<span class="pl-k">for</span>(<span class="pl-k">var</span> b <span class="pl-k">in</span> a)R.<span class="pl-c1">call</span>(a,b)<span class="pl-k">&amp;&amp;</span>(<span class="pl-v">this</span>[b]<span class="pl-k">=</span>a[b])}.<span class="pl-c1">call</span>(e,ea);<span class="pl-k">if</span>((e<span class="pl-k">=</span>f.TextRectangle)<span class="pl-k">&amp;&amp;</span>(e<span class="pl-k">=</span>e.<span class="pl-c1">prototype</span>))<span class="pl-c1">Object</span>.defineProperty(e,<span class="pl-s"><span class="pl-pds">&quot;</span>width<span class="pl-pds">&quot;</span></span>,{<span class="pl-en">get</span><span class="pl-k">:</span><span class="pl-k">function</span>(){<span class="pl-k">return</span> <span class="pl-v">this</span>.<span class="pl-c1">right</span><span class="pl-k">-</span><span class="pl-v">this</span>.<span class="pl-c1">left</span>}}),<span class="pl-c1">Object</span>.defineProperty(e,<span class="pl-s"><span class="pl-pds">&quot;</span>height<span class="pl-pds">&quot;</span></span>,{<span class="pl-en">get</span><span class="pl-k">:</span><span class="pl-k">function</span>(){<span class="pl-k">return</span> <span class="pl-v">this</span>.<span class="pl-c1">bottom</span><span class="pl-k">-</span></td>
      </tr>
      <tr>
        <td id="L48" class="blob-num js-line-number" data-line-number="48"></td>
        <td id="LC48" class="blob-code blob-code-inner js-file-line"><span class="pl-v">this</span>.<span class="pl-c1">top</span>}});<span class="pl-k">var</span> Ca<span class="pl-k">=</span>g.querySelectorAll,Da<span class="pl-k">=</span>g.querySelector,Ea<span class="pl-k">=</span>t.querySelectorAll,Fa<span class="pl-k">=</span>t.querySelector,<span class="pl-en">pa</span><span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">a</span>){<span class="pl-k">for</span>(<span class="pl-k">var</span> b<span class="pl-k">=</span>a.<span class="pl-c1">length</span><span class="pl-k">&gt;&gt;&gt;</span><span class="pl-c1">0</span>,c<span class="pl-k">=</span>[],d<span class="pl-k">=</span><span class="pl-c1">0</span>;d<span class="pl-k">&lt;</span>b;d<span class="pl-k">++</span>)d <span class="pl-k">in</span> a<span class="pl-k">&amp;&amp;</span>c.<span class="pl-c1">push</span>(a[d]);<span class="pl-k">return</span> c};<span class="pl-c1">g</span>.<span class="pl-en">querySelectorAll</span><span class="pl-k">=</span><span class="pl-k">function</span>(){<span class="pl-k">return</span> pa(Ca.<span class="pl-c1">apply</span>(<span class="pl-v">this</span>,arguments))};<span class="pl-c1">g</span>.<span class="pl-en">querySelector</span><span class="pl-k">=</span><span class="pl-k">function</span>(){<span class="pl-k">return</span> Da.<span class="pl-c1">apply</span>(<span class="pl-v">this</span>,arguments)};<span class="pl-c1">t</span>.<span class="pl-en">querySelectorAll</span><span class="pl-k">=</span><span class="pl-k">function</span>(){<span class="pl-k">return</span> pa(Ea.<span class="pl-c1">apply</span>(<span class="pl-v">this</span>,arguments))};<span class="pl-c1">t</span>.<span class="pl-en">querySelector</span><span class="pl-k">=</span><span class="pl-k">function</span>(){<span class="pl-k">return</span> Fa.<span class="pl-c1">apply</span>(<span class="pl-v">this</span>,arguments)};u<span class="pl-k">=</span>e<span class="pl-k">=</span>D<span class="pl-k">=</span>e<span class="pl-k">=</span>p}}.<span class="pl-c1">call</span>(<span class="pl-c1">window</span>,<span class="pl-k">function</span>(<span class="pl-smi">z</span>,<span class="pl-smi">A</span>){<span class="pl-k">for</span>(<span class="pl-k">var</span> B <span class="pl-k">in</span> A)<span class="pl-c1">Object</span>.<span class="pl-c1">prototype</span>.hasOwnProperty.<span class="pl-c1">call</span>(A,</td>
      </tr>
      <tr>
        <td id="L49" class="blob-num js-line-number" data-line-number="49"></td>
        <td id="LC49" class="blob-code blob-code-inner js-file-line">B)<span class="pl-k">&amp;&amp;!</span><span class="pl-c1">Object</span>.<span class="pl-c1">prototype</span>.hasOwnProperty.<span class="pl-c1">call</span>(z,B)<span class="pl-k">&amp;&amp;</span>(z[B]<span class="pl-k">=</span>A[B]);<span class="pl-k">return</span> z});</td>
      </tr>
</table>

  </div>

</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="" class="js-jump-to-line-form" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" aria-label="Jump to line" autofocus>
    <button type="submit" class="btn">Go</button>
</form></div>

        </div>
      </div>
      <div class="modal-backdrop"></div>
    </div>
  </div>


    </div>

      <div class="container">
  <div class="site-footer" role="contentinfo">
    <ul class="site-footer-links right">
        <li><a href="https://status.github.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
      <li><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
      <li><a href="https://shop.github.com" data-ga-click="Footer, go to shop, text:shop">Shop</a></li>
        <li><a href="https://github.com/blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a href="https://github.com/about" data-ga-click="Footer, go to about, text:about">About</a></li>
        <li><a href="https://github.com/pricing" data-ga-click="Footer, go to pricing, text:pricing">Pricing</a></li>

    </ul>

    <a href="https://github.com" aria-label="Homepage">
      <span class="mega-octicon octicon-mark-github" title="GitHub"></span>
</a>
    <ul class="site-footer-links">
      <li>&copy; 2015 <span title="0.10053s from github-fe118-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="https://github.com/site/terms" data-ga-click="Footer, go to terms, text:terms">Terms</a></li>
        <li><a href="https://github.com/site/privacy" data-ga-click="Footer, go to privacy, text:privacy">Privacy</a></li>
        <li><a href="https://github.com/security" data-ga-click="Footer, go to security, text:security">Security</a></li>
        <li><a href="https://github.com/contact" data-ga-click="Footer, go to contact, text:contact">Contact</a></li>
        <li><a href="https://help.github.com" data-ga-click="Footer, go to help, text:help">Help</a></li>
    </ul>
  </div>
</div>



    
    
    

    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <button type="button" class="flash-close js-flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
        <span class="octicon octicon-x"></span>
      </button>
      Something went wrong with that request. Please try again.
    </div>


      <script crossorigin="anonymous" src="https://assets-cdn.github.com/assets/frameworks-161cec7f4cb9a187f66c2ecb8f59c9098e2ad64458af917ec72f9d61d6b8089b.js"></script>
      <script async="async" crossorigin="anonymous" src="https://assets-cdn.github.com/assets/github-e86725a26cd06610bcb4eb0595c577ff55ce0278be0e917357c284057de00c04.js"></script>
      
      
    <div class="js-stale-session-flash stale-session-flash flash flash-warn flash-banner hidden">
      <span class="octicon octicon-alert"></span>
      <span class="signed-in-tab-flash">You signed in with another tab or window. <a href="">Reload</a> to refresh your session.</span>
      <span class="signed-out-tab-flash">You signed out in another tab or window. <a href="">Reload</a> to refresh your session.</span>
    </div>
  </body>
</html>

