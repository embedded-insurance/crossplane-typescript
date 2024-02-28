requires_specific_version(DependencyIdent,  Version) :-
    (DependencyIdent, Version) = ('typescript', '5.0.4');
    (DependencyIdent, Version) = ('prettier', '2.8.8').


gen_enforced_dependency(WorkspaceCwd, DependencyIdent, DependencyRange2, DependencyType) :-
  workspace_has_dependency(WorkspaceCwd, DependencyIdent, DependencyRange, DependencyType),
  requires_specific_version(DependencyIdent,DependencyRange2).


gen_enforced_field(WorkspaceCwd, 'engines.node', '>=18').
gen_enforced_field(WorkspaceCwd, 'license', 'UNLICENSED').
gen_enforced_field(WorkspaceCwd, 'repository.type', 'git').
gen_enforced_field(WorkspaceCwd, 'repository.url', 'https://github.com/ei-tech/crossplane-typescript.git').
gen_enforced_field(WorkspaceCwd, 'repository.directory', WorkspaceCwd).
gen_enforced_field(WorkspaceCwd, 'publishConfig.access', 'restricted').
gen_enforced_field(WorkspaceCwd, 'scripts.format', 'prettier --write .') :- WorkspaceCwd \= '.'.
gen_enforced_field(WorkspaceCwd, 'scripts.clean', 'rimraf dist') :- WorkspaceCwd \= '.'.

% workspace_cwd_dirname(WorkspaceCwd, Dirname) :-
%    split_atom(WorkspaceCwd, '/', '', XS),
%    [_, Dirname].

% <folder-name> in 'packages/<folder-name>'
workspace_cwd_dirname(WorkspaceCwd, Dirname) :-
   atomic_list_concat(['packages', Dirname], '/', WorkspaceCwd).

% Folders in "packages" have a package name "@ei-tech/<folder-name>"
gen_enforced_field(WorkspaceCwd, 'name', PackageName) :-
    % not the monorepo root
    WorkspaceCwd \= '.',
    % package name and folder name must match
    workspace_cwd_dirname(WorkspaceCwd, Dirname),
    atom_concat('@ei-tech/', Dirname, PackageName).


:- begin_tests(my_test).
:- end_tests(my_test).
