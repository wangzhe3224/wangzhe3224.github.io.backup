



<!DOCTYPE html>
<html lang="en" class=" is-copy-enabled is-u2f-enabled">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Language" content="en">
    <meta name="viewport" content="width=1020">
    
    
    <title>jekyll-table-of-contents/toc.js at master · ghiculescu/jekyll-table-of-contents</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png">
    <meta property="fb:app_id" content="1401488693436528">

      <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="ghiculescu/jekyll-table-of-contents" name="twitter:title" /><meta content="jekyll-table-of-contents - A simple JavaScript table of contents, designed for Jekyll (or similar) sites." name="twitter:description" /><meta content="https://avatars2.githubusercontent.com/u/509837?v=3&amp;s=400" name="twitter:image:src" />
      <meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://avatars2.githubusercontent.com/u/509837?v=3&amp;s=400" property="og:image" /><meta content="ghiculescu/jekyll-table-of-contents" property="og:title" /><meta content="https://github.com/ghiculescu/jekyll-table-of-contents" property="og:url" /><meta content="jekyll-table-of-contents - A simple JavaScript table of contents, designed for Jekyll (or similar) sites." property="og:description" />
      <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">
    <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">
    <link rel="assets" href="https://assets-cdn.github.com/">
    <link rel="web-socket" href="wss://live.github.com/_sockets/ODU0MDU3NTowN2M3YjI2NTRkYmEyODFjNWNjODgzY2I2MGJhZDJjZTo0N2JiOGNiYjE3MTcwNGM1NWU0ZDI0MTIxODdlNWFhNTJlY2UyOWFkNTg5YzcwOTA4Y2Q5MmU4NzNiOTZmZGRm--d614396463cf8825bc3db61a2124ff0e84fef340">
    <meta name="pjax-timeout" content="1000">
    <link rel="sudo-modal" href="/sessions/sudo_modal">

    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="selected-link" value="repo_source" data-pjax-transient>

    <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
    <meta name="google-analytics" content="UA-3769691-2">

<meta content="collector.githubapp.com" name="octolytics-host" /><meta content="github" name="octolytics-app-id" /><meta content="8028199C:6926:2A084CB7:56841ACB" name="octolytics-dimension-request_id" /><meta content="8540575" name="octolytics-actor-id" /><meta content="wangzhe3224" name="octolytics-actor-login" /><meta content="5699d92813b08427b6d3e00085ee0a6d5bf5d29f9dc24372527c9b758a2af915" name="octolytics-actor-hash" />
<meta content="/&lt;user-name&gt;/&lt;repo-name&gt;/blob/show" data-pjax-transient="true" name="analytics-location" />
<meta content="Rails, view, blob#show" data-pjax-transient="true" name="analytics-event" />


  <meta class="js-ga-set" name="dimension1" content="Logged In">



        <meta name="hostname" content="github.com">
    <meta name="user-login" content="wangzhe3224">

        <meta name="expected-hostname" content="github.com">

      <link rel="mask-icon" href="https://assets-cdn.github.com/pinned-octocat.svg" color="#4078c0">
      <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">

    <meta content="f87d318765942df7ecf23e90d6d8a4ec8e4ce7d3" name="form-nonce" />

    <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/github-16bf5399d85a6f926eb6af8f983ed5cf907e97b4da4a650dc11920d425826218.css" integrity="sha256-Fr9Tmdhab5Jutq+PmD7Vz5B+l7TaSmUNwRkg1CWCYhg=" media="all" rel="stylesheet" />
    <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/github2-451ab63ad67fa9af580e5d9a3b2b7de911ce2e4b2437638f26fe8cb3879e67d8.css" integrity="sha256-RRq2OtZ/qa9YDl2aOyt96RHOLkskN2OPJv6Ms4eeZ9g=" media="all" rel="stylesheet" />
    
    


    <meta http-equiv="x-pjax-version" content="be269b1951a3572820c1f935e13a2f75">

      
  <meta name="description" content="jekyll-table-of-contents - A simple JavaScript table of contents, designed for Jekyll (or similar) sites.">
  <meta name="go-import" content="github.com/ghiculescu/jekyll-table-of-contents git https://github.com/ghiculescu/jekyll-table-of-contents.git">

  <meta content="509837" name="octolytics-dimension-user_id" /><meta content="ghiculescu" name="octolytics-dimension-user_login" /><meta content="8119591" name="octolytics-dimension-repository_id" /><meta content="ghiculescu/jekyll-table-of-contents" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="8119591" name="octolytics-dimension-repository_network_root_id" /><meta content="ghiculescu/jekyll-table-of-contents" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/ghiculescu/jekyll-table-of-contents/commits/master.atom" rel="alternate" title="Recent Commits to jekyll-table-of-contents:master" type="application/atom+xml">

  </head>


  <body class="logged_in   env-production linux vis-public page-blob">
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>

    
    
    



      <div class="header header-logged-in true" role="banner">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/" data-hotkey="g d" aria-label="Homepage" data-ga-click="Header, go to dashboard, icon:logo">
  <span class="mega-octicon octicon-mark-github "></span>
</a>


      <div class="site-search repo-scope js-site-search" role="search">
          <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/ghiculescu/jekyll-table-of-contents/search" class="js-site-search-form" data-global-search-url="/search" data-repo-search-url="/ghiculescu/jekyll-table-of-contents/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
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
        data-channel="notification-changed:wangzhe3224"
        data-url="/notifications/header">
      <a href="/notifications" aria-label="You have unread notifications" class="header-nav-link notification-indicator tooltipped tooltipped-s" data-ga-click="Header, go to notifications, icon:unread" data-hotkey="g n">
          <span class="mail-status unread"></span>
          <span class="octicon octicon-bell "></span>
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
    <span title="ghiculescu/jekyll-table-of-contents">This repository</span>
  </div>
    <a class="dropdown-item" href="/ghiculescu/jekyll-table-of-contents/issues/new" data-ga-click="Header, create new issue">
      New issue
    </a>

      </ul>
    </div>
  </li>

  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link name tooltipped tooltipped-sw js-menu-target" href="/wangzhe3224"
       aria-label="View profile and more"
       data-ga-click="Header, show menu, icon:avatar">
      <img alt="@wangzhe3224" class="avatar" height="20" src="https://avatars3.githubusercontent.com/u/8540575?v=3&amp;s=40" width="20" />
      <span class="dropdown-caret"></span>
    </a>

    <div class="dropdown-menu-content js-menu-content">
      <div class="dropdown-menu  dropdown-menu-sw">
        <div class=" dropdown-header header-nav-current-user css-truncate">
            Signed in as <strong class="css-truncate-target">wangzhe3224</strong>

        </div>


        <div class="dropdown-divider"></div>

          <a class="dropdown-item" href="/wangzhe3224" data-ga-click="Header, go to profile, text:your profile">
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

          <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/logout" class="logout-form" data-form-nonce="f87d318765942df7ecf23e90d6d8a4ec8e4ce7d3" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="B2CrwBWrgHzS73rlbgicxWiTGX4ZE8/xTNVEFrNVEqhlNo4WX8oAu9BLtOInadziulE6nfVjrHp1AOTPiMx+PQ==" /></div>
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
    <div id="js-repo-pjax-container" class="context-loader-container js-repo-nav-next" data-pjax-container>
      
<div class="pagehead repohead instapaper_ignore readability-menu experiment-repo-nav">
  <div class="container repohead-details-container">

    

<ul class="pagehead-actions">

  <li>
        <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-form-nonce="f87d318765942df7ecf23e90d6d8a4ec8e4ce7d3" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="L61HrmLwqlOLxFqScDHGriUwuWlvFFgjc3SI/26WuPsEIcXHgAtUqPO5IAaYTB3zQJMBBeipJjOo2okcE5gLPg==" /></div>      <input id="repository_id" name="repository_id" type="hidden" value="8119591" />

        <div class="select-menu js-menu-container js-select-menu">
          <a href="/ghiculescu/jekyll-table-of-contents/subscription"
            class="btn btn-sm btn-with-count select-menu-button js-menu-target" role="button" tabindex="0" aria-haspopup="true"
            data-ga-click="Repository, click Watch settings, action:blob#show">
            <span class="js-select-button">
              <span class="octicon octicon-eye "></span>
              Watch
            </span>
          </a>
          <a class="social-count js-social-count" href="/ghiculescu/jekyll-table-of-contents/watchers">
            3
          </a>

        <div class="select-menu-modal-holder">
          <div class="select-menu-modal subscription-menu-modal js-menu-content" aria-hidden="true">
            <div class="select-menu-header">
              <span aria-label="Close" class="octicon octicon-x js-menu-close" role="button"></span>
              <span class="select-menu-title">Notifications</span>
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

    <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/ghiculescu/jekyll-table-of-contents/unstar" class="js-toggler-form starred js-unstar-button" data-form-nonce="f87d318765942df7ecf23e90d6d8a4ec8e4ce7d3" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="1FMnwKBNPQNgGrqkxCXLQA63VB/GSdLWQb8oJMzaGxHDFruQs8GchxhFUtZS6JnCLA5k0faloyIbadtqpbD09A==" /></div>
      <button
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Unstar this repository" title="Unstar ghiculescu/jekyll-table-of-contents"
        data-ga-click="Repository, click unstar button, action:blob#show; text:Unstar">
        <span class="octicon octicon-star "></span>
        Unstar
      </button>
        <a class="social-count js-social-count" href="/ghiculescu/jekyll-table-of-contents/stargazers">
          71
        </a>
</form>
    <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/ghiculescu/jekyll-table-of-contents/star" class="js-toggler-form unstarred js-star-button" data-form-nonce="f87d318765942df7ecf23e90d6d8a4ec8e4ce7d3" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="SkoDBV5eGo7QxerR6M3iEidarchTkn1HwIwyxvTczNKJ6xbXj5MM9uF/E3oFlPATSMMQ7ITJD1FOPyTYL/j8mg==" /></div>
      <button
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Star this repository" title="Star ghiculescu/jekyll-table-of-contents"
        data-ga-click="Repository, click star button, action:blob#show; text:Star">
        <span class="octicon octicon-star "></span>
        Star
      </button>
        <a class="social-count js-social-count" href="/ghiculescu/jekyll-table-of-contents/stargazers">
          71
        </a>
</form>  </div>

  </li>

  <li>
          <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/ghiculescu/jekyll-table-of-contents/fork" class="btn-with-count" data-form-nonce="f87d318765942df7ecf23e90d6d8a4ec8e4ce7d3" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="vsdsIxkSzZAz7UK+NE7/St6XkeP/voZJesAk6Zi+/vxrX0TmENRSv6Wj211QB0wBj1NjaBlkqCv4iS5RqSaFlw==" /></div>
            <button
                type="submit"
                class="btn btn-sm btn-with-count"
                data-ga-click="Repository, show fork modal, action:blob#show; text:Fork"
                title="Fork your own copy of ghiculescu/jekyll-table-of-contents to your account"
                aria-label="Fork your own copy of ghiculescu/jekyll-table-of-contents to your account">
              <span class="octicon octicon-repo-forked "></span>
              Fork
            </button>
</form>
    <a href="/ghiculescu/jekyll-table-of-contents/network" class="social-count">
      19
    </a>
  </li>
</ul>

    <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public ">
  <span class="octicon octicon-repo "></span>
  <span class="author"><a href="/ghiculescu" class="url fn" itemprop="url" rel="author"><span itemprop="title">ghiculescu</span></a></span><!--
--><span class="path-divider">/</span><!--
--><strong><a href="/ghiculescu/jekyll-table-of-contents" data-pjax="#js-repo-pjax-container">jekyll-table-of-contents</a></strong>

  <span class="page-context-loader">
    <img alt="" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
  </span>

</h1>

  </div>
  <div class="container">
    
<nav class="reponav js-repo-nav js-sidenav-container-pjax js-octicon-loaders"
     role="navigation"
     data-pjax="#js-repo-pjax-container">

  <a href="/ghiculescu/jekyll-table-of-contents" aria-label="Code" aria-selected="true" class="js-selected-navigation-item selected reponav-item" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /ghiculescu/jekyll-table-of-contents">
    <span class="octicon octicon-code "></span>
    Code
</a>
    <a href="/ghiculescu/jekyll-table-of-contents/issues" class="js-selected-navigation-item reponav-item" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /ghiculescu/jekyll-table-of-contents/issues">
      <span class="octicon octicon-issue-opened "></span>
      Issues
      <span class="counter">1</span>
</a>
  <a href="/ghiculescu/jekyll-table-of-contents/pulls" class="js-selected-navigation-item reponav-item" data-hotkey="g p" data-selected-links="repo_pulls /ghiculescu/jekyll-table-of-contents/pulls">
    <span class="octicon octicon-git-pull-request "></span>
    Pull requests
    <span class="counter">0</span>
</a>
    <a href="/ghiculescu/jekyll-table-of-contents/wiki" class="js-selected-navigation-item reponav-item" data-hotkey="g w" data-selected-links="repo_wiki /ghiculescu/jekyll-table-of-contents/wiki">
      <span class="octicon octicon-book "></span>
      Wiki
</a>
  <a href="/ghiculescu/jekyll-table-of-contents/pulse" class="js-selected-navigation-item reponav-item" data-selected-links="pulse /ghiculescu/jekyll-table-of-contents/pulse">
    <span class="octicon octicon-pulse "></span>
    Pulse
</a>
  <a href="/ghiculescu/jekyll-table-of-contents/graphs" class="js-selected-navigation-item reponav-item" data-selected-links="repo_graphs repo_contributors /ghiculescu/jekyll-table-of-contents/graphs">
    <span class="octicon octicon-graph "></span>
    Graphs
</a>

</nav>

  </div>
</div>

<div class="container new-discussion-timeline experiment-repo-nav">
  <div class="repository-content">

    

<a href="/ghiculescu/jekyll-table-of-contents/blob/305668aa47fa877a067d26d36cfd745550b473ac/toc.js" class="hidden js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:cfb64e8cf3dcaeb45c54933e6081717b -->

<div class="file-navigation js-zeroclipboard-container">
  
<div class="select-menu js-menu-container js-select-menu left">
  <button class="btn btn-sm select-menu-button js-menu-target css-truncate" data-hotkey="w"
    title="master"
    type="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <i>Branch:</i>
    <span class="js-select-button css-truncate-target">master</span>
  </button>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span aria-label="Close" class="octicon octicon-x js-menu-close" role="button"></span>
        <span class="select-menu-title">Switch branches/tags</span>
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


            <a class="select-menu-item js-navigation-item js-navigation-open selected"
               href="/ghiculescu/jekyll-table-of-contents/blob/master/toc.js"
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
    <a href="/ghiculescu/jekyll-table-of-contents/find/master"
          class="js-show-file-finder btn btn-sm"
          data-pjax
          data-hotkey="t">
      Find file
    </a>
    <button aria-label="Copy file path to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" type="button">Copy path</button>
  </div>
  <div class="breadcrumb js-zeroclipboard-target">
    <span class="repo-root js-repo-root"><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/ghiculescu/jekyll-table-of-contents" class="" data-branch="master" data-pjax="true" itemscope="url"><span itemprop="title">jekyll-table-of-contents</span></a></span></span><span class="separator">/</span><strong class="final-path">toc.js</strong>
  </div>
</div>


  <div class="commit-tease">
      <span class="right">
        <a class="commit-tease-sha" href="/ghiculescu/jekyll-table-of-contents/commit/695621334b2bf4228bbfc24b5e8877aadb672df9" data-pjax>
          6956213
        </a>
        <time datetime="2015-09-13T08:49:09Z" is="relative-time">Sep 13, 2015</time>
      </span>
      <div>
        <img alt="@Neway6655" class="avatar" height="20" src="https://avatars3.githubusercontent.com/u/1468302?v=3&amp;s=40" width="20" />
        <a href="/Neway6655" class="user-mention" rel="contributor">Neway6655</a>
          <a href="/ghiculescu/jekyll-table-of-contents/commit/695621334b2bf4228bbfc24b5e8877aadb672df9" class="message" data-pjax="true" title="don&#39;t show toc if no header found, instead of showing an empty box">don't show toc if no header found, instead of showing an empty box</a>
      </div>

    <div class="commit-tease-contributors">
      <a class="muted-link contributors-toggle" href="#blob_contributors_box" rel="facebox">
        <strong>7</strong>
         contributors
      </a>
          <a class="avatar-link tooltipped tooltipped-s" aria-label="heristop" href="/ghiculescu/jekyll-table-of-contents/commits/master/toc.js?author=heristop"><img alt="@heristop" class="avatar" height="20" src="https://avatars1.githubusercontent.com/u/206870?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="ghiculescu" href="/ghiculescu/jekyll-table-of-contents/commits/master/toc.js?author=ghiculescu"><img alt="@ghiculescu" class="avatar" height="20" src="https://avatars1.githubusercontent.com/u/509837?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="eksperimental" href="/ghiculescu/jekyll-table-of-contents/commits/master/toc.js?author=eksperimental"><img alt="@eksperimental" class="avatar" height="20" src="https://avatars2.githubusercontent.com/u/9133420?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="antoine-richard" href="/ghiculescu/jekyll-table-of-contents/commits/master/toc.js?author=antoine-richard"><img alt="@antoine-richard" class="avatar" height="20" src="https://avatars1.githubusercontent.com/u/1552897?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="drewcrawford" href="/ghiculescu/jekyll-table-of-contents/commits/master/toc.js?author=drewcrawford"><img alt="@drewcrawford" class="avatar" height="20" src="https://avatars3.githubusercontent.com/u/183400?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="Anthodev" href="/ghiculescu/jekyll-table-of-contents/commits/master/toc.js?author=Anthodev"><img alt="@Anthodev" class="avatar" height="20" src="https://avatars1.githubusercontent.com/u/1784889?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="Neway6655" href="/ghiculescu/jekyll-table-of-contents/commits/master/toc.js?author=Neway6655"><img alt="@Neway6655" class="avatar" height="20" src="https://avatars3.githubusercontent.com/u/1468302?v=3&amp;s=40" width="20" /> </a>


    </div>

    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header" data-facebox-id="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list" data-facebox-id="facebox-description">
          <li class="facebox-user-list-item">
            <img alt="@heristop" height="24" src="https://avatars3.githubusercontent.com/u/206870?v=3&amp;s=48" width="24" />
            <a href="/heristop">heristop</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@ghiculescu" height="24" src="https://avatars3.githubusercontent.com/u/509837?v=3&amp;s=48" width="24" />
            <a href="/ghiculescu">ghiculescu</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@eksperimental" height="24" src="https://avatars0.githubusercontent.com/u/9133420?v=3&amp;s=48" width="24" />
            <a href="/eksperimental">eksperimental</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@antoine-richard" height="24" src="https://avatars3.githubusercontent.com/u/1552897?v=3&amp;s=48" width="24" />
            <a href="/antoine-richard">antoine-richard</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@drewcrawford" height="24" src="https://avatars1.githubusercontent.com/u/183400?v=3&amp;s=48" width="24" />
            <a href="/drewcrawford">drewcrawford</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@Anthodev" height="24" src="https://avatars3.githubusercontent.com/u/1784889?v=3&amp;s=48" width="24" />
            <a href="/Anthodev">Anthodev</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@Neway6655" height="24" src="https://avatars1.githubusercontent.com/u/1468302?v=3&amp;s=48" width="24" />
            <a href="/Neway6655">Neway6655</a>
          </li>
      </ul>
    </div>
  </div>

<div class="file">
  <div class="file-header">
  <div class="file-actions">

    <div class="btn-group">
      <a href="/ghiculescu/jekyll-table-of-contents/raw/master/toc.js" class="btn btn-sm " id="raw-url">Raw</a>
        <a href="/ghiculescu/jekyll-table-of-contents/blame/master/toc.js" class="btn btn-sm js-update-url-with-hash">Blame</a>
      <a href="/ghiculescu/jekyll-table-of-contents/commits/master/toc.js" class="btn btn-sm " rel="nofollow">History</a>
    </div>


        <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/ghiculescu/jekyll-table-of-contents/edit/master/toc.js" class="inline-form js-update-url-with-hash" data-form-nonce="f87d318765942df7ecf23e90d6d8a4ec8e4ce7d3" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="m6MNm1dPYr+/L4UNi5dqee3n4h3UVM/BVGnkAWnFgrQj+JJ9YA6y2CpFIb6l61khr7rcWjx5oatmD0ccZVAriA==" /></div>
          <button class="octicon-btn tooltipped tooltipped-nw" type="submit"
            aria-label="Fork this project and edit the file" data-hotkey="e" data-disable-with>
            <span class="octicon octicon-pencil "></span>
          </button>
</form>        <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/ghiculescu/jekyll-table-of-contents/delete/master/toc.js" class="inline-form" data-form-nonce="f87d318765942df7ecf23e90d6d8a4ec8e4ce7d3" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="NFYbpSavcKjb+zIY4zuctWw9idUot5MzxBbFStSfyM6NZqUyXsCZSf7eHa4DMCDW4Z9gdvld9ruedK7qFC92kA==" /></div>
          <button class="octicon-btn octicon-btn-danger tooltipped tooltipped-nw" type="submit"
            aria-label="Fork this project and delete the file" data-disable-with>
            <span class="octicon octicon-trashcan "></span>
          </button>
</form>  </div>

  <div class="file-info">
      90 lines (82 sloc)
      <span class="file-info-divider"></span>
    3.34 KB
  </div>
</div>

  

  <div class="blob-wrapper data type-javascript">
      <table class="highlight tab-size js-file-line-container" data-tab-size="8">
      <tr>
        <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-code blob-code-inner js-file-line"><span class="pl-c">// https://github.com/ghiculescu/jekyll-table-of-contents</span></td>
      </tr>
      <tr>
        <td id="L2" class="blob-num js-line-number" data-line-number="2"></td>
        <td id="LC2" class="blob-code blob-code-inner js-file-line">(<span class="pl-k">function</span>(<span class="pl-smi">$</span>){</td>
      </tr>
      <tr>
        <td id="L3" class="blob-num js-line-number" data-line-number="3"></td>
        <td id="LC3" class="blob-code blob-code-inner js-file-line">  <span class="pl-c1">$.fn</span>.<span class="pl-en">toc</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">options</span>) {</td>
      </tr>
      <tr>
        <td id="L4" class="blob-num js-line-number" data-line-number="4"></td>
        <td id="LC4" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> defaults <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L5" class="blob-num js-line-number" data-line-number="5"></td>
        <td id="LC5" class="blob-code blob-code-inner js-file-line">      noBackToTopLinks<span class="pl-k">:</span> <span class="pl-c1">false</span>,</td>
      </tr>
      <tr>
        <td id="L6" class="blob-num js-line-number" data-line-number="6"></td>
        <td id="LC6" class="blob-code blob-code-inner js-file-line">      title<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;i&gt;Jump to...&lt;/i&gt;<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L7" class="blob-num js-line-number" data-line-number="7"></td>
        <td id="LC7" class="blob-code blob-code-inner js-file-line">      minimumHeaders<span class="pl-k">:</span> <span class="pl-c1">3</span>,</td>
      </tr>
      <tr>
        <td id="L8" class="blob-num js-line-number" data-line-number="8"></td>
        <td id="LC8" class="blob-code blob-code-inner js-file-line">      headers<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>h1, h2, h3, h4, h5, h6<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L9" class="blob-num js-line-number" data-line-number="9"></td>
        <td id="LC9" class="blob-code blob-code-inner js-file-line">      listType<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>ol<span class="pl-pds">&#39;</span></span>, <span class="pl-c">// values: [ol|ul]</span></td>
      </tr>
      <tr>
        <td id="L10" class="blob-num js-line-number" data-line-number="10"></td>
        <td id="LC10" class="blob-code blob-code-inner js-file-line">      showEffect<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>show<span class="pl-pds">&#39;</span></span>, <span class="pl-c">// values: [show|slideDown|fadeIn|none]</span></td>
      </tr>
      <tr>
        <td id="L11" class="blob-num js-line-number" data-line-number="11"></td>
        <td id="LC11" class="blob-code blob-code-inner js-file-line">      showSpeed<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>slow<span class="pl-pds">&#39;</span></span> <span class="pl-c">// set to 0 to deactivate effect</span></td>
      </tr>
      <tr>
        <td id="L12" class="blob-num js-line-number" data-line-number="12"></td>
        <td id="LC12" class="blob-code blob-code-inner js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L13" class="blob-num js-line-number" data-line-number="13"></td>
        <td id="LC13" class="blob-code blob-code-inner js-file-line">    settings <span class="pl-k">=</span> <span class="pl-smi">$</span>.<span class="pl-en">extend</span>(defaults, options);</td>
      </tr>
      <tr>
        <td id="L14" class="blob-num js-line-number" data-line-number="14"></td>
        <td id="LC14" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L15" class="blob-num js-line-number" data-line-number="15"></td>
        <td id="LC15" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">function</span> <span class="pl-en">fixedEncodeURIComponent</span> (<span class="pl-smi">str</span>) {</td>
      </tr>
      <tr>
        <td id="L16" class="blob-num js-line-number" data-line-number="16"></td>
        <td id="LC16" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">return</span> <span class="pl-en">encodeURIComponent</span>(str).<span class="pl-c1">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[!&#39;()*]</span><span class="pl-pds">/</span>g</span>, <span class="pl-k">function</span>(<span class="pl-smi">c</span>) {</td>
      </tr>
      <tr>
        <td id="L17" class="blob-num js-line-number" data-line-number="17"></td>
        <td id="LC17" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> <span class="pl-s"><span class="pl-pds">&#39;</span>%<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-smi">c</span>.<span class="pl-c1">charCodeAt</span>(<span class="pl-c1">0</span>).<span class="pl-c1">toString</span>(<span class="pl-c1">16</span>);</td>
      </tr>
      <tr>
        <td id="L18" class="blob-num js-line-number" data-line-number="18"></td>
        <td id="LC18" class="blob-code blob-code-inner js-file-line">      });</td>
      </tr>
      <tr>
        <td id="L19" class="blob-num js-line-number" data-line-number="19"></td>
        <td id="LC19" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L20" class="blob-num js-line-number" data-line-number="20"></td>
        <td id="LC20" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L21" class="blob-num js-line-number" data-line-number="21"></td>
        <td id="LC21" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> headers <span class="pl-k">=</span> <span class="pl-en">$</span>(<span class="pl-smi">settings</span>.<span class="pl-c1">headers</span>).<span class="pl-en">filter</span>(<span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L22" class="blob-num js-line-number" data-line-number="22"></td>
        <td id="LC22" class="blob-code blob-code-inner js-file-line">      <span class="pl-c">// get all headers with an ID</span></td>
      </tr>
      <tr>
        <td id="L23" class="blob-num js-line-number" data-line-number="23"></td>
        <td id="LC23" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> previousSiblingName <span class="pl-k">=</span> <span class="pl-en">$</span>(<span class="pl-v">this</span>).<span class="pl-en">prev</span>().<span class="pl-en">attr</span>( <span class="pl-s"><span class="pl-pds">&quot;</span>name<span class="pl-pds">&quot;</span></span> );</td>
      </tr>
      <tr>
        <td id="L24" class="blob-num js-line-number" data-line-number="24"></td>
        <td id="LC24" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-v">this</span>.<span class="pl-c1">id</span> <span class="pl-k">&amp;&amp;</span> previousSiblingName) {</td>
      </tr>
      <tr>
        <td id="L25" class="blob-num js-line-number" data-line-number="25"></td>
        <td id="LC25" class="blob-code blob-code-inner js-file-line">        <span class="pl-v">this</span>.<span class="pl-c1">id</span> <span class="pl-k">=</span> <span class="pl-en">$</span>(<span class="pl-v">this</span>).<span class="pl-en">attr</span>( <span class="pl-s"><span class="pl-pds">&quot;</span>id<span class="pl-pds">&quot;</span></span>, <span class="pl-smi">previousSiblingName</span>.<span class="pl-c1">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-cce">\.</span><span class="pl-pds">/</span>g</span>, <span class="pl-s"><span class="pl-pds">&quot;</span>-<span class="pl-pds">&quot;</span></span>) );</td>
      </tr>
      <tr>
        <td id="L26" class="blob-num js-line-number" data-line-number="26"></td>
        <td id="LC26" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L27" class="blob-num js-line-number" data-line-number="27"></td>
        <td id="LC27" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">return</span> <span class="pl-v">this</span>.<span class="pl-c1">id</span>;</td>
      </tr>
      <tr>
        <td id="L28" class="blob-num js-line-number" data-line-number="28"></td>
        <td id="LC28" class="blob-code blob-code-inner js-file-line">    }), output <span class="pl-k">=</span> <span class="pl-en">$</span>(<span class="pl-v">this</span>);</td>
      </tr>
      <tr>
        <td id="L29" class="blob-num js-line-number" data-line-number="29"></td>
        <td id="LC29" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-smi">headers</span>.<span class="pl-c1">length</span> <span class="pl-k">||</span> <span class="pl-smi">headers</span>.<span class="pl-c1">length</span> <span class="pl-k">&lt;</span> <span class="pl-smi">settings</span>.<span class="pl-smi">minimumHeaders</span> <span class="pl-k">||</span> <span class="pl-k">!</span><span class="pl-smi">output</span>.<span class="pl-c1">length</span>) {</td>
      </tr>
      <tr>
        <td id="L30" class="blob-num js-line-number" data-line-number="30"></td>
        <td id="LC30" class="blob-code blob-code-inner js-file-line">      <span class="pl-en">$</span>(<span class="pl-v">this</span>).<span class="pl-en">hide</span>();</td>
      </tr>
      <tr>
        <td id="L31" class="blob-num js-line-number" data-line-number="31"></td>
        <td id="LC31" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L32" class="blob-num js-line-number" data-line-number="32"></td>
        <td id="LC32" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L33" class="blob-num js-line-number" data-line-number="33"></td>
        <td id="LC33" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L34" class="blob-num js-line-number" data-line-number="34"></td>
        <td id="LC34" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (<span class="pl-c1">0</span> <span class="pl-k">===</span> <span class="pl-smi">settings</span>.<span class="pl-smi">showSpeed</span>) {</td>
      </tr>
      <tr>
        <td id="L35" class="blob-num js-line-number" data-line-number="35"></td>
        <td id="LC35" class="blob-code blob-code-inner js-file-line">      <span class="pl-smi">settings</span>.<span class="pl-smi">showEffect</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>none<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L36" class="blob-num js-line-number" data-line-number="36"></td>
        <td id="LC36" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L37" class="blob-num js-line-number" data-line-number="37"></td>
        <td id="LC37" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L38" class="blob-num js-line-number" data-line-number="38"></td>
        <td id="LC38" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> render <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L39" class="blob-num js-line-number" data-line-number="39"></td>
        <td id="LC39" class="blob-code blob-code-inner js-file-line">      <span class="pl-en">show</span><span class="pl-k">:</span> <span class="pl-k">function</span>() { <span class="pl-smi">output</span>.<span class="pl-en">hide</span>().<span class="pl-en">html</span>(html).<span class="pl-en">show</span>(<span class="pl-smi">settings</span>.<span class="pl-smi">showSpeed</span>); },</td>
      </tr>
      <tr>
        <td id="L40" class="blob-num js-line-number" data-line-number="40"></td>
        <td id="LC40" class="blob-code blob-code-inner js-file-line">      <span class="pl-en">slideDown</span><span class="pl-k">:</span> <span class="pl-k">function</span>() { <span class="pl-smi">output</span>.<span class="pl-en">hide</span>().<span class="pl-en">html</span>(html).<span class="pl-en">slideDown</span>(<span class="pl-smi">settings</span>.<span class="pl-smi">showSpeed</span>); },</td>
      </tr>
      <tr>
        <td id="L41" class="blob-num js-line-number" data-line-number="41"></td>
        <td id="LC41" class="blob-code blob-code-inner js-file-line">      <span class="pl-en">fadeIn</span><span class="pl-k">:</span> <span class="pl-k">function</span>() { <span class="pl-smi">output</span>.<span class="pl-en">hide</span>().<span class="pl-en">html</span>(html).<span class="pl-en">fadeIn</span>(<span class="pl-smi">settings</span>.<span class="pl-smi">showSpeed</span>); },</td>
      </tr>
      <tr>
        <td id="L42" class="blob-num js-line-number" data-line-number="42"></td>
        <td id="LC42" class="blob-code blob-code-inner js-file-line">      <span class="pl-en">none</span><span class="pl-k">:</span> <span class="pl-k">function</span>() { <span class="pl-smi">output</span>.<span class="pl-en">html</span>(html); }</td>
      </tr>
      <tr>
        <td id="L43" class="blob-num js-line-number" data-line-number="43"></td>
        <td id="LC43" class="blob-code blob-code-inner js-file-line">    };</td>
      </tr>
      <tr>
        <td id="L44" class="blob-num js-line-number" data-line-number="44"></td>
        <td id="LC44" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L45" class="blob-num js-line-number" data-line-number="45"></td>
        <td id="LC45" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> <span class="pl-en">get_level</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">ele</span>) { <span class="pl-k">return</span> <span class="pl-c1">parseInt</span>(<span class="pl-smi">ele</span>.<span class="pl-c1">nodeName</span>.<span class="pl-c1">replace</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>H<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>), <span class="pl-c1">10</span>); }</td>
      </tr>
      <tr>
        <td id="L46" class="blob-num js-line-number" data-line-number="46"></td>
        <td id="LC46" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> highest_level <span class="pl-k">=</span> <span class="pl-smi">headers</span>.<span class="pl-en">map</span>(<span class="pl-k">function</span>(<span class="pl-smi">_</span>, <span class="pl-smi">ele</span>) { <span class="pl-k">return</span> <span class="pl-en">get_level</span>(ele); }).<span class="pl-en">get</span>().<span class="pl-c1">sort</span>()[<span class="pl-c1">0</span>];</td>
      </tr>
      <tr>
        <td id="L47" class="blob-num js-line-number" data-line-number="47"></td>
        <td id="LC47" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> return_to_top <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;i class=&quot;icon-arrow-up back-to-top&quot;&gt; &lt;/i&gt;<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L48" class="blob-num js-line-number" data-line-number="48"></td>
        <td id="LC48" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L49" class="blob-num js-line-number" data-line-number="49"></td>
        <td id="LC49" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> level <span class="pl-k">=</span> <span class="pl-en">get_level</span>(headers[<span class="pl-c1">0</span>]),</td>
      </tr>
      <tr>
        <td id="L50" class="blob-num js-line-number" data-line-number="50"></td>
        <td id="LC50" class="blob-code blob-code-inner js-file-line">      this_level,</td>
      </tr>
      <tr>
        <td id="L51" class="blob-num js-line-number" data-line-number="51"></td>
        <td id="LC51" class="blob-code blob-code-inner js-file-line">      html <span class="pl-k">=</span> <span class="pl-smi">settings</span>.<span class="pl-c1">title</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span> &lt;<span class="pl-pds">&quot;</span></span><span class="pl-k">+</span><span class="pl-smi">settings</span>.<span class="pl-smi">listType</span><span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&quot;</span>&gt;<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L52" class="blob-num js-line-number" data-line-number="52"></td>
        <td id="LC52" class="blob-code blob-code-inner js-file-line">    <span class="pl-smi">headers</span>.<span class="pl-en">on</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>click<span class="pl-pds">&#39;</span></span>, <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L53" class="blob-num js-line-number" data-line-number="53"></td>
        <td id="LC53" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-smi">settings</span>.<span class="pl-smi">noBackToTopLinks</span>) {</td>
      </tr>
      <tr>
        <td id="L54" class="blob-num js-line-number" data-line-number="54"></td>
        <td id="LC54" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">window</span>.<span class="pl-c1">location</span>.<span class="pl-c1">hash</span> <span class="pl-k">=</span> <span class="pl-v">this</span>.<span class="pl-c1">id</span>;</td>
      </tr>
      <tr>
        <td id="L55" class="blob-num js-line-number" data-line-number="55"></td>
        <td id="LC55" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L56" class="blob-num js-line-number" data-line-number="56"></td>
        <td id="LC56" class="blob-code blob-code-inner js-file-line">    })</td>
      </tr>
      <tr>
        <td id="L57" class="blob-num js-line-number" data-line-number="57"></td>
        <td id="LC57" class="blob-code blob-code-inner js-file-line">    .<span class="pl-en">addClass</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>clickable-header<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L58" class="blob-num js-line-number" data-line-number="58"></td>
        <td id="LC58" class="blob-code blob-code-inner js-file-line">    .<span class="pl-en">each</span>(<span class="pl-k">function</span>(<span class="pl-smi">_</span>, <span class="pl-smi">header</span>) {</td>
      </tr>
      <tr>
        <td id="L59" class="blob-num js-line-number" data-line-number="59"></td>
        <td id="LC59" class="blob-code blob-code-inner js-file-line">      this_level <span class="pl-k">=</span> <span class="pl-en">get_level</span>(header);</td>
      </tr>
      <tr>
        <td id="L60" class="blob-num js-line-number" data-line-number="60"></td>
        <td id="LC60" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-smi">settings</span>.<span class="pl-smi">noBackToTopLinks</span> <span class="pl-k">&amp;&amp;</span> this_level <span class="pl-k">===</span> highest_level) {</td>
      </tr>
      <tr>
        <td id="L61" class="blob-num js-line-number" data-line-number="61"></td>
        <td id="LC61" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">$</span>(header).<span class="pl-en">addClass</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>top-level-header<span class="pl-pds">&#39;</span></span>).<span class="pl-en">after</span>(return_to_top);</td>
      </tr>
      <tr>
        <td id="L62" class="blob-num js-line-number" data-line-number="62"></td>
        <td id="LC62" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L63" class="blob-num js-line-number" data-line-number="63"></td>
        <td id="LC63" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span> (this_level <span class="pl-k">===</span> level) <span class="pl-c">// same level as before; same indenting</span></td>
      </tr>
      <tr>
        <td id="L64" class="blob-num js-line-number" data-line-number="64"></td>
        <td id="LC64" class="blob-code blob-code-inner js-file-line">        html <span class="pl-k">+=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>&lt;li&gt;&lt;a href=&#39;#<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> <span class="pl-en">fixedEncodeURIComponent</span>(<span class="pl-smi">header</span>.<span class="pl-c1">id</span>) <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>&#39;&gt;<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> <span class="pl-smi">header</span>.<span class="pl-smi">innerHTML</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>&lt;/a&gt;<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L65" class="blob-num js-line-number" data-line-number="65"></td>
        <td id="LC65" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">else</span> <span class="pl-k">if</span> (this_level <span class="pl-k">&lt;=</span> level){ <span class="pl-c">// higher level than before; end parent ol</span></td>
      </tr>
      <tr>
        <td id="L66" class="blob-num js-line-number" data-line-number="66"></td>
        <td id="LC66" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">for</span>(i <span class="pl-k">=</span> this_level; i <span class="pl-k">&lt;</span> level; i<span class="pl-k">++</span>) {</td>
      </tr>
      <tr>
        <td id="L67" class="blob-num js-line-number" data-line-number="67"></td>
        <td id="LC67" class="blob-code blob-code-inner js-file-line">          html <span class="pl-k">+=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>&lt;/li&gt;&lt;/<span class="pl-pds">&quot;</span></span><span class="pl-k">+</span><span class="pl-smi">settings</span>.<span class="pl-smi">listType</span><span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&quot;</span>&gt;<span class="pl-pds">&quot;</span></span></td>
      </tr>
      <tr>
        <td id="L68" class="blob-num js-line-number" data-line-number="68"></td>
        <td id="LC68" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L69" class="blob-num js-line-number" data-line-number="69"></td>
        <td id="LC69" class="blob-code blob-code-inner js-file-line">        html <span class="pl-k">+=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>&lt;li&gt;&lt;a href=&#39;#<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> <span class="pl-en">fixedEncodeURIComponent</span>(<span class="pl-smi">header</span>.<span class="pl-c1">id</span>) <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>&#39;&gt;<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> <span class="pl-smi">header</span>.<span class="pl-smi">innerHTML</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>&lt;/a&gt;<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L70" class="blob-num js-line-number" data-line-number="70"></td>
        <td id="LC70" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L71" class="blob-num js-line-number" data-line-number="71"></td>
        <td id="LC71" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">else</span> <span class="pl-k">if</span> (this_level <span class="pl-k">&gt;</span> level) { <span class="pl-c">// lower level than before; expand the previous to contain a ol</span></td>
      </tr>
      <tr>
        <td id="L72" class="blob-num js-line-number" data-line-number="72"></td>
        <td id="LC72" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">for</span>(i <span class="pl-k">=</span> this_level; i <span class="pl-k">&gt;</span> level; i<span class="pl-k">--</span>) {</td>
      </tr>
      <tr>
        <td id="L73" class="blob-num js-line-number" data-line-number="73"></td>
        <td id="LC73" class="blob-code blob-code-inner js-file-line">          html <span class="pl-k">+=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>&lt;<span class="pl-pds">&quot;</span></span><span class="pl-k">+</span><span class="pl-smi">settings</span>.<span class="pl-smi">listType</span><span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&quot;</span>&gt;&lt;li&gt;<span class="pl-pds">&quot;</span></span></td>
      </tr>
      <tr>
        <td id="L74" class="blob-num js-line-number" data-line-number="74"></td>
        <td id="LC74" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L75" class="blob-num js-line-number" data-line-number="75"></td>
        <td id="LC75" class="blob-code blob-code-inner js-file-line">        html <span class="pl-k">+=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>&lt;a href=&#39;#<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> <span class="pl-en">fixedEncodeURIComponent</span>(<span class="pl-smi">header</span>.<span class="pl-c1">id</span>) <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>&#39;&gt;<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> <span class="pl-smi">header</span>.<span class="pl-smi">innerHTML</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>&lt;/a&gt;<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L76" class="blob-num js-line-number" data-line-number="76"></td>
        <td id="LC76" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L77" class="blob-num js-line-number" data-line-number="77"></td>
        <td id="LC77" class="blob-code blob-code-inner js-file-line">      level <span class="pl-k">=</span> this_level; <span class="pl-c">// update for the next one</span></td>
      </tr>
      <tr>
        <td id="L78" class="blob-num js-line-number" data-line-number="78"></td>
        <td id="LC78" class="blob-code blob-code-inner js-file-line">    });</td>
      </tr>
      <tr>
        <td id="L79" class="blob-num js-line-number" data-line-number="79"></td>
        <td id="LC79" class="blob-code blob-code-inner js-file-line">    html <span class="pl-k">+=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>&lt;/<span class="pl-pds">&quot;</span></span><span class="pl-k">+</span><span class="pl-smi">settings</span>.<span class="pl-smi">listType</span><span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&quot;</span>&gt;<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L80" class="blob-num js-line-number" data-line-number="80"></td>
        <td id="LC80" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-smi">settings</span>.<span class="pl-smi">noBackToTopLinks</span>) {</td>
      </tr>
      <tr>
        <td id="L81" class="blob-num js-line-number" data-line-number="81"></td>
        <td id="LC81" class="blob-code blob-code-inner js-file-line">      <span class="pl-en">$</span>(<span class="pl-c1">document</span>).<span class="pl-en">on</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>click<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>.back-to-top<span class="pl-pds">&#39;</span></span>, <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L82" class="blob-num js-line-number" data-line-number="82"></td>
        <td id="LC82" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">$</span>(<span class="pl-c1">window</span>).<span class="pl-en">scrollTop</span>(<span class="pl-c1">0</span>);</td>
      </tr>
      <tr>
        <td id="L83" class="blob-num js-line-number" data-line-number="83"></td>
        <td id="LC83" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">window</span>.<span class="pl-c1">location</span>.<span class="pl-c1">hash</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L84" class="blob-num js-line-number" data-line-number="84"></td>
        <td id="LC84" class="blob-code blob-code-inner js-file-line">      });</td>
      </tr>
      <tr>
        <td id="L85" class="blob-num js-line-number" data-line-number="85"></td>
        <td id="LC85" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L86" class="blob-num js-line-number" data-line-number="86"></td>
        <td id="LC86" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L87" class="blob-num js-line-number" data-line-number="87"></td>
        <td id="LC87" class="blob-code blob-code-inner js-file-line">    render[<span class="pl-smi">settings</span>.<span class="pl-smi">showEffect</span>]();</td>
      </tr>
      <tr>
        <td id="L88" class="blob-num js-line-number" data-line-number="88"></td>
        <td id="LC88" class="blob-code blob-code-inner js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L89" class="blob-num js-line-number" data-line-number="89"></td>
        <td id="LC89" class="blob-code blob-code-inner js-file-line">})(jQuery);</td>
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
  <div class="modal-backdrop"></div>
</div>

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
      <span class="mega-octicon octicon-mark-github " title="GitHub "></span>
</a>
    <ul class="site-footer-links">
      <li>&copy; 2015 <span title="0.08009s from github-fe142-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
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


      <script crossorigin="anonymous" integrity="sha256-7460qJ7p88i3YTMH/liaj1cFgX987ie+xRzl6WMjSr8=" src="https://assets-cdn.github.com/assets/frameworks-ef8eb4a89ee9f3c8b7613307fe589a8f5705817f7cee27bec51ce5e963234abf.js"></script>
      <script async="async" crossorigin="anonymous" integrity="sha256-S2uOfRHrt7zoUSbTtBMMgAQfKubV1u+JAajAw/fLgNI=" src="https://assets-cdn.github.com/assets/github-4b6b8e7d11ebb7bce85126d3b4130c80041f2ae6d5d6ef8901a8c0c3f7cb80d2.js"></script>
      
      
      
    <div class="js-stale-session-flash stale-session-flash flash flash-warn flash-banner hidden">
      <span class="octicon octicon-alert"></span>
      <span class="signed-in-tab-flash">You signed in with another tab or window. <a href="">Reload</a> to refresh your session.</span>
      <span class="signed-out-tab-flash">You signed out in another tab or window. <a href="">Reload</a> to refresh your session.</span>
    </div>
  </body>
</html>

